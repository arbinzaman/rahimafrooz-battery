import BangladeshPageBanner from "../assets/images/ProductPageImages/Bangladesh-products-banner-1.jpg";
import ProductSearchField from "../components/ProductSearch/ProductSearchField";
import RelatedProducts from "../components/ProductSearch/RelatedProducts";
import Table from "../components/ProductSearch/Table";

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
        <div className="my-10 max-w-screen-2xl mx-10 lg:mx-auto">
          <ProductSearchField />
        </div>
      </div>
      {/* Product Section */}
      <div className="my-10 max-w-screen-2xl mx-10 lg:mx-auto">
        <Table />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default ProductSearchPage;
