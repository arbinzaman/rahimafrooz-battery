import React from 'react'
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import EstablishedIcon from "../../assets/icons/factory.png";
import WorldIcon from "../../assets/icons/world.png";
import HandShake from "../../assets/icons/handshake.png";
import CarBattery from "../../assets/icons/battery.png";

import "../../styles/Home.css";

const HomeCounter = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <section className="relative" style={{ top: "-32px" }}>
    <div className="home-counter">
      <div className="max-w-screen-2xl mx-auto">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center text-white py-10">
            <div>
              <img
                src={EstablishedIcon}
                alt="icon"
                className="w-12 h-12 mt-1 mx-auto"
              />
              <p className="text-xl pt-5 pb-5">ESTABLISHED IN</p>
              <h1 className="text-3xl lg:text-5xl font-bold">1954</h1>
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
              <p className="uppercase text-xl pt-5 lg:hidden">
                Presence in Countries
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold pt-5">
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
              <p className="text-xl pt-3 pb-5">DEALERS</p>
              <h1 className="text-3xl lg:text-5xl font-bold">
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
              <p className="text-xl pt-5 pb-5">PRODUCT IN-USE</p>
              <h1 className="text-3xl lg:text-5xl font-bold">
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
  )
}

export default HomeCounter