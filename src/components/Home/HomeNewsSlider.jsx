import NewsData from "../../demoData/NewsData.json";
import Slider from "react-slick";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchNews = async () => {
//   const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/news`);
//   return data;
// };

const NewsEvents = () => {
//   const { data, isLoading, error } = useQuery(["news"], fetchNews);
const data  = NewsData;
console.log(data);
  const settings = {
    dots: true,
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

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;

  return (
    <section>
      <div className="shadow-2xl">
        <h2 className="text-blue-900 font-bold text-center my-4">NEWS & EVENT</h2>
       <div className="bg-white  py-10">
       <Slider {...settings}>
          {data?.map((item) => (
            <div key={item.id} className="bg-white text-blue-900 p-4">
              <div className="flex items-center">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
       </div>
      </div>
    </section>
  );
};

export default NewsEvents;
