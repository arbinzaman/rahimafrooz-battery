import Slider from "react-slick";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import "../../styles/Home.css";
import { useQuery } from "@tanstack/react-query";

const HomeCertificate = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/certificates`;

  const { data: allCertificates = [] } = useQuery({
    queryKey: ["allCertificates"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

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
              {allCertificates?.map((certificate) => (
                <div key={certificate?.id}>
                  <img
                    className="max-w-60 max-h-60 mx-auto"
                    src={certificate?.img_url}
                    alt={certificate?.title}
                  />
                  <h1 className="text-xl text-cyan-600 pt-8 font-semibold">
                    {certificate?.title}
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
