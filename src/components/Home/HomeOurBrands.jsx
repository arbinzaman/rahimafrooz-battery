import React from 'react'
import Slider from "react-slick";
import { brandProducts } from "../../utils/Home/products";

import "../../styles/Home.css"

const settingsForProductsDesktopScreen = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
};

const settingsForProductsMobileScreen = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
};

const HomeOurBrands = () => {
    return (
        <>
            <section className="relative hidden lg:block" style={{ top: "-32px" }}>
                <div className="our-brands text-center">
                    <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16">
                        OUR BRANDS
                    </h1>
                    <div className="slider-container w-10/12 mx-auto">
                        <Slider {...settingsForProductsDesktopScreen}>
                            {brandProducts?.map((product) => (
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

            {/* Mobile screen */}

            <section className="lg:hidden">
                <div className="our-brands text-center">
                    <h1 className="text-xl font-semibold text-cyan-700 opacity-95 pt-1 pb-8">
                        OUR BRANDS
                    </h1>
                    <div className="slider-container w-10/12 mx-auto">
                        <Slider {...settingsForProductsMobileScreen}>
                            {brandProducts?.map((product) => (
                                <img
                                    className="max-w-80 max-h-80 border border-black rounded-2xl mb-8"
                                    key={product?.id}
                                    src={product?.productImage}
                                    alt={product?.productAlt}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeOurBrands