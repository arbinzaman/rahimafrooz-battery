import { useState } from 'react';
import Loader from '../../../components/shared/Loaders/Loader';

const LocationUpdateModal = ({ location, onClose, onUpdate }) => {
  const [updatedLocation, setUpdatedLocation] = useState(location);
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onUpdate(updatedLocation);
      onClose(); // Close the modal on successful update
    } catch (error) {
      console.error('Error updating location:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="updateLocationModal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-white p-4">
        <h2 className="text-xl font-bold mb-4">Update Location</h2>
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Loader /> {/* Display loader while updating */}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-gray-700">Location Title</span>
              <input
                type="text"
                name="location_title"
                value={updatedLocation.location_title || ''}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Location</span>
              <input
                type="text"
                name="location"
                value={updatedLocation.location || ''}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Phone Numbers</span>
              <input
                type="text"
                name="phone_numbers"
                value={updatedLocation.phone_numbers || ''}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={updatedLocation.email || ''}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>
            <div className="flex gap-4 justify-end mt-4">
              <button
                type="submit"
                className="btn bg-green-500 text-white border-none text-xs hover:bg-emerald-300 btn-xs"
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-ghost bg-gray-100 hover:bg-red-600 text-black hover:text-white btn-xs"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
};

export default LocationUpdateModal;
