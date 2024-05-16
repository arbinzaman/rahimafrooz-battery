import { useState } from "react";
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
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    {
      id: 1,
      buttonName: "Facebook",
    },
    {
      id: 2,
      buttonName: "Instagram",
    },
    {
      id: 3,
      buttonName: "Linkedin",
    },
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
    cssEase: "linear",
  };

  const settingsForIconSmallScreen = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
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
    cssEase: "linear",
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
    cssEase: "linear",
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
    cssEase: "linear",
  };

  const [brand, setBrand] = useState("Brand");
  const [technology, setTechnology] = useState("Technology");
  const [model, setModel] = useState("Model");

  const technologies = [
    { id: 1, value: "Technology" },
    { id: 2, value: "Fuel" },
    { id: 3, value: "Hybrid" },
  ];

  let brands;
  if (technology == "Fuel") {
    brands = [
      { id: 1, value: "Brand" },
      { id: 2, value: "Audi" },
    ];
  } else if (technology == "Hybrid") {
    brands = [
      { id: 1, value: "Brand" },
      { id: 2, value: "BMW" },
      { id: 3, value: "Mercedes" },
    ];
  } else if (technology == "Technology") {
    brands = [{ id: 1, value: "Brand" }];
  }

  let models;
  if (brand == "Audi") {
    models = [
      { id: 1, value: "Model" },
      { id: 2, value: "Audi A3" },
      { id: 3, value: "Audi A7" },
      { id: 4, value: "Audi R8" },
    ];
  } else if (brand == "BMW") {
    models = [
      { id: 1, value: "Model" },
      { id: 2, value: "BMW i4" },
      { id: 3, value: "BMW i6" },
      { id: 4, value: "BMW iX" },
    ];
  } else if (brand == "Mercedes") {
    models = [
      { id: 1, value: "Model" },
      { id: 2, value: "AMG" },
      { id: 3, value: "G-63 Wagon" },
      { id: 4, value: "GLS 300" },
    ];
  } else if (brand == "Brand") {
    models = [{ id: 1, value: "Model" }];
  }

  let years;
  if (model == "Audi A3" || model == "Audi A7" || model == "Audi R8") {
    years = [
      { id: 1, value: "2001" },
      { id: 2, value: "2005" },
      { id: 3, value: "2010" },
    ];
  } else if (model == "BMW i4" || model == "BMW i6" || model == "BMW iX") {
    years = [
      { id: 1, value: "2004" },
      { id: 2, value: "2006" },
      { id: 3, value: "2012" },
    ];
  } else if (model == "AMG" || model == "G-63 Wagon" || model == "GLS 300") {
    years = [
      { id: 1, value: "2008" },
      { id: 2, value: "2011" },
      { id: 3, value: "2016" },
    ];
  } else if (model == "Model") {
    years = [{ id: 1, value: "Year" }];
  }

  const handleNavigation = (e) => {
    e.preventDefault();
    if(model=="Model"){
        toast.error(`Sorry, stock out for model`);
        return;
    }
    if (model != "Audi A3") {
      toast.error(`Sorry, stock out for ${model}`);
      return;
    }
    navigate("/product-search");
  };
  return (
    <div>
      <section className="Home-Slider">
        <div className="slider-container">
          <Slider {...settingsForHeroSlide}>
            {homeSlider?.map((slide) => (
              <img
                className="w-full"
                key={slide?.id}
                src={slide?.sliderImage}
                alt={slide?.sliderAlt}
              />
            ))}
          </Slider>
        </div>
      </section>
      <section>
        <div className="icon-BG">
          <div className="max-w-screen-xl mx-auto hidden xl:block">
            <h1 className="uppercase text-center text-3xl text-sky-100 font-semibold pt-16 pb-16">
              choose your product
            </h1>
            <div className="grid grid-cols-6 gap-4 text-center">
              <div>
                <img className="w-32 mx-auto" src={Car} alt="car" />
                <h1 className="text-sky-100 text-xl">Passenger Car</h1>
              </div>
              <div>
                <img
                  className="w-28 mx-auto pt-1 pb-2"
                  src={CommercialVehicle}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Commercial Vehicle</h1>
              </div>
              <div>
                <img
                  className="w-24 mx-auto pt-2 pb-4"
                  src={ThreeWheeler}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Three Wheeler</h1>
              </div>
              <div>
                <img
                  className="w-24 mx-auto pt-2 pb-4"
                  src={Motorcycle}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Motorcycle</h1>
              </div>
              <div>
                <img className="w-32 mx-auto" src={Generator} alt="car" />
                <h1 className="text-sky-100 text-xl">Generator</h1>
              </div>
              <div>
                <img
                  className="w-28 mx-auto pt-1 pb-2"
                  src={SpecialPurpose}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Special Purpose</h1>
              </div>
              <div>
                <img className="w-32 mx-auto" src={IPS} alt="car" />
                <h1 className="text-sky-100 text-xl">IPS</h1>
              </div>
              <div>
                <img className="w-36 mx-auto" src={Solar} alt="car" />
                <h1
                  style={{ marginTop: "-12px", marginLeft: "-10px" }}
                  className="text-sky-100 text-xl"
                >
                  Solar
                </h1>
              </div>
              <div>
                <img
                  className="w-28 mx-auto pt-1 pb-2"
                  src={Tractor}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Tractor</h1>
              </div>
              <div>
                <img
                  className="w-28 mx-auto pt-1 pb-2"
                  src={GolfCart}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Golf Cart</h1>
              </div>
              <div>
                <img className="w-32 mx-auto" src={Forklift} alt="car" />
                <h1 className="text-sky-100 text-xl">Forklift</h1>
              </div>
              <div>
                <img
                  className="w-28 mx-auto pt-1 pb-2"
                  src={ElectricVehicle}
                  alt="car"
                />
                <h1 className="text-sky-100 text-xl">Electric Vehicle</h1>
              </div>
            </div>
            <div className="bg-[#005bab] p-6 rounded-xl border border-background mx-8 my-20 text-small">
              <div className="bg-background mx-2 py-6 rounded-md">
                <form
                  action=""
                  className="grid grid-cols-1 md:grid-cols-7   gap-4 mx-5"
                  onSubmit={handleNavigation}
                >
                  <select
                    name="category"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">Catergory</option>
                    <option value="">Passenger Car</option>
                  </select>
                  <select
                    name="technology"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                    onChange={(e) => setTechnology(e.target.value)}
                  >
                    {technologies.map((tech) => (
                      <option value={tech.value} key={tech.id}>
                        {tech.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="brand"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    {brands.map((b) => (
                      <option key={b.id} value={b.value}>
                        {b.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="model"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                    onChange={(e) => setModel(e.target.value)}
                  >
                    {models.map((m) => (
                      <option key={m.id} value={m.value}>
                        {m.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="year"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    {years.map((y) => (
                      <option key={y.id} value={y.value}>
                        {y.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="cc"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">CC</option>
                    <option value="">3000</option>
                    <option value="mercedes">1500</option>
                  </select>

                  <button
                    type="submit"
                    className="flex items-center justify-center bg-button2 text-primary font-semibold px-3 py-2 rounded-md border border-primary"
                  >
                    <p className="mx-2">Find Battery</p>
                    <IoSearchSharp />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="slider-container mx-auto xl:hidden">
            <h1 className="uppercase text-center text-lg text-sky-100 font-semibold pt-8 pb-8">
              choose your product
            </h1>
            <Slider {...settingsForIconSmallScreen} className="mx-10">
              <div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <img className="w-24 mx-auto" src={Car} alt="car" />
                    <h1 className="text-sky-100 text-sm">Passenger Car</h1>
                  </div>
                  <div>
                    <img
                      className="w-20 mx-auto pt-1 pb-2"
                      src={CommercialVehicle}
                      alt="car"
                    />
                    <h1 className="text-sky-100 text-sm">Commercial Vehicle</h1>
                  </div>
                  <div>
                    <img
                      className="w-16 mx-auto pt-2 pb-4"
                      src={ThreeWheeler}
                      alt="car"
                    />
                    <h1 className="text-sky-100 text-sm">Three Wheeler</h1>
                  </div>
                  <div>
                    <img
                      className="w-16 mx-auto pt-2 pb-4"
                      src={Motorcycle}
                      alt="car"
                    />
                    <h1 className="text-sky-100 text-sm">Motorcycle</h1>
                  </div>
                  <div>
                    <img className="w-24 mx-auto" src={Generator} alt="car" />
                    <h1 className="text-sky-100 text-sm">Generator</h1>
                  </div>
                  <div>
                    <img
                      className="w-20 mx-auto pt-1 pb-2"
                      src={SpecialPurpose}
                      alt="car"
                    />
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
                    <h1
                      style={{ marginLeft: "-10px" }}
                      className="text-sky-100 text-sm"
                    >
                      Solar
                    </h1>
                  </div>
                  <div>
                    <img
                      className="w-20 mx-auto pt-2 pb-2"
                      src={Tractor}
                      alt="car"
                    />
                    <h1 className="text-sky-100 text-sm">Tractor</h1>
                  </div>
                  <div>
                    <img
                      className="w-20 mx-auto pt-1 pb-2"
                      src={GolfCart}
                      alt="car"
                    />
                    <h1 className="text-sky-100 text-sm">Golf Cart</h1>
                  </div>
                  <div>
                    <img className="w-28 mx-auto" src={Forklift} alt="car" />
                    <h1 className="text-sky-100 text-sm">Forklift</h1>
                  </div>
                  <div>
                    <img
                      className="w-20 mx-auto pt-1 pb-2"
                      src={ElectricVehicle}
                      alt="car"
                    />
                    <h1 className="text-sky-100 text-sm">Electric Vehicle</h1>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="bg-[#005bab] p-3 rounded-xl border border-background mx-8 my-10 text-xxsmall">
              <div className="bg-background mx-0 py-6 rounded-md">
                <form
                  action=""
                  className="grid grid-cols-1 md:grid-cols-7 gap-4 mx-2"
                  onSubmit={handleNavigation}
                >
                  <select
                    name="category"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">Catergory</option>
                    <option value="">Passenger Car</option>
                  </select>
                  <select
                    name="technology"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                    onChange={(e) => setTechnology(e.target.value)}
                  >
                    {technologies.map((tech) => (
                      <option value={tech.value} key={tech.id}>
                        {tech.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="brand"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    {brands.map((b) => (
                      <option key={b.id} value={b.value}>
                        {b.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="model"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                    onChange={(e) => setModel(e.target.value)}
                  >
                    {models.map((m) => (
                      <option key={m.id} value={m.value}>
                        {m.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="year"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    {years.map((y) => (
                      <option key={y.id} value={y.value}>
                        {y.value}
                      </option>
                    ))}
                  </select>

                  <select
                    name="cc"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">CC</option>
                    <option value="">3000</option>
                    <option value="mercedes">1500</option>
                  </select>

                  <button
                    type="submit"
                    className="flex items-center justify-center col-span-2 md:col-span-1 bg-button2 text-primary font-semibold px-3 py-2 rounded-md border border-primary"
                  >
                    <p className="mx-2">Find Battery</p>
                    <IoSearchSharp />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y-2">
        <HomeGoogleMap />
      </section>
      <section className="bg-white py-10 hidden lg:block">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 mb-8">
            ABOUT US
          </h1>
          <p className="text-regular text-gray-500 opacity-95 mb-4">
            Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi
            battery industry. Rahimafrooz Storage Power Business (RSPB) is the
            core business of the Group, with leadership in the local and some
            international markets. As the leading supplier of lead acid
            batteries in Bangladesh with the latest technology of batteries,
            RSPB serves the most extensive network of dealers and retailers.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded" onClick={()=>window.location.replace("https://www.rahimafrooz.com/")}>
            More Details
          </button>
        </div>
      </section>
      <section className="bg-white ">
        <div className="text-center max-w-7xl mx-auto">
          <img src={homeVideo} alt="video" />
        </div>
      </section>
      <section className="bg-sky-600 rounded-3xl pt-8 pb-8 mt-12 mb-12 lg:hidden max-w-sm mx-auto">
        <div className="text-right max-w-xs mx-auto">
          <h1 className="text-2xl text-center font-semibold text-sky-300 opacity-95 mb-8">
            ABOUT
          </h1>
          <p className="text-xs text-left font-medium text-sky-300 opacity-95 mb-8">
            Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi
            battery industry. Rahimafrooz Storage Power Business (RSPB) is the
            core business of the Group, with leadership in the local and some
            international markets. As the leading supplier of lead acid
            batteries in Bangladesh with the latest technology of batteries,
            RSPB serves the most extensive network of dealers and retailers.
          </p>
          <button className="bg-sky-400 hover:bg-blue-700 text-blue-100 text-sm font-bold py-1 px-3 rounded">
            More Details
          </button>
        </div>
      </section>
      <section>
        <div className="our-brands text-center">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16">
            OUR BRANDS
          </h1>
          <div className="slider-container w-10/12 mx-auto">
            <Slider {...settingsForProducts}>
              {homeProducts?.map((product) => (
                <img
                  className="max-w-80 max-h-80"
                  key={product?.id}
                  src={product?.productImage}
                  alt={product?.productAlt}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div className="home-counter">
          <div className="max-w-screen-xl mx-auto">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="grid grid-cols-4 gap-4 text-center text-white pt-20">
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="lg:text-xl text-xs pt-5 pb-5">ESTABLISHED IN</p>
                  <h1 className="text-xl lg:text-5xl font-bold">1954</h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="text-xl hidden lg:block pt-5 leading-3">
                    BUSINESS PARTNERS
                  </p>
                  <span className="text-xs hidden lg:block">
                    NATIONAL & INTERNATIONAL
                  </span>
                  <p className="uppercase text-xs pt-5 lg:hidden">
                    presence in countries
                  </p>
                  <h1 className="text-xl lg:text-5xl font-bold pt-5">
                    {counterOn && (
                      <CountUp start={0} end={75} duration={2} delay={0} />
                    )}
                  </h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="lg:text-xl text-xs pt-5 pb-5">DEALERS</p>
                  <h1 className="text-xl lg:text-5xl font-bold">
                    {counterOn && (
                      <CountUp start={0} end={1000} duration={2} delay={0} />
                    )}
                  </h1>
                </div>
                <div>
                  <BuildingOffice2Icon className="w-12 h-12 mt-1 mx-auto" />
                  <p className="lg:text-xl text-xs pt-5 pb-5">PRODUCT IN-USE</p>
                  <h1 className="text-xl lg:text-5xl font-bold">
                    {counterOn && (
                      <CountUp start={0} end={1000} duration={2} delay={0} />
                    )}
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
              <iframe
                src="https://www.youtube.com/embed/6GolJa3RKDQ?si=vQcNIUfZ3WfAt3xw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="hidden lg:block">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className="btn btn-outline m-2 mt-0 mb-0"
                >
                  {button.buttonName}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* For Large Devices */}
      <section className="hidden lg:block">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16 pb-16">
            CERTIFICATIONS
          </h1>
          <div className="slider-container max-w-7xl mx-auto">
            <Slider {...settingsForCertificatesLarge}>
              {homeCertificates?.map((certificate) => (
                <div key={certificate?.id}>
                  <img
                    className="max-w-60 max-h-60 mx-auto"
                    src={certificate?.certificateImage}
                    alt={certificate?.certificateAlt}
                  />
                  <h1 className="text-xl text-cyan-600 pt-8 font-semibold">
                    {certificate.certificateText}
                  </h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* For Small Devices */}
      <section className="lg:hidden">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16 pb-16">
            CERTIFICATIONS
          </h1>
          <div className="slider-container max-w-7xl mx-auto">
            <Slider {...settingsForCertificatesSmall}>
              {homeCertificates?.map((certificate) => (
                <div key={certificate?.id}>
                  <img
                    className="max-w-60 max-h-20 mx-auto"
                    src={certificate?.certificateImage}
                    alt={certificate?.certificateAlt}
                  />
                  <h1 className="text-sm text-cyan-600 pt-2 font-semibold">
                    {certificate.certificateText}
                  </h1>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
