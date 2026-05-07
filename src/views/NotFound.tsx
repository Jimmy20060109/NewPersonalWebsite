import { Link } from 'react-router-dom'
import { useTranslations } from '../i18n/LanguageContext'
import './NotFound.css'

const translations = {
  en: {
    title: 'Page Not Found',
    message: "The page you're looking for doesn't exist.",
    home: 'Go Back Home',
  },
  zh: {
    title: '页面未找到',
    message: '你正在寻找的页面不存在。',
    home: '返回首页',
  },
}

const NotFound = () => {
  const t = useTranslations(translations)

  return (
    <section id="not-found" className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">{t.title}</h2>
        <p className="not-found-message">
          {t.message}
        </p>
        <Link to="/" className="not-found-link">
          {t.home}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
