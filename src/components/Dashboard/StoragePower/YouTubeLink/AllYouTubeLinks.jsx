// import { useQuery } from "@tanstack/react-query";
import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import YouTubeLinks from "../../../../demoData/YouTubeLinks.json";
import { FaYoutube } from "react-icons/fa";
import YouTubeList from "./YouTubeList";
import AddAYouTubeLink from "./AddAYouTubeLink";
const AllYouTubeLinks = () => {
  const [
    ,
    // isLoading
    setIsLoading,
  ] = useState(false);

  const allYoutubeLinks = YouTubeLinks;
  //   const { data: allYoutubeLinks = null, refetch } = useQuery({

  //     queryKey: ["allYoutubeLinks"],
  //     queryFn: async () => {
  //       // console.log("Fetching data...");
  //       const res = await fetch(
  //         `${import.meta.env.VITE_BASE_URL}/manufacturing-locations`
  //       );
  //       const data = await res.json();
  //       // console.log("Data fetched:", data);
  //       return data;
  //     },
  //     refetchOnWindowFocus: true,
  //   });

  const openModal = () => {
    document.getElementById("youtubeLink").showModal();
  };

  return (
    <div>
      <h1 className="text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase flex justify-center ">
        YouTube Links
        <FaYoutube  className=" ml-2 mt-1.5 text-large" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={openModal}
          >
            Add YouTube Link <FaYoutube  />
          </button>
          <AddAYouTubeLink
            props={{
              setIsLoading,
              //  refetch
            }}
          />
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0  bg-teal-400 hover:bg-teal-600 text-white"
          //   onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <YouTubeList
        prompts={{
          allYoutubeLinks,
          setIsLoading,
          // refetch
        }}
      />
    </div>
  );
};

export default AllYouTubeLinks;
