import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import axios from "axios";
import toast from "react-hot-toast";
import UpdateBannerImg from "./UpdateBannerImg";
import { useState } from "react";
import Cookies from "js-cookie";
import { TiEdit } from "react-icons/ti";

const BannerImageList = ({ prompts }) => {
  const { bannerImages, refetch } = prompts;
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
      const body = bannerImages.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/banner-images/${id}`,
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
  const currentItems =
    Array.isArray(bannerImages) &&
    bannerImages.slice(indexOfFirstItem, indexOfLastItem);
  // const totalPages = Math.ceil(bannerImages.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th>Serial</th>
              <th>Brand</th>
              <th>Image <small className="text-gray-500">(Click on the images to see)</small></th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(currentItems) &&
              currentItems?.map((details, i) => (
                <tr key={details.id}>
                  <th>{indexOfFirstItem + i + 1}</th>
                  <td>{details.page_name}</td>
                  <td className="flex gap-2">
                    {details.img_url.map((src, i) => (
                      <a
                        key={i}
                        href={src}
                        target="_blank"
                        title="Click to see the image"
                      >
                        <img
                          src={src}
                          alt={`${details.page_name} image`}
                          className="w-20"
                        />
                      </a>
                    ))}
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
                        bannerImages,
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
      </div>

      {/* Pagination Controls */}
      {bannerImages && bannerImages.length > itemsPerPage && (
        <div className="flex justify-center mt-4">
          <div className="join">
            {[
              ...Array(Math.ceil(bannerImages.length / itemsPerPage)).keys(),
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
              Do you want to remove this banner image?
            </h2>
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
