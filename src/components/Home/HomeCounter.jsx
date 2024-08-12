import { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import EstablishedIcon from "../../assets/icons/factory.png";
import WorldIcon from "../../assets/icons/world.png";
import HandShake from "../../assets/icons/handshake.png";
import CarBattery from "../../assets/icons/battery.png";
import "../../styles/Home.css";

const HomeCounter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const [businessPartnersCount, setBusinessPartnersCount] = useState(0);
  const [productInUseCount, setProductInUseCount] = useState(0);
  const [dealersCount, setDealersCount] = useState(0);

  useEffect(() => {
    // Fetch BUSINESS PARTNERS data
    const fetchBusinessPartners = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/global-presence/`
        );
        const data = await res.json();
        // Calculate the total number of countries
        const totalCountries = data.reduce(
          (acc, continent) => acc + continent.countries.length,
          0
        );
        setBusinessPartnersCount(totalCountries);
      } catch (error) {
        console.error("Error fetching business partners data:", error);
      }
    };

    // Fetch PRODUCT IN-USE data
    const fetchProductInUse = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/batteries`);
        const data = await res.json();
        setProductInUseCount(data.length); // Assuming the response is an array
      } catch (error) {
        console.error("Error fetching product in-use data:", error);
      }
    };

    // Fetch DEALERS data
    const fetchDealers = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/dealer-applications`
        );
        const data = await res.json();
        setDealersCount(data.length); // Assuming the response is an array
      } catch (error) {
        console.error("Error fetching dealers data:", error);
      }
    };

    fetchBusinessPartners();
    fetchProductInUse();
    fetchDealers();
  }, []);

  return (
    <section className="relative bg-circuit-texture" style={{ top: "-32px" }}>
      <div className="home-counter">
        <div className="max-w-screen-2xl mx-auto">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center text-white py-10">
              <div className="mb-6">
                <img
                  src={EstablishedIcon}
                  alt="icon"
                  className="w-12 h-12 mt-1 mx-auto"
                />
                <p className="text-md lg:text-xl pt-2 pb-2 lg:pt-5 lg:pb-5">
                  ESTABLISHED IN
                </p>
                <h1 className="text-2xl lg:text-5xl font-bold">1954</h1>
              </div>
              <div className="mb-6">
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
                <p className="uppercase text-md pt-2 lg:hidden">
                  Presence in Countries
                </p>
                <h1 className="text-2xl lg:text-5xl font-bold pt-2 lg:pt-5">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={businessPartnersCount}
                      duration={2}
                      delay={0}
                    />
                  )}
                </h1>
              </div>
              <div className="mb-6">
                <img src={HandShake} alt="icon" className="w-16 h-16 mx-auto" />
                <p className="text-md lg:text-xl lg:pt-3 pb-2 lg:pb-5">
                  DEALERS
                </p>
                <h1 className="text-2xl lg:text-5xl font-bold">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={dealersCount}
                      duration={2}
                      delay={0}
                    />
                  )}
                </h1>
              </div>
              <div className="mb-6">
                <img
                  src={CarBattery}
                  alt="icon"
                  className="w-12 h-12 mt-1 mx-auto"
                />
                <p className="text-md lg:text-xl pt-2 pb-1 lg:pt-5 lg:pb-5">
                  PRODUCT IN-USE
                </p>
                <h1 className="text-2xl lg:text-5xl font-bold">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={productInUseCount}
                      duration={2}
                      delay={0}
                    />
                  )}
                </h1>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </section>
  );
};

export default HomeCounter;
