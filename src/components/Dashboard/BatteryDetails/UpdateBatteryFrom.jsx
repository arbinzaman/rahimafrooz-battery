/* eslint-disable no-unused-vars */
import React from "react";
import Select from "react-select";
import { FaCarBattery } from "react-icons/fa";
import CustomMultiSelect from "./CustomMultiSelect";

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

  // Utility functions to safely access arrays
  const getModels = (make) => Array.isArray(supported_vehicle_models[make])
    ? supported_vehicle_models[make]
    : [];

  const getYears = (make, model) => Array.isArray(make_years_models[make]?.[model])
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
          {/* Form Fields */}
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

          {/* File Inputs */}
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

          {/* Select Inputs */}
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

          {/* Conditional Vehicle Fields */}
          {showVehicleFields && (
            <>
              <div className="mb-4">
                <label className="block text-small text-gray-800 pb-1">
                  Supported Vehicle Makes:
                </label>
                <CustomMultiSelect
                  options={supported_vehicle_makes}
                  setOptions={(newMakes) => handleSupportedVehicleMakesChange(newMakes)}
                  placeholder="Type and press space to add"
                />
              </div>
              {supported_vehicle_makes.map((make, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-small text-gray-800 pb-1">
                    {make} Models:
                  </label>
                  <CustomMultiSelect
                    options={getModels(make)}
                    setOptions={(newModels) => handleVehicleModelsChange(make, newModels)}
                    placeholder="Type and press space to add"
                  />
                  {getModels(make).map((model, modelIndex) => (
                    <div key={modelIndex} className="mt-2 ml-4">
                      <label className="block text-small text-gray-800 pb-1">
                        {model} Years:
                      </label>
                      <CustomMultiSelect
                        options={getYears(make, model)}
                        setOptions={(newYears) => handleMakeYearsChange(make, model, newYears)}
                        placeholder="Type and press space to add"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-sm btn-ghost bg-primary text-white hover:bg-blue-800"
          >
            Update Battery <FaCarBattery />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBatteryForm;
