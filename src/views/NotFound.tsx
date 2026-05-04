import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './NotFound.css'

const NotFound = () => {
  const { t } = useLanguage()

  return (
    <section id="not-found" className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">{t('notFound.title')}</h2>
        <p className="not-found-message">
          {t('notFound.message')}
        </p>
        <Link to="/" className="not-found-link">
          {t('notFound.home')}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
