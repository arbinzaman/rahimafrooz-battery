import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiCertificateFill } from "react-icons/pi";

const AddACertificateData = () => {
  const [formData, setFormData] = useState({
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const currentTimestamp = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  const dataWithTimestamp = {
    ...formData,
    created_at: currentTimestamp,
  };
  //   console.log(dataWithTimestamp);
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
    console.log(dataWithTimestamp);
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/certificates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataWithTimestamp),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      setFormData({
        title: "",
        image_url: "",
      });

      navigate("/dashboard/all-Certificates"); // Redirect after successful submission
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="addCertificate" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="text-primary text-medium font-bold flex gap-2 my-2">
            Add Certificate
          </p>
          <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
        </form>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-6 bg-white  border-gray-300 rounded-md "
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
          <div className="flex justify-between">
            <button
              type="button"
              className="btn btn-xs bg-teal-500 text-white border-none hover:bg-teal-700 "
              onClick={() => navigate("/dashboard/all-Certificates")}
            >
              Back to Certificates <PiCertificateFill className="" />
            </button>
            <button
              type="submit"
              className={`btn ${
                isLoading ? "bg-gray-400" : "bg-green-500"
              } text-white border-none text-xs hover:bg-emerald-300 btn-xs `}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddACertificateData;
