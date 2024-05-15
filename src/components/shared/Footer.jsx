import Logo from '../../assets/70-Years-Logo.png';
import Facebook from '../../assets/icons/facebook-icon.svg';
import Instagram from '../../assets/icons/instagram-icon.svg';
import Linkedin from '../../assets/icons/linkedin-icon.svg';
import Youtube from '../../assets/icons/youtube-icon.svg';
import FooterLogo from '../../assets/Rahimafrooz_Logo_White.svg';

import "../../styles/Footer.css"

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className='max-w-screen-xl mx-auto pt-12 pl-4 pr-4'>
        <div className='flex justify-between'>
          <img src={Logo} alt="logo" width={135} height={135} />
          <div className='flex pt-6'>
            <a href="/global-presence">
              <button className='footer-btn'> Global Presence</button>
            </a>
            <a href="https://estore.rahimafrooz.com/" target='_blank'>
              <button className='footer-btn'>Buy Now</button>
            </a>
          </div>
        </div>
      </div>
      <footer className="footer text-white grid-cols-5 gap-6 pb-10 max-w-screen-xl mx-auto pl-4 pr-4">
        <nav className="col-span-2 max-w-sm">

          <p className='text-justify pt-10'>
            Rahimafrooz was founded in 1954 as a pioneer in
            the Bangladeshi battery industry. Rahimafrooz
            Storage Power Business (RSPB) is the core business of the Group, with leadership in the local and
            some international markets. As the leading supplier of lead acid batteries in Bangladesh with the
            latest technology of batteries, RSPB serves the
            most extensive network of dealers and retailers. It
            is the only company that has batteries to offer for
            every segment in the industry.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover opacity-80">Become A Partner</a>
          <a className="link link-hover opacity-80">Find Your Battery</a>
          <a className="link link-hover opacity-80">Nearest Dealer</a>
          <a className="link link-hover opacity-80">Rahimafrooz Group</a>
          <a className="link link-hover opacity-80">Downloads</a>
        </nav>
        <nav>
          <h6 className="footer-title">Policies</h6>
          <a className='link link-hover opacity-80' href="#">Terms and Conditions</a>
          <a className='link link-hover opacity-80' href="#">Privacy policy</a>
          <a className='link link-hover opacity-80' href="#">Cookies ppolicy</a>
          <a className='link link-hover opacity-80' href="#">Copyright notification</a>
          <a className='link link-hover opacity-80' href="#">Cookies Settings</a>
        </nav>
        <nav className="text-right place-items-end">
          <h6 className="footer-title">Head Office</h6>
          <p>
            Rahimafrooz Storage Power Business
            705, West Nakhalpara, Tejgaon
            Dhaka-1215, Bangladesh.

          </p>
          <h6 className="footer-title">Phone | Fax</h6>
          <div className="lg:flex lg:gap-2">
            <a href="tel:+88029113696">+880 2 9113696</a>
            <br className='lg:hidden'/>
            <span className='hidden lg:block'>|</span>
            <a href="tel:880258153128">+880 2 58153128</a>
          </div>
          <h6 className="footer-title">Email</h6>
          <a className='text-sm' href="mailto:battery@rahimafrooz.com">battery@rahimafrooz.com</a>
          <h6 className="footer-title">Social Media</h6>
          <div className='flex gap-2 ml-4'>
            <a href="https://www.facebook.com/Rahimafrooz/" target='_blank'>
              <img src={Facebook} alt="fb" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/rahimafroozbd/" target='_blank'>
              <img src={Instagram} alt="fb" width={20} height={20} />
            </a>
            <a href="https://www.linkedin.com/company/rahimafrooz/" target='_blank'>
              <img src={Linkedin} alt="fb" width={20} height={20} />
            </a>
            <a href="https://www.youtube.com/@RahimafroozBangladesh" target='_blank'>
              <img src={Youtube} alt="fb" width={20} height={20} />
            </a>
          </div>
        </nav>
      </footer>
      <div className='max-w-screen-xl mx-auto text-white text-xs pb-6 font-semibold'>
        <div className="divider divider-primary"></div>
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <img src={FooterLogo} alt="yt" width={120} height={120} />
            <p className='opacity-60 pl-4'>Copyright © 2017-2023 Rahimafrooz Batteries Ltd. All rights reserved.</p>
          </div>
          <select className="select select-info w-full max-w-32 bg-primary text-cyan-100 opacity-80">
            <option defaultValue={"English"}>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Footer