import { useNavigate } from "react-router-dom";
import NewsBanner from "../utils/News/News.png";
import NewsData from "../demoData/NewsData.json";
import NewsCard from "../components/News/NewsCard"; // Make sure to import the NewsCard component

const News = () => {
  const navigate = useNavigate();

  // Handle the click event and navigate to the SingleNewsCard page with the news ID
  const handleNewsClick = (id) => {
    navigate(`/news/${id}`); // Adjust the path according to your routing setup
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

      <div className="mx-72 mt-10 bg-white mb-28 ">
        {NewsData.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            news={newsItem}
            onClick={handleNewsClick}
          />
        ))}
      </div>
    </section>
  );
};

export default News;
