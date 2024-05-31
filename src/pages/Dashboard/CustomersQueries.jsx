import { BiDetail } from "react-icons/bi";
import customersQueries from "../../demoData/contactUsFrom.json";

const CustomersQueries = () => {
  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">Dealers List</h1>
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
                  <button className="btn btn-xs">
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
