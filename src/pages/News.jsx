import { useNavigate } from "react-router-dom";
import NewsBanner from "../utils/News/News.png";
import NewsCard from "../components/News/NewsCard";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
const News = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page when News is loaded
  }, []);

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

  const handleNewsClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <section>
      <div className="relative">
        <p
          className="absolute
          bg-primary top-6 left-20 md:top-12 md:left-20 
          lg:top-20 lg:left-44 text-regular md:text-large 
          lg:text-xlarge text-base px-3 md:px-6 md:py-3 lg:px-10
          lg:py-6"
        >
          News
        </p>
        <img
          src={NewsBanner}
          className="w-full"
          alt="A banner showing Rahimafrooz's Globat Ace in a scenario"
        />
      </div>

      <div className={allDeviceMaxWidth + " my-10 bg-[#e6f2ff] p-10 shadow-sm"}>
        {allNews.map((newsItem, i) => (
          <div key={i}>
            <NewsCard
              key={newsItem.id}
              news={newsItem}
              onClick={handleNewsClick}
              className="hover:cursor-pointer"
            />
            {allNews?.length > 1 && <p className="border border-gray-400"></p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
