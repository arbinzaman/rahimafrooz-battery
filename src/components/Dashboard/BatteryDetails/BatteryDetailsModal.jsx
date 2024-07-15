import Loader from "../../shared/Loaders/Loader";

const BatteryDetailsModal = ({ prompts }) => {
  const { selectTableDetailsForModal: battery, loading } = prompts;
  const {
    id,
    short_code,
    technology,
    supported_vehicle_makes,
    supported_vehicle_models,
    make_years,
    applicable_categories,
    battery_name,
    series,
    itemcode,
    model,
    product_dimensions_lxbxh_mm,
    voltage,
    ref_amperehour_ah,
    cold_cranking_ability_cca,
    total_warranty,
    free_warranty,
    pro_rata_warranty,
    terminal_layout,
    exchangeable_format_compatible_with,
    country_of_origin,
  } = battery;
  console.log(battery);

  return (
    <div className="modal-box bg-background text-black">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className="text-lg font-bold">Battery Details</h2>
          <p>
            <strong>ID:</strong> {id}
          </p>
          <p>
            <strong>Short Code:</strong> {short_code}
          </p>

          <p>
            <strong>Battery Name:</strong> {battery_name}
          </p>
          <p>
            <strong>Series:</strong> {series}
          </p>
          <p>
            <strong>Item Code:</strong> {itemcode}
          </p>
          <p>
            <strong>Model:</strong> {model}
          </p>
          <p>
            <strong>Product Dimensions (LxBxH):</strong>{" "}
            {product_dimensions_lxbxh_mm}
          </p>
          <p>
            <strong>Voltage:</strong> {voltage}
          </p>
          <p>
            <strong>Reference Ampere Hour (Ah):</strong> {ref_amperehour_ah}
          </p>
          <p>
            <strong>Cold Cranking Ability (CCA):</strong>{" "}
            {cold_cranking_ability_cca}
          </p>
          <p>
            <strong>Total Warranty:</strong> {total_warranty} months
          </p>
          <p>
            <strong>Free Warranty:</strong> {free_warranty} months
          </p>
          <p>
            <strong>Pro-Rata Warranty:</strong> {pro_rata_warranty} months
          </p>
          <p>
            <strong>Terminal Layout:</strong>{" "}
            {terminal_layout ? terminal_layout : "N/A"}
          </p>
          <p>
            <strong>Exchangeable Format Compatible With:</strong>{" "}
            {exchangeable_format_compatible_with}
          </p>
          <p>
            <strong>Country of Origin:</strong> {country_of_origin}
          </p>

          {applicable_categories?.includes(
            "Passenger Car" || "Commercial Vehicle"
          ) && (
            <>
              <p>
                <strong>Technology:</strong> {technology}
              </p>
              <p>
                <strong>Supported Vehicle Makes:</strong>{" "}
                {supported_vehicle_makes?.join(", ")}
              </p>
              <p>
                <strong>Supported Vehicle Models:</strong>
                {supported_vehicle_models?.map((makeModel, index) => (
                  <div key={index}>
                    <strong>{makeModel.make}:</strong>{" "}
                    {makeModel.models?.join(", ")}
                  </div>
                ))}
              </p>
              <p>
                <strong>Make Years:</strong>
                {make_years?.map((makeYear, idx) => (
                  <div key={idx}>
                    <strong>{makeYear.model}:</strong>{" "}
                    {makeYear.years?.join(", ")}
                  </div>
                ))}
              </p>
              <p>
                <strong>Applications:</strong>{" "}
                {applicable_categories?.join(", ")}
              </p>
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-xs bg-sky-400 border-0 text-black hover:bg-red-500 hover:text-white">
                Close
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default BatteryDetailsModal;
