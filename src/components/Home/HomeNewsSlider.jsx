import NewsData from "../../demoData/NewsData.json";
import Slider from "react-slick";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchNews = async () => {
//   const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/news`);
//   return data;
// };

const NewsEvents = () => {
  // const { data, isLoading, error } = useQuery(["news"], fetchNews);
  const data = NewsData.slice(0.5); // Slice the data to show only the first 4 items
  console.log(data);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1, // Display only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading data</p>;

  return (
    <section>
      <div className="shadow-2xl">
        <h2 className="text-primary font-bold text-center my-4 text-regular lg:text-semi_large">
          NEWS & EVENT
        </h2>
        <div className="bg-white py-10">
          <Slider {...settings}>
            {/* Wrap the 4 news items in a single div to display them in one slide */}
            <div className="bg-white text-blue-900 p-4">
              {data?.map((item) => (
                <div key={item.id} className="flex items-center mb-4">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-small">{item.title}</p>
                    <p className="text-gray-500 text-xsmall">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
