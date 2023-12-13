import './sectionForth.css'
import canva from '../assets/canva.svg'
import mailChimp from '../assets/mailchimp.svg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SectionForth = () => {
  return (
    <section className="forthSection">
      <div className="containeSLA4">
        <div className="leftSLA4">
          <h2>Works with your existing workflow</h2>
          <a href="#">Browse 50+ integrations</a>
          <div className="buttonSLA4">
            <div className="leftbtn4">
              <span>
                <FaArrowLeft />
              </span>
            </div>
            <div className="rightbtn4">
              <span>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>

        <div className="rightSLA4">
          <div className="leftBoxSLA4">
            <img src={canva} alt="canva" />
          </div>
          <div className="rightBoxSLA4">
            <img src={mailChimp} alt="mailchimp" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionForth;