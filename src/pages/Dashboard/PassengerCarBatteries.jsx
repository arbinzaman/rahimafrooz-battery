import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader";
import BatteryDetailsTable from "../../components/Dashboard/BatteryDetails/BatteryDetailsTable";

const PassengerCarBatteries = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [filteredBatteries, setFilteredBatteries] = useState([]);

  const url = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries`;

  const {
    data: passengerCarBatteries = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["passengerCarBatteries"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    refetchInterval: 60000,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    const filtered = passengerCarBatteries.filter((battery) =>
      battery.applications.includes("Passenger Car")
    );
    setFilteredBatteries(filtered);
  }, [passengerCarBatteries]);

  const handleDelete = async () => {
    console.log(selectedIds);
    // await fetch(url, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ids: selectedIds }),
    // });
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }
  refetch();
  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Passenger Car Batteries
      </h1>
      <div className="flex gap-4">
        <button className="flex gap-2 btn btn-xs">
          Add Passenger Car Battery <FaCarBattery />
        </button>
        <button className="flex gap-2 btn btn-xs" onClick={handleDelete}>
          Delete
          <MdDeleteOutline />
        </button>
      </div>
      <BatteryDetailsTable
        prompts={{ filteredBatteries, selectedIds, setSelectedIds }}
      />
    </div>
  );
};

export default PassengerCarBatteries;
