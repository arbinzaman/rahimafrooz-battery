import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import BecomeADealer from "../pages/BecomeADealer";
import Bangladesh from "../pages/Products/Bangladesh";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/become-a-dealer",
        element: <BecomeADealer />,
      },
      {
        path: "/products-bangladesh",
        element: <Bangladesh />,
      },
    ],
  },
]);

export default routes;
