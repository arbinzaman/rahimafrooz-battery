import Slider from "react-slick";
import ReviewImg from "../../assets/images/HomePage/review.png";
import { useQuery } from "@tanstack/react-query";
const HomeReviews = () => {
  const settingsForCertificatesLarge = {
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

  const url = `${import.meta.env.VITE_BASE_URL}/reviews`;
  const {
    data: allReviews = [],
  } = useQuery({
    queryKey: ["allReviews"],
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

  return (
    <section>
      <div className="shadow-2xl">
        <img src={ReviewImg} alt="" />

        <div className="bg-white  py-12">
          <Slider
            {...settingsForCertificatesLarge}
            className="bg-white text-blue-900 text-center"
          >
            {allReviews?.map((review) => (
              <div key={review?.id} className="card-body h-66">
                <p> {review.review}</p>
                <p>- {review.user_name}</p>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default HomeReviews;
