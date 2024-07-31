import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateDealerLocationAndDetails = ({ dataId, onClose, onUpdate, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    shop_name: "",
    address: "",
    proprietor_name: "",
    phone_numbers: "",
    email: "",
  });
  console.log(initialData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/dealers/${dataId}`);
      setFormData(res.data);
    };

    if (dataId) {
      fetchData();
    }
  }, [dataId]);

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
      await axios.patch(`${import.meta.env.VITE_BASE_URL}/dealers/${dataId}`, formData);
      toast.success("Dealer details updated successfully!");
      onUpdate(formData);
      onClose(); // Close the modal on successful update
    } catch (error) {
      toast.error("Error updating dealer details.");
      console.error("Error updating dealer details:", error);
    }
  };

  return (
    <dialog open className="modal">
      <div className="modal-box bg-white text-black">
        <h3 className="font-bold text-lg">Update Dealer Location and Details</h3>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block">Shop Name</label>
            <input
              type="text"
              name="shop_name"
              value={formData.shop_name || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Proprietor Name</label>
            <input
              type="text"
              name="proprietor_name"
              value={formData.proprietor_name || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Phone Numbers</label>
            <input
              type="text"
              name="phone_numbers"
              value={formData.phone_numbers || ""}
              onChange={handleChange}
              className="input w-full bg-white text-black border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
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

export default UpdateDealerLocationAndDetails;
