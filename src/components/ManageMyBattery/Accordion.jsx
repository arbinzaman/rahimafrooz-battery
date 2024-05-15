const Accordion = () => {
  return (
    <section className="my-10">
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium bg-primary text-base text-medium">
          Maintenance Guideline
        </div>
        <div className="collapse-content bg-background text-primary pb-2">
          <p className="py-5">
            Standard Maintenance means the first maintenance phase for a
            product. Standard maintenance begins with the delivery of the
            respective product and is guaranteed for a minimum period of three
            (3) years (end of standard maintenance).
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium bg-primary text-base text-medium">
          Warranty Policy
        </div>
        <div className="collapse-content bg-background text-primary pb-2">
          <p className="py-5">
            Standard Maintenance means the first maintenance phase for a
            product. Standard maintenance begins with the delivery of the
            respective product and is guaranteed for a minimum period of three
            (3) years (end of standard maintenance).
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium bg-primary text-base text-medium">
          Emergency Service/Call Center
        </div>
        <div className="collapse-content bg-background text-primary pb-2">
          <p className="py-5">
            Standard Maintenance means the first maintenance phase for a
            product. Standard maintenance begins with the delivery of the
            respective product and is guaranteed for a minimum period of three
            (3) years (end of standard maintenance).
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 rounded-none">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium bg-primary text-base text-medium">
          Request For Service Contract
        </div>
        <div className="collapse-content bg-background text-primary pb-2">
          <p className="py-5">
            Standard Maintenance means the first maintenance phase for a
            product. Standard maintenance begins with the delivery of the
            respective product and is guaranteed for a minimum period of three
            (3) years (end of standard maintenance).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
