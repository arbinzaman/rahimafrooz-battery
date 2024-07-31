import HomeSlider from "../components/Home/HomeSlider";
import HomeFindBattery from "../components/Home/HomeFindBattery";
import HomeGoogleMap from "../components/Home/HomeGoogleMap";
import HomeAboutUs from "../components/Home/HomeAboutUs";
import HomeMotionGif from "../components/Home/HomeMotionGif";
import HomeOurBrands from "../components/Home/HomeOurBrands";
import HomeCounter from "../components/Home/HomeCounter";
import HomeReviewNews from "../components/Home/HomeReviewNews";
import HomeSocialEmbed from "../components/Home/HomeSocialEmbed";
import HomeCertificate from "../components/Home/HomeCertificate";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="Home-BG">
      <HomeSlider />
      <HomeFindBattery />
      <div className="border-y-2 relative" style={{ top: "-32px" }}>
        <HomeGoogleMap />
      </div>
      <div className="lg:hidden">
        <HomeMotionGif />
      </div>
      <HomeAboutUs />
      <div className="hidden lg:block">
        <HomeMotionGif />
      </div>
      <HomeOurBrands />
      <HomeCounter />
      <HomeReviewNews />
      <HomeSocialEmbed />
      <HomeCertificate />
    </div>
  );
};

export default Home;
