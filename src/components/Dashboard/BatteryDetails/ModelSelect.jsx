import { useState } from "react";

const ModelSelect = ({ props }) => {
  const { options, modelInputValue, setModelInputValue } = props;

  const [selectedModelOptions, setSelectedModelOptions] = useState(
    options?.models
  );
  // console.log(options);
  // console.log(selectedModelOptions);

  const handleInputChange = (e) => {
    setModelInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (modelInputValue.trim()) {
        const newOption = modelInputValue.trim();
        const newOptions = [...selectedModelOptions, newOption];
        setSelectedModelOptions(newOptions);
        console.log(newOptions);
        setModelInputValue("");
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const newOptions = selectedModelOptions.filter(
      (opt) => opt !== optionToRemove
    );
    setSelectedModelOptions(newOptions);
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
        {selectedModelOptions.map((model, index) => (
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
