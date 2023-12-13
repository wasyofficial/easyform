import '../components/heroSection.css';
import heroSection from '../assets/heroSection.svg'

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="container">
        <div className="left">
          <div className="image-container">
            <img src={heroSection} alt="heroSection-image" />
          </div>
        </div>
        <div className="right">
          <h1>How To Embed Easy Forms On Your Site (Easy)</h1>
          <button className='btn-primary'>Get Started It's Free</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;