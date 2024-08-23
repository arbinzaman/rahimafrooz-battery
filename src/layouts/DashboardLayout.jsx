import { Link, Outlet } from "react-router-dom";
import { MdPrecisionManufacturing, MdReviews } from "react-icons/md";
import DashboardHeader from "../components/shared/DashboardHeader";
import { AiOutlineGlobal } from "react-icons/ai";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineFileDone } from "react-icons/ai";
import { IoMdImages } from "react-icons/io";
import { GrHostMaintenance } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import {
  FaCarBattery,
  FaLocationDot,
  FaQuestion,
  FaUserTie,
  FaAward,
  FaUsersRectangle,
} from "react-icons/fa6";
import { BiMessageAltError } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { SiReadthedocs } from "react-icons/si";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiCertificateFill } from "react-icons/pi";
import { RiImageEditFill, RiLogoutBoxLine } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa";
import { RiUserLocationFill } from "react-icons/ri";
import { BsBuildingsFill } from "react-icons/bs";
import { LuUserCircle2 } from "react-icons/lu";
import { useUser } from "../contexts/AuthContext";
import Accordion from "./Accordion";

const DashboardLayout = () => {
  const { logout } = useUser();

  return (
    <div>
      <DashboardHeader />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5 overflow-y-auto">
          <Outlet />
        </div>
        <div className="drawer-side h-screen overflow-y-scroll">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay lg:hidden"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-black mt-20 lg:mt-0 lg:">
            <Accordion icon={<IoHome className="ml-1" />} title="Home">
              <li>
                <Link to="/dashboard/news">
                  {" "}
                  <ImNewspaper />
                  News{" "}
                </Link>
              </li>
              <li>
                <Link to="/dashboard/reviews">
                  {" "}
                  <MdReviews />
                  Reviews{" "}
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
                <Link to="/dashboard/all-certificates">
                  {" "}
                  <PiCertificateFill />
                  Certificates{" "}
                </Link>
              </li>
            </Accordion>
            <Accordion
              icon={<BiMessageAltError className=" text-primary text-lg" />}
              title="About"
            >
              <li>
                <Link to="/dashboard/manufacturing-locations">
                  {" "}
                  <MdPrecisionManufacturing />
                  Manufacturing Details & Locations
                </Link>
              </li>
              <li>
                <Link to="/dashboard/board-members">
                  {" "}
                  <FaUsersRectangle />
                  Founder & Board Members
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
                <Link to="/dashboard/awards">
                  {" "}
                  <FaAward />
                  Special Awards & Achievements{" "}
                </Link>
              </li>
            </Accordion>
            <Accordion
              icon={<SiReadthedocs className="ml-1" />}
              title="Warranty & Service"
            >
              <li>
                <Link to="/dashboard/warranty-service">
                  {" "}
                  <AiOutlineFileDone />
                  Warranty & Service{" "}
                </Link>
              </li>
              <li>
                <Link to="/dashboard/instructions">
                  {" "}
                  <GrHostMaintenance />
                  Instructions Tabs{" "}
                </Link>
              </li>
              <li>
                <Link to="/dashboard/all-faqs">
                  {" "}
                  <FaQuestion />
                  Faqs{" "}
                </Link>
              </li>
            </Accordion>
            <Accordion
              icon={<FaUserTie className="ml-1" />}
              title="Dealer Info"
            >
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
            </Accordion>
            <Accordion
              icon={<TiContacts className="text-lg" />}
              title="Contact us"
            >
              <li>
                <Link to="/dashboard/all-locations">
                  <FaLocationDot /> Contact Locations
                </Link>
              </li>
              <li>
                <Link to="/dashboard/customers-queries">
                  {" "}
                  <HiOutlineUserGroup />
                  Customers Queries{" "}
                </Link>
              </li>
            </Accordion>
            <li>
              <Link
                to="/dashboard/all-battery-details-list"
                className="text-primary font-semibold my-1 shadow-sm"
              >
                <FaCarBattery /> Batteries
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/global-presence-country-list"
                className="text-primary font-semibold my-1 shadow-sm"
              >
                {" "}
                <AiOutlineGlobal />
                Global Presence{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/banner-image"
                className="text-primary font-semibold my-1 shadow-sm"
              >
                {" "}
                <IoMdImages />
                Banner Images{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className="text-primary font-semibold my-1 shadow-sm"
              >
                <LuUserCircle2 color="" /> Admin Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-users"
                className="text-primary font-semibold my-1 shadow-sm"
              >
                {" "}
                <FaUserLock />
                Users{" "}
              </Link>
            </li>
            <li>
              <button
                onClick={() => logout()}
                className="text-red-600 font-semibold my-1 shadow-sm"
              >
                <RiLogoutBoxLine />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
