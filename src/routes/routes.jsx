import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";

const routes = createBrowserRouter(
    [
        { 
            path: "/", 
            element: <Main />,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/contact-us',
                    element:<ContactUs/>
                },
            ]
        }
    ]
);

export default routes;