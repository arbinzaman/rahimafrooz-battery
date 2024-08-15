import BannerImage from "../../assets/images/AboutPage/RahimafroozBatteriesLtd.png";
import { allDeviceMaxWidth } from "../../styles/maxWidth";
import { useQuery } from "@tanstack/react-query";

const StoragePower = () => {
  const { data: allYoutubeLinks = [] } = useQuery({
    queryKey: ["allYoutubeLinks"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/youtube-video`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const { data: allFactoryInformations = [] } = useQuery({
    queryKey: ["allFactoryInformations"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/factory-informations`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const { data: milestoneInfo = [] } = useQuery({
    queryKey: ["milestoneInfo"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/milestone-image`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const { data: allValues = [] } = useQuery({
    queryKey: ["allValues"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/storage-power/our-values`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  return (
    <section>
      <div>
        <img src={BannerImage} alt="" />
      </div>
      <section className={allDeviceMaxWidth + " my-10"}>
        {/* Heading */}
        <div className="text-center text-regular md:text-semi_large lg:text-large text-primary font-semibold">
          <p>RAHIMAFROOZ</p>
          <p>STORAGE POWER BUSINESS (RSPB)</p>
        </div>
        {/* Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 my-10 text-justify text-black">
          <div>
            Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi bat-
            tery industry. Rahimafrooz Storage Power Business (RSPB) is the core
            business of the Group, with leadership in the local and some
            interna- tional markets. As the leading supplier of lead acid
            batteries in Bangla- desh with the latest technology of batteries,
            RSPB serves the most extensive network of dealers and retailers. It
            is the only company that has batteries to offer for every segment in
            the industry. RSPB produces a complete range of products ranging
            from 2.5 Ah to 3000 Ah, for appli- cations primarily in Automotive,
            Inverters, Solar, Marine, Traction and Telecoms. With exports
            starting in 1992, GLOBATT, VOLTA, IGNUS, and DELTA have taken RSPB
            across global frontiers.
          </div>
          <div>
            RSPB enjoys a presence in over 70+ global markets, with domination
            in some key APAC, SAARC, and Middle Eastern markets. Rahimafrooz had
            pioneered in bringing the conventional Dry Charge technology in
            automotive and Industrial in the 1960s, followed by Maintenance Free
            (MF) technology in 2009. RSPB continues to be the only MF battery
            manufacturer in Bangladesh and has continued to hold its pioneering
            position through recent technological developments including the
            Enhanced Flooded Batteries (EFB) for Start-Stop, OPzV for
            Industrial, and the completely sealed Valve Regulated Lead Acid
            (VRLA) batteries for both starting and deep cycle applications.
          </div>
        </div>
        {/* Video */}
        {allYoutubeLinks.length > 0 && (
          <div className="mx-5">
            <iframe
              className="w-[100%] h-[250px] lg:h-[450px]"
              src={allYoutubeLinks[0]?.video_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
        {/* Factory Images */}
        <div className="my-10">
          {allFactoryInformations.map((information, i) => (
            <div key={information.id}>
              {/* Factory Image 1 */}
              {i % 2 == 0 && (
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center my-10 md:my-20">
                  <div>
                    <div className="bg-primary text-base text-sm md:text-regular py-6 lg:py-12 px-6">
                      <p className="text-medium font-semibold">
                        {information?.factory_title}
                      </p>
                      <p className="py-2 text-regular">
                        {information?.description}
                      </p>
                    </div>
                    <p className="text-right text-small text-primary m-2">
                      {information?.corner_text}
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={information?.image_url}
                      alt="Rahimafrooz Batteries Factory"
                    />
                  </div>
                </div>
              )}
              {/* Factory Image 2 */}
              {i % 2 != 0 && (
                <div className="flex flex-col lg:grid lg:grid-cols-2 items-center my-10 md:my-20">
                  <div className="">
                    <img
                      src={information?.image_url}
                      className="w-full"
                      alt="Rahimafrooz Batteries Factory"
                    />
                  </div>
                  <div>
                    <div className="bg-primary text-base text-sm md:text-regular py-6 lg:py-12 px-6">
                      <p className="text-medium font-semibold">
                        {information?.factory_title}
                      </p>
                      <p className="py-2 text-regular">
                        {information?.description}
                      </p>
                    </div>
                    <p className="text-right lg:text-left text-small text-primary m-2">
                      {information?.corner_text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Milestones */}
        {milestoneInfo?.length > 0 && (
          <div className="my-10 lg:my-20">
            <p className="text-center text-large text-primary font-semibold">
              RSPB MILESTONES
            </p>
            <div className="flex justify-center my-5 lg:my-10">
              <img src={milestoneInfo[0].image_url} alt="" />
            </div>
            <p className="text-justify text-black text-xsmall lg:text-regular my-5">
              {milestoneInfo[0].description}
            </p>
          </div>
        )}
        {/* Values */}
        <div className="my-10 lg:my-20">
          <p className="text-center text-large text-primary font-semibold">
            OUR VALUES
          </p>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center items-start gap-16 text-black">
            {allValues.length > 0 ? (
              allValues?.map((item) => (
                <div key={item.id} className="flex flex-col justify-center items-center">
                  <img
                    src={item.image_url}
                    alt="Integrity in All Our Dealings image"
                    className="h-28"
                  />
                  <p className="my-5 text-center text-small md:text-regular">
                    {item.caption}
                  </p>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default StoragePower;
