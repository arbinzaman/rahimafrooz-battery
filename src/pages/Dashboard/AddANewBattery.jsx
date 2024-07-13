import { useState } from "react";
import Select from "react-select";

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
    const fileUrls = files.map((img,i) => fromData.append(`img-${i}`, img));
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse and merge make_years
    const makeYearsArray = formData.make_years
      ? formData.make_years.split(",").map((item) => {
          const [model, years] = item.split(":");
          return { model, years: years ? [years] : [] };
        })
      : [];

    // Parse and merge supported_vehicle_models
    const vehicleModelsArray = formData.supported_vehicle_models
      ? formData.supported_vehicle_models.split(",").reduce((acc, item) => {
          const [make, models] = item.split(":");
          const modelArray = models ? models.split(",") : [];
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
        ? formData.supported_vehicle_makes.split(",")
        : [],
      supported_vehicle_models: Object.keys(vehicleModelsArray).map((make) => ({
        make,
        models: vehicleModelsArray[make],
      })),
    };

    console.log(processedData);
    // Add your form submission logic here
  };

  const showVehicleFields =
    formData.applicable_categories.includes("Passenger Car") ||
    formData.applicable_categories.includes("Commercial Vehicle");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-full max-w-5xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Battery Form
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Battery Name:</label>
            <input
              type="text"
              name="battery_name"
              value={formData.battery_name}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Short Code:</label>
            <input
              type="text"
              name="short_code"
              value={formData.short_code}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Brand Code:</label>
            <input
              type="text"
              name="brand_code"
              value={formData.brand_code}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Item Code:</label>
            <input
              type="text"
              name="item_code"
              value={formData.item_code}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Model:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Series:</label>
            <input
              type="text"
              name="series"
              value={formData.series}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Voltage:</label>
            <input
              type="number"
              name="voltage"
              value={formData.voltage}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Free Warranty:</label>
            <input
              type="number"
              name="free_warranty"
              value={formData.free_warranty}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Total Warranty:</label>
            <input
              type="number"
              name="total_warranty"
              value={formData.total_warranty}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Terminal Layout:</label>
            <input
              type="text"
              name="terminal_layout"
              value={formData.terminal_layout}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country of Origin:</label>
            <input
              type="text"
              name="country_of_origin"
              value={formData.country_of_origin}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Pro Rata Warranty:</label>
            <input
              type="number"
              name="pro_rata_warranty"
              value={formData.pro_rata_warranty}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ref Amperehour (Ah):</label>
            <input
              type="number"
              name="ref_amperehour_ah"
              value={formData.ref_amperehour_ah}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Cold Cranking Ability (CCA):
            </label>
            <input
              type="number"
              name="cold_cranking_ability_cca"
              value={formData.cold_cranking_ability_cca}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Product Dimensions (LxBxH mm):
            </label>
            <input
              type="text"
              name="product_dimensions_lxbxh_mm"
              value={formData.product_dimensions_lxbxh_mm}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Exchangeable Format Compatible With:
            </label>
            <input
              type="text"
              name="exchangeable_format_compatible_with"
              value={formData.exchangeable_format_compatible_with}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Picture URLs:</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="input input-bordered w-full bg-gray-200 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Applicable Categories (comma separated):
            </label>
            <Select
              isMulti
              name="applicable_categories"
              options={categories}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleCategoryChange}
            />
          </div>
          {showVehicleFields && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700">Technology:</label>
                <input
                  type="text"
                  name="technology"
                  value={formData.technology}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-200 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Make Years (comma separated, format model:years):
                </label>
                <input
                  type="text"
                  name="make_years"
                  value={formData.make_years}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-200 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Supported Vehicle Brands (comma separated):
                </label>
                <input
                  type="text"
                  name="supported_vehicle_makes"
                  value={formData.supported_vehicle_makes}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-200 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Supported Vehicle Models (format make:models, models comma
                  separated):
                </label>
                <input
                  type="text"
                  name="supported_vehicle_models"
                  value={formData.supported_vehicle_models}
                  onChange={handleChange}
                  className="input input-bordered w-full bg-gray-200 text-black"
                />
              </div>
            </>
          )}
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddANewBattery;
