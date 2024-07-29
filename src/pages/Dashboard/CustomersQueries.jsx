import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BiDetail, BiTrash } from "react-icons/bi";
import Loader from "../../components/shared/Loaders/Loader";
import Modal from "../../components/Dashboard/CustomerQueries/Modal";

const CustomersQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const queryClient = useQueryClient();
  
  const CONTACT_API_URL = `${import.meta.env.VITE_BASE_URL}/contact`;

  const { data: customersQueries = [], isLoading, isError, error } = useQuery({
    queryKey: ["customersQueries"],
    queryFn: async () => {
      const res = await fetch(CONTACT_API_URL);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (ids) => {
      const res = await fetch(`${CONTACT_API_URL}/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ids),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["customersQueries"]);
      setDeleteModalOpen(false);
      setSelectedIds([]);
    },
    onError: (error) => {
      console.error("Error deleting queries:", error);
    },
  });

  const handleModalOpen = (query) => {
    setSelectedQuery(query);
    document.getElementById("customerDetails").showModal();
  };

  const handleDelete = () => {
    deleteMutation.mutate(selectedIds);
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
      return updatedSelectedIds;
    });
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedIds(customersQueries.map((query) => query.id));
    } else {
      setSelectedIds([]);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Customer Queries
      </h1>

      <dialog id="customerDetails" className="modal modal-bottom sm:modal-middle">
        {selectedQuery && <Modal customersQuery={selectedQuery} />}
      </dialog>

      <dialog id="deleteConfirmation" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h2 className="text-lg font-bold">Confirm Deletion</h2>
          <p>Are you sure you want to delete the selected queries?</p>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleDelete}>
              Yes, Delete
            </button>
            <button className="btn" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto mb-4">
        <button
          className="btn btn-xs bg-red-500 text-white border-0"
          onClick={() => setDeleteModalOpen(true)}
          // disabled={selectedIds.length === 0}
        >
          <BiTrash /> Delete
        </button>
        <table className="table w-full text-black mt-4">
          <thead>
            <tr className="text-black">
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={selectedIds.length === customersQueries.length}
                />
              </th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Messaged at</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {customersQueries.map((customersQuery, i) => (
              <tr key={customersQuery.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(customersQuery.id)}
                    onChange={() => handleCheckboxChange(customersQuery.id)}
                  />
                </td>
                <th>{i + 1}</th>
                <td>{customersQuery.email}</td>
                <td>{customersQuery.customer_name}</td>
                <td>
                  {customersQuery.message.length > 100
                    ? customersQuery.message.slice(0, 100) + "..."
                    : customersQuery.message}
                </td>
                <td>{customersQuery.messaged_at}</td>
                <td>
                  <button
                    className="btn btn-xs bg-blue-400 border-0"
                    onClick={() => handleModalOpen(customersQuery)}
                  >
                    <BiDetail className="text-white" />
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

export default CustomersQueries;
