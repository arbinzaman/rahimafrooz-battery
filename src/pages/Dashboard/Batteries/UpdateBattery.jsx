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
  const [supportedVehicleMakes, setSupportedVehicleMakes] = useState([]);
  const [supportedVehicleModels, setSupportedVehicleModels] = useState([]);
  const [vehicleMakeYears, setVehicleMakeYears] = useState([]);

  const fetchBatteryDetails = async ({ queryKey }) => {
    const [_key, { short_code }] = queryKey;
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/batteries/${short_code}`
    );
    // console.log(response.data);
    setSupportedVehicleMakes(response.data.supported_vehicle_makes);
    setSupportedVehicleModels(response.data.supported_vehicle_models);
    setVehicleMakeYears(response.data.make_years);
    setFormData(response.data);
    return response.data;
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

  // console.log(supportedVehicleMakes);
  // console.log(supportedVehicleModels);
  // console.log(vehicleMakeYears);

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
    make_years: {},
  });

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

  const showVehicleFields =
    formData.applicable_categories.includes("Passenger Car") ||
    formData.applicable_categories.includes("Commercial Vehicle");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-primary text-center text-medium lg:text-large font-bold uppercase mb-2">
        Update Battery Form
      </h1>
      <UpdateBatteryForm
        batteryUpdateProps={{
          showVehicleFields,
          categories,
          technologyOptions,
          formData,
          handleChange,
          handleFileChange,
          handleTerminalLayoutChange,
          handleCategoryChange,
          handleTechnologyChange,
          supportedVehicleModels,
          setSupportedVehicleModels,
          vehicleMakeYears,
          setVehicleMakeYears,
          supportedVehicleMakes,
          setSupportedVehicleMakes
        }}
      />
    </div>
  );
};

export default UpdateBattery;
