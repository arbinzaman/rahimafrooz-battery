import Select from "react-select";

const AddANewBatteryForm = ({ prompts }) => {
  const {
    showVehicleFields,
    categories,
    handleSubmit,
    handleTerminalLayoutChange,
    technologyOptions,
    handleTechnologyChange,
    formData,
    handleChange,
    handleFileChange,
    handleCategoryChange,
  } = prompts;

  return (
    <div>
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
              type="file"
              multiple
              onChange={handleTerminalLayoutChange}
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
                <Select
                  name="technology"
                  options={technologyOptions}
                  className="basic-single"
                  classNamePrefix="select"
                  onChange={handleTechnologyChange}
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
          <button type="submit" className="btn btn-primary bg-tableBackground2 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddANewBatteryForm;
