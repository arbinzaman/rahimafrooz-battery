import { useState } from 'react';

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
        make_years: [],
        supported_vehicle_makes: [],
        supported_vehicle_models: []
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">Battery Form</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Battery Name:</label>
              <input type="text" name="battery_name" value={formData.battery_name} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Short Code:</label>
              <input type="text" name="short_code" value={formData.short_code} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Brand Code:</label>
              <input type="text" name="brand_code" value={formData.brand_code} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Item Code:</label>
              <input type="text" name="item_code" value={formData.item_code} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Model:</label>
              <input type="text" name="model" value={formData.model} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Series:</label>
              <input type="text" name="series" value={formData.series} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Voltage:</label>
              <input type="number" name="voltage" value={formData.voltage} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Free Warranty:</label>
              <input type="number" name="free_warranty" value={formData.free_warranty} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Total Warranty:</label>
              <input type="number" name="total_warranty" value={formData.total_warranty} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Terminal Layout:</label>
              <input type="text" name="terminal_layout" value={formData.terminal_layout} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Country of Origin:</label>
              <input type="text" name="country_of_origin" value={formData.country_of_origin} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Pro Rata Warranty:</label>
              <input type="number" name="pro_rata_warranty" value={formData.pro_rata_warranty} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Ref Amperehour (Ah):</label>
              <input type="number" name="ref_amperehour_ah" value={formData.ref_amperehour_ah} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Cold Cranking Ability (CCA):</label>
              <input type="number" name="cold_cranking_ability_cca" value={formData.cold_cranking_ability_cca} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Product Dimensions (LxBxH mm):</label>
              <input type="text" name="product_dimensions_lxbxh_mm" value={formData.product_dimensions_lxbxh_mm} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Exchangeable Format Compatible With:</label>
              <input type="text" name="exchangeable_format_compatible_with" value={formData.exchangeable_format_compatible_with} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price:</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image URLs (comma separated):</label>
              <input type="text" name="imgurls" value={formData.imgurls} onChange={(e) => setFormData({ ...formData, imgurls: e.target.value.split(',') })} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Applicable Categories (comma separated):</label>
              <input type="text" name="applicable_categories" value={formData.applicable_categories} onChange={(e) => setFormData({ ...formData, applicable_categories: e.target.value.split(',') })} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Technology:</label>
              <input type="text" name="technology" value={formData.technology} onChange={handleChange} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Make Years (comma separated, format model:years):</label>
              <input type="text" name="make_years" value={formData.make_years} onChange={(e) => setFormData({ ...formData, make_years: e.target.value.split(',').map(item => {
                const [model, years] = item.split(':');
                return { model, years: years.split('-') };
              }) })} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Supported Vehicle Makes (comma separated):</label>
              <input type="text" name="supported_vehicle_makes" value={formData.supported_vehicle_makes} onChange={(e) => setFormData({ ...formData, supported_vehicle_makes: e.target.value.split(',') })} className="input input-bordered w-full bg-gray-100" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Supported Vehicle Models (format make:models, models comma separated):</label>
              <input type="text" name="supported_vehicle_models" value={formData.supported_vehicle_models} onChange={(e) => setFormData({ ...formData, supported_vehicle_models: e.target.value.split(',').map(item => {
                const [make, models] = item.split(':');
                return { make, models: models.split('-') };
              }) })} className="input input-bordered w-full bg-gray-100" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Submit</button>
          </form>
        </div>
      );
    };
export default AddANewBattery;
