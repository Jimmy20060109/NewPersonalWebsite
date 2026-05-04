import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Jimmy Zheng</span>
        </h1>
        <p className="hero-subtitle">{t('hero.role')}</p>
        <p className="hero-description">
          {t('hero.education')}
        </p>
        <div className="hero-links">
          <a
            href="http://www.linkedin.com/in/jinjuezheng-368226306"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Jimmy20060109"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
          <a href="mailto:j289zhen@uwaterloo.ca" className="hero-link">
            {t('common.email')}
          </a>
        </div>
        <div className="hero-contact">
          <p>(647) 915-3674</p>
          <p>55 Falling River Dr, Richmond Hill</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
