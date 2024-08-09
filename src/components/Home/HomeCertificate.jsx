import Slider from "react-slick";
import { homeCertificates } from "../../utils/Home/certificates";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import "../../styles/Home.css";

const HomeCertificate = () => {
  

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
    ],
  };
  return (
    <>
      {/* For Large Devices */}
      <section className={allDeviceMaxWidth + "hidden lg:block mx-auto"}>
        <div className="text-center mb-16">
          <h1 className="tuppercase text-center text-medium lg:text-large text-primary font-semibold pt-8 pb-8">
            CERTIFICATIONS
          </h1>
          <div className="slider-container">
            <Slider {...settings}>
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
    </>
  );
};

export default HomeCertificate;
