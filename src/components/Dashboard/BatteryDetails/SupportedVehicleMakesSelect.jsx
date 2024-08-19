const SupportedVehicleMakesSelect = ({ prompts }) => {
  const {
    setInputValue,
    inputValue,
    supportedVehicleMakes,
    setSupportedVehicleMakes,
  } = prompts;
  // console.log(supportedVehicleMakes);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (inputValue.trim()) {
        const newOption = inputValue.trim();
        console.log(newOption);
        const newOptions =[...supportedVehicleMakes, newOption];
        // const newOptions = supportedVehicleMakes.push(newOption);
        console.log(newOptions);
        setSupportedVehicleMakes(newOptions);
        setInputValue("");
      }
    }
  };
  // console.log(supportedVehicleMakes);
  const handleRemoveOption = (optionToRemove) => {
    const index = supportedVehicleMakes.indexOf(optionToRemove);
    const valueToRemove = supportedVehicleMakes.splice(index, 1);
    const newOptions = supportedVehicleMakes.filter((opt) => opt !== valueToRemove);
    console.log(newOptions);
    setSupportedVehicleMakes(newOptions);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="press enter to add items"
      />
      <div className="my-2">
        {supportedVehicleMakes.length > 0 &&
          supportedVehicleMakes?.map((option, index) => (
            <span
              key={index}
              className="bg-gray-200 text-black px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"
            >
              {option}
              <button
                type="button"
                className="ml-2 text-black"
                onClick={() => handleRemoveOption(option)}
              >
                x
              </button>
            </span>
          ))}
      </div>
    </div>
  );
};

export default SupportedVehicleMakesSelect;
