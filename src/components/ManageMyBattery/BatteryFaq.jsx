// import { useQuery } from "@tanstack/react-query";
import batteryFaqData from "../../demoData/BatteryFaqData.json";

// const FAQ_API_URL = `${import.meta.env.VITE_BASE_URL}/faqs`;
const faqs = batteryFaqData;

// const fetchFaqs = async () => {
//   const res = await fetch(FAQ_API_URL);
//   if (!res.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return res.json();
// };

const BatteryFaq = () => {
  // const { data: faqs = [], isLoading, isError } = useQuery(["faqs"], fetchFaqs);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error loading FAQs</div>;
  // }

  return (
    <div>
      <section className="text-primary">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="font-semibold text-medium">{faq.question}</h3>
                <p className="mt-1 text-primary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BatteryFaq;
