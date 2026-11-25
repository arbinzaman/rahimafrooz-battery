import React from "react";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import Product from "../Products/Product";
import axios from "axios";

const RelatedProductsInProductFinal = ({ relatedProductsProps }) => {
  const { battery } = relatedProductsProps;
  const applicable_categories = battery?.applicable_categories || [];

  const slider = React.useRef(null);
  var settings = {
    dots: true,
    arrows: false,
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
          slidesToShow: 1,
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

  const BATTERIES_BY_CATEGORIES_API = `${
    import.meta.env.VITE_BASE_URL
  }/batteries/category-wise-batteries`;

  const { data: categoryWiseBatteries = [] } = useQuery({
    queryKey: ["categoryWiseBatteries", battery?.short_code],
    queryFn: async () => {
      try {
        const res = await axios.post(
          BATTERIES_BY_CATEGORIES_API,
          applicable_categories
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: true,
  });

  return (
    <section className="m-10">
      <p className="text-semi_large text-center font-semibold text-primary">
        Related Products
      </p>
      <Slider ref={slider} {...settings} className="my-14">
        {categoryWiseBatteries !== null ? (
          categoryWiseBatteries?.map((product) => (
            <Product key={product.id} productInfo={product} />
          ))
        ) : (
          <p>No Related Products Found</p>
        )}
      </Slider>
    </section>
  );
};

export default RelatedProductsInProductFinal;
