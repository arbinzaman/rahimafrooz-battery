import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Products/Product';
import { Hourglass } from 'react-loader-spinner';
import axios from 'axios';
import BangladeshPageBanner from '../../assets/images/ProductPageImages/Bangladesh-products-banner-1.jpg';
import { allDeviceMaxWidth } from '../../styles/maxWidth';

const CategoryWiseBatteries = () => {
  const { category_name } = useParams();
  const [batteries, setBatteries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBatteries = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://rahimafrooz-battery-backend.vercel.app/api/v1/categories/${category_name}`
      );
      setBatteries(response.data);
      setIsLoading(false);
    };
    fetchBatteries();
  }, [category_name]);

  const getBangladeshiBatteriesByBrand = (batteries, brandCode) => {
    const brandedBatteries = batteries.filter((battery) => battery?.brand_code === brandCode);
    return brandedBatteries.filter(battery => battery?.country_of_origin === 'Bangladesh');
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

  // Filter out brands with no products
  const filteredBrandAndProducts = brandAndProducts.filter(brand => brand.products.length > 0);

  return (
    <section>
      <div className="relative">
        <p className="absolute bg-primary top-6 left-12 md:top-12 md:left-20 lg:top-20 lg:left-32 text-regular md:text-large lg:text-xlarge text-base px-3 md:px-6 md:py-3 lg:px-10 lg:py-6">
          LOCAL PRODUCTS
        </p>
        <img
          src={BangladeshPageBanner}
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
            {filteredBrandAndProducts.map((brand) => (
              <div className="my-10" key={brand.id}>
                <p className="text-semi_large text-primary font-bold mb-2">
                  {brand.brandName}
                </p>
                <div className="flex flex-wrap">
                  {brand.products.map((product) => (
                    <Product key={product.id} productInfo={product} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </section>
    </section>
  );
};

export default CategoryWiseBatteries;
