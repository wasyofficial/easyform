import './footerTop.css'
import footerTop from '../assets/footer-top.svg';

const FooterTop = () => {
  return (
    <section>
      <div className="containerSLA7">
        <div className="leftSLA7">
          <div className="image-container">
            <img src={footerTop} alt="footerTop" />
          </div>
        </div>
        <div className="rightSLA7">
          <div className="right-content-container">
            <h2>Why Easyform</h2>
            <h3>Because after switching to us...</h3>
            <div className="percentage">
              <div className="r1">
                95%
              </div>
              <div className="r2">
                of customers say they have a better brand experience
              </div>
            </div>
            <div className="percentage">
              <div className="r1">
                92%
              </div>
              <div className="r2">
                of customers say they gather more
                data, more easily
              </div>
            </div>
            <div className="percentage">
              <div className="r1">
                85%
              </div>
              <div className="r2">
                of customers say they reveal deeper
                insights from data
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterTop;