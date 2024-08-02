// import { useQuery } from "@tanstack/react-query";
import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import Loader from "../../../components/shared/Loaders/Loader";
import BrandImgList from "../../../components/Dashboard/BrandImage/BrandImgList";
import BrandData from "../../../demoData/BrandsData.json";
import AddBrandImg from "./AddBrandImg";
import { FaRegImage } from "react-icons/fa";
import { BiSolidImageAdd } from "react-icons/bi";

const AllBrandImg = () => {
  const [isLoading, setIsLoading] = useState(false);
  const brandImg = BrandData;

  //   const { data: brandImg = null, refetch } = useQuery({
  //     queryKey: ["brandImg"],
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
        Brand Image <FaRegImage className="ml-2 mt-2" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0 text-white bg-sky-400 hover:bg-sky-700"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add new details <BiSolidImageAdd />
          </button>
          
          <AddBrandImg
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

      <BrandImgList
        prompts={{
          brandImg,
          setIsLoading,
          // refetch
        }}
      />
    </div>
  );
};

export default AllBrandImg;
