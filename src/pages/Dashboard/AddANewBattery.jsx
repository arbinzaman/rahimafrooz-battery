import { useState } from "react";
import AddANewBatteryForm from "../../components/Dashboard/BatteryDetails/AddANewBatteryForm";

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

  const categories = [
    { value: "Passenger Car", label: "Passenger Car" },
    { value: "Commercial Vehicle", label: "Commercial Vehicle" },
    { value: "Three Wheeler", label: "Three Wheeler" },
    { value: "Motorcycle", label: "Motorcycle" },
    { value: "Generator", label: "Generator" },
    { value: "Special Purpose", label: "Special Purpose" },
    { value: "IPS", label: "IPS" },
    { value: "Solar", label: "Solar" },
    { value: "Tractor", label: "Tractor" },
    { value: "Golf Cart", label: "Golf Cart" },
    { value: "Forklift", label: "Forklift" },
    { value: "Electric Vehicle", label: "Electric Vehicle" },
  ];

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

  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   const fileUrls = files.map((file) => URL.createObjectURL(file));
  //   setFormData({
  //     ...formData,
  //     imgurls: fileUrls,
  //   });
  // };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    const fromData = new FormData();
    const fileUrls = files.map((img, i) => fromData.append(`img-${i}`, img));
    console.log(fileUrls);
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
    try {
      e.preventDefault();

<<<<<<< HEAD
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
=======
      // Parse and merge make_years
      const makeYearsArray = formData.make_years
        ? formData.make_years.split(", " || "," || " ,").map((item) => {
            const [model, years] = item.split(":");
            return { model, years: years ? [years] : [] };
          })
        : [];

      // Parse and merge supported_vehicle_models
      const vehicleModelsArray = formData.supported_vehicle_models
        ? formData.supported_vehicle_models
            .split(", " || "," || " ,")
            .reduce((acc, item) => {
              const [make, models] = item.split(":");
              
              const modelArray = models
                ? models.split(", " || "," || " ,")
                : [];
              if (acc[make]) {
                acc[make] = [...new Set([...acc[make], ...modelArray])];
              } else {
                acc[make] = modelArray;
              }
             
              return acc;
            }, {})
        : {};

      const processedData = {
        ...formData,
        make_years: makeYearsArray,
        supported_vehicle_makes: formData.supported_vehicle_makes
          ? formData.supported_vehicle_makes.split(", " || "," || " ,")
          : [],
        supported_vehicle_models: Object.keys(vehicleModelsArray).map(
          (make) => ({
            make,
            models: vehicleModelsArray[make],
          })
        ),
      };

      console.log(processedData);
      // Add your form submission logic here
    } catch (error) {
      console.log(error.message);
    }
>>>>>>> 3dedb7fedf2a404bedefa870727928f52580da2d
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
<<<<<<< HEAD
          handleVehicleModelsChange,
          handleMakeYearsChange,
          handleSupportedVehicleMakesChange,
=======
>>>>>>> 3dedb7fedf2a404bedefa870727928f52580da2d
        }}
      />
    </div>
  );
};

export default AddANewBattery;
