import { useQuery } from "@tanstack/react-query";
import ManufacturingLocationsList from "../../components/Dashboard/ManufacturingLocations/ManufacturingLocationsList";
import { LuRefreshCcw } from "react-icons/lu";
import AddManufacturingLocationsForm from "../../components/Dashboard/ManufacturingLocations/AddManufacturingLocationsForm";

const ManufacturingLocations = () => {
  const { data: manufacturingDetails = [], refetch } = useQuery({
    queryKey: ["manufacturingDetails"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations`
      );
      const data = await res.json();
      // console.log("Data fetched:", data);
      return data;
    },
    refetchOnWindowFocus: true,
  });
  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        All Manufacturing Locations
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-sky-500 hover:text-white"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add new details
          </button>
          <AddManufacturingLocationsForm />
        </div>
        <button
          className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-sky-500 hover:text-white"
          onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>
      <ManufacturingLocationsList
        manufacturingPrompts={{ manufacturingDetails }}
      />
    </div>
  );
};

export default ManufacturingLocations;
