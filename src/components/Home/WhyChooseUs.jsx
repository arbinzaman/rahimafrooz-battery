import Slider from "react-slick";
import { whyChoose } from "../../utils/Home/whyChoose";

const WhyChooseUs = () => {
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
          <div className="shadow-2xl">
            <Slider {...settingsForCertificatesLarge}>
              {whyChoose?.map((choose) => (
                <div key={choose?.id}>
                  <img
                    src={choose?.whyChooseImage}
                    alt={choose?.whyChooseAlt}
                  />
                </div>
              ))}
            </Slider>
          </div>
     
    </section>
  );
};

export default WhyChooseUs;
