import { useEffect, useRef, useState } from "react";
import HomeDealerLocator from "../components/Home/HomeDealerLocator";
import { allDeviceMaxWidth } from "../styles/maxWidth";
import axios from "axios";
import { FaLocationArrow } from "react-icons/fa6";

const FindDealer = () => {
  const [dealers, setDealers] = useState([]);
  const ids = JSON.parse(localStorage.getItem("dealers_id"));
  const componentRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/dealer-details/selected-dealers`,
        ids
      );
      setDealers(data.data);
    };
    fetchData();
  }, []);

  const handleRefresh = () => {
    if (componentRef.current) {
      componentRef.current.forceUpdate();
    }
  };

  return (
    <div>
      <HomeDealerLocator props={{ handleRefresh }} />
      {dealers.length > 0 && (
        <section className={allDeviceMaxWidth}>
          <div ref={componentRef} className=" mx-auto my-10">
            <h1 className="text-sky-700 font-normal text-large">
              Search Results
            </h1>
            <p className="text-sky-700 font-light text-lg">
              {dealers && dealers.length} Dealers founded
            </p>
            <p className="border border-primary my-8"></p>
            <div className="flex flex-col justify-center">
              {dealers.length > 0 &&
                dealers.map((dealer, i) => (
                  <div
                    key={i}
                    className="grid lg:grid-cols-2 grid-cols-1 items-center pt-4 gap-4 pb-8"
                  >
                    <div className="flex items-center border-2 border-sky-700 p-8 h-full">
                      <div className="">
                        <h1 className="text-sky-700 font-bold text-lg lg:pt-3">
                          Dealer/Shop Name: {dealer.shop_name}
                        </h1>
                        <h2 className="text-sky-700 font-normal text-lg lg:pt-3">
                          Address : {dealer.address}
                        </h2>
                        <h2 className="text-sky-700 font-normal text-lg lg:pt-3">
                          Proprietor Name: {dealer.proprietor_name}
                        </h2>
                        <h2 className="text-sky-700 font-normal text-lg lg:pt-3">
                          Phone: {dealer.phone_numbers}
                        </h2>
                        <h2 className="text-sky-700 font-normal text-lg lg:pt-3">
                          Email: {dealer.email}
                        </h2>
                        <h2 className="text-sky-700 font-semibold text-lg lg:pt-3">
                          {dealer.google_map_link !== "" && (
                            <div className="flex items-center gap-3">
                              <FaLocationArrow />{" "}
                              <a href={dealer.google_map_link} target="_blank">
                                Locate On Map
                              </a>
                            </div>
                          )}
                        </h2>
                      </div>
                    </div>
                    <div>
                      <img width={"100%"} src={dealer.image_url} alt="dealer" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default FindDealer;
