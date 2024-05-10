import DealerApplicationForm from "../components/BecomeADealer/DealerApplicationForm";
import BecomeADealerBanner from "../assets/images/Become-a-dealer-banner.jpg"

const BecomeADealer = () => {
  return (
    <section>
      <div>
        <img src={BecomeADealerBanner} alt="" />
      </div>
      <section className="mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
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
