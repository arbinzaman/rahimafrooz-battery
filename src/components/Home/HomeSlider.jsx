import React from 'react'
import Slider from "react-slick";
import { homeSlider } from "../../utils/Home/slider";

import "../../styles/Home.css"

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
  return (
    <section className="Home-Slider">
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
    </section>
  )
}

export default HomeSlider