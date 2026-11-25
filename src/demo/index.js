// Demo-mode bootstrap. Imported first thing from src/main.jsx.
import { DEMO_MODE } from "./config";
import { installMockServer } from "./mockServer";
import "./resources";

if (DEMO_MODE) {
  installMockServer();
}

export { DEMO_MODE };
