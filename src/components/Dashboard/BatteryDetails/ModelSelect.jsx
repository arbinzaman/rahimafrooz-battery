import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const ModelSelect = ({ props }) => {
  const { make, options, modelInputValue, setModelInputValue } = props;
  const [selectedModelOptions, setSelectedModelOptions] = useState(
    options?.models
  );

  const handleInputChange = (e) => {
    setModelInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      console.log(modelInputValue);
      if (modelInputValue.trim()) {
        const newOption = modelInputValue.trim();
        const newOptions = options?.models?.push(newOption);
        // setSelectedModelOptions([...selectedModelOptions, newOption]);
        console.log(newOptions);
      }
    }
  };

  const handleRemoveOption = (optionToRemove) => {
    const index = options?.models?.indexOf(optionToRemove);
    const valueToRemove = options?.models?.splice(index, 1);
    const newOptions = options?.models?.filter((opt) => opt !== valueToRemove);
    setSelectedModelOptions(newOptions);
  };


  // console.log(selectedModelOptions);
  console.log(options);
  return (
    <div>
      <input
        type="text"
        id="InputID"
        // value={modelInputValue}
        className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        // placeholder={placeholder}
      />
      <div>
        {selectedModelOptions?.map((model, index) => (
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
