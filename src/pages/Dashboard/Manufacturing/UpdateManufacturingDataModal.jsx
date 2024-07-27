import { useState, useEffect } from "react";

const UpdateManufacturingDataModal = ({
  dataId,
  onClose,
  onUpdate,
  updatedData,
}) => {
  const [updatedAllManufacturingData, setUpdatedAllManufacturingData] =
    useState(updatedData);
  // const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${dataId}`
      );
      const data = await res.json();
      setFormData(data);
    };
    fetchData();
  }, [dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedAllManufacturingData((prevManufacturing) => ({
      ...prevManufacturing,
      [name]: value,
    }));
  };
  console.log(updatedAllManufacturingData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      await onUpdate(updatedAllManufacturingData);
      onClose(); // Close the modal on successful update
    } catch (error) {
      console.error("Error updating location:", error);
    } finally {
      // setLoading(false);
    }
  };
  const handleImgUrl = (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      imageurl: fileUrls[0],
    });
  };

  return (
    <dialog open className="modal ">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">Update Manufacturing Data</h3>
   
        <form key={updatedAllManufacturingData.id} onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label className="block">Title</label>
              <input
                type="text"
                name="title"
                value={updatedAllManufacturingData.title || ""}
                onChange={handleChange}
                className="input w-full bg-white text-black border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Location</label>
              <input
                type="text"
                name="location"
                value={updatedAllManufacturingData.location || ""}
                onChange={handleChange}
                className="input w-full bg-white text-black border-black"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">Description</label>
              <textarea
                name="description"
                value={updatedAllManufacturingData.description || ""}
                onChange={handleChange}
                className="textarea w-full bg-white text-black border-black"
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
                // value={updatedAllManufacturingData.imageurl || ""}
                onChange={handleImgUrl}
                className="file-input w-full max-w-xs input-sm rounded-sm bg-white text-black max-h-10 "
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn btn-xs bg-teal-500 text-white btn-ghost border-0 hover:bg-teal-700 "
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-xs bg-red-600 text-white border-0 btn-ghost hover:bg-red-700  "
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
      </div>
    </dialog>
  );
};

export default UpdateManufacturingDataModal;
