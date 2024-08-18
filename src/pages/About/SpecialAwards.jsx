import { useQuery } from "@tanstack/react-query";
import SpecialAwardBanner from "../../assets/images/AboutPage/SpecialAwardsAndAchievement.png";
import AwardSlider from "../../components/AboutPage/AwardSlider";
import { allDeviceMaxWidth } from "../../styles/maxWidth";

const fetchAchievements = async () => {
  
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/achievements`);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const SpecialAwards = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["achievements"],
    queryFn: fetchAchievements,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading achievements.</div>;
  }

  const filteredAchievementData = data.filter(
    (item) => item.caption === undefined || item.caption === null
  );
  const filteredAwardData = data.filter(
    (item) => item.description === undefined || item.description === null
  );

  return (
    <section>
      <div>
        <img src={SpecialAwardBanner} alt="Special Awards and Achievements" />
      </div>
      <section
        className={`${allDeviceMaxWidth} grid grid-cols-1 lg:grid-cols-2 gap-20 items-start my-5 text-justify`}
      >
        {/* Achievements Section */}
        <section className="text-black">
          <div className=" bg-primary text-left p-10 lg:p-20 leading-relaxed">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Special Awards &</span>{" "}
              <span>Achievement</span>
            </p>
          </div>

          {filteredAchievementData.map((achievement, index) => (
            <div className="grid mt-20 lg:mt-32" key={index}>
              <div>
                <img src={achievement.img_url} alt="" width={"100%"} />
              </div>
              <p className="my-10">{achievement.description}</p>
              <p className="border border-b-primary"></p>
            </div>
          ))}
        </section>

        {/* Awards Section */}
        <section className="text-black">
          {filteredAwardData.map((award, index) => (
            <div className="grid mt-20 lg:mt-32" key={index}>
              <div>
                <img src={award.img_url} alt="" width={"100%"} />
              </div>
              <p className="my-10">{award.caption}</p>
              <p className="border border-b-primary"></p>
            </div>
          ))}
        </section>
      </section>
      <section className={allDeviceMaxWidth}>
        <AwardSlider />
      </section>
    </section>
  );
};

export default SpecialAwards;
