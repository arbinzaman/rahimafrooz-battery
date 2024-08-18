import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateBannerImg from "./UpdateBannerImg";
import { useState } from "react";
import Cookies from "js-cookie";
import { TiEdit } from "react-icons/ti";

const BannerImageList = ({ prompts }) => {
  const { BannerImageData, refetch } = prompts;
  const [selectedId, setSelectedId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = async (id) => {
    try {
      const body = BannerImageData.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/brands/${id}`,
        {
          data: body,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        closeDeleteModal();
        refetch();
        toast.success("Record deleted successfully");
      }
    } catch (error) {
      toast.error("Something error occurred!");
    }
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = BannerImageData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(BannerImageData.length / itemsPerPage);

  return (
    <div>
      <div className="overflow-x-auto">
        {BannerImageData === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Brand</th>
                <th>Image</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((details, i) => (
                <tr key={details.id}>
                  <th>{indexOfFirstItem + i + 1}</th>
                  <td>{details.page_name}</td>
                  <td>
                    <img
                      src={details.image_url}
                      alt={`${details.page_name} image`}
                      className="w-52"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs bg-white hover:text-white border-none hover:bg-gray-200"
                      onClick={() => {
                        setSelectedId(details.id);
                        document.getElementById("updateBrand").open = true;
                      }}
                    >
                      <TiEdit className="text-regular text-primary " />
                    </button>
                    <UpdateBannerImg
                      updateModalProps={{
                        selectedId,
                        BannerImageData,
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="btn btn-xs mx-1"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-xs mx-1 ${
              currentPage === index + 1 ? "btn-primary" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-xs mx-1"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">You want to remove this Brand Image?</h2>
            <div className="modal-action">
              <button
                className="btn bg-red-500 text-white border-0 btn-ghost btn-xs hover:bg-red-700 hover:text-white"
                onClick={() => handleDelete(selectedId)}
              >
                Yes, Remove
              </button>
              <button
                className="btn text-red-500 border-0 btn-ghost btn-xs bg-gray-200"
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

export default BannerImageList;
