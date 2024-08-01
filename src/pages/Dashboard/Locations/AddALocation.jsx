import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AddALocation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location_title: "",
    location_name:"",
    location: "",
    phone_numbers: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const GLOBAL_LOCATION_API_URL = `${
      import.meta.env.VITE_BASE_URL
    }/contact/global-locations`;

    try {
      e.preventDefault();
      const res = await axios.post(GLOBAL_LOCATION_API_URL, formData);

      if(res.status===201){
        toast.success("A new location has been added.")
        setFormData({
          location_title: "",
          location: "",
          location_name:"",
          phone_numbers: "",
          email: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured! Please try again filling all the fields")
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-primary text-center p-5 text-regular lg:text-large flex justify-center font-bold">
          Add A Location <FaMapLocationDot className="mt-2 ml-3" />
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-6 mx-auto my-auto bg-white rounded shadow-md w-2/4 max-w-5xl "
      >
        <div>
          <label className="block text-sm mt-2 text-black">
            Location Title
          </label>
          <input
            type="text"
            name="location_title"
            value={formData.location_title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm mb-2 bg-white text-black "
            required
          />
        </div>
        <div>
          <label className="block text-sm mt-2 text-black">
            Location Name
          </label>
          <input
            type="text"
            name="location_name"
            value={formData.location_name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm mb-2 bg-white text-black "
            required
          />
        </div>
        <div>
          <label className="block text-sm mt-2 text-black">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm mb-2 bg-white text-black "
            required
          />
        </div>
        <div>
          <label className="block text-sm mt-2 text-black">Phone Numbers</label>
          <input
            type="text"
            name="phone_numbers"
            value={formData.phone_numbers}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm mb-2 bg-white text-black "
            required
          />
        </div>
        <div>
          <label className="block text-sm mt-2 text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm mb-2 bg-white text-black "
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            className="btn btn-xs bg-teal-500 text-white border-none hover:bg-teal-700 "
            onClick={() => navigate("/dashboard/all-locations")}
          >
            Back to Locations <FaLocationDot />
          </button>
          <button
            type="submit"
            className=" btn-xs px-4  border border-transparent  font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddALocation;
