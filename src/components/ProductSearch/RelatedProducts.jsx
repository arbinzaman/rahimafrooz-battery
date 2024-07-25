import React from "react";
import Slider from "react-slick";
import Product1 from "../../assets/images/BatteryFinalPage/Product-01.png";
import Product2 from "../../assets/images/BatteryFinalPage/Product-02.png";
import { useQuery } from "@tanstack/react-query";
import Product from "../Products/Product";

const RelatedProducts = () => {
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

  const queryDatas = JSON.parse(window.localStorage.getItem("query_datas")|| {});
  const categoryId = queryDatas.category;

  const CATEGORIES_API_URL = `${import.meta.env.VITE_BASE_URL}/categories`;
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(CATEGORIES_API_URL);
      const data = await res.json();
      return data;
    },
  });
  
  const category = categories?.find((category) => category.category_id == categoryId);
  console.log(category)
  const CATEGORY_WISE_PRODUCT_API_URL = `${import.meta.env.VITE_BASE_URL}/categories/${category?.category_name}`;
  const { data: categoryWiseBatteries = [] } = useQuery({
    queryKey: ["categoryWiseBatteries"],
    queryFn: async () => {
      const res = await fetch(CATEGORY_WISE_PRODUCT_API_URL);
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="m-10">
      <p className="text-semi_large text-center font-semibold text-primary">
        Related Products
      </p>
      <Slider ref={slider} {...settings} className="my-14">
        {categoryWiseBatteries !== null ? categoryWiseBatteries?.map((product) => (
          <Product key={product.id} productInfo={product} />
        )): <p>No Related Products Found</p>}
      </Slider>
    </section>
  );
};

export default RelatedProducts;
