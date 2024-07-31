import { useState } from "react";
import { MdDeleteOutline, MdEditLocationAlt } from "react-icons/md";
import LocationUpdateModal from "./LocationUpdateModal";
import axios from "axios";
import toast from "react-hot-toast";

const LocationDetailsTable = ({ prompts }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const { allLocationDetails, refetch } = prompts;

  const openUpdateModal = (location) => {
    setSelectedLocation(location);
    setShowUpdateModal(true);
    document.getElementById("updateLocationModal").showModal();
  };

  const handleUpdate = async (updatedLocation) => {
    try {
      // const res = await axios.patch(
      //   `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${
      //     updatedLocation.id
      //   }`,
      //   {
      //     method: "PUT",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(updatedLocation),
      //   }
      // );
      // if (!res.ok) throw new Error("Failed to update location");
      // await res.json();
      setShowUpdateModal(false);
      document.getElementById("updateLocationModal").close();
      // Optionally refetch locations here or update state
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${id}`
      );
      
      if (res.status === 200) {
        toast.success("Successfully deleted!");
        refetch();
      }
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Please try again!");
    }
  };

  return (
    <div className="overflow-x-auto">
      {showUpdateModal && selectedLocation && (
        <LocationUpdateModal
        
          location={selectedLocation}
          onClose={() => {
            setShowUpdateModal(false);
            document.getElementById("updateLocationModal").close();
          }}
          onUpdate={handleUpdate}
        />
      )}
      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>Serial</th>
            <th>Location Title</th>
            <th>Location Name</th>
            <th>Location</th>
            <th>Phone Numbers</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allLocationDetails?.map((location, i) => (
            <tr key={location.id}>
              <th>{i + 1}</th>
              <td>{location.location_title}</td>
              <td>{location.location_name}</td>
              <td>{location.location}</td>
              <td>{location.phone_numbers}</td>
              <td>{location.email}</td>
              <td>
                <button
                  title="Update Location"
                  className="btn btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => openUpdateModal(location)}
                >
                  <MdEditLocationAlt className="text-regular" />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-xs bg-red-500 text-white hover:bg-red-700 hover:text-white"
                  onClick={() => handleDelete(location.id)}
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationDetailsTable;
