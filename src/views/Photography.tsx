import { useEffect, useState } from 'react'
import './Photography.css'

const imageModules = import.meta.glob('../images/travel/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
  eager: true,
}) as Record<string, { default: string }>

const travelImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }),
  )
  .map(([path, module]) => ({
    src: module.default,
    alt: `${path.split('/').pop()?.replace(/\.[^.]+$/, '') || 'travel'} photo`,
  }))

const Photography = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof travelImages)[number] | null>(null)

  useEffect(() => {
    if (!selectedImage) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImage])

  return (
    <section id="photography" className="photography">
      <h2 className="section-title">Photography</h2>
      <div className="photography-header">
        <p className="photography-subtitle">Travel Collection</p>
        <p className="photo-count">{travelImages.length} photos</p>
      </div>
      <div className="photography-gallery">
        {travelImages.map((image) => (
          <figure className="photo-frame" key={image.src}>
            <button
              type="button"
              className="photo-frame-button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Open ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>
      {selectedImage && (
        <div
          className="photo-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo view"
          onClick={() => setSelectedImage(null)}
        >
          <div className="photo-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="photo-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close enlarged photo"
            >
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  )
}

export default Photography
