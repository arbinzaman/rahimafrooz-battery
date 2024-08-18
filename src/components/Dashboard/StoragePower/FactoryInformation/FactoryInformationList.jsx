import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";
import UpdateFactoryInformationModal from "./UpdateFactoryInformationModal";
import Cookies from "js-cookie";

const FactoryInformationList = ({ prompts }) => {
  const { allFactoryInformations, setIsLoading, refetch } = prompts;

  const [selectedId, setSelectedId] = useState();
  const [readMore, setReadMore] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const body = allFactoryInformations.find((details) => details.id === id);
      const res = await axios.delete(
        `${
          import.meta.env.VITE_BASE_URL
        }/storage-power/factory-informations/${id}`,
        {
          data: body,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        setDeleteModalOpen(false);
        setSelectedId(null);
        refetch();
        setIsLoading(false);
        toast.success("Record deleted successfully");
      }
    } catch (error) {
      setIsLoading(false);
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

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allFactoryInformations.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allFactoryInformations.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="overflow-x-auto">
        {allFactoryInformations === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Factory Title</th>
                <th>Description</th>
                <th>Corner Text</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((details, i) => (
                <tr key={details.id}>
                  <th>{indexOfFirstItem + i + 1}</th>
                  <td>{details.factory_title}</td>
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
                  <td>{details.corner_text}</td>
                  <td>
                    <img src={details.image_url} alt="" className="w-96" />
                  </td>

                  <td>
                    <button
                      className="text-xl"
                      onClick={() => {
                        setSelectedId(details.id);
                        document.getElementById(
                          "update_factory_info_modal"
                        ).open = true;
                      }}
                    >
                      <FaEdit />
                    </button>
                    <UpdateFactoryInformationModal
                      updateModalProps={{
                        selectedId,
                        allFactoryInformations,
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
      {totalPages > 1 && (
        <div className="flex justify-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn btn-xs mx-1 ${
                currentPage === index + 1 ? "btn-active" : ""
              }`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">
              You want to remove this Factory Information?
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

export default FactoryInformationList;
