import { useNavigate } from "react-router-dom";
import NewsData from "../../demoData/NewsData.json";
import Slider from "react-slick";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchNews = async () => {
//   const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/news`);
//   return data;
// };

const NewsEvents = () => {
  const navigate = useNavigate();
  // const { data, isLoading, error } = useQuery(["news"], fetchNews);
  const data = NewsData; // Use the entire data set
  console.log(data);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  // Split data into groups of 5 items each
  const groupedData = [];
  for (let i = 0; i < data?.length; i += 4) {
    groupedData.push(data?.slice(i, i + 4));
  }

  return (
    <section>
      <div className="shadow-2xl relative">
        <div className="bg-primary h-72"></div>
        <div className="bg-white h-52"></div>
        <div className="absolute w-80 top-8 left-7 bg-white">
          <h2 className="text-primary font-bold text-center my-4 text-regular lg:text-semi_large bg-white ">
            NEWS & EVENT
          </h2>
          <div className="bg-white">
            <Slider {...settings}>
              {groupedData?.map((group, index) => (
                <div key={index} className=" text-blue-900 p-4">
                  {group?.map((item) => (
                    <div
                      key={item?.id}
                      className="flex items-center bg-gray-200 px-2 my-2 hover:cursor-pointer "
                      onClick={() => navigate(`/news/`)}
                    >
                      <img
                        src={item?.image_url}
                        alt={item?.title}
                        className="w-12 h-12 object-cover mr-4"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-small">
                          {item?.title}
                        </p>
                        <p className="text-gray-500 text-xsmall">
                          {item?.description.slice(0, 50)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
