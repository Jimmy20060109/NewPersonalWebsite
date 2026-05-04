import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Language = 'en' | 'zh'

const LANGUAGE_STORAGE_KEY = 'site-language'

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.resume': 'Resume',
    'nav.photography': 'Photography',
    'nav.language': 'Language',
    'nav.selectEnglish': 'Switch to English',
    'nav.selectChinese': '切换到中文',
    'theme.light': 'Switch to light mode',
    'theme.dark': 'Switch to dark mode',
    'common.email': 'Email',
    'footer.rights': 'All rights reserved.',
    'home.rowLabel': 'Location and education highlights',
    'intro.greetingPrefix': 'Hey there! I am',
    'intro.greetingSuffix': 'welcome to my web!',
    'resumeCard.title': 'My Resume',
    'resumeCard.button': 'View & download',
    'photographyCard.eyebrow': 'Creative Work',
    'photographyCard.title': 'Photography',
    'photographyCard.subtitle': 'Street, portrait, and travel moments.',
    'photographyCard.button': 'View Photos',
    'location.cardLabel': 'Current Base',
    'location.title': 'Location',
    'location.city': 'Richmond Hill, ON',
    'location.button': 'Open Map',
    'location.closeMap': 'Close location map',
    'location.modalTitle': 'I live in Richmond Hill',
    'education.cardLabel': 'Current Study',
    'education.title': 'Education',
    'education.subtitle': 'University of Waterloo · Data Science',
    'education.button': 'Waterloo Life',
    'chat.label': 'AI chat assistant',
    'chat.initial': 'Hi, I can answer questions about Jimmy’s projects, work experience, education, and skills.',
    'chat.reset': 'Conversation reset. Ask me anything about Jimmy.',
    'chat.title': 'Ask Jimmy AI',
    'chat.subtitle': 'Ask anything about Jimmy !!!',
    'chat.clear': 'Clear',
    'chat.placeholder': 'Ask something about Jimmy...',
    'chat.thinking': 'Thinking...',
    'chat.send': 'Send',
    'chat.noAnswer': 'No answer returned from server.',
    'chat.unknownError': 'Unknown request error',
    'chat.requestFailed': 'Request failed',
    'about.title': 'About',
    'notFound.title': 'Page Not Found',
    'notFound.message': "The page you're looking for doesn't exist.",
    'notFound.home': 'Go Back Home',
    'photography.title': 'Photography',
    'photography.subtitle': 'Travel Collection',
    'photography.openPhoto': 'Open photo',
    'photography.lightbox': 'Enlarged photo view',
    'photography.closePhoto': 'Close enlarged photo',
    'gallery.title': 'Gallery',
    'gallery.soon': 'Gallery content coming soon...',
    'projects.title': 'Personal Projects',
    'hero.role': 'Software Developer',
    'hero.education': 'University of Waterloo, 2B • Data Science',
    'resume.educationTitle': 'EDUCATIONAL BACKGROUND',
    'resume.skillsTitle': 'TECHNICAL SKILLS',
    'resume.workTitle': 'Work Experience',
    'resume.projectsTitle': 'Personal Projects',
    'resume.relevantCoursework': 'Relevant Coursework:',
    'resume.skillsLabel': 'Skills:',
    'resume.coursework': 'Coursework:',
    'resume.download': 'View & Download',
    'resume.downloadPdf': 'Resume in PDF',
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '我',
    'nav.resume': '简历',
    'nav.photography': '摄影',
    'nav.language': '语言',
    'nav.selectEnglish': 'Switch to English',
    'nav.selectChinese': '切换到中文',
    'theme.light': '切换到浅色模式',
    'theme.dark': '切换到深色模式',
    'common.email': '邮箱',
    'footer.rights': '保留所有权利。',
    'home.rowLabel': '地点与教育经历亮点',
    'intro.greetingPrefix': '你好！我是',
    'intro.greetingSuffix': '欢迎来到我的网站！',
    'resumeCard.title': '我的简历',
    'resumeCard.button': '查看并下载',
    'photographyCard.eyebrow': '创意作品',
    'photographyCard.title': '摄影',
    'photographyCard.subtitle': '街拍、人像与旅行瞬间。',
    'photographyCard.button': '查看照片',
    'location.cardLabel': '当前所在地',
    'location.title': '位置',
    'location.city': '安大略省列治文山',
    'location.button': '打开地图',
    'location.closeMap': '关闭位置地图',
    'location.modalTitle': '我住在列治文山',
    'education.cardLabel': '当前学习',
    'education.title': '教育',
    'education.subtitle': '滑铁卢大学 · 数据科学',
    'education.button': '滑铁卢生活',
    'chat.label': 'AI 聊天助手',
    'chat.initial': '你好，我可以回答关于 Jimmy 的项目、工作经历、教育背景和技能的问题。',
    'chat.reset': '对话已重置。欢迎继续询问关于 Jimmy 的任何问题。',
    'chat.title': '询问 Jimmy AI',
    'chat.subtitle': '欢迎询问任何关于 Jimmy 的问题！！！',
    'chat.clear': '清空',
    'chat.placeholder': '询问一些关于 Jimmy 的问题...',
    'chat.thinking': '思考中...',
    'chat.send': '发送',
    'chat.noAnswer': '服务器没有返回答案。',
    'chat.unknownError': '未知请求错误',
    'chat.requestFailed': '请求失败',
    'about.title': '关于我',
    'notFound.title': '页面未找到',
    'notFound.message': '你正在寻找的页面不存在。',
    'notFound.home': '返回首页',
    'photography.title': '摄影',
    'photography.subtitle': '旅行合集',
    'photography.openPhoto': '打开照片',
    'photography.lightbox': '放大的照片视图',
    'photography.closePhoto': '关闭放大照片',
    'gallery.title': '相册',
    'gallery.soon': '相册内容即将上线...',
    'projects.title': '个人项目',
    'hero.role': '软件开发者',
    'hero.education': '滑铁卢大学, 2B · 数据科学',
    'resume.educationTitle': '教育背景',
    'resume.skillsTitle': '技术技能',
    'resume.workTitle': '工作经历',
    'resume.projectsTitle': '个人项目',
    'resume.relevantCoursework': '相关课程：',
    'resume.skillsLabel': '技能：',
    'resume.coursework': '课程：',
    'resume.download': '查看并下载',
    'resume.downloadPdf': 'PDF 简历',
  },
} as const

type TranslationKey = keyof typeof translations.en

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (saved === 'en' || saved === 'zh') {
    return saved
  }

  return window.navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
