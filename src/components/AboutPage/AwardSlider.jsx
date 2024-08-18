import Slider from "react-slick";

const AwardSlider = ({ awardsProps }) => {
  const { awards } = awardsProps;
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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

  return (
    <section>
      <Slider {...settings} className="mb-20 mx-4 md:mx-16">
        {awards && awards?.map((award) => (
          <div className="w-auto flex flex-col justify-center" key={award?.id}>
            <div className="flex flex-col justify-center items-center">
              <img
                src={award?.img_url}
                className="h-60 md:h-68 lg:h-72 "
                alt="Awards Image"
              />
              <p className="text-center font-semibold text-small w-3/4 py-2">
                {award?.caption}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AwardSlider;
