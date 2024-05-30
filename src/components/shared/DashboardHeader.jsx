import Logo from "../../assets/images/RahimAfrozRLogo/RahimafroozRLogo.png";
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
                  <img className="w-8" src={Logo} alt="logo" />
                </a>
                <p className="text-primary ml-3 text-semi_large font-bold">Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
