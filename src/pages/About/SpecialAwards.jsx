import SpecialAwardBanner from "../../assets/images/AboutPage/SpecialAwardsAndAchievement.png";
import AwardSlider from "../../components/AboutPage/AwardSlider";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";
const SpecialAwards = () => {
  const { data: achievementsAndAwards = [] } = useQuery({
    queryKey: ["achievementsAndAwards"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/achievements`);
      const data = await res.json();

      return data;
    },
    refetchOnWindowFocus: true,
  });

  const achievements = achievementsAndAwards.filter(
    (item) => item.caption == undefined || item.caption == null
  );

  const awards = achievementsAndAwards.filter(
    (item) => item.description == undefined || item.description == null
  );

  return (
    <section>
      <div>
        <img src={SpecialAwardBanner} alt="" />
      </div>
      <section
        className={`${allDeviceMaxWidth} grid grid-cols-1 lg:grid-cols-2 gap-20 items-start my-5 text-justify`}
      >
        {/* Left Side */}
        <section className="text-black">
          <div className=" bg-primary text-left p-10 lg:p-20 leading-relaxed">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Special Awards &</span>{" "}
              <span>Achievement</span>
            </p>
          </div>
          {/* Achievement 2 */}
          {achievements &&
            achievements?.map(
              (achievement, i) =>
                i % 2 != 0 && (
                  <div key={i} className="grid  mt-20 lg:mt-32 lg:mb-10">
                    <div>
                      <img
                        src={achievement?.img_url}
                        alt="Achievement Image"
                        width={"100%"}
                      />
                    </div>
                    <p className="my-10">{achievement?.description}</p>
                    <p className="border border-b-primary"></p>
                  </div>
                )
            )}
        </section>
        {/* Right Side */}
        <section className="text-black">
          {/* Achievement 1 */}
          {achievements &&
            achievements?.map(
              (achievement, i) =>
                i % 2 == 0 && (
                  <div key={i} className="lg:mb-16">
                    <div>
                      <img
                        src={achievement?.img_url}
                        alt="Achievement Image"
                        width={"100%"}
                      />
                    </div>
                    <p className="my-10">{achievement?.description}</p>
                    <p className="border border-b-primary"></p>
                  </div>
                )
            )}
        </section>
      </section>
      <section className={allDeviceMaxWidth}>
        <AwardSlider awardsProps={{ awards }} />
      </section>
    </section>
  );
};

export default SpecialAwards;
