import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useQuery } from "@tanstack/react-query";

import EstablishedIcon from "../../assets/icons/factory.png";
import WorldIcon from "../../assets/icons/world.png";
import HandShake from "../../assets/icons/handshake.png";
import CarBattery from "../../assets/icons/battery.png";
import "../../styles/Home.css";

const HomeCounter = () => {
  const [counterOn, setCounterOn] = useState(false);

  // Fetch BUSINESS PARTNERS
  const { data: businessPartnersCount = 0 } = useQuery({
    queryKey: ["businessPartners"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/global-presence/`);
      const data = await res.json();
      return data.reduce((acc, continent) => acc + continent.countries.length, 0);
    },
    staleTime: 1000 * 60 * 10, // 10 minutes, data is considered fresh for 10 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour, data is cached for 1 hour
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  // Fetch PRODUCT IN-USE
  const { data: productInUseCount = 0 } = useQuery({
    queryKey: ["productInUse"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/batteries`);
      const data = await res.json();
      return data.length; // Assuming the response is an array
    },
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  // Fetch DEALERS
  const { data: dealersCount = 0 } = useQuery({
    queryKey: ["dealers"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/dealer-details`);
      const data = await res.json();
      return data.length; // Assuming the response is an array
    },
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

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
