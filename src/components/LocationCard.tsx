import { useEffect, useState } from 'react'
import './LocationCard.css'

declare global {
  interface Window {
    gm_authFailure?: () => void
    google?: {
      maps?: {
        Map: new (element: HTMLElement, options: Record<string, unknown>) => unknown
        Marker: new (options: Record<string, unknown>) => unknown
      }
    }
  }
}

const MAPS_SCRIPT_ID = 'google-maps-sdk'
const MAP_COORDS = { lat: 43.9078295, lng: -79.4380962 }
const EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5748.98004918972!2d-79.44068002360596!3d43.9078279359245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2a77a1ddb031%3A0x6945bc4d63159682!2s55%20Falling%20River%20Dr%2C%20Richmond%20Hill%2C%20ON%20L4S%202R2!5e0!3m2!1sen!2sca!4v1771933744639!5m2!1sen!2sca'

const darkStyle = [
  { elementType: 'geometry', stylers: [{ color: '#0f1115' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#b0b6c3' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#151821' }] },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#262b3a' }]
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7c8396' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7c8396' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#1c2030' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#262b3a' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#94a3b8' }]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#1c2030' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#111827' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#7c8396' }]
  }
]

async function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (window.google?.maps) {
    return
  }

  const existing = document.getElementById(MAPS_SCRIPT_ID) as HTMLScriptElement | null
  if (existing) {
    const existingStatus = existing.dataset.status
    if (existingStatus === 'error') {
      throw new Error('Failed to load Google Maps')
    }
    if (existingStatus === 'loaded' && !window.google?.maps) {
      throw new Error('Google Maps loaded but is unavailable')
    }

    await new Promise<void>((resolve, reject) => {
      const timeoutId = window.setTimeout(
        () => reject(new Error('Timed out while waiting for Google Maps to load')),
        5000
      )

      if (window.google?.maps) {
        window.clearTimeout(timeoutId)
        resolve()
        return
      }

      existing.addEventListener(
        'load',
        () => {
          window.clearTimeout(timeoutId)
          existing.dataset.status = 'loaded'
          resolve()
        },
        { once: true }
      )
      existing.addEventListener(
        'error',
        () => {
          window.clearTimeout(timeoutId)
          existing.dataset.status = 'error'
          reject(new Error('Failed to load Google Maps'))
        },
        { once: true }
      )
    })
    return
  }

  const script = document.createElement('script')
  script.id = MAPS_SCRIPT_ID
  script.dataset.status = 'loading'
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
  script.async = true
  script.defer = true

  await new Promise<void>((resolve, reject) => {
    script.onload = () => {
      script.dataset.status = 'loaded'
      resolve()
    }
    script.onerror = () => {
      script.dataset.status = 'error'
      reject(new Error('Failed to load Google Maps'))
    }
    document.head.appendChild(script)
  })
}

const LocationCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [useFallbackMap, setUseFallbackMap] = useState(true)
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined)?.trim()

  const [mapHost, setMapHost] = useState<HTMLDivElement | null>(null)

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

  useEffect(() => {
    if (!apiKey || !mapHost) {
      setUseFallbackMap(true)
      return
    }

    let cancelled = false
    let authFailed = false
    const previousAuthFailure = window.gm_authFailure
    window.gm_authFailure = () => {
      authFailed = true
      if (!cancelled) {
        setUseFallbackMap(true)
      }
    }

    const initMap = async () => {
      try {
        await loadGoogleMapsScript(apiKey)

        if (cancelled || authFailed || !window.google?.maps) {
          return
        }

        const map = new window.google.maps.Map(mapHost, {
          center: MAP_COORDS,
          zoom: 13,
          styles: darkStyle,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: 'none',
          keyboardShortcuts: false,
          clickableIcons: false
        })

        new window.google.maps.Marker({
          position: MAP_COORDS,
          map,
          title: 'Richmond Hill, Ontario'
        })

        if (!authFailed) {
          setUseFallbackMap(false)
        }
      } catch {
        if (!cancelled) {
          setUseFallbackMap(true)
        }
      }
    }

    initMap()

    return () => {
      cancelled = true
      window.gm_authFailure = previousAuthFailure
    }
  }, [apiKey, mapHost])

  return (
    <>
      <button type="button" className="location-card" onClick={() => setIsModalOpen(true)}>
        <div className="location-card-map" aria-hidden="true">
          <div ref={setMapHost} className="location-card-map-canvas" />
          {useFallbackMap && (
            <iframe
              src={EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map background"
            />
          )}
        </div>
        <div className="location-card-content">
          <div className="location-card-top">
            <p className="location-card-eyebrow">Current Base</p>
            <h2 className="location-card-title">Location</h2>
          </div>
          <div className="location-card-footer">
            <p className="location-card-subtitle">Richmond Hill, ON</p>
            <span className="location-card-button">Open Map</span>
          </div>
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
                src={EMBED_URL}
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
