import { useQuery } from "@tanstack/react-query";

const BatteryFaq = () => {
  const { data: allFaqs = [] } = useQuery({
    queryKey: ["allFaqs"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/faqs`);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });
  return (
    <div>
      <section className="text-primary">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            {allFaqs.map((faq, index) => (
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
