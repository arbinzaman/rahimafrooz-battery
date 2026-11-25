import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Demo mode (default on the `demo` branch): all API calls are served by the
// in-browser mock server in src/demo, so no backend is required.
// Set VITE_DEMO_MODE=false to use the real backend from VITE_BASE_URL.
const DEMO_API_BASE = '/demo-api/v1'
if (process.env.VITE_DEMO_MODE !== 'false') {
  process.env.VITE_BASE_URL = DEMO_API_BASE
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
