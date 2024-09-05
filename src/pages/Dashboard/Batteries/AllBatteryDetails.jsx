import { useQuery } from "@tanstack/react-query";
import Loader from "../../../components/shared/Loaders/Loader";
import BatteryDetailsTable from "../../../components/Dashboard/BatteryDetails/BatteryDetailsTable";
import { FaCarBattery } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from "react-router-dom";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";
import CategoriesModal from "../../../components/Dashboard/BatteryDetails/Categories/CategoriesModal"; 

const AllBatteryDetails = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/batteries`;

  const {
    data: allBatteryDetails = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allBatteryDetails"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const openCategoriesModal = () => {
    document.getElementById("categoriesModal").showModal();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div>
        <FetchErrorMessage />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <h1 className="flex justify-center text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Batteries <FaCarBattery className="mt-2 ml-2" />
      </h1>
      <div className="flex gap-4 justify-between mb-4 px-4">
        <div className="flex gap-5">
          <Link to="/dashboard/add-new-battery">
            <button className="flex gap-2 btn btn-xs border-0 hover:bg-sky-700 text-white bg-sky-400 text-xxsmall lg:text-xsmall">
              Add Battery <FaCarBattery />
            </button>
          </Link>
          <div className="flex gap-5">
            <button
              className="flex gap-2 btn btn-xs border-0 hover:bg-lime-700 text-white bg-lime-500 text-xxsmall lg:text-xsmall"
              onClick={openCategoriesModal}
            >
              Categories <TbCategoryPlus />
            </button>
          </div>
        </div>

        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white text-xxsmall lg:text-xsmall"
            onClick={refetch}
          >
            Refresh
            <LuRefreshCcw />
          </button>
        </div>
      </div>

      <div className="">
        <BatteryDetailsTable prompts={{ allBatteryDetails, refetch }} />
      </div>

      {/* Categories Modal */}
      <CategoriesModal refetch={refetch} />
    </div>
  );
};

export default AllBatteryDetails;
