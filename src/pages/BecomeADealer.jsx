import DealerApplicationForm from "../components/BecomeADealer/DealerApplicationForm";
import BecomeADealerBanner from "../assets/images/Become-a-dealer-banner.jpg"
import { allDeviceMaxWidth } from "../styles/maxWidth";

const BecomeADealer = () => {
  return (
    <section>
      <div>
        <img src={BecomeADealerBanner} alt="" />
      </div>
      <section className={allDeviceMaxWidth}>
        <div className="text-center my-10">
          <p className="text-primary text-large font-bold">DEALER ENLISTMENT FORM</p>
          <p className="text-secondary text-medium">Input your Information for become a dealer</p>
        </div>
        <div>
            <DealerApplicationForm/>
        </div>
      </section>
    </section>
  );
};

export default BecomeADealer;
