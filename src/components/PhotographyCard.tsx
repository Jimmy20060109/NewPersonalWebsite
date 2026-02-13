import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './PhotographyCard.css'

const travelImageModules = import.meta.glob(
  '../images/travel/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}',
  { eager: true, import: 'default' },
) as Record<string, string>

const travelImageUrls = Object.values(travelImageModules)
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
        <p className="photography-card-eyebrow">Creative Work</p>
        <h2 className="photography-card-title">Photography</h2>
        <p className="photography-card-subtitle">Street, portrait, and travel moments.</p>
        <span className="photography-card-button">View Photos</span>
      </div>
    </Link>
  )
}

export default PhotographyCard
