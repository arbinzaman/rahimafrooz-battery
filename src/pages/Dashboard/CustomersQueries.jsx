import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BiDetail } from "react-icons/bi";
import Loader from "../../components/shared/Loaders/Loader";
import Modal from "../../components/Dashboard/CustomerQueries/Modal";

const CustomersQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);

  const CONTACT_API_URL = `${import.meta.env.VITE_BASE_URL}/contact`;

  const {
    data: customersQueries = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["customersQueries"],
    queryFn: async () => {
      const res = await fetch(CONTACT_API_URL);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },

    refetchInterval: 60000,
    refetchOnWindowFocus: true,
  });

  const handleModalOpen = (query) => {
    setSelectedQuery(query);
    document.getElementById("customerDetails").showModal();
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

      <dialog
        id="customerDetails"
        className="modal modal-bottom sm:modal-middle"
      >
        {selectedQuery && <Modal customersQuery={selectedQuery} />}
      </dialog>

      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th></th>
              <th>Email</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {customersQueries.map((customersQuery, i) => (
              <tr key={customersQuery.id}>
                <th>{i + 1}</th>
                <td>{customersQuery.email}</td>
                <td>{customersQuery.customer_name}</td>
                <td>{customersQuery.phone}</td>
                <td>
                  {customersQuery.message.length > 100
                    ? customersQuery.message.slice(0, 100) + "..."
                    : customersQuery.message}
                </td>
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
