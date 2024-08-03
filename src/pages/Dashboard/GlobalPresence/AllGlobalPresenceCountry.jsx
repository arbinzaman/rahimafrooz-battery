import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import Loader from "../../../components/shared/Loaders/Loader";
import regions from "../../../demoData/regions.json";
import AddAGlobalPresenceCountry from "../../../components/Dashboard/GlobalPresence/AddAGlobalPresenceCountry";
import GlobalPresenceCountryList from "../../../components/Dashboard/GlobalPresence/GlobalPresenceCountryList";
import { AiOutlineGlobal } from "react-icons/ai";

const AllGlobalPresenceCountry = () => {
  const [isLoading, setIsLoading] = useState(false);
  const countryList = regions;

  //   const { data: countryList = null, refetch } = useQuery({
  //     queryKey: ["countryList"],
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
            onClick={() => document.getElementById("AddCountry").showModal()}
          >
            Add new country <AiOutlineGlobal />
          </button>
          
          <AddAGlobalPresenceCountry
            props={{
              setIsLoading,
              //  refetch
            }}
          />
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0 text-white bg-teal-400 hover:bg-teal-700"
          //   onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <GlobalPresenceCountryList
        prompts={{
          countryList,
          setIsLoading,
          // refetch
        }}
      />
    </div>
  );
};

export default AllGlobalPresenceCountry;
