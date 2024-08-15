import { LuRefreshCcw } from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import YouTubeList from "./YouTubeList";
import AddAYouTubeLink from "./AddAYouTubeLink";
import { useQuery } from "@tanstack/react-query";
const AllYouTubeLinks = () => {
  const { data: allYoutubeLinks = null, refetch } = useQuery({
    queryKey: ["allYoutubeLinks"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/youtube-video`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const openModal = () => {
    document.getElementById("youtubeLink").open = true;
  };

  return (
    <div>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={openModal}
            disabled={allYoutubeLinks?.length > 0}
          >
            Add YouTube Link <FaYoutube />
          </button>
          <AddAYouTubeLink
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

      <YouTubeList
        prompts={{
          allYoutubeLinks,
          refetch,
        }}
      />
    </div>
  );
};

export default AllYouTubeLinks;
