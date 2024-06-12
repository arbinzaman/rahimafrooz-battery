const ProductDetailsSection = ({ battery }) => {
  const {
    brand_code,
    series,
    item_code,
    model,
    cold_cranking_ability_cca,
    total_warranty,
    ref_amperehour_ah,
    voltage,
    country_of_origin,
  } = battery;
  
  return (
    <div>
      <div className="divide-y  text-black">
        <div className="md:space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 ">
          <h3 className="md:col-span-5">Brand</h3>
          <p className="md:pl-0 md:col-span-7">{brand_code}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Series</h3>
          <p className="md:pl-0 md:col-span-7">{series}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Item Code</h3>
          <p className="md:pl-0 md:col-span-7">{item_code}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Model</h3>
          <p className="md:pl-0 md:col-span-7">{model}</p>
        </div>
        <div className="space-y-2 md:grid-cols-12 md:gap-8  md:space-y-0">
          <h3 className="md:col-span-5 text-medium font-bold lg:font-normal lg:text-regular">
            Product Dimensions
          </h3>
          <p className="md:pl-0 md:col-span-7"></p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Voltage (V)</h3>
          <p className="md:pl-0 md:col-span-7">{voltage}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Ref. Amphere Hour (AH)</h3>
          <p className="md:pl-0 md:col-span-7">{ref_amperehour_ah}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Cold Cranking Ability (CCA)</h3>
          <p className="md:pl-0 md:col-span-7">{cold_cranking_ability_cca}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2  md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Total Warranty (Months)</h3>
          <p className="md:pl-0 md:col-span-7">{total_warranty}</p>
        </div>
        <div className="space-y-2 grid grid-cols-2 md:grid-cols-12  md:gap-8 md:space-y-0">
          <h3 className="md:col-span-5">Country Origin</h3>
          <p className="md:pl-0 md:col-span-7">{country_of_origin}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
