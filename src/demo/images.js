// Offline SVG image generators for demo seed data (no external image hosts needed).
// Every function returns a `data:image/svg+xml` URL usable directly in <img src>.

const BRAND_RED = "#E31E24";
const BRAND_DARK = "#1F2A44";

const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const toDataUrl = (svg) => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const PALETTE = ["#E31E24", "#1F2A44", "#0E7490", "#15803D", "#B45309", "#7C3AED", "#BE185D", "#0369A1"];

/** Deterministic colour from a string. */
export function colorFor(text = "") {
  let h = 0;
  for (const ch of String(text)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Generic placeholder with a title (and optional subtitle). */
export function placeholderImage(title, { subtitle = "", width = 800, height = 500, bg, fg = "#ffffff" } = {}) {
  const color = bg || colorFor(title);
  const fs = Math.round(Math.min(width, height) / 9);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${color}"/><stop offset="1" stop-color="${BRAND_DARK}"/></linearGradient></defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <circle cx="${width * 0.85}" cy="${height * 0.2}" r="${height * 0.35}" fill="#ffffff" opacity="0.07"/>
  <circle cx="${width * 0.1}" cy="${height * 0.95}" r="${height * 0.3}" fill="#ffffff" opacity="0.06"/>
  <text x="50%" y="${subtitle ? "46%" : "52%"}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fs}" font-weight="700" fill="${fg}">${esc(title)}</text>
  ${subtitle ? `<text x="50%" y="60%" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${Math.round(fs * 0.45)}" fill="${fg}" opacity="0.85">${esc(subtitle)}</text>` : ""}
</svg>`;
  return toDataUrl(svg);
}

/** Wide hero/banner image. */
export function bannerImage(title, subtitle = "Rahimafrooz Batteries Ltd.", opts = {}) {
  return placeholderImage(title, { subtitle, width: 1920, height: 700, ...opts });
}

/** Product shot of a battery with the model name printed on it. */
export function batteryImage(model, { brand = "RAHIMAFROOZ", color, width = 600, height = 600 } = {}) {
  const c = color || colorFor(model);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 600 600">
  <rect width="600" height="600" fill="#F5F6F8"/>
  <ellipse cx="300" cy="500" rx="220" ry="22" fill="#000" opacity="0.12"/>
  <rect x="150" y="150" width="70" height="40" rx="6" fill="#2b2b2b"/>
  <rect x="380" y="150" width="70" height="40" rx="6" fill="#2b2b2b"/>
  <text x="185" y="140" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="${BRAND_RED}">+</text>
  <text x="415" y="140" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#2b2b2b">−</text>
  <rect x="90" y="180" width="420" height="310" rx="18" fill="#222831"/>
  <rect x="90" y="180" width="420" height="60" rx="18" fill="#30363F"/>
  <rect x="110" y="270" width="380" height="170" rx="10" fill="${c}"/>
  <text x="300" y="330" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="800" fill="#fff" letter-spacing="2">${esc(brand)}</text>
  <text x="300" y="385" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="800" fill="#fff">${esc(model)}</text>
  <text x="300" y="422" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#fff" opacity="0.85">MAINTENANCE FREE · 12V</text>
</svg>`;
  return toDataUrl(svg);
}

/** Avatar / portrait with initials. */
export function portraitImage(name, { width = 400, height = 400 } = {}) {
  const initials = String(name)
    .replace(/^(Mr|Mrs|Ms|Dr|Late)\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  const c = colorFor(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="${c}"/>
  <circle cx="200" cy="160" r="80" fill="#fff" opacity="0.25"/>
  <path d="M60 400c0-80 63-140 140-140s140 60 140 140z" fill="#fff" opacity="0.25"/>
  <text x="200" y="185" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="700" fill="#fff">${esc(initials)}</text>
</svg>`;
  return toDataUrl(svg);
}

/** Certificate / award document. */
export function certificateImage(title, { subtitle = "Rahimafrooz Batteries Ltd.", width = 600, height = 800 } = {}) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 600 800">
  <rect width="600" height="800" fill="#FFFDF7"/>
  <rect x="24" y="24" width="552" height="752" fill="none" stroke="#C9A227" stroke-width="10"/>
  <rect x="44" y="44" width="512" height="712" fill="none" stroke="#C9A227" stroke-width="2"/>
  <text x="300" y="170" text-anchor="middle" font-family="Georgia, serif" font-size="40" font-weight="700" fill="${BRAND_DARK}">CERTIFICATE</text>
  <line x1="150" y1="200" x2="450" y2="200" stroke="#C9A227" stroke-width="2"/>
  <foreignObject x="70" y="260" width="460" height="220"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Georgia,serif;font-size:34px;font-weight:700;color:${BRAND_RED};text-align:center;line-height:1.25">${esc(title)}</div></foreignObject>
  <text x="300" y="540" text-anchor="middle" font-family="Georgia, serif" font-size="22" fill="#444">awarded to</text>
  <text x="300" y="585" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="${BRAND_DARK}">${esc(subtitle)}</text>
  <circle cx="300" cy="680" r="48" fill="#C9A227"/><circle cx="300" cy="680" r="36" fill="none" stroke="#fff" stroke-width="3"/>
  <text x="300" y="690" text-anchor="middle" font-family="Arial" font-size="28" font-weight="700" fill="#fff">★</text>
</svg>`;
  return toDataUrl(svg);
}

/** Brand logo tile. */
export function logoImage(name, { width = 400, height = 200, color } = {}) {
  const c = color || colorFor(name);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 400 200">
  <rect width="400" height="200" rx="16" fill="#ffffff"/>
  <rect x="20" y="70" width="60" height="60" rx="12" fill="${c}"/>
  <text x="50" y="112" text-anchor="middle" font-family="Arial" font-size="34" font-weight="800" fill="#fff">${esc(String(name)[0] || "R")}</text>
  <text x="95" y="113" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" fill="${c}">${esc(name)}</text>
</svg>`;
  return toDataUrl(svg);
}

/** Small flag-like tile for a country (no real flags; colour + ISO code). */
export function flagImage(country, code = "") {
  return placeholderImage(code || String(country).slice(0, 2).toUpperCase(), {
    subtitle: country,
    width: 300,
    height: 200,
  });
}
