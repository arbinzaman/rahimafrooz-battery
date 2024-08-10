const CustomMultiSelect = ({ prompts }) => {
  const {
    setInputValue,
    inputValue,
    VehicleOptions, // Added
    setVehicleOptions,
  } = prompts;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // const inputValue = e.target.value;
      console.log(inputValue);
      if (inputValue.trim()) {
        const newOption = inputValue.trim();
        const newOptions = VehicleOptions.push(newOption);
        console.log(newOptions);
        setVehicleOptions(newOptions);
        setInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const index = VehicleOptions.indexOf(optionToRemove);
    const valueToRemove = VehicleOptions.splice(index, 1);
    const newOptions = VehicleOptions.filter((opt) => opt !== valueToRemove);
    console.log(newOptions);
    setVehicleOptions(newOptions);
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
        placeholder="Type and press space to add"
      />
      <div className="my-2">
        {VehicleOptions.length > 0 &&
          VehicleOptions?.map((option, index) => (
            <span
              key={index}
              className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"
            >
              {option}
              <button
                type="button"
                className="ml-2 text-white"
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

export default CustomMultiSelect;
