import { useState } from "react";

const YearSelect = ({ props }) => {
  const { options, yearInputValue, setYearInputValue } = props;

  const [selectedYearOptions, setSelectedYearOptions] = useState(options);

  const handleInputChange = (e) => {
    setYearInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (yearInputValue.trim()) {
        const newOption = yearInputValue.trim();
        const newOptions = [...selectedYearOptions, newOption];
        setSelectedYearOptions(newOptions);
        console.log(selectedYearOptions);
        setYearInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const newOptions = selectedYearOptions.filter(
      (opt) => opt !== optionToRemove
    );
    setSelectedYearOptions(newOptions);
  };

  return (
    <div>
      <input
        type="text"
        className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        {selectedYearOptions.map((year, index) => (
          <span
            key={index}
            className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"
            style={{ margin: "0 5px", display: "inline-block" }}
          >
            {year}{" "}
            <button
              className="text-white"
              onClick={() => handleRemoveOption(year)}
            >
              x
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default YearSelect;
