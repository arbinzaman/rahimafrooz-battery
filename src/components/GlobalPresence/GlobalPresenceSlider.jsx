import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchContinents = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/global-presence/`
  );
  return res.data;
};

const GlobalPresenceSlider = () => {
  const { data } = useQuery({
    queryKey: ["continents"],
    queryFn: fetchContinents,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Slider {...settings}>
        {data?.map((continent, index) => (
          <div key={index} className="text-base p-16">
            <h3 className="text-semi_large lg:text-xlarge mb-10 text-center mt-5">
              {continent?.continent}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {continent?.countries?.map((country, idx) => (
                <div
                  key={idx}
                  className="flex flex-col text-medium items-center space-y-3 mt-2"
                >
                  <p className="text-center text-sm lg:text-regular font-normal">
                    {country.toUpperCase()}
                  </p>
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
