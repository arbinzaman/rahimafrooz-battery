import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import UpdateManufacturingLocationsModal from "./UpdateManufacturingLocationsModal";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";

const ManufacturingLocationsList = ({ manufacturingProps }) => {
  const [selectedId, setSelectedId] = useState();
  const [readMore, setReadMore] = useState(false);
  const { manufacturingDetails, setIsLoading, refetch } = manufacturingProps;

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const body = manufacturingDetails.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
        { data: body }
      );

      if (res.status === 200) {
        toast.success("Record deleted successfully");
        refetch();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      // console.log(error);
      toast.error("Something error occurred!");
    }
  };
  // console.log(manufacturingDetails);
  return (
    <div>
      <div className="overflow-x-auto">
        {manufacturingDetails === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Title</th>
                <th>Location/Type</th>
                <th>Description</th>
                <th>Image</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {manufacturingDetails.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>
                  <td>{details.title}</td>
                  <td>{details.location}</td>
                  <td>
                    {selectedId === details.id && readMore
                      ? details.description
                      : details.description.slice(0, 100)}{" "}
                    {selectedId === details.id && readMore ? (
                      <span
                        className="text-blue-500 hover:cursor-pointer"
                        onClick={() => {
                          setSelectedId(details.id);
                          setReadMore(false);
                        }}
                      >
                        collapse
                      </span>
                    ) : (
                      <span
                        className="text-blue-500 hover:cursor-pointer"
                        onClick={() => {
                          setSelectedId(details.id);
                          setReadMore(true);
                        }}
                      >
                        read more
                      </span>
                    )}
                  </td>
                  <td>
                    <img src={details.imageurl} alt="" className="w-96" />
                  </td>
                  <td title="Edit">
                    <button
                      className=""
                      onClick={() => {
                        {
                          document.getElementById("my_modal_3").showModal();
                          setSelectedId(details.id);
                        }
                      }}
                    >
                      <FaEdit />
                    </button>
                    <UpdateManufacturingLocationsModal
                      updateModalProps={{
                        selectedId,
                        manufacturingDetails,
                        setIsLoading,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => handleDelete(details.id)}
                    >
                      <MdDeleteForever className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManufacturingLocationsList;
