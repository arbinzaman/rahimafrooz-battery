const YearSelect = ({ props }) => {
  const {
    yearInputValue,
    setYearInputValue,
    matchedYears,
    setVehicleMakeYears,
    model,
    vehicleMakeYears,
  } = props;
  console.log(vehicleMakeYears);
  console.log(matchedYears);

  const handleInputChange = (e) => {
    setYearInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (yearInputValue.trim()) {
        const newOption = yearInputValue.trim();
        // const newOptions = [...matchedYears, newOption];
        const newOptions = matchedYears.push(newOption);
        setVehicleMakeYears(newOptions);
        console.log(newOption);
        console.log(newOptions);
        setYearInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const index = matchedYears.indexOf(optionToRemove);
    const valueToRemove = matchedYears.splice(index, 1);
    const newOptions = vehicleMakeYears.filter((opt) => opt !== valueToRemove);
    // console.log(newOptions);
    setVehicleMakeYears(newOptions);
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
        {vehicleMakeYears
          .find((yearData) => yearData.model === model)
          ?.years.map((year, index) => (
            <span
              key={index}
              className="bg-gray-200 text-black px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"

            >
              {year}{" "}
              <span
                className="text-black hover:cursor-pointer ml-2"
                onClick={() => handleRemoveOption(year)}
              >
               x
              </span>
            </span>
          ))}
      </div>
    </div>
  );
};

export default YearSelect;
