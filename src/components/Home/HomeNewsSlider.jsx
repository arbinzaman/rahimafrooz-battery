import { useNavigate } from "react-router-dom";
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

  // Split allNews into groups of 3 items each for each slide
  const groupedData = [];
  for (let i = 0; i < 3; i += 3) {
    groupedData.push(allNews?.slice(i, i + 3));
  }

  return (
    <section className="w-full shadow-lg">
      {/* <div
        className="mx-auto max-w-6xl px-4 w-full h-full"
        style={{
          backgroundImage: `url(${newsImg})`, // Set the background image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          padding: "20px", // Adjust padding for layout
          width: "100%",
          minHeight: "495px", // Set minimum height for better coverage
        }}
      > */}
      <div className="bg-primary p-[26px]">
        <div className="p-1 lg:px-3 bg-white">
          <h2 className="text-primary font-bold text-center  text-regular lg:text-semi_large mt-7 ">
            NEWS & EVENTS
          </h2>
          {groupedData.length > 0 ? (
            groupedData.map(
              (group, index) =>
                index < 3 && (
                  <div key={index} className="text-blue-900 p-3 ">
                    {/* Column layout: display 3 news items vertically */}
                    <div className="flex flex-col gap-4  mb-10">
                      {group.map((item) => (
                        <div
                          key={item?.id}
                          className="flex items-center bg-gray-200 hover:cursor-pointer lg:p-2"
                          onClick={() => navigate(`/news`)}
                        >
                          <img
                            src={item?.image_url}
                            alt={item?.title}
                            className="w-16 h-11 object-cover mr-4"
                          />
                          <div className="text-left">
                            <p className="font-medium text-xsmall">
                              {item?.title}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )
          ) : (
            <p className="text-center text-gray-500">No news available</p>
          )}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default NewsEvents;
