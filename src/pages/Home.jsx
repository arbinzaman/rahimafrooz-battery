import { useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
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
import EstablishedIcon from "../assets/icons/factory.png";
import WorldIcon from "../assets/icons/world.png";
import HandShake from "../assets/icons/handshake.png";
import CarBattery from "../assets/icons/battery.png";
import homeVideo from "../assets/images/HomePage/rahimafrooz-motion-Gif.gif";
import whyChoose from "../assets/images/HomePage/Why-Choose-Rahimafrooz-01.png";
import reviews from "../assets/images/HomePage/Review-01.png";
import newsEvent from "../assets/images/HomePage/News-01.png";
import HomeGoogleMap from "../components/Home/HomeGoogleMap";
import "../styles/Home.css";
import { InstagramEmbed } from "react-social-media-embed";
import ProductSearchField from "../components/ProductSearch/ProductSearchField";
import Loader from "../components/shared/Loaders/Loader";
import { useLoading } from "../contexts/LoadingContext";

const Home = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [counterOn, setCounterOn] = useState(false);
  const [socialSelect, setSocialSelect] = useState(0);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  // Set isLoading to false when the iframe finishes loading
  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const socialSelectButtons = [
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

  const SocialSelectComponents = ({ index }) => {
    switch (index) {
      case 0:
        return (
          <>
            {isLoading && <Loader />}
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRahimafrooz&tabs=timeline&width=560&height=320&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="560"
              height="280"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              // eslint-disable-next-line react/no-unknown-property
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            ></iframe>
          </>
        );
      case 1:
        return (
          <>
            {isLoading && <Loader />}
            <InstagramEmbed
              url="https://www.instagram.com/rahimafroozbd/"
              width={560}
              height={280}
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            />
          </>
        );
        // eslint-disable-next-line no-unreachable
        break;
      case 2:
        return (
          <>
            {" "}
            {isLoading && <Loader />}
            <InstagramEmbed
              url="https://www.instagram.com/rahimafroozbd/"
              width={560}
              height={280}
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            />
            <iframe
              src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25420059"
              // eslint-disable-next-line react/no-unknown-property
              frameborder="0"
              width="560"
              height="280"
              onLoad={handleLoadEnd}
              // eslint-disable-next-line react/no-unknown-property
              onLoadStart={handleLoadStart}
            ></iframe>
          </>
        );
        // eslint-disable-next-line no-unreachable
        break;

      default:
        break;
    }
  };

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
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
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
            <ProductSearchField/>
          </div>
          <div className="slider-container w-10/12 mx-auto xl:hidden max-w-sm">
            <h1 className="uppercase text-center text-lg text-sky-100 font-semibold pt-8 pb-8">
              choose your product
            </h1>
            <Slider {...settingsForIconSmallScreen}>
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
           <ProductSearchField/>
          </div>
        </div>
      </section>
      <section className="border-y-2 relative" style={{ top: "-32px" }}>
        <HomeGoogleMap />
      </section>
      <section
        className="pt-8 pb-8 hidden lg:block relative"
        style={{ top: "-32px", backgroundColor: "#fbfbfb" }}
      >
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 mb-8">
            ABOUT US
          </h1>
          <p className="text-2xl font-medium text-gray-500 opacity-95 mb-8">
            Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi
            battery industry. Rahimafrooz Storage Power Business (RSPB) is the
            core business of the Group, with leadership in the local and some
            international markets. As the leading supplier of lead acid
            batteries in Bangladesh with the latest technology of batteries,
            RSPB serves the most extensive network of dealers and retailers.
          </p>
          <a href="/manufacturing">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
              More Details
            </button>
          </a>
        </div>
      </section>
      <section
        className="pt-16 pb-16 relative"
        style={{ top: "-32px", backgroundColor: "#fbfbfb" }}
      >
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
      <section className="relative" style={{ top: "-32px" }}>
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
      <section className="relative" style={{ top: "-32px" }}>
        <div className="home-counter">
          <div className="max-w-screen-xl mx-auto">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="grid grid-cols-4 gap-4 text-center text-white pt-20">
                <div>
                  <img
                    src={EstablishedIcon}
                    alt="icon"
                    className="w-12 h-12 mt-1 mx-auto"
                  />
                  <p className="lg:text-xl text-xs pt-5 pb-5">ESTABLISHED IN</p>
                  <h1 className="text-xl lg:text-5xl font-bold">1954</h1>
                </div>
                <div>
                  <img
                    src={WorldIcon}
                    alt="icon"
                    className="w-12 h-12 mt-1 mx-auto"
                  />
                  <p className="text-xl hidden lg:block pt-5 leading-5">
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
                  <img
                    src={HandShake}
                    alt="icon"
                    className="w-16 h-16 mx-auto"
                  />
                  <p className="lg:text-xl text-xs pt-3 pb-5">DEALERS</p>
                  <h1 className="text-xl lg:text-5xl font-bold">
                    {counterOn && (
                      <CountUp start={0} end={1000} duration={2} delay={0} />
                    )}
                  </h1>
                </div>
                <div>
                  <img
                    src={CarBattery}
                    alt="icon"
                    className="w-12 h-12 mt-1 mx-auto"
                  />
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
          <div className="grid grid-cols-3 gap-4 mr-4 ml-4 lg:gap-16 text-center text-white pt-8 pb-8">
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
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 text-center text-white pt-8 pb-8">
            <div className="HomeSocial">
              <iframe
                src="https://www.youtube.com/embed/6GolJa3RKDQ?si=vQcNIUfZ3WfAt3xw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="hidden lg:block text-left bg-white">
              {socialSelectButtons.map((button, index) => {
                return (
                  <button
                    key={index}
                    className={
                      socialSelect == index
                        ? "HomeSocialButtomSelect"
                        : "HomeSocialButtom"
                    }
                    onClick={() => setSocialSelect(index)}
                  >
                    {button.buttonName}
                  </button>
                );
              })}
              <SocialSelectComponents index={socialSelect} />
            </div>
          </div>
        </div>
      </section>
      {/* For Large Devices */}
      <section className="hidden lg:block">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-8 pb-8">
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
