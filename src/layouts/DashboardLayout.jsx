import { Link, Outlet } from "react-router-dom";
import { MdPrecisionManufacturing } from "react-icons/md";
import DashboardHeader from "../components/shared/DashboardHeader";
import {
  FaCarBattery,
  FaLocationDot,
  FaQuestion,
  FaUserTie,
} from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiCertificateFill } from "react-icons/pi";
import { RiImageEditFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";

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
            <li>
              <Link to="/dashboard/all-battery-details-list">
                <FaCarBattery /> Batteries
              </Link>
            </li>

            <li>
              <Link to="/dashboard/all-locations">
                <FaLocationDot /> Contact Locations
              </Link>
            </li>
            <li>
              <Link to="/dashboard/dealers-application-list">
                <FaUserTie />
                Dealers Applications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/dealers-location-and-details">
                {" "}
                <RiUserLocationFill />
                Dealer Locations & Details
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manufacturing-locations">
                {" "}
                <MdPrecisionManufacturing />
                Manufacturing Details & Locations
              </Link>
            </li>
            <li>
              <Link to="/dashboard/customers-queries">
                {" "}
                <HiOutlineUserGroup />
                Customers Queries{" "}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/storage-power">
                {" "}
                <BsBuildingsFill />
                Storage Power{" "}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/all-certificates">
                {" "}
                <PiCertificateFill />
                Certificates{" "}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/brand-image">
                {" "}
                <RiImageEditFill />
                Brands image{" "}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/all-faqs">
                {" "}
                <FaQuestion />
                Faqs{" "}
              </Link>
            </li>
            <li>
              <Link to="/dashboard/all-users">
                {" "}
                <FaUserLock />
                Users{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
