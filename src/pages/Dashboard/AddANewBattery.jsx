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
    terminal_layout: [],
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
    make_years: "",
    supported_vehicle_makes: "",
    supported_vehicle_models: "",
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

  const handleTerminalLayoutChange = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      terminal_layout: fileUrls,
    });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

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
        }}
      />
    </div>
  );
};

export default AddANewBattery;
