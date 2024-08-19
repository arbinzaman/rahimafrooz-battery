/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import UpdateBatteryForm from "../../../components/Dashboard/BatteryDetails/UpdateBatteryFrom";
import Loader from "../../../components/shared/Loaders/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateBattery = () => {
  const fetchCategories = async () => {
    const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/categories/`
    );
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  };

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [formData, setFormData] = useState({
    battery_name: "",
    short_code: "",
    material_code: "",
    new_jis: "",
    dry_weight: "",
    wet_weight: "",
    e_store_link: "",
    brochure_link: "",
    imgurls: [],
    applicable_categories: [],
    technology: "",
    price: "",
    supported_vehicle_makes: [],
    supported_vehicle_models: {},
    make_years: {},
  });

  if (categoriesLoading) {
    return <Loader />;
  }
  if (categoriesError) {
    toast.error(categoriesError.message);
    return <div>Error: {categoriesError.message}</div>;
  }

  const categories = categoriesData.map((category) => ({
    value: category.category_name,
    label: category.category_name,
  }));

  const technologyOptions = [
    { value: "Non-Hybrid", label: "Non-Hybrid" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  const showVehicleFields =
    formData.applicable_categories.includes("Passenger Car") ||
    formData.applicable_categories.includes("Commercial Vehicle");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-primary text-center text-medium lg:text-large font-bold uppercase mb-2">
        Add Battery Form
      </h1>
      <UpdateBatteryForm
        batteryUpdateProps={{
          showVehicleFields,
          formData,
          categories,
          technologyOptions,
        }}
      />
    </div>
  );
};

export default UpdateBattery;
