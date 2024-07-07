import React from 'react'
import Slider from "react-slick";
import { whyChoose } from "../../utils/Home/whyChoose";
import reviews from "../../assets/images/HomePage/Review-01.png";
import newsEvent from "../../assets/images/HomePage/News-01.png";

const HomeReviewNews = () => {

    const settingsForCertificatesLarge = {
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
        <section>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mr-4 ml-4 lg:gap-16 text-center text-white pt-8 pb-8">
                    <div className="shadow-2xl">
                        <Slider {...settingsForCertificatesLarge}>
                            {whyChoose?.map((choose) => (
                                <div key={choose?.id}>
                                    <img
                                        src={choose?.whyChooseImage}
                                        alt={choose?. whyChooseAlt}
                                    />
                                </div>
                            ))}
                        </Slider>
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
    )
}

export default HomeReviewNews