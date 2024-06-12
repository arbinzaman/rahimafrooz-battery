import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingProvider } from "./contexts/LoadingContext.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </QueryClientProvider>
);
