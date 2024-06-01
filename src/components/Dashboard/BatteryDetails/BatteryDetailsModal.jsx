const BatteryDetailsModal = ({ Vehicle }) => {
  const {
    id,
    short_code,
    technology,
    supported_vehicle_makes,
    supported_vehicle_models,
    make_years,
    applications,
    brand,
    series,
    itemcode,
    model,
    productdimensions_lxbxh_mm,
    voltage,
    ref_amperehour_ah,
    coldcrankingability_cca,
    totalwarranty,
    freewarranty,
    proratawarranty,
    terminallayout,
    exchangeableformatcompatiblewith,
    countryoforigin,
  } = Vehicle;

  return (
    <div className="modal-box">
      <h2 className="text-lg font-bold">Battery Details</h2>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Short Code:</strong> {short_code}
      </p>
      <p>
        <strong>Technology:</strong> {technology}
      </p>
      <p>
        <strong>Supported Vehicle Makes:</strong>{" "}
        {supported_vehicle_makes.join(", ")}
      </p>
      <p>
        <strong>Supported Vehicle Models:</strong>
        {supported_vehicle_models.map((makeModel, index) => (
          <div key={index}>
            <strong>{makeModel.make}:</strong> {makeModel.models.join(", ")}
          </div>
        ))}
      </p>
      <p>
        <strong>Make Years:</strong>
        {make_years.map((makeYear, idx) => (
          <div key={idx}>
            <strong>{makeYear.model}:</strong> {makeYear.years.join(", ")}
          </div>
        ))}
      </p>
      <p>
        <strong>Applications:</strong> {applications.join(", ")}
      </p>
      <p>
        <strong>Brand:</strong> {brand}
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
        {productdimensions_lxbxh_mm}
      </p>
      <p>
        <strong>Voltage:</strong> {voltage}
      </p>
      <p>
        <strong>Reference Ampere Hour (Ah):</strong> {ref_amperehour_ah}
      </p>
      <p>
        <strong>Cold Cranking Ability (CCA):</strong> {coldcrankingability_cca}
      </p>
      <p>
        <strong>Total Warranty:</strong> {totalwarranty} months
      </p>
      <p>
        <strong>Free Warranty:</strong> {freewarranty} months
      </p>
      <p>
        <strong>Pro-Rata Warranty:</strong> {proratawarranty} months
      </p>
      <p>
        <strong>Terminal Layout:</strong>{" "}
        {terminallayout ? terminallayout : "N/A"}
      </p>
      <p>
        <strong>Exchangeable Format Compatible With:</strong>{" "}
        {exchangeableformatcompatiblewith}
      </p>
      <p>
        <strong>Country of Origin:</strong> {countryoforigin}
      </p>
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn">Close</button>
        </form>
      </div>
    </div>
  );
};

export default BatteryDetailsModal;
