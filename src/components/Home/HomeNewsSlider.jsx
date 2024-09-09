/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newsImg from "../../assets/images/HomePage/News-01.png";
import { useEffect, useState } from "react";

const NewsEvents = () => {
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_BASE_URL}/news`;
  const [numOfNews, setNumOfNews] = useState(3); // State to manage number of news items displayed

  // Fetching the news data using react-query
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

  // Set number of news based on screen width
  useEffect(() => {
    const updateNumOfNews = () => {
      if (window.innerWidth === 1024 && window.innerHeight === 1366) {
        setNumOfNews(2);
      } else {
        setNumOfNews(3); // Default is to show 3 news
      }
    };

    window.addEventListener("resize", updateNumOfNews);
    updateNumOfNews(); // Set initial value

    return () => window.removeEventListener("resize", updateNumOfNews);
  }, []);

  // Sort the news by date to display the latest news first
  const sortedNews = allNews.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  ); // Assuming 'date' is available

  // Show only the latest 'numOfNews' news items
  const latestNews = sortedNews.slice(0, numOfNews);

  return (
    <section className="w-full shadow-lg ">
      <div
        className="mx-auto max-w-6xl px-4 w-full h-full "
        style={{
          backgroundImage: `url(${newsImg})`, // Set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px", // Adjust padding for layout
          width: "100%",
          minHeight: "490px", // Set minimum height for better coverage
        }}
      >
        <h2 className="text-primary font-bold text-center text-regular lg:text-semi_large mt-7">
          NEWS & EVENTS
        </h2>
        <div className="p-1 px-4  md:px-5 rounded-md lg:px-3 custom-size padding ">
          {latestNews.length > 0 ? (
            <div className="flex flex-col gap-4 mb-10">
              {/* Render the latest 'numOfNews' news items */}
              {latestNews.map((item) => (
                <div
                  key={item?.id}
                  className="flex items-center bg-gray-200 hover:cursor-pointer lg:py-2"
                  onClick={() => navigate(`/news/${item?.id}`)} // Navigate to news details
                >
                  <img
                    src={item?.image_url}
                    alt={item?.title}
                    className="w-16 h-11 object-cover mr-4"
                  />
                  <div className="text-left">
                    <p className="font-medium text-primary  text-xsmall">
                      {item?.title}
                    </p>
                    {/* Optionally show a snippet of the description */}
                    {/* <p className="text-gray-500 text-xs">{item?.description.slice(0, 50)}...</p> */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No news available</p>
          )}
        </div>
      </div>

      {/* Custom styles for 540x720 device */}
      <style jsx>{`
        @media (max-width: 540px) and (max-height: 720px) {
          div.custom-size {
            padding: 30px; /* Set padding specifically for 540x720 device */
            min-height: 383.52px; /* Adjust height for this screen */
          }
          .padding {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default NewsEvents;
