import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";

const AddALocation = () => {
  const [formData, setFormData] = useState({
    location_title: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      location_title: "",
      location: "",
      phone_numbers: "",
      email: "",
    });
    console.log(formData);
  };


  const GLOBAL_LOCATION_API_URL = `${
    import.meta.env.VITE_BASE_URL
  }/contact/global-locations`;

  fetch(GLOBAL_LOCATION_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  
  .then((res) => {
    if (!res.ok) {
      throw new Error();
    }
    return res.json();
  })


  return (
    <div>
        <div>
            <h1 className="text-primary text-center p-5 text-regular lg:text-large flex justify-center font-bold">Add A Location <FaMapLocationDot  className="mt-2 ml-3"/></h1>
        </div>
      <form
        onSubmit={handleSubmit}
        className="p-6 mx-auto my-auto bg-white rounded shadow-md w-full max-w-5xl "
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
            Location
          </label>
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
          <label className="block text-sm mt-2 text-black">
            Phone Numbers
          </label>
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
          <label className="block text-sm mt-2 text-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm mb-2 bg-white text-black "
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex  px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-blue-700 "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddALocation;
