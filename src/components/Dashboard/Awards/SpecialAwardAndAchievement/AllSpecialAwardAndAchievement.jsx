import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import Loader from "../../../shared/Loaders/Loader";
import achievements from "../../../../demoData/SpecialAwardAndAchivement.json";
import AddSpecialAwardAndAchievement from "./AddSpecialAwardAndAchievement";
import { FaRegImage } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import SpecialAwardAndAchievementList from "./SpecialAwardAndAchievementList";

const AllSpecialAwardAndAchievement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const achievementList = achievements;

  //   const { data: achievementList = null, refetch } = useQuery({
  //     queryKey: ["achievementList"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         `${import.meta.env.VITE_BASE_URL}/achievements`
  //       );
  //       const data = await res.json();
  //       return data;
  //     },
  //     refetchOnWindowFocus: true,
  //   });

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="flex justify-center text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase">
        Special Awards and Achievements <FaRegImage className="ml-2 mt-2" />
      </h1>
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
              setIsLoading,
              //  refetch
            }}
          />
        </div>
        <button
          className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700"
          //   onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <SpecialAwardAndAchievementList
        prompts={{
          achievementList,
          setIsLoading,
          // refetch
        }}
      />
    </div>
  );
};

export default AllSpecialAwardAndAchievement;
