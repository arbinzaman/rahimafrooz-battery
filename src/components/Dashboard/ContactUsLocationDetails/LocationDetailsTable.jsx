import { useState } from "react";

const LocationDetailsTable = ({ prompts }) => {
  const [selectAll, setSelectAll] = useState(false);

  const { allLocationDetails, selectedIds, setSelectedIds } = prompts;

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
      setSelectAll(updatedSelectedIds.length === allLocationDetails.length);
      return updatedSelectedIds;
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allshort_ids = allLocationDetails.map((location) => location.id);
      setSelectedIds(allshort_ids);
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="overflow-x-auto">
      <dialog
        id="batteryDetails"
        className="modal modal-bottom sm:modal-middle"
      ></dialog>
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
            <th>Location Title</th>
            <th>Location</th>
            <th>Phone Numbers</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {allLocationDetails?.map((location, i) => (
            <tr key={location.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(location.id)}
                  checked={selectedIds.includes(location.id)}
                />
              </td>
              <th>{i + 1}</th>
              <td>{location.location_title}</td>
              <td>{location.location}</td>
              <td>{location.phone_numbers}</td>
              <td>{location.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationDetailsTable;
