import { useParams } from "react-router-dom";
import NewsData from "../../demoData/NewsData.json";

const SingleNewsCard = () => {
  const { id } = useParams(); // Get the ID from the route params
  const news = NewsData.find((item) => item.id === parseInt(id)); // Find the news item by ID

  if (!news) {
    return <p>News not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={news.image_url}
            alt={news.title}
            className="w-full h-auto object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
