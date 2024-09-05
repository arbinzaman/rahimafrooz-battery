import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BiDetail, BiTrash } from "react-icons/bi";
import axios from "axios";
import Loader from "../../components/shared/Loaders/Loader";
import Modal from "../../components/Dashboard/CustomerQueries/Modal";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const CustomersQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [queriesPerPage] = useState(10); // Number of items per page

  const CONTACT_API_URL = `${import.meta.env.VITE_BASE_URL}/contact`;

  const {
    data: customersQueries = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["customersQueries"],
    queryFn: async () => {
      const res = await fetch(CONTACT_API_URL, {
        headers: {
          Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  const handleModalOpen = (query) => {
    setSelectedQuery(query);
    document.getElementById("customerDetails").showModal();
  };

  const handleDelete = async () => {
    console.log(selectedIds);
    try {
      const res = await axios.delete(CONTACT_API_URL, {
        data: selectedIds,
        headers: {
          Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });

      if (res.status === 200) {
        setSelectedIds([]);
        refetch();
        setDeleteModalOpen(false);
        toast.success("Selected queries deleted successfully.");
      } else {
        throw new Error("Failed to delete the selected queries.");
      }
    } catch (error) {
      console.error("Error deleting queries:", error);
    }
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

  // Pagination calculations
  const indexOfLastQuery = currentPage * queriesPerPage;
  const indexOfFirstQuery = indexOfLastQuery - queriesPerPage;
  const currentQueries = customersQueries?.slice(indexOfFirstQuery, indexOfLastQuery);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="flex justify-center text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Customer Queries
      </h1>

      <dialog
        id="customerDetails"
        className="modal modal-bottom sm:modal-middle"
      >
        {selectedQuery && <Modal customersQuery={selectedQuery} />}
      </dialog>

      {/* deleteConfirmation modal */}
      <dialog
        id="deleteConfirmation"
        className={`modal modal-bottom sm:modal-middle ${
          deleteModalOpen ? "modal-open" : ""
        }`}
      >
        <div className="modal-box bg-white text-red-500">
          <h2 className="text-lg font-bold">Confirm Deletion</h2>
          <p>Are you sure you want to delete the selected queries?</p>
          <div className="modal-action">
            <button
              className="btn bg-red-500 text-white btn-ghost btn-xs hover:bg-red-700 hover:text-white"
              onClick={handleDelete}
            >
              Yes, Delete
            </button>
            <button
              className="btn btn-ghost btn-xs bg-gray-200"
              onClick={() => setDeleteModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>

      <div className="overflow-x-auto mb-4">
        <button
          className="btn btn-xs bg-red-500 text-white border-0"
          onClick={() => setDeleteModalOpen(true)}
          disabled={selectedIds.length === 0}
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
            {currentQueries.map((customersQuery, i) => (
              <tr key={customersQuery.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(customersQuery.id)}
                    onChange={() => handleCheckboxChange(customersQuery.id)}
                  />
                </td>
                <th>{indexOfFirstQuery + i + 1}</th>
                <td>{customersQuery.email}</td>
                <td>{customersQuery.customer_name}</td>
                <td>{customersQuery.phone_number}</td>
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
        {/* Pagination */}
        {customersQueries.length > queriesPerPage && (
          <div className="flex justify-center mt-4">
            <div className="join">
              {[
                ...Array(Math.ceil(customersQueries.length / queriesPerPage)).keys(),
              ].map((number) => (
                <input
                  key={number}
                  className="join-item btn btn-ghost btn-sm bg-primary text-white border-white active:bg-gray-400 checked:bg-gray-400"
                  type="radio"
                  name="options"
                  aria-label={number + 1}
                  checked={currentPage === number + 1}
                  onChange={() => paginate(number + 1)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomersQueries;
