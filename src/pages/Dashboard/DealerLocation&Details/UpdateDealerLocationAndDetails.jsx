import  { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const UpdateDealerLocationAndDetails = ({ onClose, onUpdate, initialData }) => {
  const [formData, setFormData] = useState(initialData);

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

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
      await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/dealers/${initialData.id}`,
        formData
      );
      toast.success("Dealer details updated successfully!");
      onUpdate(formData);
      onClose();
    } catch (error) {
      toast.error("Error updating dealer details.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Update Dealer Location and Details</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium">{key.replace("_", " ")}</label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder={`Enter ${key.replace("_", " ")}`}
              />
            </div>
          ))}
          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDealerLocationAndDetails;
