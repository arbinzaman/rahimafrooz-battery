import Slider from "react-slick";
import { homeSlider } from "../../utils/Home/slider";
import "../../styles/Home.css";
import { useQuery } from "@tanstack/react-query";

const settingsForHeroSlide = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 150,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  cssEase: "linear",
};

const HomeSlider = () => {
  const { data: bannerImages = [] } = useQuery({
    queryKey: ["bannerImages"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/banner-images`);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const pageKey = "home";
  const homeImages =
    (Array.isArray(bannerImages) &&
      bannerImages?.find((item) => item.page_name === pageKey)?.img_url) ||
    [];

  return (
    <section className="Home-Slider">
      {Array.isArray(homeImages) && homeImages?.length !== 0 ? (
        <div className="slider-container">
          <Slider {...settingsForHeroSlide}>
            {homeImages?.map((src, i) => (
              <img
                className="w-full z-10 md:"
                key={i}
                src={src}
                alt={"Home page banner image"}
              />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="slider-container">
          <Slider {...settingsForHeroSlide}>
            {homeSlider?.map((slide) => (
              <img
                className="w-full z-10 md:"
                key={slide?.id}
                src={slide?.sliderImage}
                alt={slide?.sliderAlt}
              />
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default HomeSlider;
