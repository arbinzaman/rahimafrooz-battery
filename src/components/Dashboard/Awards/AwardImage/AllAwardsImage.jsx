import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import Loader from "../../../shared/Loaders/Loader";
import AddAAwardImage from "./AddAAwardImage";
import { FaAward } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import AwardImageList from "./AwardImageList";
import { useQuery } from "@tanstack/react-query";

const AllAwardsImage = () => {
  const {
    data: awardImage = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["awardImage"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/achievements`);
      const data = await res.json();

      const filteredData = data.filter(
        (item) => item.description == undefined || item.description == null
      );
      return filteredData;
    },
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-sky-400 hover:bg-sky-700"
            onClick={() =>
              (document.getElementById("allAwardImage").open = true)
            }
          >
            Add new details <BiSolidImageAdd />
          </button>

          <AddAAwardImage
            props={{
              refetch,
            }}
          />
        </div>
        <button
          className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700"
          onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <AwardImageList
        prompts={{
          awardImage,
          refetch,
        }}
      />
    </div>
  );
};

export default AllAwardsImage;
