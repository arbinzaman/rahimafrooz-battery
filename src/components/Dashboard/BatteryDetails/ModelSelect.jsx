const ModelSelect = ({ prompts, setOptions, placeholder, make }) => {
  const { options, setInputValue, inputValue } = prompts;
  console.log("options: ", options);

  // Ensure options is always an array
  const safeOptions = Array.isArray(options) ? options : [];

  // Log safeOptions to debug
  console.log("safeOptions: ", safeOptions);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim()) {
        const newModel = inputValue.trim();
        const existingMake = safeOptions.find((option) => option.make === make);
        let updatedOptions;
        if (existingMake) {
          updatedOptions = safeOptions.map((option) =>
            option.make === make
          ? { ...option, models: [...option.models, newModel] }
          : option
        );
      } else {
        updatedOptions = [...safeOptions, { make: make, models: [newModel] }];
      }
      
      // Log updatedOptions to debug
      console.log("updatedOptions: ", updatedOptions);
      
      setOptions(updatedOptions);
      setInputValue("");
    }
  }
};
// console.log("existingMake", safeOptions.find((option) => option.make === make));

  const handleRemoveOption = (modelToRemove) => {
    const updatedOptions = safeOptions
      .map((option) =>
        option.make === make
          ? {
              ...option,
              models: option.models.filter((model) => model !== modelToRemove),
            }
          : option
      )
      .filter((option) => option.models.length > 0);

    setOptions(updatedOptions);
    console.log(updatedOptions);
  };

  const currentModels =
    safeOptions.find((option) => option.make === make)?.models || [];

  // Log currentModels to debug
  console.log("currentModels: ", currentModels);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        />
        <div>
          {currentModels.map((model, index) => (
            <span
              key={index}
                        className="bg-sky-500 text-white px-2 py-1 rounded-md text-sm m-1 inline-flex items-center"
              style={{ margin: "0 5px", display: "inline-block" }}
            >
              {model}{" "}
              <button
                className="text-white"
                onClick={() => handleRemoveOption(model)}
              >
                x
              </button>
            </span>
          ))}
        </div>
    </div>
  );
};

export default ModelSelect;
