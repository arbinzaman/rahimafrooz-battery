import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Products/Product";
import axios from "axios";
import BangladeshPageBanner from "../../assets/images/BannerImages/ProductsPage/Bangladesh-products-banner-1.jpg";
import { allDeviceMaxWidth } from "../../styles/maxWidth";

const CategoryWiseBatteries = () => {
  const { category_name } = useParams();
  const [batteries, setBatteries] = useState([]);

  useEffect(() => {
    const fetchBatteries = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories/name/${category_name}`
      );
      setBatteries(response.data);
    };
    fetchBatteries();
  }, [category_name]);

  const groupBatteriesByBrand = (batteries) => {
    const grouped = batteries?.reduce((acc, battery) => {
      const { brand_code } = battery;

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

  return (
    <section>
      <div className="relative">
        <p className="absolute bg-primary top-6 left-12 md:top-12 md:left-20 lg:top-20 lg:left-32 text-regular md:text-large lg:text-xlarge text-base px-3 md:px-6 md:py-3 lg:px-10 lg:py-6">
          {category_name} Batteries
        </p>
        <img
          src={BangladeshPageBanner}
          className="w-full"
          alt="A banner showing Rahimafrooz's Globat Ace in a scenario"
        />
      </div>

      <section className={allDeviceMaxWidth}>
        {filteredBrandAndProducts.map((brand) => (
          <div className="my-10" key={brand.id}>
            <div>
              <p className="text-semi_large text-primary font-bold mb-2">
                {brand?.brandName}
              </p>
              <p className="border border-primary mb-4"></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {brand.products.map((product) => (
                <Product key={product.id} productInfo={product} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default CategoryWiseBatteries;
