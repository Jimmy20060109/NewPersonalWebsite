import IntroductionCard from '../components/IntroductionCard'
import LocationCard from '../components/LocationCard'
import PhotographyCard from '../components/PhotographyCard'
import ResumeCard from '../components/ResumeCard'
import ChatBoxCard from '../components/ChatBoxCard'
import EducationCard from '../components/EducationCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <IntroductionCard />
      <ResumeCard />
      <PhotographyCard />
      <div className="home-card-row" aria-label="Location and education highlights">
        <LocationCard />
        <EducationCard />
      </div>
      <ChatBoxCard />
    </div>
  )
}

export default Home
