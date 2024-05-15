import SpecialAwardBanner from "../../assets/images/AboutPage/SpecialAwardsAndAchievement.png";
import Achievement1 from "../../assets/images/AboutPage/Achievement-Image-01.png";
import Achievement2 from "../../assets/images/AboutPage/Achievement-Image-02.png";
import Achievement3 from "../../assets/images/AboutPage/Achievement-Image-03.png";
import Achievement4 from "../../assets/images/AboutPage/Achievement-Image-04.png";
const SpecialAwards = () => {
  return (
    <section>
      <div>
        <img src={SpecialAwardBanner} alt="" />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
        {/* Left Side */}
        <section className="">
          <div className=" bg-primary text-left p-10 lg:p-20 leading-relaxed">
            <p className="flex flex-col text-large text-base font-bold">
              <span className="mb-5">Special Awards &</span>{" "}
              <span>Achievement</span>
            </p>
          </div>
          <div className="grid my-32">
            <div>
              <img src={Achievement2} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Ms. Nadia Rahim receiving The Ashden Award for Sustainable Energy
              in 2006 from H.E. Prince Charles, UK.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          <div className="grid my-32">
            <div>
              <img src={Achievement4} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Mr. Feroz Rahim, Group Managing Director, receiving the presti-
              gious “Green Business” award from the Finance Minister, A.M.A
              Muhith given by Metropolitan Chamber of Commerce and Indus- tries
              (MCCI).
            </p>
            <p className="border border-b-primary"></p>
          </div>
        </section>
        {/* Right Side */}
        <section className="">
          <div className="lg:my-32">
            <div>
              <img src={Achievement1} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Ms. Nadia Rahim receiving The Ashden Award for Sustainable Energy
              in 2006 from H.E. Prince Charles, UK.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          <div className="grid my-32">
            <div>
              <img src={Achievement3} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Mr. Feroz Rahim, Group Managing Director, receiving the presti-
              gious “Green Business” award from the Finance Minister, A.M.A
              Muhith given by Metropolitan Chamber of Commerce and Indus- tries
              (MCCI).
            </p>
            <p className="border border-b-primary"></p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default SpecialAwards;
