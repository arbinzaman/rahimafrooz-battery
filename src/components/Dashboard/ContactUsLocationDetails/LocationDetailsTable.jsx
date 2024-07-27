import { useState } from 'react';
import { MdEditLocationAlt } from 'react-icons/md';
import LocationUpdateModal from './LocationUpdateModal';

const LocationDetailsTable = ({ prompts }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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
      const allIds = allLocationDetails.map((location) => location.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  const openUpdateModal = (location) => {
    setSelectedLocation(location);
    setShowUpdateModal(true);
    document.getElementById('updateLocationModal').showModal();
  };

  const handleUpdate = async (updatedLocation) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contact/global-locations/${updatedLocation.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedLocation),
      });
      if (!res.ok) throw new Error('Failed to update location');
      await res.json();
      setShowUpdateModal(false);
      document.getElementById('updateLocationModal').close();
      // Optionally refetch locations here or update state
    } catch (error) {
      console.error('Error updating location:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      {showUpdateModal && selectedLocation && (
        <LocationUpdateModal
          location={selectedLocation}
          onClose={() => {
            setShowUpdateModal(false);
            document.getElementById('updateLocationModal').close();
          }}
          onUpdate={handleUpdate}
        />
      )}
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
            <th>Update Location</th>
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
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => openUpdateModal(location)}
                >
                  <MdEditLocationAlt className="text-regular" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationDetailsTable;
