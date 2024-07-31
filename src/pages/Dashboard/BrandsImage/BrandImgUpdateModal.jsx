import { useState, useEffect } from "react";
import axios from "axios";

const BrandUpdateModal = ({ dataId, onClose, onUpdate, updatedData }) => {
  const [updateBrandData, setUpdateBrandData] = useState(updatedData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/brands/${dataId}`);
        setUpdateBrandData(res.data);
      } catch (error) {
        console.error("Error fetching brand data:", error);
      }
    };
    fetchData();
  }, [dataId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateBrandData((prevBrandData) => ({
      ...prevBrandData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(updateBrandData);
      onClose(); // Close the modal on successful update
    } catch (error) {
      console.error("Error updating Brand:", error);
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">Update Brand</h3>

        <form key={updateBrandData.id} onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block">Brand Code</label>
            <input
              type="text"
              name="brand_code"
              value={updateBrandData.brand_code || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Image URL</label>
            <input
              type="text"
              name="imageurl"
              value={updateBrandData.imageurl || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-xs bg-teal-500 text-white btn-ghost border-0 hover:bg-teal-700"
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-xs bg-red-600 text-white border-0 btn-ghost hover:bg-red-700"
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

export default BrandUpdateModal;
