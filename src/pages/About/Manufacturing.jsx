import LocallySavedBanner from "../../assets/images/BannerImages/AboutPage/Manufacturing.jpg";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import BannerImage from "../../components/shared/BannerImage";
import { useEffect } from "react";

// Fetch function for Manufacturing Locations
const fetchManufacturingLocations = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/manufacturing-locations`);
  return response.data;
};

const Manufacturing = () => {
  const { data: details = [], isLoading } = useQuery({
    queryKey: ['manufacturing-locations'],
    queryFn: fetchManufacturingLocations,
  });

  // Key for Banner Image
  const pageKey = "manufacturing";

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
  }, []);

  return (
    <section>
      <BannerImage bannerImageProps={{ pageKey, LocallySavedBanner }} />

      <section className={`${allDeviceMaxWidth} grid grid-cols-1 lg:grid-cols-2 gap-20 items-start my-5 text-justify`}>
        {/* Left Side - Odd */}
        <section
          className={`transition-opacity duration-500 ease-in-out ${!isLoading && details.length ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="bg-primary text-left p-10 lg:p-20 leading-relaxed transition-transform duration-500 ease-in-out">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Manufacturing</span>{" "}
              <span>Facilities</span>
            </p>
          </div>
          {details?.map(
            (detail, i) =>
              i % 2 !== 0 && (
                <div
                  key={i}
                  className={`grid mt-20 lg:mt-32 ${i === details.length - 1 ? 'lg:mb-0' : 'lg:mb-44'} transition-transform duration-500 ease-in-out animate-fade-in-swipe-right`}
                >
                  <div>
                    <img
                      src={detail.imageurl}
                      alt=""
                      width={"100%"}
                      className="transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="text-primary mt-10">
                    <p className="font-semibold">{detail.title}</p>
                    <p>{detail.location}</p>
                  </div>
                  <p className="my-10 text-black">{detail.description}</p>
                  {i === details.length - 1 ? (
                    <p></p>
                  ) : (
                    <p className="border border-b-primary"></p>
                  )}
                </div>
              )
          )}
        </section>
        {/* Right Side - Even */}
        <section
          className={`transition-opacity duration-500 ease-in-out ${!isLoading && details.length ? 'opacity-100' : 'opacity-0'}`}
        >
          {details?.map(
            (detail, i) =>
              i % 2 === 0 && (
                <div
                  key={i}
                  className={`${i === details.length - 2 ? 'lg:mb-0' : 'lg:mb-44'} transition-transform duration-500 ease-in-out animate-fade-in-swipe-left`}
                >
                  <div>
                    <img
                      src={detail.imageurl}
                      alt=""
                      width={"100%"}
                      className="transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <div className="text-primary mt-10">
                    <p className="font-semibold">{detail.title}</p>
                    <p>{detail.location}</p>
                  </div>
                  <p className="my-10 text-black">{detail.description}</p>
                  <p className="border border-b-primary"></p>
                </div>
              )
          )}
        </section>
      </section>
    </section>
  );
};

export default Manufacturing;
