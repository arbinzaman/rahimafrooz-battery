import ProductsCarousel from "../../components/Products/ProductsCarousel";
import { brandAndProducts } from "../../utils/Products/Brands";
import InternationalPageBanner from "../../assets/images/ProductPageImages/International-products-banner.jpg";

const International = () => {
  return (
    <div>
      <section className="bg-cross-pattern">
        <div className="relative">
          <div className="absolute text-center bg-primary top-6 left-12 md:top-12 md:left-20 lg:top-20 lg:left-32 text-regular md:text-large lg:text-xlarge text-base px-3 md:px-6 md:py-3 lg:px-10 lg:py-6">
            <p>INTERNATIONAL</p>
            <p className="mt-0 md:mt-3 lg:mt-8">PRODUCTS</p>
          </div>
          <img
            src={InternationalPageBanner}
            className="w-full"
            alt="A banner showing Rahimafrooz's Globat Ace in a scenario"
          />
        </div>

        <section className="mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
          {brandAndProducts?.map((brand) => (
            <div className="my-10" key={brand?.id}>
              <p className="text-semi_large text-primary font-bold mb-2">
                {brand?.brandName}
              </p>
              <ProductsCarousel products={brand?.products} />
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default International;
