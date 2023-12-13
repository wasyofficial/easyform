import './sectionSix.css';
import Profile from '../assets/profile.svg'
import ROne from '../assets/r-one.svg'
import RTwo from '../assets/r-two.svg'
import SlideDote from '../assets/slide-dot.svg'

const SectionSix = () => {
  return (
    <section className="sectionSLA6">
      <div className="wrap">
        <div className="heading-partSLA6">
          <h2>Customers Love Easyform</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="profile-section">
          <div className="profile">
            <img src={Profile} alt="profile" />
          </div>
        </div>
        <div className="testimonial-content">
          <p><img src={ROne} alt="testimonials" />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<img src={RTwo} alt="testimonials" /></p>
        </div>
        <div className="name">
          <h2>Suman Chakraborty</h2>
          <h4>Business Developer</h4>
          <img src={SlideDote} alt="slide-dot" />
        </div>
      </div>
    </section>
  )
}

export default SectionSix;