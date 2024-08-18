import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import UpdateManufacturingLocationsModal from "./UpdateManufacturingLocationsModal";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";
import Cookies from "js-cookie";

const ManufacturingLocationsList = ({ manufacturingProps }) => {
  const { manufacturingDetails, refetch } = manufacturingProps;

  const [selectedId, setSelectedId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4); // Number of items per page

  const handleDelete = async (id) => {
    try {
      const body = manufacturingDetails.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
        {
          data: body,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        setDeleteModalOpen(false);
        refetch();
        toast.success("Record deleted successfully");
      }
    } catch (error) {
      toast.error("Something error occurred!");
    }
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  // Pagination calculations
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = manufacturingDetails?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentData && currentData.map((details, i) => (
                <tr key={details.id}>
                  <th>{indexOfFirstData + i + 1}</th>
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
                    <img src={details.imageurl} alt="" className="w-[384px]" />
                  </td>
                  <td title="Edit">
                    <button
                      className=""
                      onClick={() => {
                        document.getElementById("my_modal_3").open = true;
                        setSelectedId(details.id);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <UpdateManufacturingLocationsModal
                      updateModalProps={{
                        selectedId,
                        manufacturingDetails,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => openDeleteModal(details.id)}
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
      {/* Pagination */}
      {manufacturingDetails && manufacturingDetails.length > dataPerPage && (
        <div className="flex justify-center mt-4">
          <div className="join">
            {[
              ...Array(Math.ceil(manufacturingDetails.length / dataPerPage)).keys(),
            ].map((number) => (
              <input
                key={number}
                className="join-item btn btn-ghost btn-sm bg-primary text-white border-white active:bg-gray-400 checked:bg-gray-400"
                type="radio"
                name="options"
                aria-label={number + 1}
                checked={currentPage === number + 1}
                onChange={() => paginate(number + 1)}
              />
            ))}
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">
              You want to remove this manufacturing location?
            </h2>
            <div className="modal-action">
              <button
                className="btn bg-red-500 text-white border-0 btn-ghost  btn-xs hover:bg-red-700 hover:text-white"
                onClick={() => handleDelete(selectedId)}
              >
                Yes, Remove
              </button>
              <button
                className="btn  text-red-500 border-0  btn-ghost  btn-xs bg-gray-200"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManufacturingLocationsList;
