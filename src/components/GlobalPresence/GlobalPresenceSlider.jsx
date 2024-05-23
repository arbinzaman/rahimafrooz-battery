import Slider from "react-slick";

const GlobalPresenceSlider = () => {
  const regions = [
    {
      name: "AFRICA",
      countries: [
        ["Algeria", "Senegal", "Nigeria", "Gabon", "Botswana"],
        ["Mozambique", "Congo", "Uganda", "South Sudan", "Ethiopia"],
        ["Liberia", "Ivory Coast", "Cameroon", "Angola", "South Africa"],
        ["Malawi", "Tanzania", "Kenya", "Sudan"]
      ],
    },
    {
      name: "ASIA",
      countries: [
        ["Bangladesh", "India", "China", "Japan", "South Korea"],
        ["Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia"],
        ["Philippines", "Sri Lanka", "Nepal", "Bhutan", "Maldives"],
        ["Pakistan", "Afghanistan", "Iran", "Iraq"]
      ],
    },
    {
      name: "EUROPE",
      countries: [
        ["France", "Germany", "Italy", "Spain", "Portugal"],
        ["Netherlands", "Belgium", "Switzerland", "Austria", "Sweden"],
        ["Norway", "Denmark", "Finland", "Iceland", "Ireland"],
        ["UK", "Poland", "Czech Republic", "Hungary"]
      ],
    },
    {
      name: "USA",
      countries: [
        ["California", "Texas", "Florida", "New York", "Illinois"],
        ["Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan"],
        ["New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts"],
        ["Tennessee", "Indiana", "Missouri", "Maryland"]
      ],
    },
    {
      name: "AUSTRALIA",
      countries: [
        ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia"],
        ["Tasmania", "Northern Territory", "Australian Capital Territory"]
      ],
    },
  ];

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginRight: "50px", MediaCapabilities: { maxWidth: "640px", marginRight: "20px"}}}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginLeft: "50px", MediaCapabilities: { maxWidth: "640px", marginLeft: "20px"}}}
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
            <h3 className="text-semi_large lg:text-xlarge mb-10 text-center">{region.name}</h3>
            <div className="grid grid-cols-2">
              {region.countries.map((countryList, idx) => (
                <div key={idx} className="flex flex-col text-medium items-center space-y-3 mt-10">
                  {countryList.map((country, countryIdx) => (
                    <p key={countryIdx} className="text-center">{country}</p>
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
