import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAManufacturingData = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImgUrl = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      imageurl: fileUrls[0],
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setFormData({
        title: "",
        location: "",
        description: "",
        imageurl: "",
      });

      navigate("/dashboard/all-manufacturing-data"); // Redirect after successful submission
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Add Manufacturing Data
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white border border-gray-300 rounded-md shadow-md"
      >
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input w-full bg-white text-black border:border-gray-300 rounded-md shadow-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input w-full bg-white text-black border:border-gray-300 rounded-md shadow-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea w-full bg-white text-black border:border-gray-500 rounded-md shadow-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-small text-gray-800 pb-1">
            Upload Image
          </label>
          <input
            type="file"
            name="imageurl"
            onChange={handleImgUrl}
            className="file-input w-full max-w-xs input-sm rounded-sm bg-white text-black max-h-10 "
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`btn ${
              isLoading ? "bg-gray-400" : "bg-green-500"
            } text-white border-none text-xs hover:bg-emerald-300 btn-xs`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAManufacturingData;
