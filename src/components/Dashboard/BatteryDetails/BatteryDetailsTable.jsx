import { useState } from "react";
import BatteryDetailsModal from "./BatteryDetailsModal";
import { BiDetail } from "react-icons/bi";

const BatteryDetailsTable = ({ prompts }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const { filteredBatteries, selectedIds, setSelectedIds } = prompts;
  // console.log(filteredBatteries);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];

      setSelectAll(updatedSelectedIds.length === filteredBatteries.length);
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
      const allIds = filteredBatteries.map((battery) => battery.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="overflow-x-auto">
      <dialog
        id="batteryDetails"
        className="modal modal-bottom sm:modal-middle"
      >
        {selectedQuery && <BatteryDetailsModal Vehicle={selectedQuery} />}
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
              Select All
            </th>
            <th>Serial</th>
            <th>Brand</th>
            <th>Technology</th>
            <th>Vehicle Make & Model</th>
            <th>Make Year</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredBatteries.map((Vehicle, i) => (
            <tr key={Vehicle.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(Vehicle.id)}
                  checked={selectedIds.includes(Vehicle.id)}
                />
              </td>
              <th>{i + 1}</th>
              <td>{Vehicle.brand}</td>
              <td>{Vehicle.technology}</td>
              <td>
                {Vehicle.supported_vehicle_models.map((makeModel, index) => (
                  <div key={index}>
                    <strong>{makeModel.make}</strong>:
                    {makeModel.models
                      .join(", ")
                      .split(" ")
                      .map((word, idx) => (
                        <span
                          key={idx}
                          className={idx % 4 === 3 ? "block" : ""}
                        >
                          {word}
                        </span>
                      ))}
                  </div>
                ))}
              </td>
              <td>
                {Vehicle.make_years.map((makeYear, idx) => (
                  <div key={idx}>
                    <strong>{makeYear.model}</strong>:{" "}
                    {makeYear.years
                      .join(", ")
                      .split(" ")
                      .map((word, index) => (
                        <span
                          key={index}
                          className={index % 4 === 3 ? "block" : ""}
                        >
                          {word}
                        </span>
                      ))}
                  </div>
                ))}
              </td>
              <td>
                <button
                  className="btn btn-xs bg-blue-400"
                  onClick={() => handleModalOpen(Vehicle)}
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
