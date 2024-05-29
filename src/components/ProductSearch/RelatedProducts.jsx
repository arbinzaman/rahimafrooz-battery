import React from "react";
import Slider from "react-slick";
import Product1 from "../../assets/images/BatteryFinalPage/Product-01.png";
import Product2 from "../../assets/images/BatteryFinalPage/Product-02.png";

const RelatedProducts = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
        },
      },
    ],
  };

  const products = [
    { id: 1, imgSrc: Product2, name: "Lucas Ultima Battery", navigateTo: "" },
    { id: 2, imgSrc: Product1, name: "Globatt Ace", navigateTo: "" },
    { id: 3, imgSrc: Product2, name: "Lucas Ultima Battery", navigateTo: "" },
  ];
  return (
    <section className="m-10">
      <p className="text-semi_large text-center font-semibold text-primary">
        Related Products
      </p>
      {/* Slider */}
      <Slider ref={slider} {...settings} className="my-14">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-auto flex flex-col justify-center items-center text-center"
          >
            <div className="flex justify-center">
              <img
                src={product.imgSrc}
                className="h-24 md:h-48 lg:52"
                alt="Product Image"
              />
            </div>
            <p className="text-black">{product.name}</p>
            <button className="px-6 border border-button  text-xxsmall text-button">
              VIEW DETAILS
            </button>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RelatedProducts;
