import { Link } from 'react-router-dom'
import { useTranslations } from '../i18n/LanguageContext'
import './ResumeCard.css'

const translations = {
  en: {
    title: 'My Resume',
    button: 'View & download',
  },
  zh: {
    title: '我的简历',
    button: '查看并下载',
  },
}

const ResumeCard = () => {
  const t = useTranslations(translations)

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Link to="/resume" className="resume-card">
      <div className="resume-content">
        <div className="resume-text">
          <h2 className="resume-title">{t.title}</h2>
          <p className="resume-name">Jimmy Zheng</p>
          <button
            className="resume-button"
            onClick={handleDownload}
          >
            {t.button}
          </button>
        </div>
        <div className="resume-decoration">
          <div className="plant-silhouette"></div>
        </div>
      </div>
    </Link>
  )
}

export default ResumeCard
