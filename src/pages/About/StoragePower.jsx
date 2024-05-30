import BannerImage from "../../assets/images/AboutPage/RahimafroozBatteriesLtd.png";
import FactoryImage1 from "../../assets/images/AboutPage/Image-01.png";
import FactoryImage2 from "../../assets/images/AboutPage/Image-02.png";
import FactoryImage3 from "../../assets/images/AboutPage/Image-03.png";
import MilestonesImage from "../../assets/images/AboutPage/RSPB-Milestones.png";
import ValueIcon1 from "../../assets/images/AboutPage/01.png";
import ValueIcon2 from "../../assets/images/AboutPage/02.png";
import ValueIcon3 from "../../assets/images/AboutPage/03.png";
import ValueIcon4 from "../../assets/images/AboutPage/04.png";
import ValueIcon5 from "../../assets/images/AboutPage/05.png";
import { allDeviceMaxWidth } from "../../styles/maxWidth";

const StoragePower = () => {
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
        <div className="mx-5">
          <iframe
            className="w-[100%] h-[250px] lg:h-[450px]"
            src="https://www.youtube.com/embed/6GolJa3RKDQ?si=tsns12z2-x2QYTs-"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* Factory Images */}
        <div className="my-10">
          {/* Factory Image 1 */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center my-10 md:my-20">
            <div>
              <div className="bg-primary text-base text-sm md:text-regular py-6 lg:py-12 px-6">
                <p className="font-semibold">Rahimafrooz Batteries Ltd.</p>
                <p className="">
                  RBL’s modern manufacturing plant is also equipped with
                  lead-recycling management system. The plant has the capacity
                  to manufacture over a 2.5 million battery units per annum for
                  automotive and other applications.
                </p>
              </div>
              <p className="text-right text-xxsmall text-primary m-2">
                Rahimafrooz Batteries Factory
              </p>
            </div>
            <div className="">
              <img src={FactoryImage1} alt="Rahimafrooz Batteries Factory" />
            </div>
          </div>
          {/* Factory Image 2 */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center my-10 md:my-20">
            <div className="">
              <img src={FactoryImage2} className="w-full" alt="Rahimafrooz Batteries Factory" />
            </div>
            <div>
              <div className="bg-primary text-base text-sm md:text-regular py-6 lg:py-12 px-6">
                <p className="font-semibold">Rahimafrooz Globatt Ltd.</p>
                <p className="">
                  The RGL factory is equipped with modern SLI battery manu-
                  facturing facilities for which raw materials are sourced from
                  Korea, Singapore, Australia and Europe. With a produc- tion
                  capacity of 1.5 million units per year, this plant is one the
                  largest battery export plant in South Asia.
                </p>
              </div>
              <p className="text-right lg:text-left text-xxsmall text-primary m-2">
                Rahimafrooz Globatt Factory
              </p>
            </div>
          </div>
          {/* Factory Image 3 */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center my-10 md:my-20">
            <div>
              <div className="bg-primary text-base text-sm md:text-regular py-6 lg:py-12 px-6">
                <p className="font-semibold">Rahimafrooz Accumulators Ltd.</p>
                <p className="">
                  RAL is equipped to manufacture 330 million Amp. Hour of
                  tubular industrial batteries using low maintenance and VRLA
                  technologies in 2V, 6V and 12V units, catering to motive,
                  traction, stationary and other backup applications.
                </p>
              </div>
              <p className="text-right text-xxsmall text-primary m-2">
                Rahimafrooz Accumulators Factory.
              </p>
            </div>
            <div className="">
              <img src={FactoryImage3} alt="Rahimafrooz Batteries Factory" />
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="my-10">
          <p className="text-center text-large text-primary font-semibold">
            RSPB MILESTONES
          </p>
          <div className="flex justify-center my-5 lg:my-10">
            <img src={MilestonesImage} alt="" />
          </div>
          <p className="text-center text-black text-xsmall lg:text-regular my-5">
            Rahimafrooz batteries deliver an optimal combination of power and
            durability. The high-quality performance of the batteries is
            guaranteed by ensuring that every critical function of the batteries
            is tested using the most advanced technology. Facilities at the
            factories include modern production machinery and testing facilities
            with complete air treatment systems and innovative lead recycling
            infrastructures. Key processes are computer controlled, guaranteeing
            accuracy and quality.
          </p>
        </div>
        {/* Values */}
        <div className="my-10">
          <p className="text-center text-large text-primary font-semibold">
            OUR VALUES
          </p>
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center content-start gap-16 text-black">
            <div className="flex flex-col justify-center items-center">
              <img
                src={ValueIcon1}
                alt="Integrity in All Our Dealings image"
                className="h-28"
              />
              <p className="my-5 text-center text-small md:text-regular">
                Integrity in All Our Dealings
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={ValueIcon2}
                alt="Excellence in
              Everything We Do image"
                className="h-28"
              />
              <p className="my-5 text-center text-small md:text-regular">
                Excellence in Everything We Do
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={ValueIcon3}
                alt="Total Commitment to
              Customer Satisfaction image"
                className="h-28"
              />
              <p className="my-5 text-center text-small md:text-regular">
                Total Commitment to Customer Satisfaction
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={ValueIcon4}
                alt="Thinking Ahead and
              Taking New Initiatives image"
                className="h-28"
              />
              <p className="my-5 text-center text-small md:text-regular">
                Thinking Ahead and Taking New Initiatives
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={ValueIcon5}
                alt="Valuing and
              Inspiring People image"
                className="h-28"
              />
              <p className="my-5 text-center text-small md:text-regular">
                Valuing and Inspiring People
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default StoragePower;
