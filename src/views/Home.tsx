import IntroductionCard from '../components/IntroductionCard'
import LocationCard from '../components/LocationCard'
import PhotographyCard from '../components/PhotographyCard'
import ResumeCard from '../components/ResumeCard'
import ChatBoxCard from '../components/ChatBoxCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <IntroductionCard />
      <ResumeCard />
      <div className="home-ai-row">
        <div className="home-ai-left">
          <PhotographyCard />
          <LocationCard />
        </div>
        <ChatBoxCard />
      </div>
    </div>
  )
}

export default Home
