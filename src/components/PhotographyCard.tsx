import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslations } from '../i18n/LanguageContext'
import './PhotographyCard.css'

const translations = {
  en: {
    eyebrow: 'Creative Work',
    title: 'Photography',
    subtitle: 'Street, portrait, and travel moments.',
    button: 'View Photos',
  },
  zh: {
    eyebrow: '创意作品',
    title: '摄影',
    subtitle: '街拍、人像与旅行瞬间。',
    button: '查看照片',
  },
}

const homepageImageModules = import.meta.glob(
  '../images/travel/homepage/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
  {
    eager: true,
    import: 'default',
    query: { w: '1600', format: 'webp', quality: '80' },
  },
) as Record<string, string>

const travelImageModules = import.meta.glob(
  '../images/travel/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
  {
    eager: true,
    import: 'default',
    query: { w: '1600', format: 'webp', quality: '80' },
  },
) as Record<string, string>

const travelImageUrls = Object.values(homepageImageModules).length
  ? Object.values(homepageImageModules)
  : Object.values(travelImageModules)
const ROTATE_INTERVAL_MS = 10000
const CROSSFADE_MS = 1000

const pickRandomImage = (exclude?: string) => {
  if (travelImageUrls.length === 0) {
    return ''
  }
  if (travelImageUrls.length === 1) {
    return travelImageUrls[0]
  }

  let candidate = exclude
  while (candidate === exclude) {
    candidate = travelImageUrls[Math.floor(Math.random() * travelImageUrls.length)]
  }
  return candidate ?? ''
}

const PhotographyCard = () => {
  const t = useTranslations(translations)
  const [currentImage, setCurrentImage] = useState<string>(() => pickRandomImage())
  const [nextImage, setNextImage] = useState<string | null>(null)
  const [isCrossfading, setIsCrossfading] = useState(false)
  const currentImageRef = useRef(currentImage)

  useEffect(() => {
    currentImageRef.current = currentImage
  }, [currentImage])

  useEffect(() => {
    if (travelImageUrls.length <= 1) {
      return
    }

    let crossfadeTimeoutId: number | undefined
    const intervalId = window.setInterval(() => {
      const next = pickRandomImage(currentImageRef.current)
      if (!next) {
        return
      }

      setNextImage(next)
      requestAnimationFrame(() => setIsCrossfading(true))

      crossfadeTimeoutId = window.setTimeout(() => {
        setCurrentImage(next)
        currentImageRef.current = next
        setIsCrossfading(false)
        setNextImage(null)
      }, CROSSFADE_MS)
    }, ROTATE_INTERVAL_MS)

    return () => {
      window.clearInterval(intervalId)
      if (crossfadeTimeoutId) {
        window.clearTimeout(crossfadeTimeoutId)
      }
    }
  }, [])

  return (
    <Link to="/photography" className="photography-card">
      <span
        className="photography-card-bg photography-card-bg-base"
        style={currentImage ? { backgroundImage: `url(${currentImage})` } : undefined}
      />
      {nextImage && (
        <span
          className={`photography-card-bg photography-card-bg-overlay ${
            isCrossfading ? 'is-visible' : ''
          }`}
          style={{ backgroundImage: `url(${nextImage})` }}
        />
      )}
      <span className="photography-card-tint" />
      <span className="photography-card-glow" />
      <div className="photography-card-content">
        <p className="photography-card-eyebrow">{t.eyebrow}</p>
        <h2 className="photography-card-title">{t.title}</h2>
        <p className="photography-card-subtitle">{t.subtitle}</p>
        <span className="photography-card-button">{t.button}</span>
      </div>
    </Link>
  )
}

export default PhotographyCard
