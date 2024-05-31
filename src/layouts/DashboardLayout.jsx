import { Link, Outlet } from "react-router-dom";
import DashboardHeader from "../components/shared/DashboardHeader";

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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-20 lg:mt-0  lg:fixed ">
            <li>
              <Link to="/dashboard/passenger-car-batteries">
                Passenger Car Batteries
              </Link>
            </li>
            <li>
              <Link to="/dashboard/dealers-application-list">
                Dealers Application List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
