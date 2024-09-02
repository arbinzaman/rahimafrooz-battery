import ProductsCarousel from "../../components/Products/ProductsCarousel";
import InternationalPageBanner from "../../assets/images/ProductPageImages/International-products-banner.jpg";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import axios from "axios";
import { useEffect, useState } from "react";

const International = () => {
  const [batteries, setBatteries] = useState([]);

  useEffect(() => {
    const fetchBatteries = async () => {
      const batteries = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/batteries`
      );
      setBatteries(batteries.data);
    };
    fetchBatteries();
  }, []);

  const groupBatteriesByBrand = (batteries) => {
    const grouped = batteries?.reduce((acc, battery) => {
      const { brand_code } = battery;

      if (battery?.country_of_origin === "Bangladesh") return acc;

      if (!acc[brand_code]) {
        acc[brand_code] = {
          id: Object.keys(acc).length + 1,
          brandName: brand_code,
          products: [],
        };
      }
      acc[brand_code]?.products?.push(battery);
      return acc;
    }, {});
    return Object.values(grouped);
  };

  const batteriesGroupedByBrand = groupBatteriesByBrand(batteries);

  const filteredBrandAndProducts = Object.values(batteriesGroupedByBrand)?.map(
    (brand, index) => ({
      id: index + 1,
      brandName: brand?.brandName,
      products: brand?.products,
    })
  );

  console.log(filteredBrandAndProducts);
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
        {filteredBrandAndProducts?.map((brand) => (
          <div className="my-10" key={brand?.id}>
            <div>
              <p className="text-semi_large text-primary font-bold mb-2">
                {brand?.brandName}
              </p>
              <p className="border border-primary mb-4"></p>
            </div>
            <ProductsCarousel products={brand?.products} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default International;
