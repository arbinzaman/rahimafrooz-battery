import { FaRegNewspaper } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import NewsList from "../../../components/Dashboard/News/NewsList";
import AddANews from "../../../components/Dashboard/News/AddANews";
import { TiNews } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";
const AllNews = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/news`;
  const { data: allNews = [], refetch, error } = useQuery({
    queryKey: ["allNews"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const handleRefresh = async () => {
    await refetch();
  };

  const openModal = () => {
    document.getElementById("addNews").open = true;
  };

  if (error) {
    return<FetchErrorMessage/>
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex  justify-center">
        News <TiNews className="mt-2.5 ml-2" />
      </h1>
      <div className="flex gap-4 justify-between mb-3">
        <div className="flex gap-5">
          <button
            className="flex gap-2 btn btn-xs bg-sky-500 hover:bg-sky-700 text-white border-0"
            onClick={openModal}
          >
            Add A News <FaRegNewspaper />
          </button>
          <AddANews
            prompts={{
              refetch,
            }}
          />
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
            onClick={handleRefresh}
          >
            Refresh
            <LuRefreshCcw />
          </button>
        </div>
      </div>
      <NewsList
        prompts={{
          allNews,
          refetch,
        }}
      />
    </div>
  );
};

export default AllNews;
