const BatteryFaq = () => {
  return (
    <div>
      <section className="text-primary">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold text-medium">What types of batteries do you offer?</h3>
              <p className="mt-1 text-primary">
                We offer a wide range of batteries including AA, AAA, 9V, C, D, and specialty batteries for various devices such as car batteries, rechargeable batteries, and more.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-medium">How do I know which battery to choose?</h3>
              <p className="mt-1 text-primary">
                You can check your device&apos;s manual or the existing battery for specifications. If you’re unsure, our customer service team can assist you in selecting the right battery for your needs.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-medium">Are your batteries rechargeable?</h3>
              <p className="mt-1 text-primary">
                Yes, we offer both rechargeable and non-rechargeable batteries. Rechargeable batteries are indicated as such in their product descriptions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-medium">How long does it take to deliver the batteries?</h3>
              <p className="mt-1 text-primary">
                Our standard delivery time is 3-5 business days. Expedited shipping options are also available at checkout for faster delivery.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-medium">What is your return policy?</h3>
              <p className="mt-1 text-primary">
                We offer a 30-day return policy on all batteries. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-medium">Do you offer warranties on your batteries?</h3>
              <p className="mt-1 text-primary">
                Yes, most of our batteries come with a warranty that ranges from 6 months to 2 years, depending on the type of battery. Specific warranty information is provided on the product page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryFaq;
