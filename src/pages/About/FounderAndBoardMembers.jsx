import img1 from "../../assets/images/FounderAndBoardMembers/Management.png";
import img2 from "../../assets/images/FounderAndBoardMembers/Founder-&-Board-Members-Image.png";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const FounderAndBoardMembers = () => {
  return (
    <section className="">
      <div>
        <img src={img1} alt="" />
      </div>

      <div className="max-w-screen-2xl mx-10 lg:mx-auto text-justify">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(30%,70%)] justify-items-center mt-28">
          <div className="">
            <img src={img2} className="w-full" />
          </div>
          <div className="lg:ml-10 w-full">
            <h1 className="text-semi_large font-bold text-blue-900 mb-0">
              A.C. ABDUR RAHIM
            </h1>
            <div className="flex flex-col justify-center">
              <p className="text-regular text-black font-medium mt-2  text-justify">
                A man of strict religious values, yet a believer in progressive
                dynamism, and a dreamer who thought nothing is impossible – Late
                A C Abdur Rahim overcame numerous challenges and obstacles to
                become one of the most accomplished entrepreneurs of this
                country. Born on the 20th of January 1915, he lost both his
                parents by the time he was seven years of age. Deprived of
                formal schooling and a typically comfortable childhood, he grew
                up as a man with strong determination, hardworking diligence,
                and humane compassion.
              </p>

              <p className="text-regular text-black font-medium mt-4 text-justify">
                By the early 1940s, Mr. Rahim started small scale commercial
                trading on his own. He moved to Chittagong in 1947 and stared
                afresh with very little capital in hand, but with a whole world
                of courage and faith. In 1950, he established the small trading
                concern dealing in various items. This proprietary business was
                formally incorporated on April 15, 1954 as Rahimafrooz & Co.
                Till date, Rahimafrooz Group commemorates this as its
                “Foundation Day”.
              </p>

              <p className="text-regular text-black font-medium mt-4 text-justify">
                The childhood hardship and the struggle in his young years only
                made Mr. Rahim a strong individual, a faithful human being, and
                a leader full of compassion and humanity. He was a caring father
                and an affectionate person throughout his life. Whoever, in his
                lifetime, came in touch with Mr. Rahim, fondly remembers him as
                a man of tremendous humility, dignity, and trustworthiness. His
                passion for continuously improving himself and his religious and
                ethical righteousness, and his dedication to please his
                customers – are still prevalent in today’s Rahimafrooz culture –
                shaping the Group’s present and its future.
              </p>
            </div>
          </div>
        </div>

        <p className="text-regular text-black font-medium my-10 ">
          Today’s Rahimafrooz is a dream that Mr. A C Abdur Rahim turned into
          reality. The business growth, the social commitment, and the great
          diversity in today’s Rahimafrooz are the outcome of one lifetime of
          hard work and compassion from Mr. Rahim. He breathed his last on March
          14, 1982 in London. But his work and his virtue have kept him alive
          forever. May Allah grant him with eternal peace.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="grid grid-cols-1 justify-items-center mb-10">
          <div>
            <img src={img2} alt="" className="h-3/4"/>
            <div className="flex flex-col text-black items-center my-2">
              <p>A.C. Abdur Rahim</p>
              <p>Designation</p>
              <div className="flex gap-3">
                <ImFacebook2 className="text-primary" />
                <FaInstagramSquare className="text-red-500" />
                <FaLinkedin className="text-primary" />
              </div>
            </div>
          </div>
          <div className="shadow-xl text-regular p-5 text-black text-justify mb-10">
            {" "}
            <p className="">
              A man of strict religious values, yet a believer in progressive
              dynamism, and a dreamer who thought nothing is impossible – Late A
              C Abdur Rahim overcame numerous challenges and obstacles to become
              one of the most accomplished entrepreneurs of this country. Born
              on the 20th of January 1915, he lost both his parents by the time
              he was seven years of age. Deprived of formal schooling and a
              typically comfortable childhood, he grew up as a man with strong
              determination, hardworking diligence, and humane compassion.
            </p>
            <br />
            <p>
              By the early 1940s, Mr. Rahim started small scale commer- cial
              trading on his own. He moved to Chittagong in 1947 and stared
              afresh with very little capital in hand, but with a whole world of
              courage and faith. In 1950, he established the small trading
              concern dealing in various items. This proprietary business was
              formally incorporated on April 15, 1954 as Rahimafrooz & Co. Till
              date, Rahimafrooz Group commemo- rates this as its “Foundation
              Day”.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center mb-10">
          <div className="">
            <img src={img2} alt="" className="h-3/4" />
            <div className="flex flex-col text-black items-center my-2">
              <p>A.C. Abdur Rahim</p>
              <p>Designation</p>
              <div className="flex gap-3">
                <ImFacebook2 className="text-primary" />
                <FaInstagramSquare className="text-red-500" />
                <FaLinkedin className="text-primary" />
              </div>
            </div>
          </div>
          <div className="shadow-xl text-regular p-5 text-black text-justify mb-10">
            {" "}
            <p className="">
              A man of strict religious values, yet a believer in progressive
              dynamism, and a dreamer who thought nothing is impossible – Late A
              C Abdur Rahim overcame numerous challenges and obstacles to become
              one of the most accomplished entrepreneurs of this country. Born
              on the 20th of January 1915, he lost both his parents by the time
              he was seven years of age. Deprived of formal schooling and a
              typically comfortable childhood, he grew up as a man with strong
              determination, hardworking diligence, and humane compassion.
            </p>
            <br />
            <p>
              By the early 1940s, Mr. Rahim started small scale commer- cial
              trading on his own. He moved to Chittagong in 1947 and stared
              afresh with very little capital in hand, but with a whole world of
              courage and faith. In 1950, he established the small trading
              concern dealing in various items. This proprietary business was
              formally incorporated on April 15, 1954 as Rahimafrooz & Co. Till
              date, Rahimafrooz Group commemo- rates this as its “Foundation
              Day”.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FounderAndBoardMembers;
