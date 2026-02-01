import IntroductionCard from '../components/IntroductionCard'
import ResumeCard from '../components/ResumeCard'
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <IntroductionCard />
      <ResumeCard />
    </div>
  )
}

export default Home
