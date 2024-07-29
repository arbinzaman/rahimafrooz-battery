  import { useQuery } from "@tanstack/react-query";
  import Loader from "../../../components/shared/Loaders/Loader";
  import BatteryDetailsTable from "../../../components/Dashboard/BatteryDetails/BatteryDetailsTable";
  import { MdDeleteOutline } from "react-icons/md";
  import { FaCarBattery } from "react-icons/fa";
  import { useState } from "react";
  import { LuRefreshCcw } from "react-icons/lu";
  import { Link } from "react-router-dom";

  const AllBatteryDetails = () => {
    const [selectedIds, setSelectedIds] = useState([]);
    const url = `${import.meta.env.VITE_BASE_URL}/batteries`;

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
        <div className="flex gap-4 justify-between">
          <div className="flex gap-5">
            <Link to="/dashboard/add-new-battery">
              {" "}
              <button className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-sky-500 hover:text-white">
                Add Battery <FaCarBattery />
              </button>
            </Link>
            <button
              className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-red-500 hover:text-white"
              onClick={handleDelete}
            >
              Delete
              <MdDeleteOutline />
            </button>
          </div>
          <div>
            <button
              className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-teal-300 hover:text-white"
              onClick={refetch()}
            >
              Refresh
              <LuRefreshCcw />
            </button>
          </div>
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
