const NewsCard = ({ news, onClick }) => {
  return (
    <div onClick={() => onClick(news.id)}>
      <div className="card lg:card-side bg-white hover:cursor-pointer rounded-none">
       
          <img
            src={news?.image_url}
            alt={news?.title}
            className="w-80 h-72 object-cover p-10"
          />
        
        <div className="card-body text-black">
          <h2 className="card-title text-medium text-primary">{news?.title}</h2>
          <h2 className=" text-small">{news?.publish_date}</h2>
          <p className="text-justify">{news?.description.slice(0,500)}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
