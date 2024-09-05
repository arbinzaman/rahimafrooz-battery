import LocallySavedBanner from "../../assets/images/BannerImages/AboutPage/Manufacturing.jpg";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import axios from "axios";
import { useEffect, useState } from "react";
import BannerImage from "../../components/shared/BannerImage";

const Manufacturing = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/manufacturing-locations`)
      .then((res) => {
        setDetails(res.data);
      });
  }, []);

  // Key for Banner Image
  const pageKey = "manufacturing";

  return (
    <section>
      <BannerImage bannerImageProps={{ pageKey, LocallySavedBanner }} />
      <section
        className={`${allDeviceMaxWidth} grid grid-cols-1 lg:grid-cols-2 gap-20 items-start my-5 text-justify`}
      >
        {/* Left Side - Odd*/}
        <section className="">
          <div className="bg-primary text-left p-10 lg:p-20 leading-relaxed">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Manufacturing</span>{" "}
              <span>Facilities</span>
            </p>
          </div>
          {details?.map(
            (detail, i) =>
              i % 2 != 0 && (
                <div
                  key={i}
                  className={
                    i == details.length - 1
                      ? "grid mt-20 lg:mt-32 lg:mb-0"
                      : "grid mt-20 lg:mt-32 lg:mb-44"
                  }
                >
                  <div>
                    <img src={detail.imageurl} alt="" width={"100%"} />
                  </div>
                  <div className="text-primary mt-10">
                    <p className="font-semibold">{detail.title}</p>
                    <p>{detail.location}</p>
                  </div>
                  <p className="my-10 text-black">{detail.description}</p>
                  {i == details.length - 1 ? (
                    <p></p>
                  ) : (
                    <p className="border border-b-primary"></p>
                  )}
                </div>
              )
          )}
        </section>
        {/* Right Side - Even*/}
        <section className="">
          {details?.map(
            (detail, i) =>
              i % 2 == 0 && (
                <div
                  key={i}
                  className={i == details.length - 2 ? "lg:mb-0" : "lg:mb-44"}
                >
                  <div>
                    <img src={detail.imageurl} alt="" width={"100%"} />
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
