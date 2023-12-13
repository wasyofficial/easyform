import secondSection from '../assets/secondSection.svg'
import '../components/secondSection.css'

const SectionSection = () => {
  return (
    <div className="secondSection">
      <div className="containerSLA1">
        <div className="leftSLA1">
          <h2>To get started, you first need to create a Easy Form.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
        <div className="rightSLA1">
          <img src={secondSection} alt="second-right" />
        </div>
      </div>
    </div>
  )
}

export default SectionSection