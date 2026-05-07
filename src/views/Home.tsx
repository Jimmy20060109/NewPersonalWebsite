import { useCallback, useEffect, useState, type ReactNode } from 'react'
import IntroductionCard from '../components/IntroductionCard'
import LocationCard from '../components/LocationCard'
import PhotographyCard from '../components/PhotographyCard'
import ProjectCard from '../components/ProjectCard'
import ResumeCard from '../components/ResumeCard'
import ChatBoxCard from '../components/ChatBoxCard'
import EducationCard from '../components/EducationCard'
import SkillsCard from '../components/SkillsCard'
import DraggableSlot from '../components/DraggableSlot'
import './Home.css'

type CardId =
  | 'introduction'
  | 'resume'
  | 'photography'
  | 'project'
  | 'chatbox'
  | 'location'
  | 'education'
  | 'skills'

const DEFAULT_ORDER: CardId[] = [
  'introduction',
  'resume',
  'photography',
  'project',
  'chatbox',
  'location',
  'education',
  'skills',
]

const STORAGE_KEY = 'home-card-order'

const CARD_COMPONENTS: Record<CardId, ReactNode> = {
  introduction: <IntroductionCard />,
  resume: <ResumeCard />,
  photography: <PhotographyCard />,
  project: <ProjectCard />,
  chatbox: <ChatBoxCard />,
  location: <LocationCard />,
  education: <EducationCard />,
  skills: <SkillsCard />,
}

const isValidOrder = (value: unknown): value is CardId[] => {
  if (!Array.isArray(value) || value.length !== DEFAULT_ORDER.length) return false
  const seen = new Set<string>()
  for (const item of value) {
    if (typeof item !== 'string') return false
    if (!DEFAULT_ORDER.includes(item as CardId)) return false
    if (seen.has(item)) return false
    seen.add(item)
  }
  return true
}

const loadInitialOrder = (): CardId[] => {
  if (typeof window === 'undefined') return DEFAULT_ORDER
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return DEFAULT_ORDER
    const parsed = JSON.parse(stored)
    return isValidOrder(parsed) ? parsed : DEFAULT_ORDER
  } catch {
    return DEFAULT_ORDER
  }
}

const Home = () => {
  const [order, setOrder] = useState<CardId[]>(() => loadInitialOrder())

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(order))
    } catch {
      // ignore storage errors (e.g., private mode)
    }
  }, [order])

  const handleSwap = useCallback((fromIndex: number, toIndex: number) => {
    setOrder((previous) => {
      if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= previous.length ||
        toIndex >= previous.length ||
        fromIndex === toIndex
      ) {
        return previous
      }
      const next = [...previous]
      ;[next[fromIndex], next[toIndex]] = [next[toIndex], next[fromIndex]]
      return next
    })
  }, [])

  return (
    <div className="home-container">
      {order.map((cardId, slotIndex) => (
        <DraggableSlot
          key={cardId}
          slotIndex={slotIndex}
          cardId={cardId}
          onSwap={handleSwap}
        >
          {CARD_COMPONENTS[cardId]}
        </DraggableSlot>
      ))}
    </div>
  )
}

export default Home
