import { useState } from "react";
import {
  GlobeAltIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../assets/Rahimafrooz_Logo_Color.png";
import Facebook from "../../assets/icons/facebook-icon.svg";
import Instagram from "../../assets/icons/instagram-icon.svg";
import Linkedin from "../../assets/icons/linkedin-icon.svg";
import Telephone from "../../assets/icons/telephone.png";
import Mail from "../../assets/icons/mail.png";
import Cart from "../../assets/icons/cart.png";
import Battery from "../../assets/icons/car-battery.png";
import "../../styles/Header.css";
import clsx from "clsx";

const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);

  return (
    <div>
      <nav>
        <div className="p-6 text-white diagonal-background">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a href="/">
                  <img className="nav-logo" src={Logo} alt="logo" />
                </a>
              </div>
              <div className="hidden lg:block">
                <div className="flex">
                  <div className="flex ">
                    <img
                      style={{ marginTop: "1px" }}
                      className="w-4 h-4 mr-1 opacity-80"
                      src={Telephone}
                      alt="icon"
                    />
                    <a
                      className="text-sm text-cyan-100 opacity-80"
                      href="tel:+880258153128"
                    >
                      +880 2 5815 3128
                    </a>
                  </div>
                  <span className="horizontal-line">|</span>
                  <div className="flex ml-2">
                    <img
                      style={{ marginTop: "1px" }}
                      className="w-4 h-4 mr-1 opacity-80"
                      src={Mail}
                      alt="icon"
                    />
                    <a
                      className="text-sm text-cyan-100 opacity-80"
                      href="mailto:battery@rahimafrooz.com"
                    >
                      battery@rahimafrooz.com
                    </a>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <a
                      href="https://www.facebook.com/Rahimafrooz/"
                      target="_blank"
                    >
                      <img src={Facebook} alt="fb" width={20} height={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/rahimafroozbd/"
                      target="_blank"
                    >
                      <img src={Instagram} alt="ig" width={20} height={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/rahimafrooz/"
                      target="_blank"
                    >
                      <img src={Linkedin} alt="li" width={20} height={20} />
                    </a>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  <a href="https://estore.rahimafrooz.com/" target="_blank">
                    <button className="header-btn">
                      <img
                        className="w-4 h-4 mt-1 mr-1 opacity-50"
                        src={Cart}
                        alt="icon"
                      />
                      Buy Now
                    </button>
                  </a>
                  <a href="/manage-my-battery">
                    <button className="header-btn">
                      <img
                        className="w-4 h-4 mt-1 mr-2 opacity-60"
                        src={Battery}
                        alt="icon"
                      />
                      Warranty & Services
                    </button>
                  </a>
                  <select className="header-btn">
                    <option selected>English</option>
                    <option>বাংলা</option>
                    <option>Arabic</option>
                  </select>
                </div>
              </div>
              {/* Mobile Nav */}
              <div className="lg:hidden">
                <div className="flex">
                  <a href="/global-presence">
                    <button className="header-btn-mobile">
                      {" "}
                      <GlobeAltIcon className="w-4 h-4 mt-1 mr-1" />
                      Global Presence
                    </button>
                  </a>
                  <Bars3Icon
                    onClick={() => setMenu(true)}
                    className="md:w-12 md:h-12 w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="main-nav hidden lg:block">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-4">
              <div className="flex md:order-2 gap-2">
                <button
                  type="button"
                  data-collapse-toggle="navbar-search"
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  className="md:hidden  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="search block w-full pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
                <a href="/become-a-dealer">
                  <button className="header-btn">Become A Partner</button>
                </a>
                <a href="/global-presence">
                  <button className="header-btn">
                    {" "}
                    <GlobeAltIcon className="w-4 h-4 mt-1 mr-1" />
                    Global Presence
                  </button>
                </a>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-search"
              >
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:mt-0 md:border-0">
                  <li>
                    <a
                      href="/"
                      className="block p-0 text-base opacity-80 rounded bg-transparent font-semibold"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li className="md:ml-0 xl:ml-4">
                    <div className="dropdown dropdown-bottom">
                      <div className="flex" tabIndex={0} role="button">
                        <div className="btn text-white opacity-80 h-0 min-h-0 border-none text-base">
                          About
                        </div>
                        <ChevronDownIcon
                          style={{ marginLeft: "-10px" }}
                          className="w-4 h-4 mt-1 text-base"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-sky-100 text-sky-600 mt-6 rounded-sm w-64"
                      >
                        <li>
                          <a
                            href="https://www.rahimafrooz.com/"
                            target="_blank"
                            className="nav-active-bg"
                          >
                            Rahimafrooz Group
                          </a>
                        </li>
                        <li>
                          <a
                            href="/Founder-and-Board-Members"
                            className="nav-active-bg"
                          >
                            Founder & Board Members
                          </a>
                        </li>
                        <li>
                          <a
                            href="/rahimafrooz-storage-power"
                            className="nav-active-bg"
                          >
                            Rahimafrooz Storage Power
                          </a>
                        </li>
                        <li>
                          <a href="/manufacturing" className="nav-active-bg">
                            Manufacturing
                          </a>
                        </li>
                        <li>
                          <a
                            href="/special-awards-achievement"
                            className="nav-active-bg"
                          >
                            Special Awards & Achievement
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="md:ml-0 xl:ml-4">
                    <div className="dropdown dropdown-bottom">
                      <div tabIndex={0} role="button" className="flex">
                        <div className="btn text-white opacity-80 h-0 min-h-0 border-none text-base">
                          Products
                        </div>
                        <ChevronDownIcon
                          style={{ marginLeft: "-10px" }}
                          className="w-4 h-4 mt-1 text-white"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-sky-100 text-sky-600 mt-6 rounded-sm w-32"
                      >
                        <li>
                          <a
                            href="/products-bangladesh"
                            className="nav-active-bg"
                          >
                            Bangladesh
                          </a>
                        </li>
                        <li>
                          <a
                            href="/products-international"
                            className="nav-active-bg"
                          >
                            International
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="md:ml-4 xl:ml-8">
                    <a
                      href="#"
                      className="block p-0 text-white opacity-80 rounded bg-transparent font-semibold"
                    >
                      Services
                    </a>
                  </li>
                  <li className="md:ml-4 xl:ml-8">
                    <a
                      href="/contact-us"
                      className="block p-0 text-white opacity-80 rounded bg-transparent font-semibold"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile-nav lg:hidden">
        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "absolute z-50 h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 w-96 flex">
            <XMarkIcon
              onClick={() => setMenu(false)}
              className="w-8 h-8 cursor-pointer"
            />

            <ul className="flex flex-col font-medium">
              <li>
                <a
                  href="/"
                  className="block pl-4 pb-4 text-sky-600 rounded bg-transparent font-semibold"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="md:ml-0 xl:ml-4 pb-4">
                <div className="dropdown dropdown-bottom">
                  <div className="flex" tabIndex={0} role="button">
                    <div className="btn text-sky-600 h-0 min-h-0 border-none text-base">
                      About
                    </div>
                    <ChevronDownIcon
                      style={{ marginLeft: "-10px" }}
                      className="w-4 h-4 mt-1 text-sky-600"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className=" menu p-2 shadow bg-sky-100 text-sky-600 mt-6 rounded-sm w-64"
                  >
                    <li>
                      <a
                        href="https://www.rahimafrooz.com/"
                        target="_blank"
                        className="nav-active-bg"
                      >
                        Rahimafrooz Group
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Founder-and-Board-Members"
                        className="nav-active-bg"
                      >
                        Founder & Board Members
                      </a>
                    </li>
                    <li>
                      <a
                        href="/rahimafrooz-storage-power"
                        className="nav-active-bg"
                      >
                        Rahimafrooz Storage Power
                      </a>
                    </li>
                    <li>
                      <a className="nav-active-bg">Manufacturing</a>
                    </li>
                    <li>
                      <a
                        href="/special-awards-achievement"
                        className="nav-active-bg"
                      >
                        Special Awards & Achievement
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="md:ml-0 xl:ml-4 pb-4">
                <div className="">
                  <div tabIndex={0} role="button" className="flex">
                    <div className="btn text-sky-600 h-0 min-h-0 border-none text-base">
                      Products
                    </div>
                    <ChevronDownIcon
                      style={{ marginLeft: "-10px" }}
                      className="w-4 h-4 mt-1 text-sky-600"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-sky-100 text-sky-600 mt-6 rounded-sm w-32"
                  >
                    <li>
                      <a href="/products-bangladesh" className="nav-active-bg">
                        Bangladesh
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products-international"
                        className="nav-active-bg"
                      >
                        International
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="md:ml-4 xl:ml-8">
                <a
                  href="#"
                  className="block pl-4 pb-4 text-sky-600 rounded bg-transparent font-semibold"
                >
                  Services
                </a>
              </li>
              <li className="md:ml-4 xl:ml-8">
                <a
                  href="/contact-us"
                  className="block pl-4 pb-4 text-sky-600 rounded bg-transparent font-semibold"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;