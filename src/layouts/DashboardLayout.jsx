import { Link, Outlet } from "react-router-dom";
import DashboardHeader from "../components/shared/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-20 lg:mt-0">
            <li>
              <Link to="/dashboard/passenger-car-batteries">
                <a>Passenger Car Batteries</a>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/dealers-application-list">
                <a>Dealers Application List</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
