import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import './ChatBoxCard.css'

type AskTopic = '' | 'project' | 'work' | 'education' | 'skills' | 'contact' | 'location'

interface AskSource {
  id: string
  title: string
  source?: string
  score: number
}

interface AskResponse {
  answer: string
  sources: AskSource[]
}

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
  sources?: AskSource[]
  isError?: boolean
}

const TOPIC_OPTIONS: Array<{ label: string; value: AskTopic }> = [
  { label: 'Auto Topic', value: '' },
  { label: 'Projects', value: 'project' },
  { label: 'Work', value: 'work' },
  { label: 'Education', value: 'education' },
  { label: 'Skills', value: 'skills' },
  { label: 'Contact', value: 'contact' },
  { label: 'Location', value: 'location' }
]

function getApiBaseUrl(): string {
  const configured = (import.meta.env.VITE_RAG_API_BASE_URL as string | undefined)?.trim()
  if (configured) {
    return configured.replace(/\/+$/, '')
  }

  // In local development, always default to the RAG server port.
  // This avoids 404 when Vite runs on 5174/5175, etc.
  if (import.meta.env.DEV) {
    return 'http://localhost:8787'
  }

  return window.location.origin
}

function makeMessageId(): string {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

const ChatBoxCard = () => {
  const apiBaseUrl = useMemo(() => getApiBaseUrl(), [])
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const questionInputRef = useRef<HTMLTextAreaElement | null>(null)
  const shouldAutoScrollRef = useRef(true)

  const [question, setQuestion] = useState('')
  const [topic, setTopic] = useState<AskTopic>('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: makeMessageId(),
      role: 'assistant',
      text: 'Hi, I can answer questions about Jimmy’s projects, work experience, education, and skills.'
    }
  ])

  const updateAutoScrollState = () => {
    const container = messagesContainerRef.current
    if (!container) {
      return
    }

    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight
    shouldAutoScrollRef.current = distanceFromBottom < 48
  }

  useEffect(() => {
    const container = messagesContainerRef.current
    if (!container || !shouldAutoScrollRef.current) {
      return
    }

    // Scroll only inside the chat container to avoid moving page-level scrollbar.
    container.scrollTop = container.scrollHeight
  }, [messages, isLoading])

  useEffect(() => {
    const input = questionInputRef.current
    if (!input) {
      return
    }

    input.style.height = 'auto'
    const maxHeight = 160
    const nextHeight = Math.min(input.scrollHeight, maxHeight)
    input.style.height = `${nextHeight}px`
    input.style.overflowY = input.scrollHeight > maxHeight ? 'auto' : 'hidden'
  }, [question])

  const canSubmit = question.trim().length > 0 && !isLoading

  const handleQuestionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(event.target.value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const trimmedQuestion = question.trim()
    if (!trimmedQuestion || isLoading) {
      return
    }
    updateAutoScrollState()

    const userMessage: ChatMessage = {
      id: makeMessageId(),
      role: 'user',
      text: trimmedQuestion
    }
    setMessages((prev) => [...prev, userMessage])
    setQuestion('')
    setIsLoading(true)

    try {
      const response = await fetch(`${apiBaseUrl}/api/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: trimmedQuestion,
          topK: 4,
          lang: 'auto',
          topic: topic || undefined
        })
      })

      if (!response.ok) {
        const raw = await response.text()
        throw new Error(raw || `Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as AskResponse
      const answerText = data.answer?.trim() || 'No answer returned from server.'

      setMessages((prev) => [
        ...prev,
        {
          id: makeMessageId(),
          role: 'assistant',
          text: answerText,
          sources: Array.isArray(data.sources) ? data.sources : []
        }
      ])
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown request error'
      setMessages((prev) => [
        ...prev,
        {
          id: makeMessageId(),
          role: 'assistant',
          text: `Request failed: ${message}`,
          isError: true
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const clearConversation = () => {
    setMessages([
      {
        id: makeMessageId(),
        role: 'assistant',
        text: 'Conversation reset. Ask me anything about Jimmy.'
      }
    ])
  }

  return (
    <section className="chatbox-card" aria-label="AI chat assistant">
      <div className="chatbox-header">
        <h2 className="chatbox-title">Ask Jimmy AI</h2>
        <p className="chatbox-subtitle">Type your question and get an answer grounded in the portfolio knowledge base.</p>
      </div>

      <div
        className="chatbox-messages"
        role="log"
        aria-live="polite"
        ref={messagesContainerRef}
        onScroll={updateAutoScrollState}
      >
        {messages.map((message) => (
          <article
            key={message.id}
            className={`chatbox-message ${message.role === 'user' ? 'chatbox-message-user' : 'chatbox-message-assistant'} ${message.isError ? 'chatbox-message-error' : ''}`}
          >
            <p className="chatbox-message-text">{message.text}</p>
          </article>
        ))}

        {isLoading && (
          <div className="chatbox-typing">
            <span className="chatbox-dot"></span>
            <span className="chatbox-dot"></span>
            <span className="chatbox-dot"></span>
          </div>
        )}
      </div>

      <form className="chatbox-form" onSubmit={handleSubmit}>
        <div className="chatbox-form-top">
          <label className="chatbox-topic-label" htmlFor="chatbox-topic">
            Focus
          </label>
          <select
            id="chatbox-topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value as AskTopic)}
            className="chatbox-topic-select"
          >
            {TOPIC_OPTIONS.map((option) => (
              <option key={option.value || 'auto'} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="button" className="chatbox-clear-button" onClick={clearConversation} disabled={isLoading}>
            Clear
          </button>
        </div>

        <div className="chatbox-form-bottom">
          <textarea
            ref={questionInputRef}
            value={question}
            onChange={handleQuestionChange}
            className="chatbox-input"
            placeholder="Ask about projects, internships, skills, or contact info..."
            rows={1}
          />
          <button type="submit" className="chatbox-send-button" disabled={!canSubmit}>
            {isLoading ? 'Thinking...' : 'Send'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ChatBoxCard
