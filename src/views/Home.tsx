import IntroductionCard from '../components/IntroductionCard'
import PhotographyCard from '../components/PhotographyCard'
import ResumeCard from '../components/ResumeCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <IntroductionCard />
      <PhotographyCard />
      <ResumeCard />
    </div>
  )
}

export default Home
