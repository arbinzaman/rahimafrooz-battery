import DealerApplicationForm from "../components/BecomeADealer/DealerApplicationForm";
import LocallySavedBanner from "../assets/images/BannerImages/BecomeAPartner/Become-a-dealer-banner.jpg";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import BannerImage from "../components/shared/BannerImage";

const BecomeADealer= () => {
  // Key for banner Image
  const pageKey = ''
  return (
    <section>
      <BannerImage bannerImageProps={{ pageKey, LocallySavedBanner }} />
      <section className={allDeviceMaxWidth}>
        <div className="text-center my-10">
          <p className="text-primary text-large font-bold">
            DEALER ENLISTMENT FORM
          </p>
          <p className="text-secondary text-medium">
            Input your Information for become a dealer
          </p>
        </div>
        <div>
          <DealerApplicationForm />
        </div>
      </section>
    </section>
  );
};

export default BecomeADealer;
