import React, { useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { homeSlider } from "../utils/Home/slider";
import { homeProducts } from "../utils/Home/products";
import { homeCertificates } from "../utils/Home/certificates";

import Car from "../assets/images/HomePage/Icons/CAR.png";
import CommercialVehicle from "../assets/images/HomePage/Icons/Commercial-Vehicle.png";
import ThreeWheeler from "../assets/images/HomePage/Icons/Three-Wheeler.png";
import Motorcycle from "../assets/images/HomePage/Icons/Motorcycle.png";
import Generator from "../assets/images/HomePage/Icons/Generator.png";
import SpecialPurpose from "../assets/images/HomePage/Icons/Special-Purpose.png";
import IPS from "../assets/images/HomePage/Icons/IPS.png";
import Solar from "../assets/images/HomePage/Icons/Solar.png";
import Tractor from "../assets/images/HomePage/Icons/Tractor.png";
import GolfCart from "../assets/images/HomePage/Icons/Golf-Cart.png";
import Forklift from "../assets/images/HomePage/Icons/Forklift.png";
import ElectricVehicle from "../assets/images/HomePage/Icons/Electric-Vehicle.png";

import homeVideo from "../assets/images/HomePage/rahimafrooz-motion-Gif.gif";
import whyChoose from "../assets/images/HomePage/Why-Choose-Rahimafrooz-01.png";
import reviews from "../assets/images/HomePage/Review-01.png";
import newsEvent from "../assets/images/HomePage/News-01.png";

import HomeGoogleMap from "../components/Home/HomeGoogleMap";

import "../styles/Home.css";

const Home = () => {

  const [counterOn, setCounterOn] = useState(false);

  const buttons = [
    {
      id: 1,
      buttonName: "Facebook"
    },
    {
      id: 2,
      buttonName: "Instagram"
    },
    {
      id: 3,
      buttonName: "Linkedin"
    }
  ];

  const settingsForHeroSlide = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 150,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear"
  };

  const settingsForIconSmallScreen = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    pauseOnHover: true,
    cssEase: "linear"
  };

  const settingsForCertificatesLarge = {
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

  const settingsForCertificatesSmall = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear"
  };

  return (
    <div>
      <section className="Home-Slider">
        <div className="slider-container">
          <Slider {...settingsForHeroSlide}>
            {homeSlider?.map((slide) => (
              <img className="w-full" key={slide?.id} src={slide?.sliderImage} alt={slide?.sliderAlt} />
            ))}
          </Slider>
        </div>
      </section>
      <section>
        <div className="icon-BG">

          <div className="max-w-screen-xl mx-auto hidden xl:block">
            <h1 className="uppercase text-center text-3xl text-sky-100 font-semibold pt-16 pb-16">choose your product</h1>
            <div className="grid grid-cols-6 gap-4 text-center">
              <div>
                <img className="w-32 mx-auto" src={Car} alt="car" />
                <h1 className="text-sky-100 text-xl">Passenger Car</h1>
              </div>
              <div>
                <img className="w-28 mx-auto pt-1 pb-2" src={CommercialVehicle} alt="car" />
                <h1 className="text-sky-100 text-xl">Commercial Vehicle</h1>
              </div>
              <div>
                <img className="w-24 mx-auto pt-2 pb-4" src={ThreeWheeler} alt="car" />
                <h1 className="text-sky-100 text-xl">Three Wheeler</h1>
              </div>
              <div>
                <img className="w-24 mx-auto pt-2 pb-4" src={Motorcycle} alt="car" />
                <h1 className="text-sky-100 text-xl">Motorcycle</h1>
              </div>
              <div>
                <img className="w-32 mx-auto" src={Generator} alt="car" />
                <h1 className="text-sky-100 text-xl">Generator</h1>
              </div>
              <div>
                <img className="w-28 mx-auto pt-1 pb-2" src={SpecialPurpose} alt="car" />
                <h1 className="text-sky-100 text-xl">Special Purpose</h1>
              </div>
              <div>
                <img className="w-32 mx-auto" src={IPS} alt="car" />
                <h1 className="text-sky-100 text-xl">IPS</h1>
              </div>
              <div>
                <img className="w-36 mx-auto" src={Solar} alt="car" />
                <h1 style={{ marginTop: "-12px", marginLeft: "-10px" }} className="text-sky-100 text-xl">Solar</h1>
              </div>
              <div>
                <img className="w-28 mx-auto pt-1 pb-2" src={Tractor} alt="car" />
                <h1 className="text-sky-100 text-xl">Tractor</h1>
              </div>
              <div>
                <img className="w-28 mx-auto pt-1 pb-2" src={GolfCart} alt="car" />
                <h1 className="text-sky-100 text-xl">Golf Cart</h1>
              </div>
              <div>
                <img className="w-32 mx-auto" src={Forklift} alt="car" />
                <h1 className="text-sky-100 text-xl">Forklift</h1>
              </div>
              <div>
                <img className="w-28 mx-auto pt-1 pb-2" src={ElectricVehicle} alt="car" />
                <h1 className="text-sky-100 text-xl">Electric Vehicle</h1>
              </div>
            </div>
            <div className="max-w-7xl bg-sky-700 p-3 pl-6 pr-6 rounded-xl mt-20">
              <div className="bg-sky-100 rounded-3xl p-8">
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>CATEGORY</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-40">
                  <option disabled selected>TECHNOLOGY</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>BRAND</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>MODEL</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>YEAR</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>CC</option>
                  <option>Item</option>
                </select>
                <div className="relative hidden md:inline-block">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="w-4 h-4 text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search inline-block max-w-36 p-3 text-sm border border-blue-600 rounded-lg bg-sky-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sky-700 placeholder:font-semibold" placeholder="FIND BATTERY" />
                </div>
              </div>
            </div>
          </div>

          <div className="slider-container w-10/12 mx-auto xl:hidden max-w-sm">
            <h1 className="uppercase text-center text-lg text-sky-100 font-semibold pt-8 pb-8">choose your product</h1>
            <Slider {...settingsForIconSmallScreen}>
              <div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <img className="w-24 mx-auto" src={Car} alt="car" />
                    <h1 className="text-sky-100 text-sm">Passenger Car</h1>
                  </div>
                  <div>
                    <img className="w-20 mx-auto pt-1 pb-2" src={CommercialVehicle} alt="car" />
                    <h1 className="text-sky-100 text-sm">Commercial Vehicle</h1>
                  </div>
                  <div>
                    <img className="w-16 mx-auto pt-2 pb-4" src={ThreeWheeler} alt="car" />
                    <h1 className="text-sky-100 text-sm">Three Wheeler</h1>
                  </div>
                  <div>
                    <img className="w-16 mx-auto pt-2 pb-4" src={Motorcycle} alt="car" />
                    <h1 className="text-sky-100 text-sm">Motorcycle</h1>
                  </div>
                  <div>
                    <img className="w-24 mx-auto" src={Generator} alt="car" />
                    <h1 className="text-sky-100 text-sm">Generator</h1>
                  </div>
                  <div>
                    <img className="w-20 mx-auto pt-1 pb-2" src={SpecialPurpose} alt="car" />
                    <h1 className="text-sky-100 text-sm">Special Purpose</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <img className="w-24 mx-auto" src={IPS} alt="car" />
                    <h1 className="text-sky-100 text-sm">IPS</h1>
                  </div>
                  <div>
                    <img className="w-36 mx-auto" src={Solar} alt="car" />
                    <h1 style={{ marginLeft: "-10px" }} className="text-sky-100 text-sm">Solar</h1>
                  </div>
                  <div>
                    <img className="w-20 mx-auto pt-2 pb-2" src={Tractor} alt="car" />
                    <h1 className="text-sky-100 text-sm">Tractor</h1>
                  </div>
                  <div>
                    <img className="w-20 mx-auto pt-1 pb-2" src={GolfCart} alt="car" />
                    <h1 className="text-sky-100 text-sm">Golf Cart</h1>
                  </div>
                  <div>
                    <img className="w-28 mx-auto" src={Forklift} alt="car" />
                    <h1 className="text-sky-100 text-sm">Forklift</h1>
                  </div>
                  <div>
                    <img className="w-20 mx-auto pt-1 pb-2" src={ElectricVehicle} alt="car" />
                    <h1 className="text-sky-100 text-sm">Electric Vehicle</h1>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="bg-sky-100 p-6 rounded-lg mx-auto mt-8" style={{maxWidth: "21.5rem"}}>
              <div className="grid grid-cols-2 gap-2">
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>CATEGORY</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>MODEL</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>TECHNOLOGY</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>YEAR</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>BRAND</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>CC</option>
                  <option>Item</option>
                </select>
              </div>
              <div className="relative text-center mt-4">
                  <div className="absolute inset-y-0 right-16 flex items-center pr-5 pointer-events-none">
                    <svg className="w-4 h-4 text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search inline-block max-w-40 p-3 text-sm border border-blue-600 rounded-lg bg-sky-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sky-700 placeholder:font-semibold" placeholder="FIND BATTERY" />
                </div>
            </div>
          </div>

        </div>
      </section>
      <section className="border-y-2">
        <HomeGoogleMap />
      </section>
      <section className="bg-white pt-16 pb-16 hidden lg:block">
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
          <img src={homeVideo} alt="video" />
        </div>
      </section>
      <section className="bg-sky-600 rounded-3xl pt-8 pb-8 mt-12 mb-12 lg:hidden max-w-sm mx-auto">
        <div className="text-right max-w-xs mx-auto">
          <h1 className="text-2xl text-center font-semibold text-sky-300 opacity-95 mb-8">ABOUT</h1>
          <p className="text-xs text-left font-medium text-sky-300 opacity-95 mb-8">
            Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi battery industry.
            Rahimafrooz Storage Power Business (RSPB) is the core business of the Group, with
            leadership in the local and some international markets. As the leading supplier of lead
            acid batteries in Bangladesh with the latest technology of batteries, RSPB serves the
            most extensive network of dealers and retailers.
          </p>
          <button className="bg-sky-400 hover:bg-blue-700 text-blue-100 text-sm font-bold py-1 px-3 rounded">
            More Details
          </button>
        </div>
      </section>
      <section>
        <div className="our-brands text-center">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16">OUR BRANDS</h1>
          <div className="slider-container w-10/12 mx-auto">
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
                  <p className="lg:text-xl text-xs pt-5 pb-5">ESTABLISHED IN</p>
                  <h1 className="text-xl lg:text-5xl font-bold">1954</h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="text-xl hidden lg:block pt-5 leading-3">BUSINESS PARTNERS</p>
                  <span className="text-xs hidden lg:block">NATIONAL & INTERNATIONAL</span>
                  <p className="uppercase text-xs pt-5 lg:hidden">presence in countries</p>
                  <h1 className="text-xl lg:text-5xl font-bold pt-5">
                    {counterOn && <CountUp start={0} end={75} duration={2} delay={0} />}
                  </h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="lg:text-xl text-xs pt-5 pb-5">DEALERS</p>
                  <h1 className="text-xl lg:text-5xl font-bold">
                    {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}
                  </h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="lg:text-xl text-xs pt-5 pb-5">PRODUCT IN-USE</p>
                  <h1 className="text-xl lg:text-5xl font-bold">
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
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 text-center text-white pt-16 pb-16">
            <div className="HomeSocial">
              <iframe src="https://www.youtube.com/embed/6GolJa3RKDQ?si=vQcNIUfZ3WfAt3xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="hidden lg:block">
              {buttons.map((button) => (
                <button key={button.id} className="btn btn-outline m-2 mt-0 mb-0">{button.buttonName}</button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* For Large Devices */}
      <section className="hidden lg:block">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16 pb-16">CERTIFICATIONS</h1>
          <div className="slider-container max-w-7xl mx-auto">
            <Slider {...settingsForCertificatesLarge}>
              {homeCertificates?.map((certificate) => (
                <div key={certificate?.id}>
                  <img className="max-w-60 max-h-60 mx-auto" src={certificate?.certificateImage} alt={certificate?.certificateAlt} />
                  <h1 className="text-xl text-cyan-600 pt-8 font-semibold">{certificate.certificateText}</h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* For Small Devices */}
      <section className="lg:hidden">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16 pb-16">CERTIFICATIONS</h1>
          <div className="slider-container max-w-7xl mx-auto">
            <Slider {...settingsForCertificatesSmall}>
              {homeCertificates?.map((certificate) => (
                <div key={certificate?.id}>
                  <img className="max-w-60 max-h-20 mx-auto" src={certificate?.certificateImage} alt={certificate?.certificateAlt} />
                  <h1 className="text-sm text-cyan-600 pt-2 font-semibold">{certificate.certificateText}</h1>
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