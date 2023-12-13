import Logo from '../assets/logo.svg';
import '../components/topheader.css';
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  return (
    <div className="nav">

      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products<IoIosArrowDown /></a></li>
          <li><a href="">Templates<IoIosArrowDown /></a></li>
          <li><a href="">Integrations<IoIosArrowDown /></a></li>
          <li><a href="">Resources <IoIosArrowDown /></a></li>
          <li><a href="">Pricing</a></li>
          <li><a href="">Support <IoIosArrowDown /></a></li>
        </ul>
      </div>
      <div className="action-part">
        <button className='loginIn'>Login In</button>
        <button className='signUp'>Sign Up</button>
      </div>

    </div>
  )
}

export default TopHeader