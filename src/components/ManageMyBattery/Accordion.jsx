// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useLoading } from "../../contexts/LoadingContext";

import maintainceGuidelines from "../../demoData/MaintainceGuidelinesData.json";

// const fetchAccordionData = async () => {
//   const { maintainceGuidelines } = await axios.get(
//     `${import.meta.env.VITE_BASE_URL}/api-endpoint`
//   );
//   return maintainceGuidelines;
// };

const Accordion = () => {
  // const { setIsLoading } = useLoading();
  // const { maintainceGuidelines, error, isLoading } = useQuery(
  //   ["accordionData"],
  //   fetchAccordionData
  // );

  // if (isLoading) setIsLoading(true);
  // if (error) return <div>Error loading data</div>;

  return (
    <section className="my-10">
      {maintainceGuidelines.map((item, index) => (
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
