import Select from "react-select";

const AddANewBatteryForm = ({ prompts }) => {
  const {
    showVehicleFields,
    categories,
    handleSubmit,
    handleTerminalLayoutChange,
    handleVehicleModelsChange,
    handleMakeYearsChange,
    handleSupportedVehicleMakesChange,
    formData,
    handleChange,
    handleFileChange,
    handleCategoryChange,
    technologyOptions,
    handleTechnologyChange,
  } = prompts;

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow-md w-full max-w-5xl "
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
              value={formData.battery_name}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Short Code:
            </label>
            <input
              type="text"
              name="short_code"
              value={formData.short_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Brand Code:
            </label>
            <input
              type="text"
              name="brand_code"
              value={formData.brand_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Item Code:
            </label>
            <input
              type="text"
              name="item_code"
              value={formData.item_code}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Model:
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Series:
            </label>
            <input
              type="text"
              name="series"
              value={formData.series}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Voltage:
            </label>
            <input
              type="number"
              name="voltage"
              value={formData.voltage}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Free Warranty:
            </label>
            <input
              type="number"
              name="free_warranty"
              value={formData.free_warranty}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Total Warranty:
            </label>
            <input
              type="number"
              name="total_warranty"
              value={formData.total_warranty}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Pro Rata Warranty:
            </label>
            <input
              type="number"
              name="pro_rata_warranty"
              value={formData.pro_rata_warranty}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Country of Origin:
            </label>
            <input
              type="text"
              name="country_of_origin"
              value={formData.country_of_origin}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>

          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Terminal Layout:
            </label>
            <input
              type="file"
              name="terminal_layout"
              onChange={handleTerminalLayoutChange}
              className="file-input w-full max-w-xs input-sm rounded-sm bg-white text-black max-h-10 "
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Ref Amperehour (AH):
            </label>
            <input
              type="number"
              name="ref_amperehour_ah"
              value={formData.ref_amperehour_ah}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Cold Cranking Ability (CCA):
            </label>
            <input
              type="number"
              name="cold_cranking_ability_cca"
              value={formData.cold_cranking_ability_cca}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Product Dimensions (L x B x H) mm:
            </label>
            <input
              type="text"
              name="product_dimensions_lxbxh_mm"
              value={formData.product_dimensions_lxbxh_mm}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Exchangeable Format Compatible With:
            </label>
            <input
              type="text"
              name="exchangeable_format_compatible_with"
              value={formData.exchangeable_format_compatible_with}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-small text-gray-800 pb-1">
              Price:
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white"
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
              className="file-input w-full input-sm rounded-sm max-w-xs bg-white text-black max-h-10 "
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
                formData.applicable_categories.includes(option.value)
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
                (option) => option.value === formData.technology
              )}
              onChange={handleTechnologyChange}
              className="basic-select bg-gray-200 text-black text-small"
              classNamePrefix="select"
            />
          </div>

          {showVehicleFields && (
            <>
              <div>
                <label className="text-black">Supported Vehicle Makes</label>
                <input
                  type="text"
                  name="supported_vehicle_makes"
                  value={formData.supported_vehicle_makes?.join(", ")}
                  onChange={handleSupportedVehicleMakesChange}
                  className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white mb-5"
                  placeholder="eg. Toyota, Comma Separated"
                />
              </div>

              {formData.supported_vehicle_makes &&
                formData.supported_vehicle_makes.map((make) => (
                  <div key={make}>
                    <label className="text-black">
                      Vehicle Models for {make}
                    </label>
                    <input
                      type="text"
                      value={
                        formData.supported_vehicle_models[make]?.join(", ") ||
                        ""
                      }
                      className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white mb-5"
                      placeholder="eg. Corolla, Comma Separated"
                      onChange={(e) =>
                        handleVehicleModelsChange(make, e.target.value)
                      }
                    />

                    {formData.supported_vehicle_models[make] &&
                      formData.supported_vehicle_models[make].map((model) => (
                        <div key={model}>
                          <label className="text-black">
                            Years for {model}
                          </label>
                          <input
                            type="text"
                            value={
                              formData.make_years_models[make]?.[model] || ""
                            }
                            className="input input-bordered input-sm rounded-sm w-full bg-gray-00 text-black bg-white mb-5"
                            placeholder="eg. 2010-2015, Comma Separated"
                            onChange={(e) =>
                              handleMakeYearsChange(make, model, e.target.value)
                            }
                          />
                        </div>
                      ))}
                  </div>
                ))}
            </>
          )}
        </div>
        <button
          type="submit"
          className="btn bg-tableBackground2 border-0 text-white w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddANewBatteryForm;
