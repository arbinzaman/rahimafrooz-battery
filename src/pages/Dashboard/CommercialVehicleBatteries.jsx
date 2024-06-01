import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader";
import BatteryDetailsTable from "../../components/Dashboard/BatteryDetails/BatteryDetailsTable";

const CommercialVehicleBatteries = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [filteredBatteries, setFilteredBatteries] = useState([]);
  //   const [lastFetched, setLastFetched] = useState(null);

  const url = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries`;

  const {
    data: commercialVehicleBatteries = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["commercialVehicleBatteries"],
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

  useEffect(() => {
    // console.log("Filtering data...");
    const filtered = commercialVehicleBatteries.filter((battery) =>
      battery.applications.includes("Commercial Vehicle")
    );
    setFilteredBatteries(filtered);
    // setLastFetched(new Date().toLocaleTimeString());
  }, [commercialVehicleBatteries]);

  const handleDelete = async () => {
    console.log(selectedIds);
    await refetch();
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
        Commercial Vehicle Batteries
      </h1>
      <div className="flex gap-4">
        <button className="flex gap-2 btn btn-xs">
          Add Commercial Vehicle Battery <FaCarBattery />
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
        prompts={{ filteredBatteries, selectedIds, setSelectedIds }}
      />
    </div>
  );
};

export default CommercialVehicleBatteries;
