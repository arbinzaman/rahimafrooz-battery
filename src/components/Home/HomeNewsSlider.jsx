import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import newsImg from "../../assets/images/HomePage/News-01.png"; // Adjust the path as needed

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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  // Split allNews into groups of 4 items each
  const groupedData = [];
  for (let i = 0; i < allNews?.length; i += 4) {
    groupedData.push(allNews?.slice(i, i + 4));
  }

  return (
    <section className="w-full">
      <div
        className="mx-auto max-w-6xl px-4 w-full h-full"
        style={{
          backgroundImage: `url(${newsImg})`, // Set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px", // Adjust padding for layout
          width: "100%",
          minHeight: "500px", // Set minimum height for better coverage
        }}
      >
        <h2 className="text-primary font-bold text-center my-4 text-regular lg:text-semi_large mt-10">
          NEWS & EVENT
        </h2>
        <div className="p-2 rounded-md">
          {groupedData?.length > 4 ? (
            <Slider {...settings}>
              {groupedData?.map((group, index) => (
                <div key={index} className="text-blue-900 p-4">
                  {group?.map((item) => (
                    <div
                      key={item?.id}
                      className="flex items-center bg-gray-200 px-2 my-2 hover:cursor-pointer"
                      onClick={() => navigate(`/news/${item.id}`)}
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
              <div key={index} className="text-blue-900 p-4">
                {group?.map((item) => (
                  <div
                    key={item?.id}
                    className="flex items-center bg-gray-200 px-2 my-2 hover:cursor-pointer"
                    onClick={() => navigate(`/news/${item.id}`)}
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
    </section>
  );
};

export default NewsEvents;
