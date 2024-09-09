import { useQuery } from "@tanstack/react-query";
import Loader from "../shared/Loaders/Loader"
import UiErrorPage from "../shared/Error/UiErrorPage";

const Accordion = () => {
  const {
    data: allInstructions = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allInstructions"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/instructions`);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  if (error)
    return (
      <div>
        <UiErrorPage />
      </div>
    );

  return (
    <section className="my-10">
      {allInstructions.map((item, index) => (
        <div key={index} className="collapse collapse-arrow rounded-none">
          <input
            type="radio"
            name="my-accordion-2"
            defaultChecked={index === 0}
          />
          <div className="collapse-title text-xl font-medium bg-primary text-base text-medium">
            {item.title}
          </div>
          <div className="collapse-content bg-background text-primary pb-2">
            <p className="py-5">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Accordion;
