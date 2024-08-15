import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { QueryClient, useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loaders/Loader";
import FetchErrorMessage from "../../components/shared/Error/FetchErrorMessage";
import toast from "react-hot-toast";
import axios from "axios";
import { FaUserTie } from "react-icons/fa6";


const DealerApplicationList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const url = `${import.meta.env.VITE_BASE_URL}/dealer-applications`;

  const {
    data: allDealerApplicationDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allDealerApplicationDetails"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    refetchOnWindowFocus: true,
  });

  const handleDelete = async (selectedIds) => {
    console.log(selectedIds);
    console.log(typeof selectedIds);
    try {
      const res = await axios.delete(`${url}/${selectedIds}`, {
        headers: {
          "Content-Type": "application/json",
        },
        data: selectedIds,
      });

      if (res.status === 200) {
        console.log(res.data);
        refetch();
        toast.success("Selected queries deleted successfully.");  
        QueryClient.invalidateQueries(["allDealerApplicationDetails"]);
        toast.success("Selected queries deleted successfully.");
        setDeleteModalOpen(false);
      } else {
        throw new Error("Failed to delete the selected queries.");
      }
    } catch (error) {
      console.error("Error deleting queries:", error);
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

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <FetchErrorMessage />;
  }

  return (
    <div>
      <h1 className="flex justify-center text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Dealers Applications<FaUserTie className="mt-2 ml-2" />
      </h1>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">
              Are you sure you want to remove this application?
            </h2>
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

      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th>District</th>
              <th>Thana</th>
              <th>Zip</th>
              <th>Applied at</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {allDealerApplicationDetails.map((becomeADealer, i) => (
              <tr key={becomeADealer.id}>
                <th>{i + 1}</th>
                <td>{becomeADealer.email}</td>
                <td>{becomeADealer.full_name}</td>
                <td>{becomeADealer.phone}</td>
                <td>{becomeADealer.company_name}</td>
                <td>{becomeADealer.district}</td>
                <td>{becomeADealer.thana}</td>
                <td>{becomeADealer.zip}</td>
                <td>{becomeADealer.applied_at}</td>
                <td>
                  <button
                    className="btn btn-xs border-0 bg-red-400"
                    onClick={() => openDeleteModal(becomeADealer.id)}
                  >
                    <MdDeleteForever className="text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DealerApplicationList;
