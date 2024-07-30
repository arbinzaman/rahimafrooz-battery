import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loaders/Loader";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import UpdateManufacturingDataModal from "./UpdateManufacturingDataModal";
import { Link } from "react-router-dom";
import { MdPrecisionManufacturing } from "react-icons/md";
import toast from "react-hot-toast";

const AllManufacturingData = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  const url = `${import.meta.env.VITE_BASE_URL}/manufacturing-locations`;

  const {
    data: allManufacturingData = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allManufacturingData"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    // refetchOnWindowFocus: true,
  });

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
      setSelectAll(updatedSelectedIds.length === allManufacturingData.length);
      return updatedSelectedIds;
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allIds = allManufacturingData.map((data) => data.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = async () => {
    if (selectedIds.length === 0) {
      toast.error("No items selected for deletion.");
      return;
    }
    try {
      const requests = selectedIds.map(id =>
        fetch(`${url}/${id}`, { method: "DELETE" })
      );
      await Promise.all(requests);
      refetch(); // Refresh data after deletion
      toast.success("Selected items deleted successfully.");
      setSelectedIds([]);
      setSelectAll(false);
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error deleting selected items.");
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      refetch(); // Refresh data after update
      toast.success("Data updated successfully.");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data.");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Manufacturing Data Table
      </h1>
      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <Link to="/dashboard/add-a-manufacturing-data">
            <button className="flex gap-2 btn btn-xs  border-0  hover:bg-sky-700 text-white bg-sky-400">
              Add Manufacturing Location Data <MdPrecisionManufacturing />
            </button>
          </Link>
          <button
            className="flex gap-2 btn btn-xs  bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
            onClick={handleDelete}
          >
            Delete
            <MdDeleteOutline />
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
            onClick={refetch}
          >
            Refresh
            <LuRefreshCcw />
          </button>
        </div>
      </div>

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
            <th>Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allManufacturingData.map((manufacturingData, i) => (
            <tr key={manufacturingData.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(manufacturingData.id)}
                  checked={selectedIds.includes(manufacturingData.id)}
                />
              </td>
              <td>{i + 1}</td>
              <td>{manufacturingData.title}</td>
              <td>{manufacturingData.location}</td>
              <td>{manufacturingData.description}</td>
              <td>
                <img src={manufacturingData.imageurl} alt={manufacturingData.title} width="100" />
              </td>
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    setSelectedIds(manufacturingData.id);
                    setUpdatedData(manufacturingData);
                    setModalOpen(true);
                  }}
                >
                  <FaEdit className="text-regular" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <UpdateManufacturingDataModal
          updatedData={updatedData}
          dataId={selectedIds}
          onClose={() => setModalOpen(false)}
          onUpdate={(updatedData) => {
            handleUpdate(selectedIds, updatedData);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AllManufacturingData;
