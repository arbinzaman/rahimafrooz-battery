import Slider from "react-slick";
import reviewsData from "../../demoData/ReviewData.json";
import ReviewImg from "../../assets/images/HomePage/review.png";
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

  return (
    <section>
      <div className="shadow-2xl ">
        <img src={ReviewImg} alt="" />

        <div className="bg-white  py-10">
          <Slider
            {...settingsForCertificatesLarge}
            className="bg-white text-blue-900 text-center"
          >
            {reviewsData?.map((review) => (
              <div key={review?.id} className="card-body">
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
