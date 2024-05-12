import React, { useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { homeSlider } from "../utils/Home/slider";
import { homeIcon } from "../utils/Home/icon";
import { homeProducts } from "../utils/Home/products";
import { homeCertificates } from "../utils/Home/certificates";

import homeVideo from "../assets/videos/rahimafrooz-motion.mp4";
import whyChoose from "../assets/images/HomePage/Why-Choose-Rahimafrooz-01.png";
import reviews from "../assets/images/HomePage/Review-01.png";
import newsEvent from "../assets/images/HomePage/News-01.png";

import "../styles/Home.css";

const Home = () => {

  const [counterOn, setCounterOn] = useState(false);

  const buttons = ["Facebook", "Instagram", "Linkedin"];

  const settingsForHeroSlide = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  const settingsForProducts = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  const settingsForCertificates = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  return (
    <div>
      <section className="Home-Slider">
        <div className="slider-container">
          <Slider {...settingsForHeroSlide} className="">
            {homeSlider?.map((slide) => (
              <img className="w-full" key={slide?.id} src={slide?.sliderImage} alt={slide?.sliderAlt} />
            ))}
          </Slider>
        </div>
      </section>
      <section>
        <div className="icon-BG">
          <div className="max-w-screen-xl mx-auto">
            <h1 className="uppercase text-center text-3xl text-cyan-50 opacity-80 font-semibold pt-16 pb-16">choose your product</h1>
            <div className="grid grid-cols-6 gap-4 text-center">
              {homeIcon?.map((icon) => (
                <div key={icon?.id} className="mb-12">
                  <img className="w-32 max-w-32 mx-auto" src={icon?.iconImage} alt={icon?.iconText} />
                  <h1 className="text-white text-xl">{icon?.iconText}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-y-2">
        <h1 className="text-center text-cyan-600 text-3xl mt-8 mb-8">Deader Location Under Constuction...</h1>
      </section>
      <section className="bg-white pt-16 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 mb-8">ABOUT US</h1>
          <p className="text-2xl font-medium text-gray-500 opacity-95 mb-8">
            Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi battery industry.
            Rahimafrooz Storage Power Business (RSPB) is the core business of the Group, with
            leadership in the local and some international markets. As the leading supplier of lead
            acid batteries in Bangladesh with the latest technology of batteries, RSPB serves the
            most extensive network of dealers and retailers.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
            More Details
          </button>
        </div>
      </section>
      <section className="bg-white pt-16 pb-16">
        <div className="text-center max-w-7xl mx-auto">
          <video controls>
            <source src={homeVideo} type="video/mp4" />
          </video>
        </div>
      </section>
      <section>
        <div className="our-brands text-center">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16">OUR BRANDS</h1>
          <div className="slider-container max-w-7xl mx-auto">
            <Slider {...settingsForProducts}>
              {homeProducts?.map((product) => (
                <img className="max-w-80 max-h-80" key={product?.id} src={product?.productImage} alt={product?.productAlt} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div className="home-counter">
          <div className="max-w-screen-xl mx-auto">
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
              <div className="grid grid-cols-4 gap-4 text-center text-white pt-20">
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="text-xl pt-5 pb-5">ESTABLISHED IN</p>
                  <h1 className="text-5xl font-bold">1954</h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="text-xl pt-5 leading-3">BUSINESS PARTNERS</p>
                  <span className="text-xs">NATIONAL & INTERNATIONAL</span>
                  <h1 className="text-5xl font-bold pt-5">
                    {counterOn && <CountUp start={0} end={75} duration={2} delay={0} />}
                  </h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="text-xl pt-5 pb-5">DEALERS</p>
                  <h1 className="text-5xl font-bold">
                    {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}
                  </h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="text-xl pt-5 pb-5">PRODUCT IN-USE</p>
                  <h1 className="text-5xl font-bold">
                    {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}
                  </h1>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 gap-16 text-center text-white pt-16 pb-16">
            <div className="shadow-2xl">
              <img src={whyChoose} alt="RAHIMAFROOZ" />
            </div>
            <div className="shadow-2xl">
              <img src={reviews} alt="reviews" />
            </div>
            <div className="shadow-2xl">
              <img src={newsEvent} alt="news" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 gap-16 text-center text-white pt-16 pb-16">
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mwMK4CusCG0?si=4JOHVfH0f2TbC41m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
              {buttons.map((button) => (
                <button className="btn btn-outline m-2 mt-0 mb-0">{button}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16 pb-16">CERTIFICATIONS</h1>
          <div className="slider-container max-w-7xl mx-auto">
            <Slider {...settingsForCertificates}>
              {homeCertificates?.map((certificate) => (
                <div>
                  <img className="max-w-60 max-h-60 mx-auto" key={certificate?.id} src={certificate?.certificateImage} alt={certificate?.certificateAlt} />
                  <h1 className="text-xl text-cyan-600 pt-8 font-semibold">{certificate.certificateText}</h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home