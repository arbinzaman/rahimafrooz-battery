import { useParams } from "react-router-dom";
import ProductInformation from "../components/ProductFinalPage/ProductInformation";
import ProductSelectionSection from "../components/ProductFinalPage/ProductSelectionSection";
import SimilarProduct from "../components/ProductFinalPage/SimilarProduct";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";
import { Hourglass } from "react-loader-spinner";

const ProductFinalPage = () => {
  const { shortCode } = useParams();
  
  const { data: battery = [], isLoading } = useQuery({
    queryKey: ["battery"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/batteries/${shortCode}`
      );
      const data = await res.json();
      // console.log("Data fetched:", data);
      return data;
    },
    refetchOnWindowFocus: true,
  });
  
  return (
    <section className={`${allDeviceMaxWidth} bg-background `}>
      {isLoading ? (
        <div className="flex justify-center my-20">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />
        </div>
      ) : (
        <>
          <ProductSelectionSection battery={battery}/>
          <div className="mb-10 mx-3">
            <ProductInformation battery={battery}/>
          </div>
          <div className="mx-3">
            <SimilarProduct />
          </div>
        </>
      )}
    </section>
  );
};

export default ProductFinalPage;
