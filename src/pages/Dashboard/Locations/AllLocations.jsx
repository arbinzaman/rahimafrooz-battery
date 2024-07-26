import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loaders/Loader";
import LocationDetailsTable from "../../../components/Dashboard/ContactUsLocationDetails/LocationDetailsTable";
import { MdDeleteOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from "react-router-dom";

const AllBatteryDetails = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const url = `${import.meta.env.VITE_BASE_URL}/contact/global-locations`;

  const {
    data: allLocationDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allLocationDetails"],
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
        Locations Table
      </h1>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-5">
          <Link to="/dashboard/add-a-location">
            {" "}
            <button className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-sky-500 hover:text-white">
              Add A Location <FaLocationDot />
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

      <LocationDetailsTable
        prompts={{ allLocationDetails, selectedIds, setSelectedIds }}
      />
    </div>
  );
};

export default AllBatteryDetails;
