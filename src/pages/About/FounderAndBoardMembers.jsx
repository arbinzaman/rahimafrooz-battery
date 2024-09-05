import LocallySavedBanner from "../../assets/images/BannerImages/AboutPage/Management.jpg";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";
import FetchErrorMessage from "../../components/shared/Error/FetchErrorMessage";
import BannerImage from "../../components/shared/BannerImage";
const FounderAndBoardMembers = () => {
  // Key for Banner Image
  const pageKey = "board_members";

  // Board Member Information
  const { data: allBoardMembers = [], error: boardMemberFetchError } = useQuery(
    {
      queryKey: ["allBoardMembers"],
      queryFn: async () => {
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/board-members`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        return data;
      },
      refetchOnWindowFocus: true,
    }
  );
  const founderInfo = allBoardMembers.find((item) =>
    item.designation.toLowerCase().replace(/\s/g, "").includes("founder")
  );
  const othersInfo = allBoardMembers.filter(
    (item) =>
      !item.designation.toLowerCase().replace(/\s/g, "").includes("founder")
  );

  return (
    <section className="">
      <BannerImage bannerImageProps={{ pageKey, LocallySavedBanner }} />
      {boardMemberFetchError ? (
        <FetchErrorMessage />
      ) : (
        <div className={`${allDeviceMaxWidth} text-justify`}>
          <p className="text-2xl text-center lg:text-4xl font-semibold lg:font-bold text-primary my-10 uppercase">
            Board Members & Management
          </p>
          {/* Founder And Chairman */}
          <div className="bg-[#e6f2ff] p-5 my-5 shadow-sm">
            <div className="none lg:flex lg:items-center gap-10">
              <div className="flex justify-center">
                <img src={founderInfo?.image_url} className="h-3/4" />
              </div>
              <div className="w-full">
                <h1 className="text-center lg:text-left text-medium lg:text-semi_large font-bold text-primary">
                  {founderInfo?.name?.toUpperCase()}
                </h1>
                <div className="flex flex-col justify-center text-black">
                  <p>{founderInfo?.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {othersInfo &&
              othersInfo?.map((info, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-items-center mb-10 bg-[#e6f2ff] shadow-sm"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={info?.image_url}
                      alt=""
                      style={{ height: "250px" }}
                      className="mt-10 mb-3"
                    />
                    <div className="flex flex-col text-black items-center my-2">
                      <p className="font-semibold">{info?.name}</p>
                      <p className="font-medium">{info?.designation}</p>
                      <div className="flex gap-3 my-3">
                        <a href={info?.facebook}>
                          <ImFacebook2 className="text-primary" />
                        </a>
                        <a href={info?.instagram}>
                          <FaInstagramSquare className="text-red-500" />
                        </a>
                        <a href={info?.linkedin}>
                          <FaLinkedin className="text-primary" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="text-regular p-5 text-black text-justify mx-3">
                    <p>{info?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default FounderAndBoardMembers;
