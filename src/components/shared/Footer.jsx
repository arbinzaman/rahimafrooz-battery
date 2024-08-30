import {
  ChevronDownIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { IoIosArrowDropupCircle } from "react-icons/io";


import Logo from "../../assets/70-Years-Logo.png";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Instagram from "../../assets/icons/instagram-icon.svg";
import Linkedin from "../../assets/icons/linkedin-icon.svg";
import Youtube from "../../assets/icons/youtube-icon.svg";
import FooterLogo from "../../assets/Rahimafrooz_Logo_White.svg";

import "../../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-primary">
        <div className="max-w-screen-xl mx-auto pt-12 pl-4 pr-4">
          <div className="flex justify-between">
            <img src={Logo} alt="logo" width={135} height={135} />
            <div className="flex pt-6">
              <div className="sm:flex">
                <a href="/global-presence">
                  <button className="footer-btn flex">
                    <GlobeAltIcon className="w-4 h-4 mt-1 mr-1" />
                    Global Presence
                  </button>
                </a>
                <div className="lg:hidden mt-2 lg:mt-0 flex justify-center sm:justify-end gap-2 ml-4 mr-4">
                  <a href="https://www.facebook.com/Rahimafrooz/" target="_blank">
                    <img src={Facebook} alt="fb" width={20} height={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/rahimafroozbd/"
                    target="_blank"
                  >
                    <img src={Instagram} alt="fb" width={20} height={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/rahimafrooz/"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="fb" width={20} height={20} />
                  </a>
                  <a
                    href="https://www.youtube.com/@RahimafroozBangladesh"
                    target="_blank"
                  >
                    <img src={Youtube} alt="fb" width={20} height={20} />
                  </a>
                </div>
              </div>
              <a
                className="hidden lg:block"
                href="https://estore.rahimafrooz.com/"
                target="_blank"
              >
                <button className="footer-btn">Buy Now</button>
              </a>
            </div>
          </div>
        </div>
        <footer className="footer hidden lg:grid text-white grid-cols-5 gap-6 pb-10 max-w-screen-xl mx-auto pl-4 pr-4">
          <nav className="col-span-2 max-w-sm">
            <p className="text-justify pt-10">
              Rahimafrooz was founded in 1954 as a pioneer in the Bangladeshi
              battery industry. Rahimafrooz Storage Power Business (RSPB) is the
              core business of the Group, with leadership in the local and some
              international markets. As the leading supplier of lead acid
              batteries in Bangladesh with the latest technology of batteries,
              RSPB serves the most extensive network of dealers and retailers. It
              is the only company that has batteries to offer for every segment in
              the industry.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title">Useful Links</h6>
            <Link to={"/become-a-dealer"} className="link link-hover opacity-80">
              Become A Partner
            </Link>
            <Link
              to={"/manage-my-battery"}
              className="link link-hover opacity-80"
            >
              Warranty and Services
            </Link>
            <Link to={"/find-dealer"} className="link link-hover opacity-80">
              Nearest Dealer
            </Link>
            <Link
              to={"https://www.rahimafrooz.com/"}
              className="link link-hover opacity-80"
            >
              Rahimafrooz Group
            </Link>
            <Link to={""} className="link link-hover opacity-80">
              Downloads
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Policies</h6>
            <Link
              to={"/terms-and-conditions"}
              className="link link-hover opacity-80"
              href="#"
            >
              Terms and Conditions
            </Link>
            <Link
              to={"/privacy-policy"}
              className="link link-hover opacity-80"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link to={""} className="link link-hover opacity-80" href="#">
              Copyright notification
            </Link>
            <Link to={""} className="link link-hover opacity-80" href="#">
              Cookies Settings
            </Link>
          </nav>
          <nav className="text-right place-items-end">
            <h6 className="footer-title">Head Office</h6>
            <p className="text-white">
              Rahimafrooz Storage Power Business 705, West Nakhalpara, Tejgaon
              Dhaka-1215, Bangladesh.
            </p>
            <h6 className="footer-title">Phone | Fax</h6>
            <div className="lg:flex lg:gap-2">
              <a href="tel:+88029113696">+880 2 9113696</a>
              <br className="lg:hidden" />
              <span className="hidden lg:block">|</span>
              <a href="tel:880258153128">+880 2 58153128</a>
            </div>
            <h6 className="footer-title">Email</h6>
            <a className="text-sm" href="mailto:battery@rahimafrooz.com">
              battery@rahimafrooz.com
            </a>
            <h6 className="footer-title">Social Media</h6>
            <div className="flex gap-2 ml-4">
              <a href="https://www.facebook.com/Rahimafrooz/" target="_blank">
                <img src={Facebook} alt="fb" width={20} height={20} />
              </a>
              <a href="https://www.instagram.com/rahimafroozbd/" target="_blank">
                <img src={Instagram} alt="fb" width={20} height={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/rahimafrooz/"
                target="_blank"
              >
                <img src={Linkedin} alt="fb" width={20} height={20} />
              </a>
              <a
                href="https://www.youtube.com/@RahimafroozBangladesh"
                target="_blank"
              >
                <img src={Youtube} alt="fb" width={20} height={20} />
              </a>
            </div>
          </nav>
        </footer>

        {/* Mobile Devices */}
        <footer className="lg:hidden">
          <nav className="collapse pt-6">
            <input type="checkbox" className="min-h-0" />
            <h6 className="collapse-title flex justify-between font-medium footer-title-mobile border-t border-sky-600">
              <p className="pl-4 pb-4 pt-4">Useful Links</p>
              <ChevronDownIcon className="w-5 h-5 mt-4 mr-8 text-white opacity-95" />
            </h6>
            <div className="collapse-content bg-sky-600 leading-8">
              <Link
                to={"/become-a-dealer"}
                className="link link-hover opacity-80"
              >
                Become A Partner
              </Link>
              <br />
              <Link
                to={"/manage-my-battery"}
                className="link link-hover opacity-80"
              >
                Warrany and Services
              </Link>
              <br />
              <Link to={"/find-dealer"} className="link link-hover opacity-80">
                Nearest Dealer
              </Link>
              <br />
              <Link
                to={"https://www.rahimafrooz.com/"}
                className="link link-hover opacity-80"
              >
                Rahimafrooz Group
              </Link>
              <br />
              <Link to={""} className="link link-hover opacity-80">
                Downloads
              </Link>
            </div>
          </nav>
          <nav className="collapse">
            <input type="checkbox" className="min-h-0" />
            <h6 className="collapse-title flex justify-between font-medium footer-title-mobile border-t border-sky-600">
              <p className="pl-4 pb-4 pt-4">Policies</p>
              <ChevronDownIcon className="w-5 h-5 mt-4 mr-8 text-white opacity-95" />
            </h6>
            <div className="collapse-content bg-sky-600 leading-8">
              <Link
                to={"/terms-and-conditions"}
                className="link link-hover opacity-80"
                href="#"
              >
                Terms and Conditions
              </Link>{" "}
              <br />
              <Link
                to={"/privacy-policy"}
                className="link link-hover opacity-80"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>{" "}
              <br />
              <a className="link link-hover opacity-80" href="#">
                Copyright notification
              </a>
              <br />
              <a className="link link-hover opacity-80" href="#">
                Cookies Settings
              </a>
              <br />
            </div>
          </nav>
          <nav className="collapse">
            <input type="checkbox" className="min-h-0" />
            <h6 className="collapse-title flex justify-between font-medium footer-title-mobile border-b border-t border-sky-600">
              <p className="pl-4 pb-4 pt-4">Head Office</p>
              <ChevronDownIcon className="w-5 h-5 mt-4 mr-8 text-white opacity-95" />
            </h6>
            <div className="collapse-content bg-sky-600 leading-8">
              <p className="text-white">
                Rahimafrooz Storage Power Business 705, West Nakhalpara, Tejgaon
                Dhaka-1215, Bangladesh.
              </p>
              <h6 className="footer-title">Phone | Fax</h6>
              <div className="lg:flex lg:gap-2">
                <a href="tel:+88029113696">+880 2 9113696</a>
                <br className="lg:hidden" />
                <span className="hidden lg:block">|</span>
                <a href="tel:880258153128">+880 2 58153128</a>
              </div>
              <h6 className="footer-title">Email</h6>
              <a className="text-sm" href="mailto:battery@rahimafrooz.com">
                battery@rahimafrooz.com
              </a>
            </div>
          </nav>

          <div className="hidden lg:block flex justify-end gap-2 ml-4 mr-4">
            <a href="https://www.facebook.com/Rahimafrooz/" target="_blank">
              <img src={Facebook} alt="fb" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/rahimafroozbd/" target="_blank">
              <img src={Instagram} alt="fb" width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/rahimafrooz/"
              target="_blank"
            >
              <img src={Linkedin} alt="fb" width={20} height={20} />
            </a>
            <a
              href="https://www.youtube.com/@RahimafroozBangladesh"
              target="_blank"
            >
              <img src={Youtube} alt="fb" width={20} height={20} />
            </a>
          </div>
        </footer>
        <div className="max-w-screen-xl mx-auto text-white text-xs pt-6 pb-6 font-semibold">
          <div className="flex justify-center lg:justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center lg:pl-3 ">
              <img className="ml-5 lg:ml-0" src={FooterLogo} alt="yt" width={120} height={120} />
              <p className="text-center opacity-80 pl-4 pt-2 lg:pt-0 flex flex-col lg:flex-row justify-center items-center">
                <span>Copyright © 2017-2023 <br className="sm:hidden" /> Rahimafrooz Batteries Ltd.</span>{" "}
                <span> All rights reserved.</span>
              </p>
            </div>
            <div>
              <button onClick={scrollUp} className="mr-4 hidden md:block lg:block xl:block">
                <IoIosArrowDropupCircle className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sky-300 text-sky-700 font-bold" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: '#0059a3'}}>
        <div className="max-w-screen-xl mx-auto">
          <div className="text-small text-white px-2 py-4 flex flex-col items-center lg:flex-row lg:justify-between">
            <p>A Subsidiary of Rahimafrooz</p>
            <p>Powered by Prionty Digital</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
