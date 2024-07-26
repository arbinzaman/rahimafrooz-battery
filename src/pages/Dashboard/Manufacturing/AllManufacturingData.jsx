import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loaders/Loader";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import UpdateManufacturingDataModal from "./UpdateManufacturingDataModal";
import { Link } from "react-router-dom";
import { FaCarBattery } from "react-icons/fa6";

const AllManufacturingData = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      refetch(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
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
    } catch (error) {
      console.error("Error updating data:", error);
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
        <div className="flex gap-5">\
        <Link to="/dashboard/add-a-manufacturing-data">
            {" "}
            <button className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-sky-500 hover:text-white">
              Add Manufacturing Location Data <FaCarBattery />
            </button>
          </Link>
          <button
            className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-red-500 hover:text-white"
            onClick={() => handleDelete(selectedId)}
          >
            Delete
            <MdDeleteOutline />
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-teal-300 hover:text-white"
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
            <th>Serial</th>
            <th>Title</th>
            <th>Location</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allManufacturingData.map((data, i) => (
            <tr key={data.id}>
              <td>{i + 1}</td>
              <td>{data.title}</td>
              <td>{data.location}</td>
              <td>{data.description}</td>
              <td>
                <img src={data.imageurl} alt={data.title} width="100" />
              </td>
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    setSelectedId(data.id);
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
          dataId={selectedId}
          onClose={() => setModalOpen(false)}
          onUpdate={(updatedData) => {
            handleUpdate(selectedId, updatedData);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AllManufacturingData;
