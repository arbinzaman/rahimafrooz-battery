import { SiTicktick } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loaders/Loader";

const DealerApplicationList = () => {

  const url = `${import.meta.env.VITE_BASE_URL}/dealer-applications`;

  const {
    data: allDealerApplicationDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allDealerApplicationDetails"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(url);
      const data = await res.json();
      // console.log("Data fetched:", data);
      return data;
    },
    refetchOnWindowFocus: true,
  });

  refetch();
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
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
              <th>Applied at</th>
              <th>Approve</th>
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
