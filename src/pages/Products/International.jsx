import ProductsCarousel from "../../components/Products/ProductsCarousel";
import InternationalPageBanner from "../../assets/images/ProductPageImages/International-products-banner.jpg";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import axios from "axios";
import { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";

const International = () => {
  const [batteries, setBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchBatteries = async () => {
      setIsLoading(true);
      const batteries = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/batteries`
      );
      setBatteries(batteries.data);
      setIsLoading(false);
    };
    fetchBatteries();
  }, []);

  const getBangladeshiBatteriesByBrand = (batteries, brandCode) => {
    const brandedBatteries =  batteries.filter((battery) => battery?.brand_code === brandCode);
    return brandedBatteries.filter(battery=> battery?.country_of_origin !== 'Bangladesh');
  };

  const brandAndProducts = [
    {
      id: 1,
      brandName: "LUCAS",
      products: getBangladeshiBatteriesByBrand(batteries, "LUCAS"),
    },
    {
      id: 2,
      brandName: "GLOBATT",
      products: getBangladeshiBatteriesByBrand(batteries, "GLOBATT"),
    },
    {
      id: 3,
      brandName: "DELTA",
      products: getBangladeshiBatteriesByBrand(batteries, "DELTA"),
    },
    {
      id: 4,
      brandName: "SPARK",
      products: getBangladeshiBatteriesByBrand(batteries, "SPARK"),
    },
  ];
  return (
      <section>
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

        <section className={allDeviceMaxWidth}>
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
            {brandAndProducts?.map((brand) => (
              <div className="my-10" key={brand?.id}>
                <p className="text-semi_large text-primary font-bold mb-2">
                  {brand?.brandName}
                </p>
                <ProductsCarousel products={brand?.products} />
              </div>
            ))}
          </>
        )}
      </section>
    </section>
  );
};

export default International;
