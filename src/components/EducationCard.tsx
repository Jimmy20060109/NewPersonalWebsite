import { useEffect, useRef } from 'react'
import waterlooVideo from '../images/WaterlooShortVideo_720p.mp4'
import { useLanguage } from '../i18n/LanguageContext'
import './EducationCard.css'

const EducationCard = () => {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    video.playbackRate = 2

    const syncPlaybackRate = () => {
      video.playbackRate = 2
    }

    video.addEventListener('loadedmetadata', syncPlaybackRate)
    video.addEventListener('play', syncPlaybackRate)

    return () => {
      video.removeEventListener('loadedmetadata', syncPlaybackRate)
      video.removeEventListener('play', syncPlaybackRate)
    }
  }, [])

  return (
    <div className="education-card" aria-label={t('education.title')}>
      <video
        ref={videoRef}
        className="education-card-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={waterlooVideo} type="video/mp4" />
      </video>

      <div className="education-card-content">
        <div className="education-card-top">
          <p className="education-card-eyebrow">{t('education.cardLabel')}</p>
          <h2 className="education-card-title">{t('education.title')}</h2>
        </div>
        <div className="education-card-footer">
          <p className="education-card-subtitle">{t('education.subtitle')}</p>
          <span className="education-card-button">{t('education.button')}</span>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
