import Slider from "react-slick";

import "../../styles/Home.css";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";

const settingsForProductsDesktopScreen = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  cssEase: "linear",
};

const settingsForProductsMobileScreen = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  cssEase: "linear",
};

const HomeOurBrands = () => {
  const { data: brandImgs = [], error } = useQuery({
    queryKey: ["brandImg"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/brands`);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });
  return (
    <>
      <section className="relative hidden lg:block" style={{ top: "-32px" }}>
        <div className="our-brands text-center">
          <h1 className="text-medium lg:text-large font-semibold text-cyan-700 opacity-95 pt-10  ">
            OUR BRANDS
          </h1>
          <div
            className={allDeviceMaxWidth + " slider-container w-10/12 mx-auto"}
          >
            <Slider {...settingsForProductsDesktopScreen}>
              {error ? (
                <></>
              ) : (
                brandImgs?.map((brandImg) => (
                  <div key={brandImg?.id} className="mx-auto flex flex-col items-center justify-center">
                    <img
                      className="max-w-80 max-h-80 mx-auto"
                      src={brandImg?.image_url}
                      alt={brandImg?.brand_name + " Product Image"}
                    />
                    <p className="-mt-12 mx-auto text-primary font-bold text-regular">{brandImg?.brand_name}</p>
                  </div>
                ))
              )}
            </Slider>
          </div>
        </div>
      </section>

      {/* Mobile screen */}

      <section className="lg:hidden">
        <div className="our-brands text-center">
          <h1 className="text-medium lg:text-large font-semibold text-cyan-700 opacity-95 pt-1 pb-8">
            OUR BRANDS
          </h1>
          <div className="slider-container w-10/12 mx-auto">
            <Slider {...settingsForProductsMobileScreen}>
              {error ? (
                <></>
              ) : (
                brandImgs?.map((brandImg) => (
                  <div key={brandImg?.id} className="mx-auto flex flex-col items-center justify-center">
                  <img
                    className="max-w-80 max-h-80 mx-auto mb-8"
                    src={brandImg?.image_url}
                    alt={brandImg?.brand_name + " Product Image"}
                  />
                  <p className="-mt-12 mx-auto text-primary font-bold text-regular">{brandImg?.brand_name}</p>
                </div>
                ))
              )}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeOurBrands;
