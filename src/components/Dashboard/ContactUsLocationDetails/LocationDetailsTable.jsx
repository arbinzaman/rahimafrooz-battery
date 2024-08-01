import { MdDeleteOutline, MdEditLocationAlt } from "react-icons/md";
import LocationUpdateModal from "./LocationUpdateModal";
import axios from "axios";
import toast from "react-hot-toast";

const LocationDetailsTable = ({ prompts }) => {
  const { allLocationDetails, refetch } = prompts;

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
                <LocationUpdateModal updateModalProps={{ location, refetch }} />
                <button
                  title="Update Global Location"
                  className="btn btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    document.getElementById("my_modal_2").showModal();
                  }}
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
