import { useState } from "react";
import BatteryDetailsModal from "./BatteryDetailsModal";
import { BiDetail } from "react-icons/bi";
import ButtonLoader from "../../shared/Loaders/ButtonLoader";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const BatteryDetailsTable = ({ prompts }) => {
  const { allBatteryDetails, refetch } = prompts;
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState();
  const [selectTableDetailsForModal, setSelectTableDetailsForModal] =
    useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

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
      const body = allBatteryDetails.find((item) => item.id === selectedId);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/batteries/${id}`,
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
        toast.success("Deleted successfully!");
      }
    } catch (error) {
      toast.error("Instruction deletion failed.");
    }
  };

  const handleDetailsModal = async (short_code) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/batteries/${short_code}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch battery details");
      }
      const data = await response.json();
      setSelectTableDetailsForModal(data);
      document.getElementById("batteryDetails").showModal();
    } catch (error) {
      console.error("Error fetching battery details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateClick = (short_code) => {
    navigate(`/dashboard/update-battery/${short_code}`);
  };

  // Pagination logic
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = allBatteryDetails?.slice(
    indexOfFirstData,
    indexOfLastData
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto">
      <dialog
        id="batteryDetails"
        className="modal modal-bottom sm:modal-middle "
      >
        {selectTableDetailsForModal && (
          <BatteryDetailsModal
            prompts={{ selectTableDetailsForModal, loading }}
          />
        )}
      </dialog>
      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>Serial</th>
            <th>Battery Name</th>
            <th>Material code</th>
            <th>New JIS</th>
            <th>Voltage</th>
            <th>Capacity (Ah)</th>
            <th>CCA</th>

            <th>Update</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentData?.map((battery, i) => (
            <tr key={battery?.short_code}>
              <th>{indexOfFirstData + i + 1}</th>
              <td>{battery?.battery_name}</td>
              <td>{battery?.material_code}</td>
              <td>{battery?.new_jis}</td>
              <td>{battery?.voltage}</td>
              <td>{battery?.capacity}</td>
              <td>{battery?.cold_cranking_ability_cca}</td>
              <td>
                <button
                  className="btn btn-xs bg-sky-400 border-0 text-white hover:bg-sky-700 hover:text-white"
                  onClick={() => handleUpdateClick(battery?.short_code)}
                >
                  <FaEdit />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-xs bg-blue-400 border-0"
                  onClick={() => handleDetailsModal(battery?.short_code)}
                >
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <BiDetail className="text-white" />
                  )}
                </button>
              </td>
              <td>
                <button
                  className="flex gap-2 btn btn-xs bg-red-500 text-white"
                  onClick={() => openDeleteModal(battery?.id)}
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* pagination logic */}
      {allBatteryDetails?.length > dataPerPage && (
        <div className="flex justify-center mt-4">
          <div className="join">
            {[
              ...Array(
                Math.ceil(allBatteryDetails?.length / dataPerPage)
              ).keys(),
            ].map((number) => (
              <div key={number}>
                <input
                  className="join-item btn btn-sm bg-primary text-white border-white active:bg-gray-400 checked:bg-gray-400"
                  type="radio"
                  name="options"
                  aria-label={number + 1}
                  checked={currentPage === number + 1}
                  onChange={() => paginate(number + 1)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">Do you want to remove this battery?</h2>
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

export default BatteryDetailsTable;
