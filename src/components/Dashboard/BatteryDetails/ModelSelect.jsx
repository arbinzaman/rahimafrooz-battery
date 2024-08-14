const ModelSelect = ({ props }) => {
  const {
    make,
    supportedVehicleModels,
    setSupportedVehicleModels,
    modelInputValue,
    setModelInputValue,
  } = props;

  const options = supportedVehicleModels?.find((model) => model.make === make);

  // console.log(options);

  // console.log(supportedVehicleModels);

  const handleInputChange = (e) => {
    setModelInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (modelInputValue.trim()) {
        const newOption = modelInputValue.trim();
        const newOptions = [...options.models, newOption];
        options.models = newOptions;
        console.log(options.make === make && options);
        setModelInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const newOptions = options.models.filter((opt) => opt !== optionToRemove);
    options.models = newOptions;
    console.log(options.make === make && options);
    const newArr = supportedVehicleModels.filter(
      (options) => options.make !== make
    );
    console.log(newArr);
    setSupportedVehicleModels([...newArr, options]);
    console.log(supportedVehicleModels);
    setModelInputValue("");
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
        {options?.models?.map((model, index) => (
          <span
            key={index}
            className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"

          >
            {model}{" "}
            <span
              className="text-white hover:cursor-pointer"
              onClick={() => handleRemoveOption(model)}
            >
              x
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ModelSelect;
