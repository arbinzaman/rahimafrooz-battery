import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import UpdateSpecialAwardSection from "./UpdateSpecialAwardSection";
import Cookies from "js-cookie";

const SpecialAwardAndAchievementList = ({ prompts }) => {
  const { achievementList, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
      const body = achievementList.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/achievements/${id}`,
        {
          data: body,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        closeDeleteModal()
        refetch();
        toast.success("Record deleted successfully");
      }
    } catch (error) {
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {achievementList === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {achievementList.map((achievement, i) => (
                <tr key={achievement.id}>
                  <th>{i + 1}</th>
                  <td>{achievement.description}</td>
                  <td>
                    <img
                      src={achievement.img_url}
                      alt='Achievement image'
                      className="w-96"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-teal-400"
                      onClick={() => {
                        setSelectedId(achievement.id);
                        document.getElementById(
                          "specialAwardAndAchievementUpdateModal"
                        ).open = true;
                      }}
                    >
                      <FaEdit className="text-white" />
                    </button>
                    <UpdateSpecialAwardSection
                      props={{ selectedId, achievementList, refetch }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => openDeleteModal(achievement.id)}
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
            <h2 className="text-lg ">
              Do you want to remove this Achievement?
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

export default SpecialAwardAndAchievementList;
