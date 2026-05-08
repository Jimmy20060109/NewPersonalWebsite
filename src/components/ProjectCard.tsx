import { Link } from 'react-router-dom'
import { useTranslations } from '../i18n/LanguageContext'
import ProjectCardMotionBackground from './ProjectCardMotionBackground'
import './ProjectCard.css'

const translations = {
  en: {
    aria: 'Projects',
    eyebrow: 'Featured Work',
    title: 'Project ',
    subtitle: '',
    button: 'View Projects',
  },
  zh: {
    aria: '项目',
    eyebrow: '精选作品',
    title: '项目',
    subtitle: '',
    button: '查看项目',
  },
}

const ProjectCard = () => {
  const t = useTranslations(translations)

  return (
    <Link
      to="/projects"
      className="project-card-home"
      aria-label={t.aria}
    >
      <div className="project-card-home-bg">
        <ProjectCardMotionBackground />
      </div>
      <div className="project-card-home-content">
        <p className="project-card-home-eyebrow">{t.eyebrow}</p>
        <h2 className="project-card-home-title">{t.title}</h2>
        <p className="project-card-home-subtitle">
          {t.subtitle}
        </p>
        <span className="project-card-home-button">{t.button}</span>
      </div>
    </Link>
  )
}

export default ProjectCard
