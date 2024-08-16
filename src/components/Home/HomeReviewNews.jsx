import WhyChooseUs from "./WhyChooseUs";
import HomeReviews from "./HomeReviews";
import HomeNewsSlider from "./HomeNewsSlider";

const HomeReviewNews = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-3
         gap-4 mr-4 ml-4 lg:gap-16 text-center
          text-white pt-8 pb-8"
        >
          <WhyChooseUs />
          <div className="">
            <HomeReviews />
          </div>
          <div className="">
            <HomeNewsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviewNews;
