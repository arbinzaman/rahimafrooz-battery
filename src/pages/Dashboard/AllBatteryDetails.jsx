import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader";
import BatteryDetailsTable from "../../components/Dashboard/BatteryDetails/BatteryDetailsTable";
import { MdDeleteOutline } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { useState } from "react";

const AllBatteryDetails = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const url = `https://rahimafrooz-battery-backend.vercel.app/api/v1/batteries`;

  const {
    data: allBatteryDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allBatteryDetails"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(url);
      const data = await res.json();
      // console.log("Data fetched:", data);
      return data;
    },
    refetchInterval: 60000,
    refetchOnWindowFocus: true,
  });
  const handleDelete = async () => {
    console.log(selectedIds);
    await refetch();
  };
  refetch();
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
       Batteries Table
      </h1>
      <div className="flex gap-4">
        <button className="flex gap-2 btn btn-xs">
          Add Battery <FaCarBattery />
        </button>
        <button className="flex gap-2 btn btn-xs" onClick={handleDelete}>
          Delete
          <MdDeleteOutline />
        </button>
      </div>

      {/* <div className="mb-4">
    <p>Last fetched: {lastFetched}</p>
  </div> */}

      <BatteryDetailsTable
        prompts={{ allBatteryDetails, selectedIds, setSelectedIds }}
      />
    </div>
  );
};

export default AllBatteryDetails;
