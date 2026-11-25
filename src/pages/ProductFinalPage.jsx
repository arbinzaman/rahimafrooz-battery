import { useParams } from "react-router-dom";
import ProductInformation from "../components/ProductFinalPage/ProductInformation";
import ProductSelectionSection from "../components/ProductFinalPage/ProductSelectionSection";
import SimilarProduct from "../components/ProductFinalPage/SimilarProduct";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/shared/Loaders/Loader";

const ProductFinalPage = () => {
  const { shortCode } = useParams();

  const { data: battery = null, isLoading } = useQuery({
    queryKey: ["battery", shortCode],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/batteries/${shortCode}`
      );
      if (!res.ok) return null;
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  if (isLoading || !battery) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section className={`${allDeviceMaxWidth} bg-background `}>
      <ProductSelectionSection key={battery.short_code} battery={battery} />
      <div className="mb-10 mx-3">
        <ProductInformation battery={battery} />
      </div>
      <div className="mx-3">
        <SimilarProduct similarProductProps={{ battery }} />
      </div>
    </section>
  );
};

export default ProductFinalPage;
