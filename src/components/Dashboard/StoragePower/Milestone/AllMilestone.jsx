import { useQuery } from "@tanstack/react-query";
import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import MilestoneList from "./MilestoneList";
import { VscMilestone } from "react-icons/vsc";
import AddAMilestoneModal from "./AddAMilestoneModal";
const AllMilestone = () => {
  const [
    ,
    // isLoading
    setIsLoading,
  ] = useState(false);

  const { data: allMiltestone = [], refetch } = useQuery({
    queryKey: ["allMiltestone"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/milestone-image/`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const openModal = () => {
    document.getElementById("milestone").open = true;
  };

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={openModal}
            disabled={allMiltestone?.length > 0}
          >
            Add new details <VscMilestone />
          </button>
          <AddAMilestoneModal
            props={{
              refetch,
            }}
          />
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0  bg-teal-400 hover:bg-teal-600 text-white"
          onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <MilestoneList
        prompts={{
          allMiltestone,
          setIsLoading,
          refetch,
        }}
      />
    </div>
  );
};

export default AllMilestone;
