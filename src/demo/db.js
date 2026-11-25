// Tiny persistent in-browser "database" used by the demo mock server.
// Collections are lazily initialised from registered seed data and persisted to
// localStorage, so create/update/delete actions in the dashboard survive reloads.

import { SEED_VERSION } from "./config";

const STORAGE_KEY = `rahimafrooz_demo_db_v${SEED_VERSION}`;
const seeds = {};
let state = null;

const clone = (v) => JSON.parse(JSON.stringify(v));

function load() {
  if (state) return state;
  try {
    state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    state = {};
  }
  return state;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    // Quota exceeded (e.g. many large uploaded images) - keep working in memory.
    console.warn("[demo] Could not persist demo data:", err?.message);
  }
}

/** Register the initial records of a collection. */
export function registerSeed(name, items) {
  seeds[name] = items;
}

const nowIso = () => new Date().toISOString();

function nextId(list, idKey) {
  const nums = list.map((x) => Number(x[idKey])).filter((n) => Number.isFinite(n));
  return (nums.length ? Math.max(...nums) : 0) + 1;
}

const same = (a, b) => String(a) === String(b);

export const db = {
  /** Live array of a collection (mutations must go through the helpers below). */
  all(name) {
    const s = load();
    if (!s[name]) {
      s[name] = clone(seeds[name] || []);
      save();
    }
    return s[name];
  },

  /** Find one record by id (string/number tolerant). */
  get(name, id, idKey = "id") {
    return db.all(name).find((x) => same(x[idKey], id)) || null;
  },

  /** Find one record matching a predicate. */
  find(name, predicate) {
    return db.all(name).find(predicate) || null;
  },

  /** Filter records with a predicate. */
  filter(name, predicate) {
    return db.all(name).filter(predicate);
  },

  /** Insert a record; assigns a numeric id and timestamps when missing. */
  insert(name, item, idKey = "id") {
    const list = db.all(name);
    const rec = { ...item };
    if (rec[idKey] === undefined || rec[idKey] === null || rec[idKey] === "") {
      rec[idKey] = nextId(list, idKey);
    }
    rec.created_at = rec.created_at || nowIso();
    rec.updated_at = nowIso();
    list.push(rec);
    save();
    return rec;
  },

  /** Shallow-merge a patch into the record with this id. Returns the record or null. */
  update(name, id, patch, idKey = "id") {
    const rec = db.get(name, id, idKey);
    if (!rec) return null;
    Object.assign(rec, patch, { [idKey]: rec[idKey], updated_at: nowIso() });
    save();
    return rec;
  },

  /** Remove the record with this id. Returns the removed record or null. */
  remove(name, id, idKey = "id") {
    const list = db.all(name);
    const idx = list.findIndex((x) => same(x[idKey], id));
    if (idx === -1) return null;
    const [removed] = list.splice(idx, 1);
    save();
    return removed;
  },

  /** Replace a whole collection. */
  set(name, items) {
    load()[name] = items;
    save();
    return items;
  },

  /** Persist after mutating records obtained from all()/get() directly. */
  save,

  /** Wipe all demo changes and go back to the seed data. */
  reset() {
    Object.keys(localStorage)
      .filter((k) => k.startsWith("rahimafrooz_demo_db_"))
      .forEach((k) => localStorage.removeItem(k));
    state = null;
  },
};
