
const CustomMultiSelect = ({ prompts }) => {
  const {
    setOptions,
    setInputValue,
    inputValue,
    options,
    // setVehicleOptions, // Added
    VehicleOptions, // Added
  } = prompts;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      if (inputValue.trim()) {
        const newOption = inputValue.trim();
        const updatedOptions = [...options, newOption];
        setOptions(updatedOptions || VehicleOptions);
        setInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const updatedOptions = options?.filter((option) => option !== optionToRemove);
    setOptions(updatedOptions || VehicleOptions);
  };

  return (
    <div>
      <div className="mb-2">
        {options?.map((option, index) => (
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
