import { useLanguage } from '../i18n/LanguageContext'
import './Gallery.css'

const Gallery = () => {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">{t('gallery.title')}</h2>
      <div className="gallery-content">
        <p>{t('gallery.soon')}</p>
      </div>
    </section>
  )
}

export default Gallery
