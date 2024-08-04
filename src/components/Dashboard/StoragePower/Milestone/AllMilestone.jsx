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

  const { data: allMiltestone = null, refetch } = useQuery({
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
      <h1 className="text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase flex justify-center ">
        Milestone Image & Text{" "}
        <VscMilestone className=" ml-2 mt-1.5 text-large" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={openModal}
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
