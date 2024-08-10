/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UpdateBatteryForm from "../../../components/Dashboard/BatteryDetails/UpdateBatteryFrom";
import Loader from "../../../components/shared/Loaders/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBattery = () => {
  const { short_code } = useParams();
  let [options, setOptions] = useState([]);
  let [VehicleOptions, setVehicleOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState({});
  // const [loadModelOption, setLoadModelOption] = useState({});
  // const [loadYearOption, setLoadYearOption] = useState({});
  const [yearOptions, setYearOptions] = useState({});
  console.log(options);
  console.log(VehicleOptions);
  console.log(modelOptions);
  console.log(yearOptions);

  const fetchBatteryDetails = async ({ queryKey }) => {
    const [_key, { short_code }] = queryKey;
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/batteries/${short_code}`
    );
    return response.data;
    // return console.log(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/categories`
    );
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  };

  const {
    data: batteryDetails,
    error: batteryError,
    isLoading: batteryLoading,
  } = useQuery({
    queryKey: ["batteryDetails", { short_code }],
    queryFn: fetchBatteryDetails,
  });

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [formData, setFormData] = useState({
    battery_name: "",
    short_code: "",
    brand_code: "",
    item_code: "",
    model: "",
    series: "",
    voltage: "",
    free_warranty: "",
    total_warranty: "",
    terminal_layout: "",
    country_of_origin: "",
    pro_rata_warranty: "",
    ref_amperehour_ah: "",
    cold_cranking_ability_cca: "",
    product_dimensions_lxbxh_mm: "",
    exchangeable_format_compatible_with: "",
    price: "",
    imgurls: [],
    applicable_categories: [],
    technology: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: {},
    make_years_models: {},
  });

  useEffect(() => {
    if (batteryDetails) {
      setFormData(batteryDetails);
    }
  }, [batteryDetails]);

  if (batteryLoading || categoriesLoading) return <Loader />;
  if (batteryError) {
    toast.error(batteryError.message);
    return <div>Error: {batteryError.message}</div>;
  }
  if (categoriesError) {
    toast.error(categoriesError.message);
    return <div>Error: {categoriesError.message}</div>;
  }

  const categories = categoriesData?.map((category) => ({
    value: category.category_name,
    label: category.category_name,
  }));

  const technologyOptions = [
    { value: "Non-Hybrid", label: "Non-Hybrid" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      imgurls: fileUrls,
    }));
  };

  const handleTerminalLayoutChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files?.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({
      ...prev,
      terminal_layout: fileUrls[0],
    }));
  };

  const handleCategoryChange = (selectedOptions) => {
    const selectedCategories = selectedOptions
      ? selectedOptions?.map((option) => option.value)
      : [];
    setFormData((prev) => ({
      ...prev,
      applicable_categories: selectedCategories,
    }));
  };

  const handleTechnologyChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      technology: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSupportedVehicleMakesChange = (e) => {
    const makes = options;
    console.log(makes);
    setFormData((prev) => ({
      ...prev,
      supported_vehicle_makes: makes,
      supported_vehicle_models: {},
      make_years_models: {},
    }));
  };

  const handleVehicleModelsChange = (make, models) => {
    setFormData((prev) => ({
      ...prev,
      supported_vehicle_models: {
        ...prev.supported_vehicle_models,
        [make]: models,
      },
    }));
  };

  //   const handleMakeYearsChange = (make, model, years) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       make_years_models: {
  //         ...prev.make_years_models,
  //         [make]: {
  //           ...prev.make_years_models[make],
  //           [model]: years,
  //         },
  //       },
  //     }));
  //   };

  const handleMakeYearsChange = (make, model, years) => {
    setFormData((prev) => {
      const updatedMakeYearsModels = { ...prev.make_years_models };

      // Initialize the make if not already present
      if (!updatedMakeYearsModels[make]) {
        updatedMakeYearsModels[make] = {};
      }

      // Initialize the model if not already present
      if (!updatedMakeYearsModels[make][model]) {
        updatedMakeYearsModels[make][model] = [];
      }

      // Update the years
      updatedMakeYearsModels[make][model] = years;

      return {
        ...prev,
        make_years_models: updatedMakeYearsModels,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const supportedVehicleModels = Object.keys(
      formData.supported_vehicle_models
    )?.map((make) => ({
      make,
      models: formData.supported_vehicle_models[make],
    }));

    const makeYears = Object.keys(formData.make_years_models)?.map((model) => ({
      model,
      years: formData.make_years_models[model],
    }));

    const formattedData = {
      ...formData,
      supported_vehicle_models: supportedVehicleModels,
      make_years: makeYears,
    };
    console.log(formattedData);
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/batteries/${short_code}`,
        formattedData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Update successful:", response.data);
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Update failed:", error);
      // Optionally, show an error message
    }
  };

  const showVehicleFields =
    formData.applicable_categories.includes("Passenger Car") ||
    formData.applicable_categories.includes("Commercial Vehicle");
  // console.log(categories);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-primary text-center text-medium lg:text-large font-bold uppercase mb-2">
        Update Battery Form
      </h1>
      <UpdateBatteryForm
        showVehicleFields={showVehicleFields}
        categories={categories}
        technologyOptions={technologyOptions}
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleTerminalLayoutChange={handleTerminalLayoutChange}
        handleCategoryChange={handleCategoryChange}
        handleTechnologyChange={handleTechnologyChange}
        handleSupportedVehicleMakesChange={handleSupportedVehicleMakesChange}
        handleVehicleModelsChange={handleVehicleModelsChange}
        handleMakeYearsChange={handleMakeYearsChange}
        options={options}
        setOptions={setOptions}
        yearOptions={yearOptions}
        setYearOptions={setYearOptions}
        modelOptions={modelOptions}
        setModelOptions={setModelOptions}
        VehicleOptions={VehicleOptions}
        setVehicleOptions={setVehicleOptions}
      />
    </div>
  );
};

export default UpdateBattery;
