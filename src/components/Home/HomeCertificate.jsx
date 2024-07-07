import React from 'react'
import Slider from "react-slick";
import { homeCertificates } from "../../utils/Home/certificates";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import "../../styles/Home.css";

const HomeCertificate = () => {

    const settingsForCertificatesLarge = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        cssEase: "linear",
    };

    const settingsForCertificatesSmall = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        cssEase: "linear",
    };
    return (
        <>
            {/* For Large Devices */}
            <section className={allDeviceMaxWidth + "hidden lg:block"}>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-8 pb-8">
                        CERTIFICATIONS
                    </h1>
                    <div className="slider-container">
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
            <section className={allDeviceMaxWidth + "lg:hidden"}>
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-semibold text-cyan-700 opacity-95 pt-16 pb-16">
                        CERTIFICATIONS
                    </h1>
                    <div className="slider-container max-w-7xl mx-auto">
                        <Slider {...settingsForCertificatesSmall}>
                            {homeCertificates?.map((certificate) => (
                                <div key={certificate?.id}>
                                    <img
                                        className="max-w-60 max-h-60 mx-auto"
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
        </>
    )
}

export default HomeCertificate