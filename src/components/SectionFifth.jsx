import './sectionFifth.css'
import { FaArrowRight } from "react-icons/fa6";

const SectionFifth = () => {
  return (
    <section>
      <div className="containerSLA5">
        <div className="heading-part">
          <h2>You Can Do It All With A Form</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="part-2">
          <div className="block">
            <h3>Product</h3>
            <p><FaArrowRight />  Easy Form</p>
            <p><FaArrowRight />  Product Research</p>
            <p><FaArrowRight />  Product Feedback</p>
          </div>
          <div className="block">
            <h3>Creators</h3>
            <p><FaArrowRight />  Contact Details</p>
            <p><FaArrowRight />  Customer Feedback</p>
            <p><FaArrowRight />  Product Recommendation</p>
          </div>
          <div className="block">
            <h3>Response</h3>
            <p><FaArrowRight />  Request</p>
            <p><FaArrowRight />  Received</p>
          </div>
          <div className="block">
            <h3>Marketing</h3>
            <p><FaArrowRight />  Signups</p>
            <p><FaArrowRight />  Branding</p>
            <p><FaArrowRight />  Customer Feedback</p>
          </div>
          <div className="block">
            <h3>General Buisness</h3>
            <p><FaArrowRight />  Referral</p>
            <p><FaArrowRight />  Registration</p>
            <p><FaArrowRight />  Client Onboarding</p>
          </div>
          <div className="block">
            <h3>Customer Success</h3>
            <p><FaArrowRight />  FAQ Builder</p>
            <p><FaArrowRight />  Net Promoter Score</p>
            <p><FaArrowRight />  Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionFifth;