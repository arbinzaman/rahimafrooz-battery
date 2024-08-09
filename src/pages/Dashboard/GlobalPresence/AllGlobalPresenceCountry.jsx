import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import Loader from "../../../components/shared/Loaders/Loader";
import AddAGlobalPresenceCountry from "../../../components/Dashboard/GlobalPresence/AddAGlobalPresenceCountry";
import GlobalPresenceCountryList from "../../../components/Dashboard/GlobalPresence/GlobalPresenceCountryList";
import { AiOutlineGlobal } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const AllGlobalPresenceCountry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: countryList = [], refetch } = useQuery({
    queryKey: ["countryList"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/global-presence/`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const openModal = () => {
    document.getElementById("AddCountry").open = true;
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className=" flex  justify-center text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase">
        Global Presence Country List <AiOutlineGlobal className="ml-2 mt-2" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0 text-white bg-sky-400 hover:bg-sky-700"
            onClick={openModal}
          >
            Add new continent and countries <AiOutlineGlobal />
          </button>

          <AddAGlobalPresenceCountry
            props={{
              setIsLoading,
              refetch,
            }}
          />
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0 text-white bg-teal-400 hover:bg-teal-700"
          onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <GlobalPresenceCountryList
        prompts={{
          countryList,
          refetch,
        }}
      />
    </div>
  );
};

export default AllGlobalPresenceCountry;
