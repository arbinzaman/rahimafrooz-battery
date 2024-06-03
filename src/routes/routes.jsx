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
import Login from "../pages/Dashboard/Login";
// import PassengerCarBatteries from "../pages/Dashboard/PassengerCarBatteries";
import DealerApplicationList from "../pages/Dashboard/DealerApplicationList";
import CustomersQueries from "../pages/Dashboard/CustomersQueries";
// import CommercialVehicleBatteries from "../pages/Dashboard/CommercialVehicleBatteries";
// import TwoWheelerBatteries from "../pages/Dashboard/TwoWheelerBatteries";
import AllBatteryDetails from "../pages/Dashboard/AllBatteryDetails";

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
    path: "/admin-login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // {
      //   path: "/dashboard/passenger-car-batteries",
      //   element: <PassengerCarBatteries />,
      // },
      // {
      //   path: "/dashboard/commercial-car-batteries",
      //   element: <CommercialVehicleBatteries />,
      // },
      // {
      //   path: "/dashboard/two-wheeler-batteries",
      //   element: <TwoWheelerBatteries />,
      // },
      {
        path: "/dashboard",
        element: <AllBatteryDetails />,
      },
      {
        path: "/dashboard/dealers-application-list",
        element: <DealerApplicationList />,
      },
      {
        path: "/dashboard/all-battery-details-list",
        element: <AllBatteryDetails />,
      },
      {
        path: "/dashboard/customers-queries",
        element: <CustomersQueries />,
      },
    ],
  },
]);

export default routes;
