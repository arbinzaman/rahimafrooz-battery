import { useEffect } from "react";
import LocallySavedBanner from "../../assets/images/BannerImages/AboutPage/SpecialAwardsAndAchievement.jpg";
import AwardSlider from "../../components/AboutPage/AwardSlider";
import BannerImage from "../../components/shared/BannerImage";
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

  // Key for banner image
  const pageKey = "achievement";

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-fade-in-swipe-left, .animate-fade-in-swipe-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [achievementsAndAwards]);

  return (
    <section>
      <BannerImage bannerImageProps={{ pageKey, LocallySavedBanner }} />

      <section
        className={`${allDeviceMaxWidth} grid grid-cols-1 lg:grid-cols-2 gap-20 items-start my-5 text-justify`}
      >
        {/* Left Side */}
        <section className="text-black">
          <div className="bg-primary text-left p-10 lg:p-20 leading-relaxed transition-transform duration-500 ease-in-out">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Special Awards &</span>{" "}
              <span>Achievement</span>
            </p>
          </div>
          {/* Achievement 2 */}
          {achievements &&
            achievements?.map(
              (achievement, i) =>
                i % 2 !== 0 && (
                  <div
                    key={i}
                    className={`grid mt-20 lg:mt-32 lg:mb-10 animate-fade-in-swipe-right ${i % 2 === 0 ? 'animate-fade-in-swipe-left' : ''}`}
                  >
                    <div>
                      <img
                        src={achievement?.img_url}
                        alt="Achievement Image"
                        width={"100%"}
                        className="transition-transform duration-500 ease-in-out"
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
                i % 2 === 0 && (
                  <div
                    key={i}
                    className={`lg:mb-16 animate-fade-in-swipe-left ${i % 2 !== 0 ? 'animate-fade-in-swipe-right' : ''}`}
                  >
                    <div>
                      <img
                        src={achievement?.img_url}
                        alt="Achievement Image"
                        width={"100%"}
                        className="transition-transform duration-500 ease-in-out"
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
