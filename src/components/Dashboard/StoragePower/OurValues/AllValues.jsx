import { useQuery } from "@tanstack/react-query";
import { LuRefreshCcw } from "react-icons/lu";
import ValueList from "./ValueList";
import { RxValueNone } from "react-icons/rx";
import AddAValue from "./AddAValueModal";
const AllValues = () => {
  // const allValues =[];
  const { data: allValues = null, refetch } = useQuery({
    queryKey: ["allValues"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/our-values/`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const openModal = () => {
    document.getElementById("values").open = true;
  };

  return (
    <div>
      <h1 className="text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase flex justify-center ">
        Values
        <RxValueNone className=" ml-2 mt-1.5 text-large" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={openModal}
          >
            Add Values <RxValueNone />
          </button>
          <AddAValue
            props={
              {
                 refetch
              }
            }
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

      <ValueList
        prompts={{
          allValues,
          refetch
        }}
      />
    </div>
  );
};

export default AllValues;
