import Logo from "../../assets/Rahimafrooz_Logo_Color.png";
import "../../styles/Header.css";

const DashboardHeader = () => {
  return (
    <div>
      <nav>
        <div className="p-6 text-white diagonal-background">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a href="/">
                  <img className="nav-logo" src={Logo} alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardHeader;
