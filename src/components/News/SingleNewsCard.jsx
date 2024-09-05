import { useParams } from "react-router-dom";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";

const SingleNewsCard = () => {
  const { id } = useParams();

  const url = `${import.meta.env.VITE_BASE_URL}/news/${id}`;
  const { data: news = [] } = useQuery({
    queryKey: ["news"],
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


  if (!news) {
    return <p>News not found</p>;
  }

  return (
    <div className={"my-10 " + allDeviceMaxWidth}>
      <div className={"bg-white shadow-xl"}>
        <img
          src={news[0]?.image_url}
          alt={news[0]?.title}
          className="w-full h-[300px] lg:h-[500px]"
        />

        <div className="mx-10">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center my-6">
            <h2 className="text-medium lg:text-semi_large font-bold text-primary">
              {news[0]?.title}
            </h2>
            <p className="pt-4 text-sm">Published : {news[0]?.publish_date}</p>
          </div>
          <p className="pb-10 text-justify">{news[0]?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
