import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage, useTranslations } from '../i18n/LanguageContext'
import './ChatBoxCard.css'

const translations = {
  en: {
    label: 'AI chat assistant',
    initial: 'Hi, I can answer questions about Jimmy’s projects, work experience, education, and skills.',
    reset: 'Conversation reset. Ask me anything about Jimmy.',
    title: 'Ask Jimmy AI',
    subtitle: 'Ask anything about Jimmy !!!',
    clear: 'Clear',
    placeholder: 'Ask something about Jimmy...',
    thinking: 'Thinking...',
    send: 'Send',
    noAnswer: 'No answer returned from server.',
    unknownError: 'Unknown request error',
    requestFailed: 'Request failed',
  },
  zh: {
    label: 'AI 聊天助手',
    initial: '你好，我可以回答关于 Jimmy 的项目、工作经历、教育背景和技能的问题。',
    reset: '对话已重置。欢迎继续询问关于 Jimmy 的任何问题。',
    title: '询问 Jimmy AI',
    subtitle: '欢迎询问任何关于 Jimmy 的问题！！！',
    clear: '清空',
    placeholder: '询问一些关于 Jimmy 的问题...',
    thinking: '思考中...',
    send: '发送',
    noAnswer: '服务器没有返回答案。',
    unknownError: '未知请求错误',
    requestFailed: '请求失败',
  },
}

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
  const { language } = useLanguage()
  const t = useTranslations(translations)
  const apiBaseUrl = useMemo(() => getApiBaseUrl(), [])
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)
  const questionInputRef = useRef<HTMLTextAreaElement | null>(null)
  const shouldAutoScrollRef = useRef(true)

  const [question, setQuestion] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: makeMessageId(),
      role: 'assistant',
      text: t.initial
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
    setMessages((prev) => {
      if (prev.length !== 1 || prev[0].role !== 'assistant') {
        return prev
      }

      return [{ ...prev[0], text: t.initial }]
    })
  }, [t])

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
          lang: language
        })
      })

      if (!response.ok) {
        const raw = await response.text()
        throw new Error(raw || `Request failed with status ${response.status}`)
      }

      const data = (await response.json()) as AskResponse
      const answerText = data.answer?.trim() || t.noAnswer

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
      const message = error instanceof Error ? error.message : t.unknownError
      setMessages((prev) => [
        ...prev,
        {
          id: makeMessageId(),
          role: 'assistant',
          text: `${t.requestFailed}: ${message}`,
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
        text: t.reset
      }
    ])
  }
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!canSubmit) {
        handleSubmit(event as unknown as FormEvent)
      }
      event.currentTarget.form?.requestSubmit()
    }
  }


  return (
    <section className="chatbox-card" aria-label={t.label}>
      <div className="chatbox-header">
        <h2 className="chatbox-title">{t.title}</h2>
        <p className="chatbox-subtitle">{t.subtitle}</p>
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
        <div className="chatbox-form-bottom">
          <textarea
            ref={questionInputRef}
            value={question}
            onChange={handleQuestionChange}
            onKeyDown={handleKeyDown}
            className="chatbox-input"
            placeholder={t.placeholder}
            rows={1}
          />
          <button type="submit" className="chatbox-send-button" disabled={!canSubmit}>
            {isLoading ? t.thinking : t.send}
          </button>
          <button type="button" className="chatbox-clear-button" onClick={clearConversation} disabled={isLoading}>
            {t.clear}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ChatBoxCard
