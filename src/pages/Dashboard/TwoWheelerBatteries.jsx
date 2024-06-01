import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader";
import BatteryDetailsTable from "../../components/Dashboard/BatteryDetails/BatteryDetailsTable";

const TwoWheelerBatteries = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [filteredBatteries, setFilteredBatteries] = useState([]);
  //   const [lastFetched, setLastFetched] = useState(null);

  const url = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries`;

  const {
    data: twoWheelerBatteries = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["twoWheelerBatteries"],
    queryFn: async () => {
      //   console.log("Fetching data...");
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
    const filtered = twoWheelerBatteries.filter((battery) =>
      battery.applications.includes("Two Wheeler")
    );
    setFilteredBatteries(filtered);
    // setLastFetched(new Date().toLocaleTimeString());
  }, [twoWheelerBatteries]);

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
        Two Wheeler Batteries
      </h1>
      <div className="flex gap-4">
        <button className="flex gap-2 btn btn-xs">
          Add Two Wheeler Battery <FaCarBattery />
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

export default TwoWheelerBatteries;
