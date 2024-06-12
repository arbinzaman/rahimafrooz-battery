import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import GlobalLoader from "./components/shared/Loaders/GlobalLoader";

function App() {
  return (
    <section className="">
      <RouterProvider router={routes}></RouterProvider>
      <GlobalLoader />
      <Toaster />
    </section>
  );
}

export default App;
