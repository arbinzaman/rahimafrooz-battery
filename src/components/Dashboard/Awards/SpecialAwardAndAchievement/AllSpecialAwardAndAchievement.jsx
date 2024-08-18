import { LuRefreshCcw } from "react-icons/lu";
import Loader from "../../../shared/Loaders/Loader";
import AddSpecialAwardAndAchievement from "./AddSpecialAwardAndAchievement";
import { FaRegImage } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import SpecialAwardAndAchievementList from "./SpecialAwardAndAchievementList";
import { useQuery } from "@tanstack/react-query";

const AllSpecialAwardAndAchievement = () => {
  const {
    data: achievementList = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["achievementList"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/achievements`);
      const data = await res.json();
      const filteredData = data.filter(
        (item) => item.caption == undefined || item.caption == null
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
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add new details <BiSolidImageAdd />
          </button>

          <AddSpecialAwardAndAchievement
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

      <SpecialAwardAndAchievementList
        prompts={{
          achievementList,
          refetch,
        }}
      />
    </div>
  );
};

export default AllSpecialAwardAndAchievement;
