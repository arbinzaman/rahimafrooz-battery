import BannerImage from "../../assets/images/AboutPage/RahimafroozBatteriesLtd.png";
const StoragePower = () => {
  return (
    <section>
      <div>
        <img src={BannerImage} alt="" />
      </div>
      <div className="mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
        {/* Heading */}
        <div className="text-center text-large text-primary font-semibold">
          <p>RAHIMAFROOZ</p>
          <p>STORAGE POWER BUSINESS (RSPB)</p>
        </div>
        {/* Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-10 my-10 text-justify">
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
        <div>
          <iframe
            className="w-[100%] h-[250px] lg:h-[450px]"
            src="https://www.youtube.com/embed/6GolJa3RKDQ?si=tsns12z2-x2QYTs-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default StoragePower;
