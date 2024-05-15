import Slider from "react-slick";
import Product from "./Product";

const ProductsCarousel = ({ products }) => {
  const settingsForLargeScreen = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:4000,
    cssEase: "linear"
  };

  const settingsForMediumScreen = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:4000,
    cssEase: "linear"
  };

  const settingsForSmallScreen = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:4000,
    cssEase: "linear"
  };
  return (
    <section>
      <div className="hidden lg:block slider-container">
        <Slider {...settingsForLargeScreen} className="">
          {products?.map((product) => (
            <Product key={product?.id} productInfo={product} />
          ))}
        </Slider>
      </div>

      <div className="hidden md:block lg:hidden slider-container">
        <Slider {...settingsForMediumScreen} className="">
          {products?.map((product) => (
            <Product key={product?.id} productInfo={product} />
          ))}
        </Slider>
      </div>

      <div className="md:hidden lg:hidden slider-container">
        <Slider {...settingsForSmallScreen} className="">
          {products?.map((product) => (
            <Product key={product?.id} productInfo={product} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsCarousel;
