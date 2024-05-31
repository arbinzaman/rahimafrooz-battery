import Logo from "../../assets/images/RahimAfrozRLogo/RahimafroozRLogo.png";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import "../../styles/Header.css";

const DashboardHeader = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="">
        <div className="p-6 text-white  diagonal-background">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a href="/">
                  <img className="w-5 lg:w-8" src={Logo} alt="logo" />
                </a>
                <p className="text-primary ml-3  text-medium lg:text-semi_large font-bold">
                  Dashboard
                </p>

                <label
                  htmlFor="my-drawer-2"
                  className=" drawer-button lg:hidden"
                >
                  <BsFillMenuButtonWideFill className="ml-48 text-medium lg:hidden text-background" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
