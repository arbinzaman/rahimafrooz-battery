import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

import Logo from '../../assets/Rahimafrooz_Logo.png';
import Facebook from '../../assets/facebook-icon.svg';
import Instagram from '../../assets/instagram-icon.svg';
import Linkedin from '../../assets/linkedin-icon.svg';
import Battery from '../../assets/battery-icon.svg';
import '../../styles/Header.css';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="p-6 text-white diagonal-background">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a href="/" className="text-white text-xl font-bold">
                  <img src={Logo} alt="logo" width={338} height={49} />
                </a>
              </div>
              <div>
                <div className='flex'>
                  <div className='flex '>
                    <PhoneIcon className='w-4 h-4 mt-1 mr-1' />
                    <a className='text-sm text-cyan-100 opacity-80' href="tel:+880258153128">+880 2 5815 3128</a>
                  </div>
                  <span className='horizontal-line'>|</span>
                  <div className='flex ml-2'>
                    <EnvelopeIcon className='w-4 h-4 mt-1 mr-2' />
                    <a className='text-sm text-cyan-100 opacity-80' href="mailto:battery@rahimafrooz.com">battery@rahimafrooz.com</a>
                  </div>
                  <div className='flex gap-2 ml-4'>
                    <img src={Facebook} alt="fb" width={20} height={20} />
                    <img src={Instagram} alt="ig" width={20} height={20} />
                    <img src={Linkedin} alt="li" width={20} height={20} />
                  </div>
                </div>
                <div className='mt-2 flex gap-2'>
                  <button className='header-btn'> <ShoppingCartIcon className='w-4 h-4 mt-1 mr-1' />Buy Now</button>
                  <button className='header-btn'> <img className='w-4 h-4 mt-1 mr-1' src={Battery} alt='icon' />Manage My Battery</button>
                  <select className="select select-info w-full max-w-28 min-h-8 h-8 bg-primary text-cyan-100 opacity-80">
                    <option defaultValue={'English'}>English</option>
                    <option>Japanese</option>
                    <option>Italian</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="main-nav">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-4 pb-4">
              <div className="flex md:order-2 gap-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden  hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1" >
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search block w-full pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search" />
                </div>
                <button className='header-btn'>Become A Partner</button>
                <button className='header-btn'>Global Presence</button>
              </div>
              <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <ul
                  className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row xl:space-x-8 md:mt-0 md:border-0">
                  <li>
                    <a href="#" className="block p-0 text-cyan-300 opacity-80 rounded bg-transparent font-semibold" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="dropdown dropdown-bottom">
                      <div className='flex' tabIndex={0} role="button">
                        <div className="btn text-cyan-300 opacity-80 h-0 min-h-0 border-none text-base">About</div>
                        <ChevronDownIcon className='w-4 h-4 mt-1 text-cyan-300' />
                      </div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-cyan-50 mt-5 w-64">
                        <li><a>Rahimafrooz Group</a></li>
                        <li><a>Founder & Board Members</a></li>
                        <li><a>Rahimafrooz Storage Power</a></li>
                        <li><a>Manufacturing</a></li>
                        <li><a>Special Awards & Achievement</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown dropdown-bottom">
                      <div tabIndex={0} role="button" className='flex'>
                        <div className="btn text-cyan-300 opacity-80 h-0 min-h-0 border-none text-base">Products</div>
                        <ChevronDownIcon className='w-4 h-4 mt-1 text-cyan-300' />
                      </div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-cyan-50 mt-5 w-32">
                        <li><a>Bangladesh</a></li>
                        <li><a>International</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown dropdown-bottom">
                      <div tabIndex={0} role="button" className="btn text-cyan-300 opacity-80 h-0 min-h-0 border-none text-base">Services</div>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="block p-0 text-cyan-300 opacity-80 rounded bg-transparent font-semibold">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header