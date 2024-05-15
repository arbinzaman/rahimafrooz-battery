import Slider from "react-slick";
import Award1 from "../../assets/images/AboutPage/Awards/Image-01.png";
import Award2 from "../../assets/images/AboutPage/Awards/Image-02.png";
import Award3 from "../../assets/images/AboutPage/Awards/Image-03.png";
import Award4 from "../../assets/images/AboutPage/Awards/Image-04.png";
import Award5 from "../../assets/images/AboutPage/Awards/Image-05.png";
import Award6 from "../../assets/images/AboutPage/Awards/Image-06.png";
import Award7 from "../../assets/images/AboutPage/Awards/Image-07.png";
import Award8 from "../../assets/images/AboutPage/Awards/Image-08.png";
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
          dots: true,
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
    { id: 1, imgSrc: Award1 },
    { id: 2, imgSrc: Award2 },
    { id: 3, imgSrc: Award3 },
    { id: 4, imgSrc: Award4 },
    { id: 5, imgSrc: Award5 },
    { id: 6, imgSrc: Award6 },
    { id: 7, imgSrc: Award7 },
    { id: 8, imgSrc: Award8 },
  ];
  return (
    <section>
      <Slider {...settings} className="my-14">
        {awards.map((award) => (
          <div className="w-auto flex flex-col justify-center items-center" key={award.id}>
            <div
              className="flex justify-center"
            >
              <img
                src={award.imgSrc}
                className="h-24 md:h-48 lg:52"
                alt="Product Image"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AwardSlider;
