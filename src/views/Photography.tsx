import { useEffect, useRef, useState } from 'react'
import interact from 'interactjs'
import './Photography.css'

const imageModules = import.meta.glob('../images/travel/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
  eager: true,
}) as Record<string, { default: string }>

const initialTravelImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) =>
    pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }),
  )
  .map(([path, module]) => ({
    id: path,
    src: module.default,
    alt: `${path.split('/').pop()?.replace(/\.[^.]+$/, '') || 'travel'} photo`,
  }))


const Photography = () => {
  const [images, setImages] = useState(initialTravelImages)
  const [selectedImage, setSelectedImage] = useState<(typeof initialTravelImages)[number] | null>(null)
  const [imageRowSpans, setImageRowSpans] = useState<Record<string, number>>({})
  const galleryRef = useRef<HTMLDivElement | null>(null)
  const suppressClickIdsRef = useRef<Set<string>>(new Set())

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

  useEffect(() => {
    if (!galleryRef.current) {
      return
    }

    const interactable = interact('.draggable-photo').draggable({
      listeners: {
        start(event) {
          const target = event.target as HTMLElement
          target.classList.add('is-dragging')
          target.dataset.x = '0'
          target.dataset.y = '0'
          target.dataset.dragMoved = 'false'
        },
        move(event) {
          const target = event.target as HTMLElement
          const x = (parseFloat(target.dataset.x || '0') || 0) + event.dx
          const y = (parseFloat(target.dataset.y || '0') || 0) + event.dy

          if (Math.abs(x) > 4 || Math.abs(y) > 4) {
            target.dataset.dragMoved = 'true'
          }

          target.style.transform = `translate(${x}px, ${y}px)`
          target.dataset.x = String(x)
          target.dataset.y = String(y)
        },
        end(event) {
          const target = event.target as HTMLElement
          const gallery = galleryRef.current
          const draggedId = target.dataset.photoId
          const didDrag = target.dataset.dragMoved === 'true'

          if (didDrag && draggedId) {
            suppressClickIdsRef.current.add(draggedId)
          }

          if (gallery && draggedId && didDrag) {
            const draggedRect = target.getBoundingClientRect()
            const draggedCenter = {
              x: draggedRect.left + draggedRect.width / 2,
              y: draggedRect.top + draggedRect.height / 2,
            }

            const otherCards = Array.from(gallery.querySelectorAll<HTMLElement>('.draggable-photo')).filter(
              (card) => card !== target && card.dataset.photoId,
            )

            let nearestCard: HTMLElement | null = null
            let nearestDistance = Infinity

            for (const card of otherCards) {
              const rect = card.getBoundingClientRect()
              const center = {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
              }
              const distance = Math.hypot(center.x - draggedCenter.x, center.y - draggedCenter.y)

              if (distance < nearestDistance) {
                nearestDistance = distance
                nearestCard = card
              }
            }

            if (nearestCard?.dataset.photoId) {
              const targetId = nearestCard.dataset.photoId
              const targetRect = nearestCard.getBoundingClientRect()
              const targetCenter = {
                x: targetRect.left + targetRect.width / 2,
                y: targetRect.top + targetRect.height / 2,
              }
              const sameRow = Math.abs(draggedCenter.y - targetCenter.y) < targetRect.height / 2
              const insertAfter =
                draggedCenter.y > targetCenter.y || (sameRow && draggedCenter.x > targetCenter.x)

              setImages((prevImages) => {
                const nextImages = [...prevImages]
                const draggedIndex = nextImages.findIndex((image) => image.id === draggedId)

                if (draggedIndex === -1) {
                  return prevImages
                }

                const [draggedImage] = nextImages.splice(draggedIndex, 1)
                const targetIndex = nextImages.findIndex((image) => image.id === targetId)

                if (targetIndex === -1) {
                  nextImages.splice(draggedIndex, 0, draggedImage)
                  return nextImages
                }

                const insertIndex = insertAfter ? targetIndex + 1 : targetIndex
                nextImages.splice(insertIndex, 0, draggedImage)
                return nextImages
              })
            }
          }

          target.classList.remove('is-dragging')
          target.style.transform = ''
          target.dataset.x = '0'
          target.dataset.y = '0'
          target.dataset.dragMoved = 'false'
        },
      },
    })

    return () => {
      interactable.unset()
    }
  }, [])

  const handleImageClick = (image: (typeof initialTravelImages)[number]) => {
    if (suppressClickIdsRef.current.delete(image.id)) {
      return
    }

    setSelectedImage(image)
  }

  const handleImageLoad = (imageId: string, event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget
    const naturalWidth = img.naturalWidth
    const naturalHeight = img.naturalHeight
    const renderedWidth = img.clientWidth

    if (!naturalWidth || !naturalHeight || !renderedWidth) {
      return
    }

    const renderedHeight = (renderedWidth * naturalHeight) / naturalWidth

    const CARD_CHROME = 18
    const GRID_ROW_UNIT = 8
    const GRID_GAP = 24

    const cardHeight = renderedHeight + CARD_CHROME
    const rowSpan = Math.ceil((cardHeight + GRID_GAP) / (GRID_GAP + GRID_ROW_UNIT))

    setImageRowSpans((prev) => {
      if (prev[imageId] === rowSpan) {
        return prev
      }

      return {
        ...prev,
        [imageId]: rowSpan,
      }
    })
  }

  return (
    <section id="photography" className="photography">
      <h2 className="section-title">Photography</h2>
      <div className="photography-header">
        <p className="photography-subtitle">Travel Collection</p>
        <p className="photo-count">{images.length} photos</p>
      </div>
      <div ref={galleryRef} className="photography-gallery">
        {images.map((image) => (
          <figure
            className={`photo-frame draggable-photo`}
            key={image.id}
            data-photo-id={image.id}
            style={{ '--row-span': imageRowSpans[image.id] ?? 30 } as React.CSSProperties}
          >
            <button
              type="button"
              className="photo-frame-button"
              onClick={() => handleImageClick(image)}
              aria-label={`Open ${image.alt}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                onLoad={(event) => handleImageLoad(image.id, event)}
              />
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
