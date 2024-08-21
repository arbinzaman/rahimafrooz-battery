/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaCarBattery } from "react-icons/fa";
import SupportedVehicleMakesSelect from "./SupportedVehicleMakesSelect";
import ModelSelect from "./ModelSelect";
import YearSelect from "./YearSelect";

const AddANewBatteryForm = ({ batteryUpdateProps }) => {
  const {
    showVehicleFields,
    categories,
    technologyOptions,
    formData,
    handleChange,
    handleFileChange,
    handleCategoryChange,
    handleTechnologyChange,
    supportedVehicleModels,
    setSupportedVehicleModels,
    vehicleMakeYears,
    setVehicleMakeYears,
    supportedVehicleMakes,
    setSupportedVehicleMakes,
  } = batteryUpdateProps;

  const {
    battery_name = "",
    short_code = "",
    material_code = "",
    new_jis = "",
    dry_weight = "",
    wet_weight = "",
    e_store_link = "",
    brochure_link = "",
    imgurls = [],
    applicable_categories = [],
    technology = "",
    price = "",
    brand_code = "",
    country_of_origin = "",
    supported_vehicle_makes = [],
    supported_vehicle_models = {},
    make_years = {},
  } = formData;

  const [inputValue, setInputValue] = useState("");
  const [modelInputValue, setModelInputValue] = useState("");
  const [yearInputValue, setYearInputValue] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      supported_vehicle_makes: supportedVehicleMakes,
      supported_vehicle_models: supportedVehicleModels,
      make_years: vehicleMakeYears,
    };
    console.log(formattedData);
    try {
      // const response = await axios.patch(
      //   `${import.meta.env.VITE_BASE_URL}/batteries/${short_code}`,
      //   formattedData,
      //   { headers: { "Content-Type": "multipart/form-data" } }
      // );
      // console.log("Update successful:", response.data);
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Update failed:", error);
      // Optionally, show an error message
    }
  };

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
              Material Code:
            </label>
            <input
              type="text"
              name="material_code"
              value={material_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              New JIS:
            </label>
            <input
              type="text"
              name="new_jis"
              value={new_jis}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Dry Weight:
            </label>
            <input
              type="text"
              name="dry_weight"
              value={dry_weight}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Wet Weight:
            </label>
            <input
              type="text"
              name="wet_weight"
              value={wet_weight}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              E-store Link:
            </label>
            <textarea
              type="text"
              name="e_store_link"
              value={e_store_link}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Brochure Link:
            </label>
            <textarea
              type="text"
              name="brochure_link"
              value={brochure_link}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Price:
            </label>
            <input
              type="text"
              name="price"
              value={price}
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
            Country of Origin:
            </label>
            <input
              type="text"
              name="country_of_origin"
              value={country_of_origin}
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
                <SupportedVehicleMakesSelect
                  prompts={{
                    setInputValue,
                    inputValue,
                    setSupportedVehicleMakes,
                    supportedVehicleMakes,
                    supportedVehicleModels,
                    setSupportedVehicleModels,
                  }}
                  placeholder="press enter to add supported makes"
                />
              </div>
              {supportedVehicleMakes?.map((make, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-small text-gray-800 pb-1">
                    {make} Models:
                  </label>
                  <ModelSelect
                    props={{
                      make,
                      supportedVehicleModels,
                      setSupportedVehicleModels,
                      modelInputValue,
                      setModelInputValue,
                      supportedVehicleMakes,
                      setSupportedVehicleMakes,
                      vehicleMakeYears,
                      setVehicleMakeYears,
                    }}
                  />

                  {supportedVehicleModels
                    ?.find((vehicle) => vehicle.make === make)
                    ?.models?.map((model, modelIndex) => {
                      const matchedYears =
                        vehicleMakeYears?.find(
                          (yearData) => yearData.model === model
                        )?.years || [];
                      return (
                        <div key={modelIndex} className="mt-2 ml-4">
                          <label className="block text-small text-gray-800 pb-1">
                            {model} Years:
                          </label>
                          <YearSelect
                            props={{
                              make,
                              model,
                              matchedYears,
                              yearInputValue,
                              setYearInputValue,
                              setVehicleMakeYears,
                              vehicleMakeYears,
                            }}
                          />
                        </div>
                      );
                    })}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="btn btn-ghost bg-primary text-white w-full max-w-xs rounded-sm"
          >
            <FaCarBattery className="inline-block mr-2" />
            Add Battery
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddANewBatteryForm;
