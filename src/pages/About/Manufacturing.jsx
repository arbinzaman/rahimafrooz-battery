import ManufacturingBanner from "../../assets/images/AboutPage/Manufacturing/Manufacturing.png";
import Image1 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-01.png";
import Image2 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-02.png";
import Image3 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-03.png";
import Image4 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-04.png";
import Image5 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-05.png";
import Image6 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-06.png";
import Image7 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-07.png";
import Image8 from "../../assets/images/AboutPage/Manufacturing/Manufacturing-08.png";

const Manufacturing = () => {
  return (
    <section>
      <div>
        <img src={ManufacturingBanner} alt="" />
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mx-5 my-5 md:my-8 lg:my-16 md:mx-16 lg:mx-28">
        {/* Left Side */}
        <section className="">
          <div className="bg-primary text-left p-10 lg:p-20 leading-relaxed">
            <p className="flex flex-col text-semi_large lg:text-large text-base font-bold">
              <span className="mb-5">Manufacturing</span>{" "}
              <span>Facilities</span>
            </p>
          </div>
          {/* Img 2 */}
          <div className="grid mt-20 lg:mt-32 lg:mb-44">
            <div>
              <img src={Image2} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Cast ON Strap (COS)</p>
              <p>Machine</p>
            </div>
            <p className="my-10">
              Our modernized COS (Cast –On- Strap) machine has four working
              stations with rotary table which speeds up the assembly process
              and ensures high quality group building. This automated machine is
              capable to handle COS for both central lug and lateral lug posi-
              tion and can manage the variations of strap thickness. It ensures
              stronger strap than the thinner gas-burnt conventional group
              build- ing and reduce the lever action movement resulting from the
              road shock.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Img 4 */}
          <div className="grid mt-20 lg:mt-32 lg:mb-44">
            <div>
              <img src={Image4} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Injection</p>
              <p>Molding Facility</p>
            </div>
            <p className="my-10">
              Our injection molding facilities produce all the major containers
              required to assemble batteries. Superior quality of Polypropylene
              (PP) granules from Lyondell Basell, Korea and Exxon Mobil, Singa-
              pore are used as raw material. Each injection machine is operated
              by advanced PLC and comes with individual cooling facility for
              molds.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Img 6 */}
          <div className="grid mt-20 lg:mt-32 lg:mb-44">
            <div>
              <img src={Image6} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Quality</p>
              <p>Assurance Lab</p>
            </div>
            <p className="my-10">
              Our Quality Assurance laboratory inspects quality of incoming raw
              materials, in-process semi-ﬁnished products and components and
              100% ﬁnished products before releasing for delivery. The laborato-
              ry is equipped with state-of-the-art equipment sourced from
              renowned makers of the world. The chemical laboratory is equipped
              with advanced titration and separation mechanism to test primarily
              the capacity, CCA, RC, Charge Retention tests of all batteries.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Img 8 */}
          <div className="grid mt-20 lg:mt-32 lg:mb-44">
            <div>
              <img src={Image8} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Material</p>
              <p>Management</p>
            </div>
            <p className="my-10">
              The factory has built a modern warehouse with access pathway for
              trucks and container transport. The warehouse provides ample space
              for storage, sorting, loading and unloading of ﬁnished goods and
              raw materials for a complete packaging solution.
            </p>
            <p className="border border-b-primary"></p>
          </div>
        </section>
        {/* Right Side */}
        <section className="">
          {/* Img 1 */}
          <div className="lg:mb-44">
            <div>
              <img src={Image1} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Cominco Line</p>
              <p>Canada</p>
            </div>
            <p className="my-10">
              We use Canadian based Cominco line’s expanded grid technology to
              produce negative grids for our MF/SMFbatteries. We use only
              superior quality lead calcium alloy to produce the grids, which
              are pasted using Super MAC machine of USA. After pasting, plates
              are sent to vacuum dryer for surface drying and stacking for next
              pro- cessing.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Img 3 */}
          <div className="grid my-20 lg:my-32 lg:mb-44">
            <div>
              <img src={Image3} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Die Casting</p>
              <p>Machine</p>
            </div>
            <p className="my-10">
              Our pressure die casting machine ensures ﬂawless & high-pres- sure
              casted spine for Industrial battery. It also makes sure of high
              operational life using superﬁne void-free grain structure under
              the quick rate of discharge. Our specialized paste recipe
              facilitates high charge acceptance and reduces recharging time.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Img 5 */}
          <div className="grid my-20 lg:my-32 lg:mb-44">
            <div>
              <img src={Image5} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">Oxide Mill</p>
              <p>Sovema, Italy</p>
            </div>
            <p className="my-10">
              The assembled batteries are taken to formation tanks to charge the
              batteries in circulating water cooling system. We use advanced
              current transducers for the DC current to ensure high stability of
              battery formation for each battery. The conversion of lead dioxide
              after charging is over 95%.
            </p>
            <p className="border border-b-primary"></p>
          </div>
          {/* Img 7 */}
          <div className="grid my-20 lg:my-32 lg:mb-44">
            <div>
              <img src={Image7} alt="" width={"100%"} />
            </div>
            <div className="text-primary mt-10">
              <p className="font-semibold">ATP & ETP</p>
              <p>Sovema, Italy</p>
            </div>
            <p className="my-10">
              The assembled batteries are taken to formation tanks to charge the
              batteries in circulating water cooling system. We use advanced
              current transducers for the DC current to ensure high stability of
              battery formation for each battery. The conversion of lead dioxide
              after charging is over 95%.
            </p>
            <p className="border border-b-primary"></p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Manufacturing;
