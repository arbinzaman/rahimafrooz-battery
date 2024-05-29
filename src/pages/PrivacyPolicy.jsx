import { LuDot } from "react-icons/lu";
import { allDeviceMaxWidth } from "../styles/maxWidth";

const PrivacyPolicy = () => {
  return (
    <section className={`mt-10`}>
      <div className={`${allDeviceMaxWidth}`}>
        {/* hero section of privacy policy start */}
        <div className="mx-3">
          <h1 className="text-semi_large lg:text-large font-bold text-primary ">
            PRIVACY & COOKIES POLICY
          </h1>
          <h3 className="text-black   text-2xl font-bold mt-10">
            WHAT ARE COOKIES
          </h3>
          <p className="text-justify text-black text-xl mt-10 font-medium">
            Cookies are pieces of information that are placed on your device
            when you visit a website. This data/information is given back to the
            server by your browser when you return to a site you have visited
            before. You can choose to turn off all cookies through your browser
            settings. You will lose access to many features that make your
            experience more efficient if you turn cookies off. Also, some of our
            services will not function properly if the cookies are disabled.
            Below is a list of cookies we use on our website how to manage or
            disable browser cookies.
          </p>

          <h3 className="text-black text-2xl font-bold mt-10">
            HOW WE USE COOKIES
          </h3>

          <p className="text-justify text-black text-xl mt-10 font-medium">
            The information gathered through the cookies we use on our website
            makes your experience more personalized based on the interactions
            you have with us. Although certain cookies collect information sent
            by your browser automatically, you cannot be identified from this
            information.
          </p>

          <p className="text-justify text-black text-xl mt-5 font-medium">
            We utilize both first-party and third-party cookies. The first-party
            cookies are used to identify general language and location
            preferences and are issued by amararaja.com domain. While the
            third-party cookies are managed by the service providers and are
            used to compile long-term records of browsing history.
          </p>
        </div>
        {/* hero section of privacy policy start */}
        {/* Cookies section of privacy policy start */}
        <div className="mx-3">
          <h3 className="text-black   text-2xl font-bold mt-10">
            COOKIES WE USE
          </h3>
          <div className="overflow-x-auto">
            <table className="table border-background border-separate border-8 rounded-none text-justify text-lg mt-5  text-white">
              <tbody>
                {/* row 1 */}
                <tr className="bg-tableBackground1 ">
                  <th>Cookie</th>
                  <td>Purpose</td>
                </tr>
                {/* row 2 */}
                <tr className="bg-tableBackground2">
                  <th>acopendivids, acgroupswithpersist</th>
                  <td>acopendivids, acgroupswithpersist</td>
                </tr>
                {/* row 3 */}
                <tr className="bg-tableBackground2">
                  <th>utma, _utmb, _utmc, _utmz,display_features_cookie</th>
                  <td>
                    These cookies help Google Analytics to track visitor traffic
                    by collecting information about the average time spent on
                    the website, the pages viewed, and other relevant usage
                    statistics.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cookies section of privacy policy End */}
        {/* Managing Cookie section of privacy policy Start */}

        <div className="mx-3">
          <h3 className="text-black   text-2xl font-bold mt-10">
            MANAGING COOKIES
          </h3>
          <p className="text-justify text-black text-xl mt-10 font-medium">
            You may set your browser to reject browser cookies. However, if you
            set your browser options to disallow cookies, you will limit the
            functionality we can provide when you visit our website.
          </p>
          <p className="text-justify text-black text-xl mt-10 font-medium">
            By using our website, you accept the use of cookies.
          </p>
        </div>

        {/*Managing Cookies section of privacy policy End */}
      </div>

      {/*List section of privacy policy Start */}
      <section className="bg-background2 py-1 mt-5">
        <div className={`${allDeviceMaxWidth}`}>
          <ul className="mx-3 text-justify">
            <li className="my-2 flex items-center gap-1">
              <LuDot />
              <p>
                Total warranty includes pro-rata warranty. Please refer to the
                warranty card for terms and conditions.
              </p>
            </li>
            <li className="my-2 flex items-center gap-1">
              <LuDot />
              <p>
                Battery image shown is only for reference. Actual image may
                vary.
              </p>
            </li>
            <li className="my-2 flex items-center gap-1">
              <LuDot />
              <p>
                Updation of Application chart is a continuous process in Amara
                Raja. As a result battery recommendation may subject to change
                without prior notice.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/*List section of privacy policy End */}
    </section>
  );
};

export default PrivacyPolicy;
