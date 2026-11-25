// In-browser mock API for demo mode.
//
// Intercepts both `window.fetch` and `axios` requests whose URL starts with
// DEMO_API_BASE and dispatches them to handlers registered with `registerRoutes`.
//
// Route definition:
//   { method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "*", path: "/news/:id", handler }
//
// Handler signature:
//   async (req) => data | respond(status, data)
//   req = { method, path, params, query, body, headers }
//   - `body` is parsed JSON, or a plain object built from FormData (uploaded image
//     Files are converted to compressed data URLs; repeated keys become arrays).
//   - Returning plain data means HTTP 200. Use `respond(status, data)` for others.
//   - Throwing `respond(...)` also works (handy for early 4xx exits).

import axios from "axios";
import { DEMO_API_BASE, DEMO_LATENCY } from "./config";

const routes = [];
const RESPONSE = Symbol("demoResponse");

export function respond(status, data) {
  return { [RESPONSE]: true, status, data };
}

export function registerRoutes(list) {
  for (const r of list) {
    const keys = [];
    const pattern = r.path
      .replace(/\/+$/, "")
      .replace(/[.*+?^${}()|[\]\\]/g, (m) => (m === ":" ? m : `\\${m}`))
      .replace(/:([A-Za-z_][A-Za-z0-9_]*)/g, (_, k) => {
        keys.push(k);
        return "([^/]+)";
      });
    routes.push({
      method: (r.method || "GET").toUpperCase(),
      path: r.path,
      re: new RegExp(`^${pattern}/?$`),
      keys,
      handler: r.handler,
    });
  }
}

function matchRoute(method, path) {
  let best = null;
  for (const r of routes) {
    if (r.method !== "*" && r.method !== method) continue;
    const m = r.re.exec(path);
    if (!m) continue;
    // Prefer routes with fewer params (static segments win), then registration order.
    if (!best || r.keys.length < best.route.keys.length) {
      const params = {};
      r.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
      best = { route: r, params };
    }
  }
  return best;
}

// ---------------------------------------------------------------------------
// Body parsing
// ---------------------------------------------------------------------------

async function fileToDataUrl(file) {
  const raw = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  if (!file.type?.startsWith("image/") || file.type === "image/svg+xml") return raw;
  // Downscale images so they fit comfortably in localStorage.
  try {
    const img = await new Promise((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = reject;
      el.src = raw;
    });
    const max = 1000;
    const scale = Math.min(1, max / Math.max(img.width, img.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.8);
  } catch {
    return raw;
  }
}

async function formDataToObject(fd) {
  const out = {};
  for (const [key, value] of fd.entries()) {
    const v = typeof File !== "undefined" && value instanceof File ? await fileToDataUrl(value) : value;
    if (key in out) out[key] = Array.isArray(out[key]) ? [...out[key], v] : [out[key], v];
    else out[key] = v;
  }
  return out;
}

async function parseBody(body) {
  if (body === undefined || body === null || body === "") return {};
  if (typeof FormData !== "undefined" && body instanceof FormData) return formDataToObject(body);
  if (typeof URLSearchParams !== "undefined" && body instanceof URLSearchParams) {
    return Object.fromEntries(body.entries());
  }
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return body;
    }
  }
  if (typeof Blob !== "undefined" && body instanceof Blob) {
    try {
      return JSON.parse(await body.text());
    } catch {
      return {};
    }
  }
  return body;
}

// ---------------------------------------------------------------------------
// Dispatch
// ---------------------------------------------------------------------------

const origin = () => window.location.origin;
const basePath = () => new URL(DEMO_API_BASE, origin()).pathname.replace(/\/+$/, "");

