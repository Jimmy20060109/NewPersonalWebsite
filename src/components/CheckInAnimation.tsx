import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './CheckInAnimation.css'

type Phase = 'idle' | 'approach' | 'tap' | 'success'

const PHASE_SEQUENCE: Array<{ phase: Phase; duration: number }> = [
  { phase: 'idle', duration: 1600 },
  { phase: 'approach', duration: 900 },
  { phase: 'tap', duration: 1300 },
  { phase: 'success', duration: 1700 },
]

const CheckInAnimation = () => {
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    let cancelled = false
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const advance = (index: number) => {
      if (cancelled) return
      const step = PHASE_SEQUENCE[index]
      setPhase(step.phase)
      timeoutId = setTimeout(
        () => advance((index + 1) % PHASE_SEQUENCE.length),
        step.duration,
      )
    }

    advance(0)

    return () => {
      cancelled = true
      if (timeoutId !== undefined) clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="checkin-anim" aria-hidden="true">
      <motion.div
        className="checkin-tablet"
        animate={{ rotateY: phase === 'tap' ? -1.5 : 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="checkin-tablet-bezel">
          <div className="checkin-tablet-screen">
            <AnimatePresence mode="wait">
              {(phase === 'idle' || phase === 'approach') && (
                <motion.div
                  key="ready"
                  className="checkin-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="checkin-nfc-ring"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <svg viewBox="0 0 48 48" fill="none">
                      <circle cx="16" cy="24" r="4" fill="currentColor" />
                      <path
                        d="M24 16 A12 12 0 0 1 24 32"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M30 10 A18 18 0 0 1 30 38"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </motion.div>
                  <p className="checkin-text-primary">Tap to Check In</p>
                  <p className="checkin-text-secondary">
                    Hold your Fountain Card
                  </p>
                </motion.div>
              )}

              {phase === 'tap' && (
                <motion.div
                  key="scan"
                  className="checkin-screen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="checkin-scan-ring"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ repeat: Infinity, duration: 0.7 }}
                  >
                    <motion.div
                      className="checkin-scan-inner"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                    />
                  </motion.div>
                  <p className="checkin-text-reading">Reading...</p>
                </motion.div>
              )}

              {phase === 'success' && (
                <motion.div
                  key="done"
                  className="checkin-screen checkin-screen-success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="checkin-success-ring"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      delay: 0.1,
                    }}
                  >
                    <motion.svg viewBox="0 0 24 24" fill="none">
                      <motion.path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <p className="checkin-text-primary checkin-text-success-title">
                    Checked In
                  </p>
                  <p className="checkin-text-secondary checkin-text-success-meta">
                    Mickey Mouse &bull; #24
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CheckInAnimation
