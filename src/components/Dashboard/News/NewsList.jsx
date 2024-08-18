import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import NewsUpdateModal from "./NewsUpdateModal";
import { TiEdit } from "react-icons/ti";
import Cookies from "js-cookie";

const NewsList = ({ prompts }) => {
  const { allNews, refetch } = prompts;

  const [selectedId, setSelectedId] = useState();
  const [readMore, setReadMore] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

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
      const body = allNews.find((item) => item.id === selectedId);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/news/${id}`,
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
        toast.success("Successfully deleted!");
      }
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Please try again!");
    }
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allNews.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allNews.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>Serial</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Publish Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((news, i) => (
            <tr key={news?.id}>
              <th>{indexOfFirstItem + i + 1}</th>
              <td>{news?.title}</td>
              <td className="w-96">
                {selectedId === news?.id && readMore
                  ? news?.description
                  : news?.description.slice(0, 100)}{" "}
                {selectedId === news?.id && readMore ? (
                  <span
                    className="text-blue-500 hover:cursor-pointer"
                    onClick={() => {
                      setSelectedId(news?.id);
                      setReadMore(false);
                    }}
                  >
                    collapse
                  </span>
                ) : (
                  <span
                    className="text-blue-500 hover:cursor-pointer"
                    onClick={() => {
                      setSelectedId(news?.id);
                      setReadMore(true);
                    }}
                  >
                    read more
                  </span>
                )}
              </td>
              <td>
                <img src={news?.image_url} alt="" className="w-48" />
              </td>
              <td>{news?.publish_date}</td>
              <td>
                <button
                  title="Update News"
                  className="btn btn-xs bg-white hover:text-white border-none hover:bg-green-500 "
                  onClick={() => {
                    document.getElementById("my_modal_2").open = true;
                    setSelectedId(news?.id);
                  }}
                >
                  <TiEdit className="text-regular text-primary " />
                </button>
                <NewsUpdateModal
                  updateModalProps={{ allNews, selectedId, refetch }}
                />
              </td>
              <td>
                <button
                  className="btn btn-xs bg-red-500 border-none text-white hover:bg-red-700 hover:text-white"
                  onClick={() => openDeleteModal(news?.id)}
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
            <h2 className="text-lg">Do you want to remove this news?</h2>
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

export default NewsList;
