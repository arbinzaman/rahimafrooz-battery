import ManageMyBatteryBanner from "../assets/images/ManageMyBatteryImages/Manage_My_Battery_Registration_Page_Banner.jpg";
import Accordion from "../components/ManageMyBattery/Accordion";
import CheckWarranty from "../components/ManageMyBattery/CheckWarranty";
import WarrantyApplicationForm from "../components/ManageMyBattery/WarrantyApplicationForm";
import { allDeviceMaxWidth } from "../styles/maxWidth";
const ManageMyBattery = () => {
  return (
    <section className="bg-cross-pattern">
      <div>
        <img
          src={ManageMyBatteryBanner}
          className="w-full"
          alt="A picture represnting batter with waranty paper on the left side, text in the middle and another new battery on the right side."
        />
      </div>
      <section className={allDeviceMaxWidth}>
        <div className="text-center text-primary my-10">
          <p className="text-medium md:text-large font-bold uppercase">
            Register For 24/7 Nation-Wide
          </p>
          <p className="text-regular md:text-semi_large font-bold">
            Paperless Warranty Service
          </p>
        </div>
        <section>
          <WarrantyApplicationForm />
          <div>
            <p className="text-primary text-left text-regular md:text-semi_large">
              Check Battery Status :
            </p>
            <CheckWarranty />
          </div>
          <Accordion/>
        </section>
      </section>
    </section>
  );
};

export default ManageMyBattery;
