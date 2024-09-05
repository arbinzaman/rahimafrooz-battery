import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ title, children ,icon}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-md shadow-sm my-3">
      <div
        className="flex justify-between items-center cursor-pointer ml-3 my-1 bg-white"
        onClick={toggleAccordion}
      >
        <h2 className=" text-primary font-semibold flex items-center gap-2 justify-center">{icon}{title}</h2>
        <span className="ml-2">
          {isOpen ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
        </span>
      </div>

      {isOpen && (
        <div className=" ml-3 transition duration-300 ease-in-out ">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;