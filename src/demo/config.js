// Demo mode configuration.
//
// Demo mode is ON by default on the `demo` branch. Every request the app makes to
// `import.meta.env.VITE_BASE_URL` is answered in the browser by the mock server in
// `./mockServer.js`, using the seed data in `./resources/*`. No backend is needed.
//
// To talk to the real backend instead, start/build with VITE_DEMO_MODE=false and
// provide VITE_BASE_URL as usual.

export const DEMO_MODE = import.meta.env.VITE_DEMO_MODE !== "false";

// Must match the value injected by vite.config.js when demo mode is on.
export const DEMO_API_BASE = "/demo-api/v1";

// Bump this whenever seed data changes so browsers drop their stale copy.
export const SEED_VERSION = 1;

// Simulated network latency (ms) so loaders/spinners are visible.
export const DEMO_LATENCY = 250;

// Demo admin credentials (shown on the login page).
export const DEMO_ADMIN = {
  email: "admin@demo.com",
  password: "demo1234",
  username: "Demo Admin",
  role: "Super Admin",
};
