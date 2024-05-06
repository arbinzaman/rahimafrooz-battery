import DealerApplicationForm from "../components/BecomeADealer/DealerApplicationForm";

const BecomeADealer = () => {
  return (
    <section>
      <div>Image</div>
      <section className="mx-2 md:mx-16 lg:mx-20">
        <div className="text-center">
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
