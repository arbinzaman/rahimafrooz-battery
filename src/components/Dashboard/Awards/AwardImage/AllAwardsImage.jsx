import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import Loader from "../../../shared/Loaders/Loader";
import awardImageData from "../../../../demoData/AwardImageData.json";
import AddAAwardImage from "./AddAAwardImage";
import { FaAward } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import AwardImageList from "./AwardImageList";

const AllAwardsImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const awardImage = awardImageData;

  //   const { data: awardImage = null, refetch } = useQuery({
  //     queryKey: ["awardImage"],
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
        Awards <FaAward className="ml-2 mt-2" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-sky-400 hover:bg-sky-700"
            onClick={() => document.getElementById("allAwardImage").open = true}
          >
            Add new details <BiSolidImageAdd />
          </button>

          <AddAAwardImage
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

      <AwardImageList
        prompts={{
            awardImage,
          setIsLoading,
          // refetch
        }}
      />
    </div>
  );
};

export default AllAwardsImage;
