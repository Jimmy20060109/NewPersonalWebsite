import { Link } from 'react-router-dom'
import { useTranslations } from '../i18n/LanguageContext'
import './SkillsCard.css'

const translations = {
  en: {
    aria: 'Skills',
    eyebrow: 'Toolbox',
    title: 'Skills',
    subtitle: 'Languages, frameworks, and tools.',
    button: 'View Skills',
  },
  zh: {
    aria: '技能',
    eyebrow: '工具箱',
    title: '技能',
    subtitle: '语言、框架与工具。',
    button: '查看技能',
  },
}

const SkillsCard = () => {
  const t = useTranslations(translations)

  return (
    <Link to="/skills" className="skills-card" aria-label={t.aria}>
      <div className="skills-card-content">
        <div className="skills-card-top">
          <p className="skills-card-eyebrow">{t.eyebrow}</p>
          <h2 className="skills-card-title">{t.title}</h2>
        </div>
        <div className="skills-card-footer">
          <p className="skills-card-subtitle">
            {t.subtitle}
          </p>
          <span className="skills-card-button">{t.button}</span>
        </div>
      </div>
    </Link>
  )
}

export default SkillsCard
