// import { useQuery } from "@tanstack/react-query";
// import Loader from "../../../components/shared/Loaders/Loader";
import {  FaUsersRectangle } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import allBoardMembersData from "../../../demoData/FounderAndBoardMembersData.json";
import AddABoardMembers from "../../../components/Dashboard/FounderAndBoardMembers/AddABoardMembers";
import BoardMembersList from "../../../components/Dashboard/FounderAndBoardMembers/BoardMembersList";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";

const AllBoardMembers = () => {
  const allBoardMembers = allBoardMembersData;
  //   const url = `${import.meta.env.VITE_BASE_URL}/contact/global-locations`;

  //   const {
  //     data: allBoardMembers = [],
  //     isLoading,
  //     error,
  //     refetch,
  //   } = useQuery({
  //     queryKey: ["allBoardMembers"],
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
    document.getElementById("addBoardMembers").open = true;
  };

  //   if (isLoading) {
  //     return <Loader />;
  //   }

    // if (error) {
    //   return<FetchErrorMessage/>
    // }

  return (
    <div>
      <h1 className="flex justify-center text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Board Members <FaUsersRectangle className="mt-2 ml-2" />
      </h1>
      <div className="flex gap-4 justify-between mb-3">
        <div className="flex gap-5">
          <button
            className="flex gap-2 btn btn-xs bg-primary hover:bg-secondary text-white"
            onClick={openModal}
          >
            Add A Board Member <FaUsersRectangle />
          </button>
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
      <BoardMembersList
        prompts={{
          allBoardMembers,
          //  refetch
        }}
      />
      <AddABoardMembers 
    //   addBoardMembersProps = {{refetch}}
      />
    </div>
  );
};

export default AllBoardMembers;
