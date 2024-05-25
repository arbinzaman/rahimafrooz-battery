import ProductInformation from "../components/ProductFinalPage/ProductInformation";
import ProductSelectionSection from "../components/ProductFinalPage/ProductSelectionSection";
import SimilarProduct from "../components/ProductFinalPage/SimilarProduct";
import { allDeviceMaxWidth } from "../styles/maxWidth";

const ProductFinalPage = () => {
  return (
    <section
      className={`
      ${allDeviceMaxWidth}
       bg-background 
       my-10 max-w-screen-2xl 
       mx-10 lg:mx-auto`}
    >
      <ProductSelectionSection />
      <div className="w-4/5 mx-auto mb-10">
        <ProductInformation />
      </div>
      <div className="">
        <SimilarProduct />
      </div>
    </section>
  );
};

export default ProductFinalPage;
