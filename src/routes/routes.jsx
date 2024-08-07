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
import DealerApplicationList from "../pages/Dashboard/DealerApplicationList";
import CustomersQueries from "../pages/Dashboard/CustomersQueries";
import AllBatteryDetails from "../pages/Dashboard/Batteries/AllBatteryDetails";
import CategoryWiseBatteries from "../pages/Products/CategoryWiseBatteries";
import ErrorPage from "../pages/ErrorPage";
import AddANewBattery from "../pages/Dashboard/Batteries/AddANewBattery";
import UpdateLocations from "../pages/Dashboard/Locations/UpdateLocations";
import AllLocations from "../pages/Dashboard/Locations/AllLocations";
import AddALocation from "../pages/Dashboard/Locations/AddALocation";
import AllManufacturingData from "../pages/Dashboard/ManufacturingLocations";
import AddAManufacturingData from "../components/Dashboard/ManufacturingLocations/AddManufacturingLocationsForm";
import AllCerificates from "../pages/Dashboard/Certificates/AllCerificates";
import AddACertificateData from "../pages/Dashboard/Certificates/AddACertificateData";
import AllFaqs from "../pages/Dashboard/Faq/AllFaq";
import AllUsers from "../pages/Dashboard/Users/AllUsers";
import AddAUser from "../pages/Dashboard/Users/AddAUser";
import AddAFaq from "../pages/Dashboard/Faq/AddAFaq";
import UpdateBattery from "../pages/Dashboard/Batteries/UpdateBattery";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import RestricIfLoggedInRoute from "./RestricIfLoggedInRoute/RestricIfLoggedInRoute";
import DealerLocationAndDetailsList from "../pages/Dashboard/DealerLocation&Details/DealerLocationAndDetailsList";
import AllBrandImg from "../pages/Dashboard/BrandsImage/AllBrandImg";
import StoragePowerSection from "../pages/Dashboard/StoragePower/StoragePowerSection";
import MultoSelect from "../components/Dashboard/MultiSelect";
import AllGlobalPresenceCountry from "../pages/Dashboard/GlobalPresence/AllGlobalPresenceCountry";
import Awards from "../pages/Dashboard/Awards/Awards";
import AllNews from "../pages/Dashboard/News/AllNews";
import Profile from "../pages/Dashboard/UserProfile/Profile";
import AllReviews from "../pages/Dashboard/Review/AllReviews";

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
        path: `/product-final-page/:shortCode`,
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
      {
        path: "/categories/:category_name",
        element: <CategoryWiseBatteries />,
      },
    ],
  },
  {
    path: "/admin-login",
    element: (
      <RestricIfLoggedInRoute>
        <Login />
      </RestricIfLoggedInRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <AllBatteryDetails />,
      },
      {
        path: "/dashboard/update-battery/:short_code",
        element: <UpdateBattery />,
      },
      {
        path: "/dashboard/dealers-application-list",
        element: <DealerApplicationList />,
      },
      {
        path: "/dashboard/dealers-location-and-details",
        element: <DealerLocationAndDetailsList />,
      },
      {
        path: "/dashboard/all-battery-details-list",
        element: <AllBatteryDetails />,
      },
      {
        path: "/dashboard/add-new-battery",
        element: <AddANewBattery />,
      },
      {
        path: "/dashboard/customers-queries",
        element: <CustomersQueries />,
      },
      {
        path: "/dashboard/customers-queries",
        element: <CustomersQueries />,
      },
      {
        path: "/dashboard/update-locations",
        element: <UpdateLocations />,
      },
      {
        path: "/dashboard/all-locations",
        element: <AllLocations />,
      },
      {
        path: "/dashboard/add-a-location",
        element: <AddALocation />,
      },
      {
        path: "/dashboard/manufacturing-locations",
        element: <AllManufacturingData />,
      },
      {
        path: "/dashboard/add-a-manufacturing-data",
        element: <AddAManufacturingData />,
      },
      {
        path: "/dashboard/all-certificates",
        element: <AllCerificates />,
      },
      {
        path: "/dashboard/add-a-certificate",
        element: <AddACertificateData />,
      },
      {
        path: "/dashboard/all-faqs",
        element: <AllFaqs />,
      },
      {
        path: "/dashboard/add-a-faq",
        element: <AddAFaq />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/add-a-user",
        element: <AddAUser />,
      },
      {
        path: "/dashboard/brand-image",
        element: <AllBrandImg />,
      },
      {
        path: "/dashboard/custom-multi-select",
        element: <MultoSelect />,
      },
      {
        path: "/dashboard/storage-power",
        element: <StoragePowerSection />,
      },
      {
        path: "/dashboard/global-presence-country-list",
        element: <AllGlobalPresenceCountry />,
      },
      {
        path: "/dashboard/awards",
        element: <Awards />,
      },
      {
        path: "/dashboard/news",
        element: <AllNews />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/reviews",
        element: <AllReviews />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
