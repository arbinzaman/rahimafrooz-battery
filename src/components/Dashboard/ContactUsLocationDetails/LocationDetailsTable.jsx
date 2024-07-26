import { useState } from "react";
import Loader from "../../../components/shared/Loaders/Loader";

const LocationUpdateModal = ({ location, onClose, onUpdate }) => {
  const [updatedLocation, setUpdatedLocation] = useState(location);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${
          updatedLocation.id
        }`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedLocation),
        }
      );

      if (!res.ok) throw new Error("Failed to update location");

      await res.json();
      onUpdate(updatedLocation); // Notify parent component of the update
      onClose(); // Close the modal on successful update
    } catch (error) {
      console.error("Error updating location:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog
      id="updateLocationModal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box bg-white p-4">
        <h2 className="text-xl font-bold mb-4">Update Location</h2>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Loader />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Location Title</span>
              <input
                type="text"
                name="location_title"
                value={updatedLocation?.location_title || ""}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Location</span>
              <input
                type="text"
                name="location"
                value={updatedLocation?.location || ""}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Phone Numbers</span>
              <input
                type="text"
                name="phone_numbers"
                value={updatedLocation?.phone_numbers || ""}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={updatedLocation?.email || ""}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </label>
            <div className="flex gap-4 justify-end mt-4">
              <button
                type="button"
                className="btn btn-ghost bg-gray-100 hover:bg-gray-200"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};

export default LocationUpdateModal;
