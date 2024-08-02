// import { useQuery } from "@tanstack/react-query";
import { LuRefreshCcw } from "react-icons/lu";
import { useState } from "react";
import ImageTextList from "./ImageTextList";
import { GrDocumentImage } from "react-icons/gr";
import imageTextData from "../../../../demoData/ImageText.json";
const AllImageText = () => {
  const [
    ,
    // isLoading
    setIsLoading,
  ] = useState(false);

  const AllImageText = imageTextData;
  //   const { data: AllImageText = null, refetch } = useQuery({

  //     queryKey: ["AllImageText"],
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
  return (
    <div>
      <h1 className="text-medium lg:text-semi_large text-center font-bold mb-10 mt-5 text-primary uppercase flex justify-center ">
        Image & Text {" "}
        <GrDocumentImage  className=" ml-2 mt-2 text-large" />
      </h1>
      <div className="flex justify-between items-center my-3">
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0  bg-sky-500 hover:bg-sky-700 text-white"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Add new details <GrDocumentImage  />
          </button>
          {/* <ImageText props={{ setIsLoading,
            //  refetch 
             }} /> */}
        </div>
        <button
          className="flex gap-2 btn btn-xs  border-0  bg-teal-400 hover:bg-teal-600 text-white"
        //   onClick={refetch}
        >
          Refresh
          <LuRefreshCcw />
        </button>
      </div>

      <ImageTextList
        prompts={{ AllImageText, setIsLoading, 
            // refetch
         }}
      />
    </div>
  );
};

export default AllImageText;
