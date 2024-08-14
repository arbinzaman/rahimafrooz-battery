
const YearSelect = ({ props }) => {
  const {
    yearInputValue,
    setYearInputValue,
    matchedYears,
  } = props;

  const handleInputChange = (e) => {
    setYearInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (yearInputValue.trim()) {
        const newOption = yearInputValue.trim();
        const newOptions = matchedYears.push(newOption);
        console.log(newOptions);
        setYearInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const newOptions = matchedYears.filter((opt) => opt !== optionToRemove);
    console.log(newOptions);
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
        {matchedYears.map((year, index) => (
          <span
            key={index}
            className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"
            style={{ margin: "0 5px", display: "inline-block" }}
          >
            {year}{" "}
            <span
              className="text-white hover:cursor-pointer"
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
