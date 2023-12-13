import './App.css'
import Footer from './components/Footer'
import FooterTop from './components/FooterTop'
import HeroSection from './components/HeroSection'
import SectionFifth from './components/SectionFifth'
import SectionForth from './components/SectionForth'
import SectionSection from './components/SectionSecond'
import SectionThird from './components/SectionThird'
import TopHeader from './components/TopHeader'
import SectionSix from './components/sectionSix'

function App() {

  return (
    <>
      <div className="main">
        <TopHeader />
        <HeroSection />
        <SectionSection />
        <SectionThird />
        <SectionForth />
        <SectionFifth />
        <SectionSix />
        <FooterTop />
        <Footer />
      </div>
    </>
  )
}

export default App
