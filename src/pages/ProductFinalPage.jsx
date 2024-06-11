import { useParams } from "react-router-dom";
import ProductInformation from "../components/ProductFinalPage/ProductInformation";
import ProductSelectionSection from "../components/ProductFinalPage/ProductSelectionSection";
import SimilarProduct from "../components/ProductFinalPage/SimilarProduct";
import { allDeviceMaxWidth } from "../styles/maxWidth";

const ProductFinalPage = () => {
  const {shortCode} = useParams();
  console.log(shortCode)
  return (
    <section
      className={`${allDeviceMaxWidth} bg-background `}
    >
      <ProductSelectionSection />
      <div className="mb-10 mx-3">
        <ProductInformation />
      </div>
      <div className="mx-3">
        <SimilarProduct />
      </div>
    </section>
  );
};

export default ProductFinalPage;
