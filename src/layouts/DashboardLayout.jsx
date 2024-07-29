import { Link, Outlet } from "react-router-dom";
import DashboardHeader from "../components/shared/DashboardHeader";
import { FaCarBattery, FaLocationDot, FaUserTie } from "react-icons/fa6";
import { MdPrecisionManufacturing } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiCertificateFill } from "react-icons/pi";
import { FaQuoteLeft } from "react-icons/fa";
import { RiImageEditFill } from "react-icons/ri";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5 lg:ml-80 overflow-y-auto">
          <Outlet />
        </div>
        <div className="drawer-side  lg:fixed ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay lg:hidden"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-black mt-20 lg:mt-0 lg:fixed  ">
            {/* <li>
              <Link to="/dashboard/passenger-car-batteries">
                Passenger Car Batteries
              </Link>
            </li>
            <li>
              <Link to="/dashboard/commercial-car-batteries">
                Commercial Car Batteries
              </Link>
            </li>
            <li>
              <Link to="/dashboard/two-wheeler-batteries">
                Two Wheeler Batteries
              </Link>
            </li> */}

            <li>
              <Link to="/dashboard/all-battery-details-list">
              <FaCarBattery /> Batteries 
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/add-new-battery">Add A New Battery</Link>
            </li> */}
            {/* <li>
              <Link to="/dashboard/update-locations">
              Update Locations  
              </Link>
              </li> */}
            <li>
              <Link to="/dashboard/all-locations">
              <FaLocationDot /> Contact Locations
              </Link>
            </li>
            <li>
              <Link to="/dashboard/all-manufacturing-data">
              <MdPrecisionManufacturing /> Manufacturing Locations  
              </Link>
            </li>
              <li>
                <Link to="/dashboard/dealers-application-list">
                <FaUserTie />Dealers Application List
                </Link>
              </li>
            {/* <li>
              <Link to="/dashboard/add-a-location">
               Add A Location  
              </Link>
            </li> */}
            <li>
              <Link to="/dashboard/customers-queries"> <HiOutlineUserGroup />Customers Queries </Link>
            </li>
            <li>
              <Link to="/dashboard/all-certificates"> <PiCertificateFill />Certificates </Link>
            </li>
            <li>
              <Link to="/dashboard/all-faqs"> <FaQuoteLeft />Faqs </Link>
            </li>
            <li>
              <Link to="/dashboard/all-certificates"> <RiImageEditFill />Brands image </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
