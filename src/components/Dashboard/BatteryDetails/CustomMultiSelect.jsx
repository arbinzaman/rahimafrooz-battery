const CustomMultiSelect = ({ prompts }) => {
  const {
    setInputValue,
    inputValue,
    setVehicleOptions, // Added
    VehicleOptions, // Added
  } = prompts;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim()) {
        const newOption = inputValue.trim();
        VehicleOptions.push(newOption); // Added
        // setVehicleOptions(VehicleOptions); // Added
        setInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const index = VehicleOptions.indexOf(optionToRemove);
    const valueToRemove = VehicleOptions.splice(index, 1);
    console.log(VehicleOptions);
    console.log(valueToRemove);
  };

  return (
    <div>
      <div className="mb-2">
        {VehicleOptions?.map((option, index) => (
          <span
            key={index}
            className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm mr-2 inline-flex items-center"
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
      <input
        type="text"
        value={inputValue}
        className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type and press space to add"
      />
    </div>
  );
};

export default CustomMultiSelect;
