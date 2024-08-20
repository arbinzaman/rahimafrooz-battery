import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loaders/Loader";
import { LuRefreshCcw } from "react-icons/lu";
import WarrantyServiceList from "../../../components/Dashboard/WarrantyService/WarrantyServiceList";
import { AiOutlineFileDone } from "react-icons/ai";
import Cookies from "js-cookie";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";

const AllWarrantyService = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/warranty-services`;

  const {
    data: allWarrantyDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allWarrantyDetails"],
    queryFn: async () => {
      const res = await fetch(url,{
        headers: {
          Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });
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

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return<FetchErrorMessage/>
  }

  return (
    <div>
      <h1 className="flex justify-center text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Warranty Services
        <AiOutlineFileDone className="mt-2 ml-2" />
      </h1>
      <div className="flex gap-4 justify-between mb-3">
        <div className="flex gap-5"></div>
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
      <WarrantyServiceList
        prompts={{
          allWarrantyDetails,
          refetch,
        }}
      />
    </div>
  );
};

export default AllWarrantyService;
