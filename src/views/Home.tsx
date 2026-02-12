import IntroductionCard from '../components/IntroductionCard'
import PhotographyCard from '../components/PhotographyCard'
import ResumeCard from '../components/ResumeCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-main-cards">
        <IntroductionCard />
        <PhotographyCard />
      </div>
      <ResumeCard />
    </div>
  )
}

export default Home
