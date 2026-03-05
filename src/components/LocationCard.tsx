import { useEffect, useState } from 'react'
import './LocationCard.css'

const LocationCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (!isModalOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isModalOpen])

  return (
    <>
      <button type="button" className="location-card" onClick={() => setIsModalOpen(true)}>
        <div className="location-card-map" aria-hidden="true">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5748.98004918972!2d-79.44068002360596!3d43.9078279359245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a77a1ddb031%3A0x6945bc4d63159682!2s55%20Falling%20River%20Dr%2C%20Richmond%20Hill%2C%20ON%20L4S%202R2!5e0!3m2!1sen!2sca!4v1771933744639!5m2!1sen!2sca"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map background"
          />
        </div>
        <div className="location-card-content">
          <p className="location-card-eyebrow">Current Base</p>
          <h2 className="location-card-title">Location</h2>
          <p className="location-card-subtitle">Richmond Hill, ON · Open to relocation</p>
          <span className="location-card-button">Open Map</span>
        </div>
      </button>

      {isModalOpen && (
        <div
          className="location-modal-overlay"
          role="presentation"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="location-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="location-modal-close"
              aria-label="Close location map"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="location-modal-header">
              <h3 id="location-modal-title">I live in Richmond Hill</h3>
              <p>55 Falling River Dr, Richmond Hill, ON L4S 2R2</p>
            </div>

            <div className="location-modal-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5748.98004918972!2d-79.44068002360596!3d43.9078279359245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a77a1ddb031%3A0x6945bc4d63159682!2s55%20Falling%20River%20Dr%2C%20Richmond%20Hill%2C%20ON%20L4S%202R2!5e0!3m2!1sen!2sca!4v1771933744639!5m2!1sen!2sca"
                title="Home location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="location-modal-coordinates">43.9078279, -79.4406800</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LocationCard
