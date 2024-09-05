const ProductDetailsSection = ({ battery }) => {
  const {
    brand_code,
    material_code,
    new_jis,
    cold_cranking_ability_cca,
    total_warranty,
    capacity,
    voltage,
    country_of_origin,
    product_dimensions_lxbxh_mm,
  } = battery;

  return (
    <div>
      <div className="divide-y  text-black">
        <div className="md:space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center ">
          <h3 className="md:col-span-5">Brand</h3>
          <p className="md:pl-0 md:col-span-7">{brand_code}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">Material Code</h3>
          <p className="md:pl-0 md:col-span-7">{material_code}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">New JIS</h3>
          <p className="md:pl-0 md:col-span-7">{new_jis}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">Product Dimensions</h3>
          <p className="md:pl-0 md:col-span-7">{product_dimensions_lxbxh_mm} mm<sup>3</sup></p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">Voltage (V)</h3>
          <p className="md:pl-0 md:col-span-7">{voltage} v</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">Capacity (AH)</h3>
          <p className="md:pl-0 md:col-span-7">{capacity}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">Cold Cranking Ability (CCA)</h3>
          <p className="md:pl-0 md:col-span-7">{cold_cranking_ability_cca}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2  md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Total Warranty (Months)</h3>
          <p className="md:pl-0 md:col-span-7">{total_warranty}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 items-center md:space-y-0">
          <h3 className="md:col-span-5">Country Origin</h3>
          <p className="md:pl-0 md:col-span-7">{country_of_origin}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
