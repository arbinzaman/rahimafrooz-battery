import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../../components/shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";
import UpdateVideoUrlModal from "./UpdateVideoUrlModal";
import { useState } from "react";
import Cookies from "js-cookie";

const YouTubeList = ({ prompts }) => {
  const { allYoutubeLinks, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/storage-power/youtube-video/${id}`,
        {
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

  const openModal = (id) => {
    setSelectedId(id);
    document.getElementById("update_videoURL").open = true;
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {allYoutubeLinks === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th className="text-center">Video & URL</th>
              </tr>
            </thead>
            <tbody>
              {allYoutubeLinks.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>

                  <td className="flex flex-col items-center">
                    <iframe width="" height="" src={details.video_url}></iframe>
                    <p className="my-2">{details.video_url}</p>
                  </td>
                  <td>
                    <button
                      className="text-xl"
                      onClick={() => openModal(details.id)}
                    >
                      <FaEdit />
                    </button>
                    <UpdateVideoUrlModal
                      props={{
                        allYoutubeLinks,
                        selectedId,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-600 hover:bg-red-400"
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
      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">You want to remove this video url?</h2>
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

export default YouTubeList;
