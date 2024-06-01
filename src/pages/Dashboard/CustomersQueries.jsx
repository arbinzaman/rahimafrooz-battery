import { useState } from "react";
import { BiDetail } from "react-icons/bi";
import customersQueries from "../../demoData/contactUsFrom.json";
import Modal from "../../components/Dashboard/CustomerQueries/Modal";

const CustomersQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null);

  const handleModalOpen = (query) => {
    setSelectedQuery(query);
    document.getElementById("customerDetails").showModal();
  };

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Dealers List
      </h1>

      <dialog
        id="customerDetails"
        className="modal modal-bottom sm:modal-middle"
      >
        {selectedQuery && <Modal customersQuery={selectedQuery} />}
      </dialog>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
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
                <td>{customersQuery.fullName}</td>
                <td>{customersQuery.phoneNo}</td>
                <td>
                  {customersQuery.message.length > 100
                    ? customersQuery.message.slice(0, 100) + "..."
                    : customersQuery.message}
                </td>
                <td>
                  <button
                    className="btn btn-xs"
                    onClick={() => handleModalOpen(customersQuery)}
                  >
                    <BiDetail />
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
