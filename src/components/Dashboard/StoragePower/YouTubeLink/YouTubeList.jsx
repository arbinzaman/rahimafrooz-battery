import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../../components/shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";
import UpdateVideoUrlModal from "./UpdateVideoUrlModal";
import { useState } from "react";

const YouTubeList = ({ prompts }) => {
  const { allYoutubeLinks, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/storage-power/youtube-video/${id}`
      );

      if (res.status === 200) {
        toast.success("Record deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error("Something error occurred!");
    }
  };

  const openModal = (id) => {
    setSelectedId(id);
    document.getElementById("update_videoURL").open = true;
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

export default YouTubeList;
