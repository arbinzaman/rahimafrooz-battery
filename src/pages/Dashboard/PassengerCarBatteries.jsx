import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import passengerCarBatteries from "../../demoData/passengerCarBatteries.json";

const PassengerCarBatteries = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];

      setSelectAll(updatedSelectedIds.length === passengerCarBatteries.length);
      return updatedSelectedIds;
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allIds = passengerCarBatteries.map((battery) => battery.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = async () => {
    //   Uncomment the following lines for actual delete operation
    //   try {
    //     const response = await fetch('/api/deleteBatteries', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ ids: selectedIds }),
    //     });

    //     if (response.ok) {
    //       // Remove the deleted items from the local state
    //       const updatedBatteries = passengerCarBatteries.filter(
    //         (battery) => !selectedIds.includes(battery.id)
    //       );
    //       setPassengerCarBatteries(updatedBatteries);
    //       setSelectedIds([]);
    //       setSelectAll(false);
    //     } else {
    //       console.error('Failed to delete items');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }

    console.log(selectedIds);
  };

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Passenger Car Batteries
      </h1>
      <div className="flex gap-4">
        <button className="flex gap-2 btn btn-xs">
          Add Passenger Car Battery <FaCarBattery />
        </button>
        <button className="flex gap-2 btn btn-xs" onClick={handleDelete}>
          Delete
          <MdDeleteOutline />
        </button>
      </div>

      <div className="overflow-x-auto">
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
              <th>Technology</th>
              <th>Vehicle Make</th>
              <th>Model</th>
              <th>Make Year</th>
              <th>Recommended Battery</th>
            </tr>
          </thead>
          <tbody>
            {passengerCarBatteries.map((passengerCarBattery, i) => (
              <tr key={passengerCarBattery.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckboxChange(passengerCarBattery.id)
                    }
                    checked={selectedIds.includes(passengerCarBattery.id)}
                  />
                </td>
                <th>{i + 1}</th>
                <td>{passengerCarBattery.technology}</td>
                <td>{passengerCarBattery.vehicleMake}</td>
                <td>{passengerCarBattery.model}</td>
                <td>{passengerCarBattery.makeYear}</td>
                <td>{passengerCarBattery.recommendedBattery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerCarBatteries;