/** Returns the API sub-path if this URL belongs to the demo API, else null. */
function demoPath(url) {
  try {
    const u = new URL(url, origin());
    if (u.origin !== origin()) return null;
    const base = basePath();
    if (u.pathname !== base && !u.pathname.startsWith(`${base}/`)) return null;
    return { path: u.pathname.slice(base.length) || "/", query: Object.fromEntries(u.searchParams.entries()) };
  } catch {
    return null;
  }
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const clone = (v) => (v === undefined ? v : JSON.parse(JSON.stringify(v)));

async function dispatch({ method, url, body, headers = {}, extraQuery = {} }) {
  const target = demoPath(url);
  const m = (method || "GET").toUpperCase();
  await sleep(DEMO_LATENCY);
  const found = matchRoute(m, target.path);
  if (!found) {
    console.warn(`[demo] No mock route for ${m} ${target.path}`);
    (window.__demoMisses = window.__demoMisses || []).push(`${m} ${target.path}`);
    return { status: 404, data: { success: false, message: `Demo mode: ${m} ${target.path} is not available` } };
  }
  const req = {
    method: m,
    path: target.path,
    params: found.params,
    query: { ...target.query, ...extraQuery },
    body: await parseBody(body),
    headers,
  };
  let result;
  try {
    result = await found.route.handler(req);
  } catch (err) {
    if (err && err[RESPONSE]) result = err;
    else {
      console.error("[demo] Handler error", m, target.path, err);
      result = respond(500, { success: false, message: err?.message || "Demo handler error" });
    }
  }
  if (result && result[RESPONSE]) return { status: result.status, data: clone(result.data) };
  return { status: 200, data: clone(result) };
}

// ---------------------------------------------------------------------------
// Installers
// ---------------------------------------------------------------------------

function installFetch() {
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (input, init = {}) => {
    const isRequest = typeof Request !== "undefined" && input instanceof Request;
    const url = isRequest ? input.url : String(input);
    if (!demoPath(url)) return originalFetch(input, init);
    const method = init.method || (isRequest ? input.method : "GET");
    let body = init.body;
    if (body === undefined && isRequest && !["GET", "HEAD"].includes(method.toUpperCase())) {
      body = await input.clone().text();
    }
    const { status, data } = await dispatch({ method, url, body, headers: init.headers || {} });
    const noBody = status === 204 || status === 304;
    return new Response(noBody ? null : JSON.stringify(data ?? null), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  };
}

function fullAxiosUrl(config) {
  const url = config.url || "";
  if (/^[a-z][a-z\d+\-.]*:\/\//i.test(url) || !config.baseURL) return url;
  return `${config.baseURL.replace(/\/+$/, "")}/${url.replace(/^\/+/, "")}`;
}

function installAxios() {
  const fallback = axios.getAdapter(axios.defaults.adapter);
  axios.defaults.adapter = async (config) => {
    const url = fullAxiosUrl(config);
    if (!demoPath(url)) return fallback(config);
    const { status, data } = await dispatch({
      method: config.method,
      url,
      body: config.data,
      headers: config.headers ? { ...config.headers } : {},
      extraQuery: config.params || {},
    });
    const response = {
      data,
      status,
      statusText: String(status),
      headers: new axios.AxiosHeaders({ "content-type": "application/json" }),
      config,
      request: {},
    };
    const valid = !config.validateStatus || config.validateStatus(status);
    if (valid) return response;
    throw new axios.AxiosError(
      `Request failed with status code ${status}`,
      status >= 500 ? "ERR_BAD_RESPONSE" : "ERR_BAD_REQUEST",
      config,
      response.request,
      response
    );
  };
}

let installed = false;
export function installMockServer() {
  if (installed || typeof window === "undefined") return;
  installed = true;
  installFetch();
  installAxios();
  console.info(`[demo] Demo mode active - ${routes.length} mock API routes registered under ${DEMO_API_BASE}`);
}

/** For debugging in the console: window.__demoRoutes() */
if (typeof window !== "undefined") {
  window.__demoRoutes = () => routes.map((r) => `${r.method} ${r.path}`);
}
