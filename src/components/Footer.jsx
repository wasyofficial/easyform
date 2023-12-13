import './footer.css'
import FooterLogo from '../assets/footer-logo.svg'
import Fb from '../assets/fb.svg'
import twitter from '../assets/twitter.svg'
import linkDin from '../assets/link.svg'
import Youtube from '../assets/youtube.svg'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer">
      <div className="containerSLA8">
        <div className="col1">
          <img src={FooterLogo} alt="" />
          <p className="foot-para">Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
        </div>
        <div className="col1">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Creators</a></li>
            <li><a href="#">Response</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col1">
          <h2>Company</h2>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="col1">
          <h2>Contact Us</h2>
          <p className='icon-para'><IoCallOutline /> +91 8076909119</p>
          <p className='icon-para'><MdOutlineMailOutline /> support@easyform.com</p>
          <p className='icon-para'><IoLocationOutline /> +B-70, First Floor, Sector-2, Noida,
            Gautam Buddha Nagar,
            U.P-2013019</p>
        </div>
      </div>
      <div className='bottom-footer'>
        <div className="left-foot">
          Copyright © 2023 Easyform | Product of Wasy
        </div>
        <div className="right-foot">
          <img src={Fb} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={linkDin} alt="linkedin" />
          <img src={Youtube} alt="youtube" />
        </div>
      </div>
    </section>
  )
}

export default Footer;