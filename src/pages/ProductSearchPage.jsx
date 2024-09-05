import BangladeshPageBanner from "../assets/images/BannerImages/ProductsPage/Bangladesh-products-banner-1.jpg";
import ProductSearchField from "../components/ProductSearch/ProductSearchField";
import RelatedProductsInProductSearch from "../components/ProductSearch/RelatedProductsInProductSearch";
import Table from "../components/ProductSearch/Table";
import { allDeviceMaxWidth } from "../styles/maxWidth";

const ProductSearchPage = () => {
  return (
    <section>
      {/* Searching Section */}
      <div id="top-section">
        <div>
          <img
            src={BangladeshPageBanner}
            className="w-full"
            alt="A banner showing Rahimafrooz's Globat Ace in a scenario"
          />
        </div>
        <div className={allDeviceMaxWidth+" my-10"}>
          <ProductSearchField />
        </div>
      </div>
      {/* Product Section */}
      <div className={allDeviceMaxWidth+" my-10"}>
        <Table />
        <RelatedProductsInProductSearch />
      </div>
    </section>
  );
};

export default ProductSearchPage;
