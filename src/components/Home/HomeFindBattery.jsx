import React from 'react'
import Slider from "react-slick";
import Car from "../../assets/images/HomePage/Icons/Passenger-Car.png";
import CommercialVehicle from "../../assets/images/HomePage/Icons/Commercial-Vehicle.png";
import ThreeWheeler from "../../assets/images/HomePage/Icons/Three-Wheeler.png";
import Motorcycle from "../../assets/images/HomePage/Icons/Motorcycle.png";
import Generator from "../../assets/images/HomePage/Icons/Generator.png";
import SpecialPurpose from "../../assets/images/HomePage/Icons/Special-Purpose.png";
import IPS from "../../assets/images/HomePage/Icons/IPS.png";
import Solar from "../../assets/images/HomePage/Icons/Solar.png";
import Tractor from "../../assets/images/HomePage/Icons/Tractor.png";
import GolfCart from "../../assets/images/HomePage/Icons/Golf-Cart.png";
import Forklift from "../../assets/images/HomePage/Icons/Forklift.png";
import ElectricVehicle from "../../assets/images/HomePage/Icons/Electric-Vehicle.png";
import ProductSearchField from "../../components/ProductSearch/ProductSearchField";
import { Link } from "react-router-dom";

import "../../styles/Home.css"

const settingsForIconSmallScreen = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
};

const HomeFindBattery = () => {
    return (
        <section>
            <div className="icon-BG">
                <div className="max-w-screen-xl mx-auto hidden xl:block">
                    <h1 className="uppercase text-center text-3xl text-sky-100 font-semibold pt-16 pb-16">
                        Find The Right Battery
                    </h1>
                    <div className="grid grid-cols-6 gap-4 text-center">
                        <Link to={`/categories/Passenger Car`}>
                            <img className="w-32 mx-auto" src={Car} alt="car" />
                            <h1 className="text-sky-100 text-xl">Passenger Car</h1>
                        </Link>
                        <Link to={`/categories/Commercial Vehicle`}>
                            <img
                                className="w-32 mx-auto"
                                src={CommercialVehicle}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Commercial Vehicle</h1>
                        </Link>
                        <Link to={`/categories/Three Wheeler`}>
                            <img
                                className="w-32 mx-auto"
                                src={ThreeWheeler}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Three Wheeler</h1>
                        </Link>
                        <Link to={`/categories/Motorcycle`}>
                            <img
                                className="w-32 mx-auto"
                                src={Motorcycle}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Motorcycle</h1>
                        </Link>
                        <Link to={`/categories/Generator`}>
                            <img className="w-32 mx-auto" src={Generator} alt="car" />
                            <h1 className="text-sky-100 text-xl">Generator</h1>
                        </Link>
                        <Link to={`/categories/Special Purpose`}>
                            <img
                                className="w-32 mx-auto"
                                src={SpecialPurpose}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Special Purpose</h1>
                        </Link>
                        <div>
                            <img className="w-32 mx-auto" src={IPS} alt="car" />
                            <h1 className="text-sky-100 text-xl">IPS</h1>
                        </div>
                        <Link to={`/categories/Solar`}>
                            <img className="w-32 mx-auto" src={Solar} alt="car" />
                            <h1 className="text-sky-100 text-xl">Solar</h1>
                        </Link>
                        <Link to={`/categories/Tractor`}>
                            <img
                                className="w-32 mx-auto"
                                src={Tractor}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Tractor</h1>
                        </Link>
                        <Link to={`/categories/Golf Cart`}>
                            <img
                                className="w-32 mx-auto"
                                src={GolfCart}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Golf Cart</h1>
                        </Link>
                        <Link to={`/categories/Forklift`}>
                            <img className="w-32 mx-auto" src={Forklift} alt="car" />
                            <h1 className="text-sky-100 text-xl">Forklift</h1>
                        </Link>
                        <Link to={`/categories/Electric Vehicle`}>
                            <img
                                className="w-32 mx-auto"
                                src={ElectricVehicle}
                                alt="car"
                            />
                            <h1 className="text-sky-100 text-xl">Electric Vehicle</h1>
                        </Link>
                    </div>
                    <ProductSearchField />
                </div>
                {/* Mobile screen */}
                <div className="slider-container w-10/12 mx-auto xl:hidden max-w-sm">
                    <h1 className="uppercase text-center text-lg text-sky-100 font-semibold pt-20 pb-2">
                        Find The Right Battery
                    </h1>
                    <Slider {...settingsForIconSmallScreen}>
                        <div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <Link to={`/categories/Passenger Car`}>
                                    <img className="w-24 mx-auto" src={Car} alt="car" />
                                    <h1 className="text-sky-100 text-sm">Passenger Car</h1>
                                </Link>
                                <Link to={`/categories/Commercial Vehicle`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={CommercialVehicle}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Commercial Vehicle</h1>
                                </Link>
                                <Link to={`/categories/Three Wheeler`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={ThreeWheeler}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Three Wheeler</h1>
                                </Link>
                                <Link to={`/categories/Motorcycle`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={Motorcycle}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Motorcycle</h1>
                                </Link>
                                <Link to={`/categories/Generator`}>
                                    <img className="w-24 mx-auto" src={Generator} alt="car" />
                                    <h1 className="text-sky-100 text-sm">Generator</h1>
                                </Link>
                                <Link to={`/categories/Special Purpose`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={SpecialPurpose}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Special Purpose</h1>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <img className="w-24 mx-auto" src={IPS} alt="car" />
                                    <h1 className="text-sky-100 text-sm">IPS</h1>
                                </div>
                                <Link to={`/categories/Solar`}>
                                    <img className="w-24 mx-auto" src={Solar} alt="car" />
                                    <h1 className="text-sky-100 text-sm">Solar</h1>
                                </Link>
                                <Link to={`/categories/Tractor`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={Tractor}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Tractor</h1>
                                </Link>
                                <Link to={`/categories/Golf Cart`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={GolfCart}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Golf Cart</h1>
                                </Link>
                                <Link to={`/categories/Forklift`}>
                                    <img className="w-24 mx-auto" src={Forklift} alt="car" />
                                    <h1 className="text-sky-100 text-sm">Forklift</h1>
                                </Link>
                                <Link to={`/categories/Electric Vehicle`}>
                                    <img
                                        className="w-24 mx-auto"
                                        src={ElectricVehicle}
                                        alt="car"
                                    />
                                    <h1 className="text-sky-100 text-sm">Electric Vehicle</h1>
                                </Link>
                            </div>
                        </div>
                    </Slider>
                    <div className='pt-8'>
                        <ProductSearchField />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFindBattery