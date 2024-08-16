const NewsCard = ({ news, onClick }) => {
  return (
    <div onClick={() => onClick(news.id)}>
      <div className="card lg:card-side   mb-10 bg-white">
        <figure>
          <img
            src={news?.image_url}
            alt={news?.title}
            className="w-80 h-72 object-cover p-10"
          />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title text-medium">{news?.title}</h2>
          <h2 className=" text-small">{news?.publish_date}</h2>
          <p className="">{news?.description.slice(0,100)}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
