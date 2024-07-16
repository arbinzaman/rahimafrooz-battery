import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AddANewBatteryForm from "../../components/Dashboard/BatteryDetails/AddANewBatteryForm";
import Loader from "../../components/shared/Loaders/Loader";

const fetchCategories = async () => {
  const response = await fetch(
    "https://rahimafrooz-battery-backend.vercel.app/api/v1/categories/"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const AddANewBattery = () => {
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

  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  const categories = data.map((category) => ({
    value: category.category_name,
    label: category.category_name,
  }));

  const technologyOptions = [
    { value: "Non-Hybrid", label: "Non-Hybrid" },
    { value: "Hybrid", label: "Hybrid" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      imgurls: fileUrls,
    });
  };

  const handleTerminalLayoutChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      terminal_layout: fileUrls[0],
    });
  };

  const handleCategoryChange = (selectedOptions) => {
    const categories = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    setFormData({
      ...formData,
      applicable_categories: categories,
    });
  };

  const handleTechnologyChange = (selectedOption) => {
    setFormData({
      ...formData,
      technology: selectedOption ? selectedOption.value : "",
    });
  };

  const handleSupportedVehicleMakesChange = (e) => {
    const makes = e.target.value.split(",").map((make) => make.trim());
    setFormData({
      ...formData,
      supported_vehicle_makes: makes,
      supported_vehicle_models: {},
      make_years_models: {},
    });
  };

  const handleVehicleModelsChange = (make, models) => {
    setFormData((prevState) => ({
      ...prevState,
      supported_vehicle_models: {
        ...prevState.supported_vehicle_models,
        [make]: models,
      },
    }));
  };

  const handleMakeYearsChange = (model, years) => {
    setFormData((prevState) => ({
      ...prevState,
      make_years_models: {
        ...prevState.make_years_models,
        [model]: years,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const supportedVehicleModels = Object.keys(
      formData.supported_vehicle_models
    ).map((make) => ({
      make,
      models: formData.supported_vehicle_models[make],
    }));

    const makeYears = Object.keys(formData.make_years_models).map((model) => ({
      model,
      years: formData.make_years_models[model],
    }));

    const formattedData = {
      battery_name: formData.battery_name,
      short_code: formData.short_code,
      brand_code: formData.brand_code,
      item_code: formData.item_code,
      model: formData.model,
      series: formData.series,
      voltage: formData.voltage,
      free_warranty: formData.free_warranty,
      total_warranty: formData.total_warranty,
      terminal_layout: formData.terminal_layout,
      country_of_origin: formData.country_of_origin,
      pro_rata_warranty: formData.pro_rata_warranty,
      ref_amperehour_ah: formData.ref_amperehour_ah,
      cold_cranking_ability_cca: formData.cold_cranking_ability_cca,
      product_dimensions_lxbxh_mm: formData.product_dimensions_lxbxh_mm,
      exchangeable_format_compatible_with:
        formData.exchangeable_format_compatible_with,
      price: formData.price,
      imgurls: formData.imgurls,
      applicable_categories: formData.applicable_categories,
      technology: formData.technology,
      make_years: makeYears,
      supported_vehicle_makes: formData.supported_vehicle_makes,
      supported_vehicle_models: supportedVehicleModels,
    };

    console.log(formattedData);
    // Add your form submission logic here
  };

  const showVehicleFields =
    formData.applicable_categories.includes("Passenger Car") ||
    formData.applicable_categories.includes("Commercial Vehicle");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AddANewBatteryForm
        prompts={{
          showVehicleFields,
          categories,
          handleSubmit,
          handleTerminalLayoutChange,
          technologyOptions,
          handleTechnologyChange,
          handleCategoryChange,
          handleFileChange,
          handleChange,
          formData,
          handleVehicleModelsChange,
          handleMakeYearsChange,
          handleSupportedVehicleMakesChange,
        }}
      />
    </div>
  );
};

export default AddANewBattery;
