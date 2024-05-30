import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import BecomeADealer from "../pages/BecomeADealer";
import Bangladesh from "../pages/Products/Bangladesh";
import International from "../pages/Products/International";
import GlobalPresence from "../pages/GlobalPresence";
import ManageMyBattery from "../pages/ManageMyBattery";
import ProductFinalPage from "../pages/ProductFinalPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import FounderAndBoardMembers from "../pages/About/FounderAndBoardMembers";
import ProductSearchPage from "../pages/ProductSearchPage";
import StoragePower from "../pages/About/StoragePower";
import TermsAndCondition from "../pages/TermsAndCondition";
import SpecialAwards from "../pages/About/SpecialAwards";
import FindDealer from "../pages/FindDealer";
import Manufacturing from "../pages/About/Manufacturing";
import DashboardLayout from "../layouts/DashboardLayout";

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
      {
        path: "/products-international",
        element: <International />,
      },
      {
        path: "/global-presence",
        element: <GlobalPresence />,
      },
      {
        path: "/manage-my-battery",
        element: <ManageMyBattery />,
      },
      {
        path: "/product-final-page",
        element: <ProductFinalPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/founder-and-board-members",
        element: <FounderAndBoardMembers />,
      },
      {
        path: "/product-search",
        element: <ProductSearchPage />,
      },
      {
        path: "/rahimafrooz-storage-power",
        element: <StoragePower />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },
      {
        path: "/special-awards-achievement",
        element: <SpecialAwards />,
      },
      {
        path: "/find-dealer",
        element: <FindDealer />,
      },
      {
        path: "/manufacturing",
        element: <Manufacturing />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/home",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
