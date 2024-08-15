import { useQuery } from "@tanstack/react-query";
import ManufacturingLocationsList from "../../components/Dashboard/ManufacturingLocations/ManufacturingLocationsList";
import { LuRefreshCcw } from "react-icons/lu";
import AddManufacturingLocationsForm from "../../components/Dashboard/ManufacturingLocations/AddManufacturingLocationsForm";
import { useState } from "react";
import { MdPrecisionManufacturing } from "react-icons/md";
import Loader from "../../components/shared/Loaders/Loader";

const ManufacturingLocations = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: manufacturingDetails = null, refetch } = useQuery({
    queryKey: ["manufacturingDetails"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase flex justify-center ">
        Manufacturing Locations{" "}
        <MdPrecisionManufacturing className=" ml-2 mt-2 text-large" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={() => (document.getElementById("my_modal_2").open = true)}
          >
            Add new details <MdPrecisionManufacturing />
          </button>
          <AddManufacturingLocationsForm props={{ setIsLoading, refetch }} />
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0  bg-teal-400 hover:bg-teal-600 text-white"
          onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <ManufacturingLocationsList
        manufacturingProps={{ manufacturingDetails, setIsLoading, refetch }}
      />
    </div>
  );
};

export default ManufacturingLocations;
