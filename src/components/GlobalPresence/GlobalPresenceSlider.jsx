import Slider from "react-slick";
import regions from "./Data/regions.json";

const GlobalPresenceSlider = () => {
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginRight: "50px" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginLeft: "50px" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {regions.map((region, index) => (
          <div key={index} className="text-base p-16">
            <h3 className="text-semi_large lg:text-xlarge mb-10 text-center mt-5">
              {region.name}
            </h3>
            <div className="grid grid-cols-2">
              {region.countries.map((countryList, idx) => (
                <div
                  key={idx}
                  className="flex flex-col text-medium items-center space-y-3 mt-10"
                >
                  {countryList.map((country, countryIdx) => (
                    <p key={countryIdx} className="text-center">
                      {country}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GlobalPresenceSlider;
