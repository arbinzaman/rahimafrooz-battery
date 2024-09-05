import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import { GrDocumentImage } from "react-icons/gr";
import AddFactoryInformationModal from "./AddFactoryInformationModal";
import FactoryInformationList from "./FactoryInformationList";
import { useQuery } from "@tanstack/react-query";
const FactoryInformations = () => {
  const [
    ,
    // isLoading
    setIsLoading,
  ] = useState(false);

  const { data: allFactoryInformations = null, refetch } = useQuery({
    queryKey: ["allFactoryInformations"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/factory-informations/`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={() => {
              document.getElementById("img_text").open = true;
            }}
          >
            Add new details <GrDocumentImage />
          </button>
          <AddFactoryInformationModal props={{ setIsLoading, refetch }} />
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0  bg-teal-400 hover:bg-teal-600 text-white"
          //   onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <FactoryInformationList
        prompts={{
          allFactoryInformations,
          setIsLoading,
          refetch,
        }}
      />
    </div>
  );
};

export default FactoryInformations;
