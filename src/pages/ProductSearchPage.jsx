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
        <div className="bg-circuit-texture py-12 bg-primary">
          <ProductSearchField/>
        </div>
      </div>
      {/* Product Section */}
      <div className="mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
        <Table/>
        <RelatedProducts/>
      </div>
    </section>
  );
};

export default ProductSearchPage;
