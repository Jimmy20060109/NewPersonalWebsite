import { useEffect, useRef, type ReactNode } from 'react'
import interact from 'interactjs'

interface DraggableSlotProps {
  slotIndex: number
  cardId: string
  onSwap: (fromIndex: number, toIndex: number) => void
  children: ReactNode
}

const INTERACTIVE_SELECTOR = 'button, input, textarea'

const DESKTOP_QUERY = '(min-width: 1024px) and (hover: hover) and (pointer: fine)'

const DraggableSlot = ({ slotIndex, cardId, onSwap, children }: DraggableSlotProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const onSwapRef = useRef(onSwap)

  useEffect(() => {
    onSwapRef.current = onSwap
  }, [onSwap])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia(DESKTOP_QUERY)
    if (!mediaQuery.matches) return

    const offset = { x: 0, y: 0 }

    const interaction = interact(el)
      .draggable({
        ignoreFrom: INTERACTIVE_SELECTOR,
        autoScroll: true,
        listeners: {
          start(event) {
            const target = event.target as HTMLElement
            target.classList.add('is-dragging')
            offset.x = 0
            offset.y = 0
            target.style.transform = 'translate(0px, 0px)'
          },
          move(event) {
            const target = event.target as HTMLElement
            offset.x += event.dx
            offset.y += event.dy
            target.style.transform = `translate(${offset.x}px, ${offset.y}px)`
          },
          end(event) {
            const target = event.target as HTMLElement
            target.classList.remove('is-dragging')
            target.style.transform = ''
            offset.x = 0
            offset.y = 0

            const suppressClick = (clickEvent: Event) => {
              clickEvent.stopPropagation()
              clickEvent.preventDefault()
              target.removeEventListener('click', suppressClick, true)
            }
            target.addEventListener('click', suppressClick, true)
            window.setTimeout(() => {
              target.removeEventListener('click', suppressClick, true)
            }, 100)
          },
        },
      })
      .dropzone({
        accept: '.home-slot',
        overlap: 0.4,
        listeners: {
          dragenter(event) {
            ;(event.target as HTMLElement).classList.add('is-drop-target')
          },
          dragleave(event) {
            ;(event.target as HTMLElement).classList.remove('is-drop-target')
          },
          drop(event) {
            const target = event.target as HTMLElement
            target.classList.remove('is-drop-target')
            const related = event.relatedTarget as HTMLElement | null
            if (!related) return
            const fromIndex = Number(related.dataset.slotIndex)
            const toIndex = Number(target.dataset.slotIndex)
            if (Number.isNaN(fromIndex) || Number.isNaN(toIndex)) return
            if (fromIndex === toIndex) return
            onSwapRef.current(fromIndex, toIndex)
          },
        },
      })

    return () => {
      interaction.unset()
    }
  }, [])

  return (
    <div
      ref={ref}
      className="home-slot"
      data-slot-index={slotIndex}
      data-card-id={cardId}
    >
      {children}
    </div>
  )
}

export default DraggableSlot
