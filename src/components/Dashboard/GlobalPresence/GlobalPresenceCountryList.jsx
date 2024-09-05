import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import UpdateGlobalPresenceCountryList from "./UpdateGlobalPresenceCountryList";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const GlobalPresenceCountryList = ({ prompts }) => {
  const { countryList, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/global-presence/${id}`,
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
        {countryList === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Continent</th>
                <th>Countries</th>
                <th>Add Country</th>
              </tr>
            </thead>
            <tbody>
              {countryList.map((continent, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{continent.continent}</td>
                  <td>{continent.countries.join(", ")}</td>
                  <td>
                    <button
                      className="btn btn-xs btn-ghost bg-white text-black hover:bg-green-400 hover:text-white"
                      onClick={() => {
                        document.getElementById(
                          "globalPresenceCountryList"
                        ).open = true;
                        setSelectedId(continent.id);
                      }}
                    >
                      <IoAddCircleOutline />
                    </button>
                    <UpdateGlobalPresenceCountryList
                      updateModalProps={{
                        countryList,
                        selectedId,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => openDeleteModal(continent.id)}
                    >
                      <MdDeleteForever className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* Delete Confirmation Modal */}
        {deleteModalOpen && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white text-red-500">
              <h2 className="text-lg ">You want to remove this continent?</h2>
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
    </div>
  );
};

export default GlobalPresenceCountryList;
