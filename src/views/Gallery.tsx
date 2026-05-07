import { useTranslations } from '../i18n/LanguageContext'
import './Gallery.css'

const translations = {
  en: {
    title: 'Gallery',
    soon: 'Gallery content coming soon...',
  },
  zh: {
    title: '画廊',
    soon: '画廊内容即将上线...',
  },
}

const Gallery = () => {
  const t = useTranslations(translations)

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">{t.title}</h2>
      <div className="gallery-content">
        <p>{t.soon}</p>
      </div>
    </section>
  )
}

export default Gallery
