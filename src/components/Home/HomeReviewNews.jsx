import WhyChooseUs from "./WhyChooseUs";
import HomeReviews from "./HomeReviews";
import HomeNewsSlider from "./HomeNewsSlider";

const HomeReviewNews = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:gap-16 
          text-center text-white py-8"
        >
          {/* WhyChooseUs Section */}
          <div className="col-span-1">
            <WhyChooseUs />
          </div>

          {/* HomeReviews Section */}
          <div className="col-span-1">
            <HomeReviews />
          </div>

          {/* HomeNewsSlider Section */}
          <div className="col-span-1">
            <HomeNewsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviewNews;
