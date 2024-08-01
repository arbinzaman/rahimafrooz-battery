import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loaders/Loader";
import LocationDetailsTable from "../../../components/Dashboard/ContactUsLocationDetails/LocationDetailsTable";
import { FaLocationDot } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import AddALocation from "./AddALocation";

const AllLocations = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/contact/global-locations`;

  const {
    data: allLocationDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allLocationDetails"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const handleRefresh = async () => {
    await refetch();
  };

  const openModal = () => {
    document.getElementById("my_modal_69").showModal();
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
        Locations Table
      </h1>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-5">
          <button
            className="flex gap-2 btn btn-xs  border-0  hover:bg-sky-700 text-white bg-sky-400"
            onClick={openModal}
          >
            Add A Location <FaLocationDot />
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
            onClick={handleRefresh}
          >
            Refresh
            <LuRefreshCcw />
          </button>
        </div>
      </div>
      <LocationDetailsTable prompts={{ allLocationDetails, refetch }} />
      <AddALocation />
    </div>
  );
};

export default AllLocations;
