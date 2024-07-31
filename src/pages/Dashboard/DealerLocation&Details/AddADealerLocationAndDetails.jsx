/* eslint-disable no-unused-vars */
import  { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddADealerLocationAndDetails = () => {
  const [formData, setFormData] = useState({
    shop_name: "",
    address: "",
    proprietor_name: "",
    phone_numbers: "",
    email: "",
    coordinates: "",
    division: "",
    district: "",
    thana: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://rahimafrooz-battery-backend.vercel.app/api/v1/dealer-locations`,
        formData
      );
      toast.success("Dealer location and details added successfully!");
    } catch (error) {
      toast.error("Error adding dealer location and details.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-primary text-center text-medium lg:text-large font-bold uppercase mb-2">
        Add Dealer Location and Details
      </h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="shop_name">
            Shop Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="shop_name"
            type="text"
            name="shop_name"
            value={formData.shop_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="proprietor_name">
            Proprietor Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="proprietor_name"
            type="text"
            name="proprietor_name"
            value={formData.proprietor_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="phone_numbers">
            Phone Numbers
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="phone_numbers"
            type="text"
            name="phone_numbers"
            value={formData.phone_numbers}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="coordinates">
            Google Map Coordinates
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="coordinates"
            type="text"
            name="coordinates"
            value={formData.coordinates}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="division">
            Division
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="division"
            type="text"
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="district">
            District
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="district"
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="thana">
            Thana
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black bg-white"
            id="thana"
            type="text"
            name="thana"
            value={formData.thana}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Dealer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddADealerLocationAndDetails;
