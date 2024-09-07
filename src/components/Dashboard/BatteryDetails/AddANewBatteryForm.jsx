/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import { FaCarBattery } from "react-icons/fa";
import SupportedVehicleMakesSelect from "./SupportedVehicleMakesSelect";
import ModelSelect from "./ModelSelect";
import YearSelect from "./YearSelect";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const AddANewBatteryForm = ({ batteryUpdateProps }) => {
  const navigate = useNavigate();
  let {
    showVehicleFields,
    categories,
    technologyOptions,
    formData,
    handleChange,
    // handleFileChange,
    handleCategoryChange,
    handleTechnologyChange,
    supportedVehicleModels,
    setSupportedVehicleModels,
    vehicleMakeYears,
    setVehicleMakeYears,
    supportedVehicleMakes,
    setSupportedVehicleMakes,
  } = batteryUpdateProps;
  const formRef = useRef();
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
    const files = e.target.imgurls.files;
    const formdata = new FormData();
    formdata.append("short_code", e.target.short_code.value);
    Array.from(files).forEach((image) => {
      formdata.append("batteryImages", image);
    });

    const formattedData = {
      ...formData,
      supported_vehicle_makes: supportedVehicleMakes,
      supported_vehicle_models: supportedVehicleModels,
      make_years: vehicleMakeYears,
    };

    try {
      const dataRes = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/batteries`,
        formattedData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      const imgRes = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/batteries/upload-images`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (dataRes.status === 201 && imgRes.status === 201) {
        formRef.current.reset();
        toast.success(`${e.target.battery_name.value} added successfully`);
      } else {
        toast.error(`${e.target.battery_name.value} insertion failed!`);
      }
    } catch (error) {
      console.error("Insertion failed:", error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Battery Form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Battery Name <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              name="battery_name"
              required
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Short Code <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              name="short_code"
              required
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Material Code <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              name="material_code"
              required
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
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Voltage <span className="text-red-600">*</span> :
            </label>
            <input
              type="number"
              name="voltage"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Capacity <span className="text-red-600">*</span> :
            </label>
            <input
              type="number"
              name="capacity"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              CCA <span className="text-red-600">*</span> :
            </label>
            <input
              type="number"
              name="cold_cranking_ability_cca"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Plate :
            </label>
            <input
              type="number"
              name="plate"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Product Dimension (LxWxH) <span className="text-red-600">*</span>{" "}
              :
            </label>
            <input
              type="text"
              name="product_dimensions_lxbxh_mm"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Dry Weight:
            </label>
            <input
              type="number"
              name="dry_weight"
              step="any"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Wet Weight:
            </label>
            <input
              type="number"
              name="wet_weight"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Total Warranty <span className="text-red-600">*</span> :
            </label>
            <input
              type="number"
              name="total_warranty"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Price <span className="text-red-600">*</span> :
            </label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              E-store Link:
            </label>
            <input
              type="text"
              name="e_store_link"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Brochure Link:
            </label>
            <input
              type="text"
              name="brochure_link"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Brand Code <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              name="brand_code"
              required
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Country of Origin <span className="text-red-600">*</span> :
            </label>
            <input
              type="text"
              name="country_of_origin"
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full text-black bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Upload Image :
            </label>
            <input
              type="file"
              multiple
              name="imgurls"
              accept="image/png,image/jpg,image/jpeg"
              // onChange={handleFileChange}e
              className="file-input w-full input-sm rounded-sm max-w-xs bg-white text-black max-h-10"
            />
          </div>

          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Applicable Categories :
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

          {showVehicleFields && (
            <>
              <div className="mb-4">
                <label className="block text-small text-gray-800 pb-1">
                  Technology :
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
              <div className="mb-4">
                <label className="block text-small text-gray-800 pb-1">
                  Supported Vehicle Makes :
                </label>
                <SupportedVehicleMakesSelect
                  prompts={{
                    setInputValue,
                    inputValue,
                    setSupportedVehicleMakes,
                    supportedVehicleMakes,
                    supportedVehicleModels,
                    setSupportedVehicleModels,
                    vehicleMakeYears,
                    setVehicleMakeYears,
                  }}
                  placeholder="press enter to add supported makes"
                />
              </div>
              {supportedVehicleMakes?.map((make, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-small text-gray-800 pb-1">
                    {make} Models :
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

                  <div>
                    {supportedVehicleModels
                      ?.find((vehicle) => vehicle.make === make)
                      ?.models?.map((model, modelIndex) => {
                        return (
                          <div key={modelIndex} className="mt-2 ml-4">
                            <label className="block text-small text-gray-800 pb-1">
                              {model} Years :
                            </label>
                            <YearSelect
                              props={{
                                make,
                                model,
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
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-4 flex flex-col lg:flex-row justify-between items-center">
          <button
            onClick={() => navigate("/dashboard/all-battery-details")}
            className="btn btn-ghost bg-primary text-white w-full max-w-xs rounded-sm"
          >
            <IoMdArrowRoundBack className="inline-block mr-2" />
            Batteries Table
          </button>

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
