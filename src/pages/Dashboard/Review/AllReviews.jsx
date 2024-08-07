// import { useQuery } from "@tanstack/react-query";
import { FaLocationDot } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import ReviewList from "../../../components/Dashboard/Awards/Review/ReviewList";
import AddAReview from "../../../components/Dashboard/Awards/Review/AddAReview";
// import Loader from "../../../components/shared/Loaders/Loader";
// import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";
import ReviewData from "../../../demoData/ReviewData.json";
import { MdReviews } from "react-icons/md";

const AllReviews = () => {
  const allReviews = ReviewData;

  //   const url = `${import.meta.env.VITE_BASE_URL}/contact/global-locations`;

  //   const {
  //     data: allReviews = [],
  //     isLoading,
  //     error,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["allReviews"],
  //     queryFn: async () => {
  //       const res = await fetch(url);
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await res.json();
  //       return data;
  //     },
  //     refetchOnWindowFocus: true,
  //   });

  const handleRefresh = async () => {
    // await refetch();
  };

  const openModal = () => {
    document.getElementById("reviews").showModal();
  };

  //   if (isLoading) {
  //     return <Loader />;
  //   }

  //   if (error) {
  //     return <FetchErrorMessage />;
  //   }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Reviews
      </h1>
      <div className="flex gap-4 justify-between mb-3">
        <div className="flex gap-5">
          <button
            className="btn btn-ghost btn-xs hover:bg-sky-700 text-white bg-sky-400"
            onClick={openModal}
          >
            Add A Review <MdReviews className="mt-0.5" />
          </button>
          <AddAReview
            prompts={
              {
                //  refetch
              }
            }
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
      <ReviewList
        prompts={{
          allReviews,
          // refetch
        }}
      />
    </div>
  );
};

export default AllReviews;
