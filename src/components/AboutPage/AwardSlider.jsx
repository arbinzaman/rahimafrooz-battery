import Slider from "react-slick";
import Asia_Brand_Award from "../../assets/images/AboutPage/Awards/Asia_Brand_Award.png";
import CentenaryAward_2014 from "../../assets/images/AboutPage/Awards/CentenaryAward_2014.png";
import CMO_Asia_Award from "../../assets/images/AboutPage/Awards/CMO_Asia_Award.png";
import International_Green_Oscar_Award_2000 from "../../assets/images/AboutPage/Awards/International_Green_Oscar_Award_2000.png";
import National_Export_Trophy_Gold_2010_11 from "../../assets/images/AboutPage/Awards/National_Export_Trophy_Gold_2010_11.png";
import National_Export_Trophy_Silver_2001_02 from "../../assets/images/AboutPage/Awards/National_Export_Trophy_Silver_2001_02.png";
import Standard_Charterd_Financial_Express_CSR_Award from "../../assets/images/AboutPage/Awards/Standard_Charterd_Financial_Express_CSR_Award.png";
import Superbrands_Bangladesh_Choice_2020_21 from "../../assets/images/AboutPage/Awards/Superbrands_Bangladesh_Choice_2020_21.png";
const AwardSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear",
        },
      },
    ],
  };

  const awards = [
    { id: 1, imgSrc: Asia_Brand_Award,title:"Asia Brand Award" },
    { id: 2, imgSrc: CentenaryAward_2014,title: "Centenary Award 2014" },
    { id: 3, imgSrc: CMO_Asia_Award,title: "CMO Asia's Best  Award"},
    { id: 4, imgSrc: International_Green_Oscar_Award_2000,title: "International Green Oscar Award 2000" },
    { id: 5, imgSrc: National_Export_Trophy_Gold_2010_11,title:"National Export Trophy Gold 2010-11" },
    { id: 6, imgSrc: National_Export_Trophy_Silver_2001_02,title: "National Export Trophy Silver 2001-02"},
    { id: 7, imgSrc: Standard_Charterd_Financial_Express_CSR_Award,title: "Standard Charterd Financial Express CSR Award"},
    { id: 8, imgSrc: Superbrands_Bangladesh_Choice_2020_21,title: "Superbrands Bangladesh Choice Award 2020-21"},
  ];
  return (
    <section>
      <Slider {...settings} className="my-14 mx-4 md:mx-16">
        {awards.map((award) => (
          <div className="w-auto flex flex-col justify-center" key={award.id}>
            <div
              className="flex flex-col justify-center items-center"
            >
              <img
                src={award.imgSrc}
                className="h-40 md:h-52 lg:h-72 border-8 border-primary"
                alt="Product Image"
              />
              <p className="text-center font-semibold text-small w-3/4 py-2">{award.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AwardSlider;
