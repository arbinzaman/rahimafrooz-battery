import { useState } from "react";
import Logo from "../../assets/images/RahimAfrozRLogo/RahimafroozRLogo.png";
import { RiMenuUnfold4Line } from "react-icons/ri";
import { RiMenuUnfold3Line2 } from "react-icons/ri";
import "../../styles/Header.css";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <nav>
        <div className="p-6 text-white diagonal-background">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center">
              <Link to="/dashboard">
                <div className="flex items-center">
                  <a href="/dashboard">
                    <img className="w-5 lg:w-8" src={Logo} alt="logo" />
                  </a>
                  <p className="text-primary ml-3 text-medium lg:text-semi_large font-bold">
                    Dashboard
                  </p>
                </div>
              </Link>
              <label
                htmlFor="my-drawer-2"
                className="drawer-button lg:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <RiMenuUnfold3Line2 className="ml-48 text-medium text-background" />
                ) : (
                  <RiMenuUnfold4Line className="ml-48 text-medium text-background" />
                )}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
