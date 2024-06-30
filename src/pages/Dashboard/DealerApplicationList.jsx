import { SiTicktick } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import becomeADealers from "../../demoData/becomeADealerApplicationData.json";

const DealerApplicationList = () => {
  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">Dealers List</h1>
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
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {becomeADealers.map((becomeADealer, i) => (
              <tr key={becomeADealer.id}>
                <th>{i + 1}</th>
                <td>{becomeADealer.contactDetails.email}</td>
                <td>{becomeADealer.contactDetails.fullName}</td>
                <td>{becomeADealer.contactDetails.phoneNumber}</td>
                <td>{becomeADealer.companyName}</td>
                <td>{becomeADealer.address.district}</td>
                <td>{becomeADealer.address.thana}</td>
                <td>{becomeADealer.address.zip}</td>
                <td>
                  <button className="btn btn-xs border-0 bg-green-500">
                    <SiTicktick className="text-white"/>
                  </button>
                </td>
                <td>
                  <button className="btn btn-xs border-0 bg-red-400">
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
