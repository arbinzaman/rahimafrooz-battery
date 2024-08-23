import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";


const NewsEvents = () => {
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_BASE_URL}/news`;
  const { data: allNews = [] } = useQuery({
    queryKey: ["allNews"],
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

  // Split allNews into groups of 5 items each
  const groupedData = [];
  for (let i = 0; i < allNews?.length; i += 4) {
    groupedData.push(allNews?.slice(i, i + 4));
  }

  return (
    <section>
      <div className="shadow-2xl relative">
        <div className="bg-primary h-72"></div>
        <div className="bg-white h-52"></div>
        <div className="absolute w-80 top-8 left-10 lg:left-7  bg-white">
          <h2 className="text-primary font-bold text-center my-4 text-regular lg:text-semi_large bg-white ">
            NEWS & EVENT
          </h2>
          <div className="bg-white h-60">
            {groupedData?.length > 4 ? (
              <Slider {...settings} className="pb-10">
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
                          className="w-14 h-10 object-cover mr-4"
                        />
                        <div className="text-left">
                          <p className="font-medium text-xs">{item?.title}</p>
                          <p className="text-gray-500 text-xsmall">
                            {item?.description.slice(0, 50)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </Slider>
            ) : (
              groupedData?.map((group, index) => (
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
                        className="w-14 h-10 object-cover mr-4"
                      />
                      <div className="text-left">
                        <p className="font-medium text-xs">{item?.title}</p>
                        <p className="text-gray-500 text-xsmall">
                          {item?.description.slice(0, 50)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
