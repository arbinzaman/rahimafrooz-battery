import React from "react";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import Product from "../Products/Product";
const RelatedProductsInProductSearch = () => {
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

  const queryDatas = JSON.parse(window.localStorage.getItem("query_datas"));

  const categoryId = queryDatas?.category || 1;

  const BATTERIES_BY_CATEGORY_API = `${
    import.meta.env.VITE_BASE_URL
  }/categories/${categoryId}`;

  const { data: categoryWiseBatteries = [], error } = useQuery({
    queryKey: ["categoryWiseBatteries"],
    queryFn: async () => {
      try {
        const res = await fetch(BATTERIES_BY_CATEGORY_API);
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnWindowFocus: true,
  });

  return (
    <section className="m-10">
      {error ? (
        <></>
      ) : (
        <div>
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
        </div>
      )}
    </section>
  );
};

export default RelatedProductsInProductSearch;
