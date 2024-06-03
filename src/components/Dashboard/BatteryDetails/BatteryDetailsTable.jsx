import { useState } from "react";
import BatteryDetailsModal from "./BatteryDetailsModal";
import { BiDetail } from "react-icons/bi";

const BatteryDetailsTable = ({ prompts }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const { allBatteryDetails, selectedIds, setSelectedIds } = prompts;

  const handleCheckboxChange = (shortCode) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(shortCode)
        ? prevSelectedIds.filter((selectedId) => selectedId !== shortCode)
        : [...prevSelectedIds, shortCode];

      setSelectAll(updatedSelectedIds.length === allBatteryDetails.length);
      return updatedSelectedIds;
    });
  };

  const handleModalOpen = (query) => {
    setSelectedQuery(query);
    document.getElementById("batteryDetails").showModal();
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allShortCodes = allBatteryDetails.map((battery) => battery.short_code);
      setSelectedIds(allShortCodes);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="overflow-x-auto">
      <dialog id="batteryDetails" className="modal modal-bottom sm:modal-middle">
        {selectedQuery && <BatteryDetailsModal battery={selectedQuery} />}
      </dialog>
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectAll}
              />
              
            </th>
            <th>Serial</th>
            <th>Brand</th>
            <th>Series</th>
            <th>Item Code</th>
            <th>Model</th>
            <th>Voltage</th>
            <th>Capacity (Ah)</th>
            <th>CCA</th>
            <th>Country of Origin</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {allBatteryDetails.map((battery, i) => (
            <tr key={battery.short_code}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(battery.short_code)}
                  checked={selectedIds.includes(battery.short_code)}
                />
              </td>
              <th>{i + 1}</th>
              <td>{battery.brand}</td>
              <td>{battery.series}</td>
              <td>{battery.item_code}</td>
              <td>{battery.model}</td>
              <td>{battery.voltage}</td>
              <td>{battery.ref_amperehour_ah}</td>
              <td>{battery.cold_cranking_ability_cca}</td>
              <td>{battery.country_of_origin}</td>
              <td>
                <button
                  className="btn btn-xs bg-blue-400"
                  onClick={() => handleModalOpen(battery)}
                >
                  <BiDetail className="text-white" />
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
