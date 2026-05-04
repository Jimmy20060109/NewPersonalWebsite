import IntroductionCard from '../components/IntroductionCard'
import LocationCard from '../components/LocationCard'
import PhotographyCard from '../components/PhotographyCard'
import ResumeCard from '../components/ResumeCard'
import ChatBoxCard from '../components/ChatBoxCard'
import EducationCard from '../components/EducationCard'
import { useLanguage } from '../i18n/LanguageContext'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  return (
    <div className="home-container">
      <IntroductionCard />
      <ResumeCard />
      <PhotographyCard />
      <div className="home-card-row" aria-label={t('home.rowLabel')}>
        <LocationCard />
        <EducationCard />
      </div>
      <ChatBoxCard />
    </div>
  )
}

export default Home
