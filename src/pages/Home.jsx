import React from "react";
import Slider from "react-slick";
import { homeSlider } from "../utils/Home/slider";

import "../styles/Home.css";
const Home = () => {

  const settingsForLargeScreen = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const settingsForMediumScreen = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  const settingsForSmallScreen = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div>
      <section>
        <div className="hidden lg:block slider-container">
          <Slider {...settingsForLargeScreen} className="">
            {homeSlider?.map((slide) => (
              <img key={slide.id} src={slide.sliderImage} alt={slide.sliderAlt} />
            ))}
          </Slider>
        </div>

        <div className="hidden md:block lg:hidden slider-container">
          <Slider {...settingsForMediumScreen} className="">
            {homeSlider?.map((slide) => (
              <img key={slide.id} src={slide.sliderImage} alt={slide.sliderAlt} />
            ))}
          </Slider>
        </div>

        <div className="md:hidden lg:hidden slider-container">
          <Slider {...settingsForSmallScreen} className="">
            {homeSlider?.map((slide) => (
              <img key={slide.id} src={slide.sliderImage} alt={slide.sliderAlt} />
            ))}
          </Slider>
        </div>
      </section>
      <section>
        <div className="icon-BG">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="uppercase text-center text-3xl text-cyan-50 opacity-80 font-semibold pt-16 pb-16">choose your product</h1>
            <div className="grid grid-cols-6 gap-4 text-center">
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
              <p>Icon Image</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home