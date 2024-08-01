import { useState } from "react";
import Loader from "../../../components/shared/Loaders/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const LocationUpdateModal = ({ updateModalProps }) => {
  const { location, refetch } = updateModalProps;
  const [loading, setLoading] = useState(false);
  const [updatedLocation, setUpdatedLocation] = useState(location);

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
      console.log(updatedLocation);
      // const res = await axios.patch(
      //   `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${
      //     updatedLocation.id
      //   }`,
      //   updatedLocation
      // );
      // console.log(res);

      // if (res.status === 201) {
      //   toast.success("Updated Successfully");
      //   refetch();
      // }
      setLoading(false);
    } catch (error) {
      console.error("Error updating location:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-white p-5">
        <div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-xl font-bold mb-4">Update Location</h2>
        </div>
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
                value={updatedLocation.location_title || ""}
                onChange={handleChange}
                className="mt-1 block w-full py-1 px-2 border border-gray-800 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Location Name</span>
              <input
                type="text"
                name="location"
                value={updatedLocation.location_name || ""}
                onChange={handleChange}
                className="mt-1 block w-full py-1 px-2 border border-gray-800 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Location</span>
              <input
                type="text"
                name="location"
                value={updatedLocation.location || ""}
                onChange={handleChange}
                className="mt-1 block w-full py-1 px-2 border border-gray-800 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Phone Numbers</span>
              <input
                type="text"
                name="phone_numbers"
                value={updatedLocation.phone_numbers || ""}
                onChange={handleChange}
                className="mt-1 block w-full py-1 px-2 border border-gray-800 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                value={updatedLocation.email || ""}
                onChange={handleChange}
                className="mt-1 block w-full py-1 px-2 border border-gray-800 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white text-black"
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
            </div>
          </form>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default LocationUpdateModal;
