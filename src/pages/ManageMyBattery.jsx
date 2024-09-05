import LocallySavedBanner from "../assets/images/BannerImages/WarrantyAndServicesPage/Manage_My_Battery_Registration_Page_Banner.jpg";
import Accordion from "../components/ManageMyBattery/Accordion";
import CheckWarranty from "../components/ManageMyBattery/CheckWarranty";
import Faq from "../components/ManageMyBattery/BatteryFaq";
import WarrantyApplicationForm from "../components/ManageMyBattery/WarrantyApplicationForm";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import HomeDeliverySection from "../components/ManageMyBattery/HomeDeliverySection";
import BannerImage from "../components/shared/BannerImage";
const ManageMyBattery = () => {
  // Key for banner image
  const pageKey = "warranty";

  return (
    <section>
      <div>
        <BannerImage bannerImageProps={{ pageKey, LocallySavedBanner }} />
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
        </section>
        <section className="mt-10 lg:mt-20">
          <HomeDeliverySection />
        </section>
        <section className="mt-10 lg:mt-20">
          <Accordion />
        </section>
        <section className="mt-10 lg:mt-20">
          <Faq />
        </section>
      </section>
    </section>
  );
};

export default ManageMyBattery;
