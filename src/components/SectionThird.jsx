import './sectionThird.css'
import secondSection from '../assets/secondSection.svg'

const SectionThird = () => {
  return (
    <div className="secondThird">
      <div className="containerSLA3">
        <div className="rightSLA3">
          <img src={secondSection} alt="second-right" />
        </div>
        <div className="leftSLA3">
          <h2>Create an online form as easily as creating a document</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  )
}

export default SectionThird;