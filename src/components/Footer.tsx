import { useTranslations } from '../i18n/LanguageContext'
import './Footer.css'

const translations = {
  en: {
    rights: 'All rights reserved.',
    email: 'Email',
  },
  zh: {
    rights: '保留所有权利。',
    email: '邮箱',
  },
}

const Footer = () => {
  const t = useTranslations(translations)

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2026 Jimmy Zheng. {t.rights}
        </p>
        <div className="footer-links">
          <a
            href="http://www.linkedin.com/in/jinjuezheng-368226306"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Jimmy20060109"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:j289zhen@uwaterloo.ca">{t.email}</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
