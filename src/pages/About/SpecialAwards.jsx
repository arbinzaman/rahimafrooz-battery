import SpecialAwardBanner from "../../assets/images/AboutPage/SpecialAwardsAndAchievement.png";
import Achievement1 from "../../assets/images/AboutPage/Achievement-Image-01.png";
import Achievement2 from "../../assets/images/AboutPage/Achievement-Image-02.png";
import Achievement3 from "../../assets/images/AboutPage/Achievement-Image-03.png";
import Achievement4 from "../../assets/images/AboutPage/Achievement-Image-04.png";
import AwardSlider from "../../components/AboutPage/AwardSlider";
const SpecialAwards = () => {
  return (
    <section className="">
      <div>
        <img src={SpecialAwardBanner} alt="" />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
        {/* Left Side */}
        <section className="">
          <div className=" bg-primary text-left p-10 lg:p-20 leading-relaxed">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Special Awards &</span>{" "}
              <span>Achievement</span>
            </p>
          </div>
          {/* Achievement 2 */}
          <div className="grid mt-20 lg:mt-32 lg:mb-44">
            <div>
              <img src={Achievement2} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Ms. Nadia Rahim receiving The Ashden Award for Sustainable Energy
              in 2006 from H.E. Prince Charles, UK.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Achievement 4 */}
          <div className="grid mt-20 lg:mt-32">
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
          {/* Achievement 1 */}
          <div className="lg:mb-16">
            <div>
              <img src={Achievement1} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Mr. Niaz Rahim, Group Director, receiving Social Initiative Award
              from Honorable Vice President and Prime Minister of UAE, Moham-
              med Bin Rashid Al Maktoum, during Global Economic Summit in 2015.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Achievement 3 */}
          <div className="grid my-20 lg:my-32">
            <div>
              <img src={Achievement3} alt="" width={"100%"} />
            </div>
            <p className="my-10">
              Mr. Munawar Moin, Director, receiving National Export (Gold Award)
              Trophy for the ﬁscal year 2010-11 from Honorable Prime Minister of
              Bangladesh, Sheikh Hasina, for extraordinary contribu- tion
              towards the export sector of Bangladesh. Rahimafrooz has also
              received the same award back in 2001-02.
            </p>
            <p className="border border-b-primary"></p>
          </div>
        </section>
      </section>
      <section className="mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
        <AwardSlider />
      </section>
    </section>
  );
};

export default SpecialAwards;
