import { LuRefreshCcw } from "react-icons/lu";
import BrandImgList from "../../../components/Dashboard/BrandImage/BrandImgList";
import AddBrandImg from "./AddBrandImg";
import { FaRegImage } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";

const AllBrandImg = () => {
  const { data: brandImgs = null, refetch } = useQuery({
    queryKey: ["brandImg"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/brands`);
      const data = await res.json();
      // console.log("Data fetched:", data);
      return data;
    },
    refetchOnWindowFocus: true,
  });

  return (
    <div>
      <h1 className=" flex  justify-center text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase">
        Brand Image <FaRegImage className="ml-2 mt-2" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0 text-white bg-sky-400 hover:bg-sky-700"
            onClick={() =>
              (document.getElementById("addBrandModal").open = true)
            }
          >
            Add new details <BiSolidImageAdd />
          </button>

          <AddBrandImg
            props={{
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

      <BrandImgList
        prompts={{
          brandImgs,
          refetch,
        }}
      />
    </div>
  );
};

export default AllBrandImg;
