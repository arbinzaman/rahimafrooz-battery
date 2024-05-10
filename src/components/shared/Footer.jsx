import Logo from '../../assets/70-Years-Logo.png';
import Facebook from '../../assets/facebook-icon.svg';
import Instagram from '../../assets/instagram-icon.svg';
import Linkedin from '../../assets/linkedin-icon.svg';
import Youtube from '../../assets/youtube-icon.svg';
import FooterLogo from '../../assets/footer-logo.svg';

const Footer = () => {
  return (
    <div className="bg-primary">
      <footer className="footer text-white grid-cols-5 gap-6 pt-10 pb-10 max-w-screen-xl mx-auto">
        <nav className="col-span-2 max-w-sm">
          <img src={Logo} alt="logo" width={135} height={135} />
          <p className='text-justify'>
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
          <h6 className="footer-title">Products</h6>
          <a className="link link-hover">Passenger Car</a>
          <a className="link link-hover">Commercial Vehicle</a>
          <a className="link link-hover">Electric Vehicle</a>
          <a className="link link-hover">E-Rickshaw</a>
          <a className="link link-hover">Traction</a>
          <a className="link link-hover">Golf cart</a>
          <a className="link link-hover">Inverter Battery</a>
          <a className="link link-hover">Network tower</a>
        </nav>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <a className="link link-hover">Become A Partner</a>
          <a className="link link-hover">Find Your Battery</a>
          <a className="link link-hover">Nearest Dealer</a>
          <a className="link link-hover">Rahimafrooz Group</a>
          <a className="link link-hover">Downloads</a>
        </nav>
        <nav className="text-right place-items-end">
          <h6 className="footer-title">Head Office</h6>
          <p>
            Rahimafrooz Storage Power Business
            705, West Nakhalpara, Tejgaon
            Dhaka-1215, Bangladesh.

          </p>
          <h6 className="footer-title">Phone | Fax</h6>
          <div className="flex gap-2">
            <a href="tel:+88029113696">+880 2 9113696</a>
            <span>|</span>
            <a href="tel:880258153128">+880 2 58153128</a>
          </div>
          <h6 className="footer-title">Email</h6>
          <a className='text-sm' href="mailto:battery@rahimafrooz.com">battery@rahimafrooz.com</a>
          <h6 className="footer-title">Social Media</h6>
          <div className='flex gap-2 ml-4'>
            <img src={Facebook} alt="fb" width={20} height={20} />
            <img src={Instagram} alt="ig" width={20} height={20} />
            <img src={Linkedin} alt="li" width={20} height={20} />
            <img src={Youtube} alt="yt" width={20} height={20} />
          </div>
        </nav>
      </footer>
      <div className='max-w-screen-xl mx-auto text-white text-xs pb-6 font-semibold'>
        <a className='pr-5 opacity-80' href="#">Terms and Conditions</a>
        <a className='pr-5 opacity-80' href="#">Privacy policy</a>
        <a className='pr-5 opacity-80' href="#">Cookies ppolicy</a>
        <a className='pr-5 opacity-80' href="#">Copyright notification</a>
        <a className='pr-5 opacity-80' href="#">Cookies Settings</a>
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