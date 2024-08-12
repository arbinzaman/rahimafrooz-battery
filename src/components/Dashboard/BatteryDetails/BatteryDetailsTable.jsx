import { useState } from "react";
import BatteryDetailsModal from "./BatteryDetailsModal";
import { BiDetail } from "react-icons/bi";
import ButtonLoader from "../../shared/Loaders/ButtonLoader";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const BatteryDetailsTable = ({ prompts }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectTableDetailsForModal, setSelectTableDetailsForModal] =
    useState(null);
  const [loading, setLoading] = useState(false);
  const { allBatteryDetails, selectedIds, setSelectedIds } = prompts;
  const navigate = useNavigate();

  const handleCheckboxChange = (short_code) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(short_code)
        ? prevSelectedIds.filter((selectedId) => selectedId !== short_code)
        : [...prevSelectedIds, short_code];
      setSelectAll(updatedSelectedIds.length === allBatteryDetails.length);
      return updatedSelectedIds;
    });
  };

  const handleModalOpen = async (short_code) => {
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

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allshort_codes = allBatteryDetails.map(
        (battery) => battery.short_code
      );
      setSelectedIds(allshort_codes);
    }
    setSelectAll(!selectAll);
  };

  const handleUpdateClick = (short_code) => {
    navigate(`/dashboard/update-battery/${short_code}`);
  };

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
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectAll}
                className="bg-white border-0"
              />
            </th>
            <th>Serial</th>
            <th>Battery Name</th>
            <th>Series</th>
            <th>Item Code</th>
            <th>Model</th>
            <th>Voltage</th>
            <th>Capacity (Ah)</th>
            <th>CCA</th>
            <th>Country of Origin</th>
            <th>Update</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {allBatteryDetails?.map((battery, i) => (
            <tr key={battery.short_code}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(battery.short_code)}
                  checked={selectedIds.includes(battery.short_code)}
                />
              </td>
              <th>{i + 1}</th>
              <td>{battery.battery_name}</td>
              <td>{battery.series}</td>
              <td>{battery.item_code}</td>
              <td>{battery.model}</td>
              <td>{battery.voltage}</td>
              <td>{battery.ref_amperehour_ah}</td>
              <td>{battery.cold_cranking_ability_cca}</td>
              <td>{battery.country_of_origin}</td>
              <td>
                {" "}
                <button
                  className="btn btn-xs bg-sky-400 border-0 text-white hover:bg-sky-700 hover:text-white"
                  onClick={() => handleUpdateClick(battery.short_code)}
                >
                  <FaEdit />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-xs bg-blue-400 border-0"
                  onClick={() => handleModalOpen(battery.short_code)}
                >
                  {loading ? (
                    <ButtonLoader />
                  ) : (
                    <BiDetail className="text-white" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BatteryDetailsTable;
