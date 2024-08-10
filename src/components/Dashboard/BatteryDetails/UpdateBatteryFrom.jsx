/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaCarBattery } from "react-icons/fa";
import CustomMultiSelect from "./CustomMultiSelect";
import ModelSelect from "./ModelSelect";
import YearSelect from "./YearSelect";

const UpdateBatteryForm = ({
  showVehicleFields,
  categories,
  technologyOptions,
  formData,
  handleSubmit,
  handleChange,
  handleFileChange,
  handleTerminalLayoutChange,
  handleCategoryChange,
  handleTechnologyChange,
  handleSupportedVehicleMakesChange,
  handleVehicleModelsChange,
  handleMakeYearsChange,
  setModelOptions,
  modelOptions,
  setYearOptions,
  yearOptions,
  VehicleOptions,
  setVehicleOptions,
  options,
  setOptions,
}) => {
  const {
    battery_name = "",
    short_code = "",
    brand_code = "",
    item_code = "",
    model = "",
    imgurls = [],
    terminal_layout = "",
    applicable_categories = [],
    technology = "",
    supported_vehicle_makes = [],
    supported_vehicle_models = {},
    make_years_models = {},
  } = formData;
  // setting option to supported_vehicle_makes
  setVehicleOptions(supported_vehicle_makes);
  setModelOptions(supported_vehicle_models);
  console.log(modelOptions);
  const [inputValue, setInputValue] = useState("");
  const [modelInputValue, setModelInputValue] = useState({});
  const [yearInputValue, setYearInputValue] = useState({});

  const handleModelInputValueChange = (make, value) => {
    setModelInputValue((prevState) => ({
      ...prevState,
      [make]: value,
    }));
  };

  const handleYearInputValueChange = (make, model, value) => {
    setYearInputValue((prevState) => ({
      ...prevState,
      [make]: {
        ...prevState[make],
        [model]: value,
      },
    }));
  };

  const handleModelOptionsChange = (make, newModels) => {
    setModelOptions((prevState) => ({
      ...prevState,
      [make]: newModels,
    }));
    handleVehicleModelsChange(make, newModels);
  };

  const handleYearOptionsChange = (make, model, newYears) => {
    setYearOptions((prevState) => ({
      ...prevState,
      [make]: {
        ...prevState[make],
        [model]: newYears,
      },
    }));
    handleMakeYearsChange(make, model, newYears);
  };

  const getModels = (make) =>
    Array.isArray(supported_vehicle_models[make])
      ? supported_vehicle_models[make]
      : [];

  const getYears = (make, model) =>
    Array.isArray(make_years_models[make]?.[model])
      ? make_years_models[make][model]
      : [];

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Battery Form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Battery Name:
            </label>
            <input
              type="text"
              name="battery_name"
              value={battery_name}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Short Code:
            </label>
            <input
              type="text"
              name="short_code"
              value={short_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Brand Code:
            </label>
            <input
              type="text"
              name="brand_code"
              value={brand_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Item Code:
            </label>
            <input
              type="text"
              name="item_code"
              value={item_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Model:
            </label>
            <input
              type="text"
              name="model"
              value={model}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Upload Image:
            </label>
            <input
              type="file"
              name="imgurls"
              multiple
              onChange={handleFileChange}
              className="file-input w-full input-sm rounded-sm max-w-xs bg-white text-black max-h-10"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Upload Terminal Layout:
            </label>
            <input
              type="file"
              name="terminal_layout"
              onChange={handleTerminalLayoutChange}
              className="file-input w-full input-sm rounded-sm max-w-xs bg-white text-black max-h-10"
            />
          </div>

          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Applicable Categories:
            </label>
            <Select
              isMulti
              name="applicable_categories"
              options={categories}
              value={categories.filter((option) =>
                applicable_categories.includes(option.value)
              )}
              onChange={handleCategoryChange}
              className="basic-multi-select bg-gray-200 text-black text-small"
              classNamePrefix="select"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Technology:
            </label>
            <Select
              name="technology"
              options={technologyOptions}
              value={technologyOptions.find(
                (option) => option.value === technology
              )}
              onChange={handleTechnologyChange}
              className="basic-select bg-gray-200 text-black text-small"
              classNamePrefix="select"
            />
          </div>

          {showVehicleFields && (
            <>
              <div className="mb-4">
                <label className="block text-small text-gray-800 pb-1">
                  Supported Vehicle Makes:
                </label>
                <CustomMultiSelect
                  prompts={{
                    supported_vehicle_makes,
                    setInputValue,
                    inputValue,
                    setVehicleOptions,
                    VehicleOptions,
                  }}
                  setOptions={(newMakes) =>
                    handleSupportedVehicleMakesChange(newMakes)
                  }
                  placeholder="press enter to add supported makes"
                />
              </div>
              {supported_vehicle_makes?.map((make, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-small text-gray-800 pb-1">
                    {make} Models:
                  </label>
                  <ModelSelect
                    prompts={{
                      options: modelOptions,
                      setInputValue: (value) =>
                        handleModelInputValueChange(make, value),
                      inputValue: modelInputValue[make] || "",
                      setModelOptions,
                      modelOptions,
                    }}
                    make={make}
                    setOptions={(newModels) =>
                      handleModelOptionsChange(make, newModels)
                    }
                    placeholder="press space to add models"
                  />
                  {getModels(make).map((model, modelIndex) => (
                    <div key={modelIndex} className="mt-2 ml-4">
                      <label className="block text-small text-gray-800 pb-1">
                        {model} Years:
                      </label>
                      <YearSelect
                        prompts={{
                          options:
                            yearOptions[make]?.[model] || getYears(make, model),
                          setInputValue: (value) =>
                            handleYearInputValueChange(make, model, value),
                          inputValue: yearInputValue[make]?.[model] || "",
                        }}
                        setOptions={(newYears) =>
                          handleYearOptionsChange(make, model, newYears)
                        }
                        placeholder="press space to add years"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="btn btn-primary w-full max-w-xs rounded-sm"
          >
            <FaCarBattery className="inline-block mr-2" />
            Update Battery
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBatteryForm;
