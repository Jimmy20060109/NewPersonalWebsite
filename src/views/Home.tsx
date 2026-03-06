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
      <PhotographyCard />
      <LocationCard />
      <ChatBoxCard />
    </div>
  )
}

export default Home
