import { useLanguage, useTranslations } from '../i18n/LanguageContext'
import './Projects.css'

const translations = {
  en: {
    title: 'Projects',
    subtitle: 'A look at the products and infrastructure I have shipped end-to-end.',
    viewProject: 'View project',
    code: 'Code',
  },
  zh: {
    title: '项目',
    subtitle: '展示我从产品到基础设施完整交付的项目。',
    viewProject: '查看项目',
    code: '代码',
  },
}

interface Project {
  title: string
  period: string
  description: string[]
  technologies: string[]
  liveUrl?: string
  codeUrl?: string
  accent: string
  preview: 'fountain' | 'voluntrack' | 'portfolio' | 'simon' | 'keeper'
}

const projects: Project[] = [
  {
    title: 'Fountain Health App',
    period: 'Feb 2026 - Present',
    description: [
      'Built a cross-platform healthcare app for Waterloo and Kitchener clinics, enabling patients to view real-time wait times and join online queues.',
      'Developed 10+ responsive Flutter screens and reusable UI components with light/dark theme support across iOS and Android devices.',
      'Built an offline-accessible shared patient profile feature so users can save medical information once and reuse it without network access.',
    ],
    technologies: [
      'Flutter',
      'Dart',
      '.NET',
      'NestJS',
      'Supabase',
      'PostgreSQL',
      'Cloudflare',
      'Postman',
      'REST APIs',
    ],
    liveUrl: 'https://fountainhealth.ca/',
    codeUrl: 'https://github.com/FountainHealthTechnologiesInc',
    accent: 'linear-gradient(135deg, #dbeafe 0%, #ccfbf1 100%)',
    preview: 'fountain',
  },
  {
    title: 'VolunTrack Web & Mobile App',
    period: 'Feb 2024 - Aug 2025',
    description: [
      'Designed and developed web and mobile pages using React and React Native for a non-profit volunteer platform.',
      'Built and maintained a PostgreSQL-backed volunteer opportunity database with searchable listings that reduced search time to under 2 seconds.',
      'Implemented API and automated testing with Postman, Python unit tests, and Jest to validate core user flows and catch 15+ bugs pre-release.',
    ],
    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'JavaScript',
      'Python',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Jest',
      'Postman',
    ],
    liveUrl: 'https://voluntracks.com/',
    codeUrl: 'https://github.com/VolunTrack',
    accent: 'linear-gradient(135deg, #dcfce7 0%, #e0e7ff 100%)',
    preview: 'voluntrack',
  },
  {
    title: 'Personal Website',
    period: 'Feb 2026 - Present',
    description: [
      'Deployed and maintained a responsive portfolio website on Vercel using React, Vite, and Next.js with reusable components and route-based navigation.',
      'Built a custom grid-based drag-and-drop system with Interact.js for rearranging homepage components and photography page images.',
      'Implemented an Express.js RAG API using OpenAI API and vector embeddings, including ask, health, and reindex endpoints.',
      'Improved performance for 300+ WebP images with lazy loading, thumbnails, async loading, and fetchPriority.',
    ],
    technologies: [
      'React',
      'Vite',
      'Next.js',
      'Vercel',
      'Express.js',
      'OpenAI API',
      'RAG',
      'Interact.js',
      'Google Maps API',
      'WebP',
    ],
    liveUrl: 'https://www.jinjuezheng.com/',
    codeUrl: 'https://github.com/Jimmy20060109/NewPersonalWebsite',
    accent: 'linear-gradient(135deg, #e0f2fe 0%, #f5d0fe 100%)',
    preview: 'portfolio',
  },
  {
    title: "Simon's Game",
    period: 'Oct 2024 - Dec 2024',
    description: [
      "Created an interactive game using JavaScript, HTML, CSS, jQuery, Node.js, and Express.js, enhancing user engagement through immersive audio effects and intuitive interaction features.",
      'Engineered backend functions in JavaScript to manage player choices and game-state logic, ensuring seamless real-time interactions and reliable outcome validation.',
    ],
    technologies: [
      'JavaScript',
      'jQuery',
      'Node.js',
      'Express.js',
      'HTML',
      'CSS',
      'SQL',
    ],
    liveUrl: 'https://jimmy20060109.github.io/Simons-Game/',
    codeUrl: 'https://github.com/Jimmy20060109/Simons-Game',
    accent: 'linear-gradient(135deg, #ede9fe 0%, #fce7f3 100%)',
    preview: 'simon',
  },
  {
    title: 'Keeper Note App',
    period: 'Feb 2025 - June 2025',
    description: [
      'Built a Google Keep-style note-taking app using React functional components and Hooks (useState), supporting creating and deleting notes via controlled inputs and prop callbacks.',
      'Set up the CRA project with npm scripts + cross-env (OpenSSL fix), ESLint (react-hooks), CSS, and Google Fonts.',
      'Composed reusable components (Header, Footer, CreateArea, Note) with lifted state and keyed lists.',
    ],
    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Await/Async',
      'Postman',
      'HTTP',
      'Unsplash API',
    ],
    liveUrl: 'https://jimmy20060109.github.io/Website-create/',
    codeUrl: 'https://github.com/Jimmy20060109/Note_React_Project',
    accent: 'linear-gradient(135deg, #fef3c7 0%, #ddd6fe 100%)',
    preview: 'keeper',
  },
]

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    width="14"
    height="14"
  >
    <path
      d="M6 3H3v10h10v-3M9 3h4v4M13 3 7.5 8.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GithubIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="currentColor"
    width="14"
    height="14"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const SimonPreview = () => (
  <div className="project-preview-frame project-preview-simon">
    <div className="project-preview-chrome">
      <span />
      <span />
      <span />
    </div>
    <div className="project-preview-body">
      <div className="simon-board">
        <div className="simon-pad simon-pad-green" />
        <div className="simon-pad simon-pad-red" />
        <div className="simon-pad simon-pad-yellow" />
        <div className="simon-pad simon-pad-blue" />
        <div className="simon-center">
          <span className="simon-center-label">SIMON</span>
        </div>
      </div>
    </div>
  </div>
)

const KeeperPreview = () => (
  <div className="project-preview-frame project-preview-keeper">
    <div className="project-preview-chrome">
      <span />
      <span />
      <span />
    </div>
    <div className="project-preview-body">
      <div className="keeper-header">
        <div className="keeper-logo" />
        <div className="keeper-search" />
      </div>
      <div className="keeper-grid">
        <div className="keeper-note keeper-note-tall">
          <div className="line line-w-70" />
          <div className="line line-w-90" />
          <div className="line line-w-50" />
        </div>
        <div className="keeper-note">
          <div className="line line-w-60" />
          <div className="line line-w-80" />
        </div>
        <div className="keeper-note keeper-note-accent">
          <div className="line line-w-50" />
          <div className="line line-w-70" />
          <div className="line line-w-40" />
        </div>
        <div className="keeper-note">
          <div className="line line-w-80" />
          <div className="line line-w-60" />
          <div className="line line-w-90" />
        </div>
      </div>
    </div>
  </div>
)

const FountainPreview = () => (
  <div className="project-preview-frame project-preview-fountain">
    <div className="project-preview-chrome">
      <span />
      <span />
      <span />
    </div>
    <div className="project-preview-body">
      <div className="fountain-phone">
        <div className="fountain-status" />
        <div className="fountain-topbar">
          <span className="fountain-logo">FH</span>
          <span className="fountain-avatar" />
        </div>
        <div className="fountain-card">
          <span className="fountain-pill">Wait time</span>
          <strong>12 min</strong>
          <span className="fountain-clinic">Waterloo clinic</span>
        </div>
        <div className="fountain-clinics">
          <div className="fountain-clinic-row fountain-clinic-row-active">
            <span />
            <strong>Open</strong>
          </div>
          <div className="fountain-clinic-row">
            <span />
            <strong>18 min</strong>
          </div>
        </div>
        <div className="fountain-action">Join queue</div>
      </div>
      <div className="fountain-side-card">
        <span>Live queue</span>
        <strong>4</strong>
        <div className="fountain-mini-chart">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  </div>
)

const VolunTrackPreview = () => (
  <div className="project-preview-frame project-preview-voluntrack">
    <div className="project-preview-chrome">
      <span />
      <span />
      <span />
    </div>
    <div className="project-preview-body">
      <div className="voluntrack-dashboard">
        <div className="voluntrack-nav">
          <span className="voluntrack-brand" />
          <span />
          <span />
        </div>
        <div className="voluntrack-search">
          <span>Search opportunities</span>
        </div>
        <div className="voluntrack-list">
          <div className="voluntrack-row voluntrack-row-active">
            <span className="voluntrack-badge">STEM</span>
            <strong>Food bank shift</strong>
            <em>1.2 km</em>
          </div>
          <div className="voluntrack-row">
            <span className="voluntrack-badge">Youth</span>
            <strong>Library helper</strong>
            <em>2.8 km</em>
          </div>
          <div className="voluntrack-row">
            <span className="voluntrack-badge">Care</span>
            <strong>Clinic desk</strong>
            <em>4.1 km</em>
          </div>
        </div>
      </div>
      <div className="voluntrack-phone">
        <span className="voluntrack-phone-bar" />
        <span className="voluntrack-phone-card" />
        <span className="voluntrack-phone-card voluntrack-phone-card-active" />
        <span className="voluntrack-phone-card" />
      </div>
    </div>
  </div>
)

const PortfolioPreview = () => (
  <div className="project-preview-frame project-preview-portfolio">
    <div className="project-preview-chrome">
      <span />
      <span />
      <span />
    </div>
    <div className="project-preview-body">
      <div className="portfolio-shell">
        <div className="portfolio-nav">
          <span />
          <span />
          <span />
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-tile portfolio-tile-wide">
            <span />
            <strong>Jimmy Zheng</strong>
          </div>
          <div className="portfolio-tile portfolio-tile-photo" />
          <div className="portfolio-tile portfolio-tile-tall" />
          <div className="portfolio-tile" />
          <div className="portfolio-tile portfolio-tile-map" />
        </div>
      </div>
      <div className="portfolio-chat">
        <strong>AI</strong>
        <span />
        <span />
      </div>
    </div>
  </div>
)

const renderPreview = (kind: Project['preview']) => {
  if (kind === 'fountain') return <FountainPreview />
  if (kind === 'voluntrack') return <VolunTrackPreview />
  if (kind === 'portfolio') return <PortfolioPreview />
  if (kind === 'simon') return <SimonPreview />
  if (kind === 'keeper') return <KeeperPreview />
  return null
}

const Projects = () => {
  const { language } = useLanguage()
  const t = useTranslations(translations)

  const localizedProjects = projects.map((project) => {
    if (language !== 'zh') return project
    if (project.title === 'Fountain Health App') {
      return {
        ...project,
        period: '2026 年 2 月 - 至今',
        description: [
          '为 Waterloo 和 Kitchener 诊所构建跨平台医疗应用，支持患者查看实时等待时间并加入线上队列。',
          '开发 10+ 个响应式 Flutter 页面和可复用 UI 组件，支持 iOS 与 Android 的浅色/深色主题。',
          '构建离线可访问的共享患者资料功能，让用户一次保存医疗信息并在无网络时复用。',
        ],
      }
    }
    if (project.title === 'VolunTrack Web & Mobile App') {
      return {
        ...project,
        period: '2024 年 2 月 - 2025 年 8 月',
        description: [
          '使用 React 和 React Native 为非营利志愿者平台设计并开发 Web 与移动端页面。',
          '构建并维护基于 PostgreSQL 的志愿机会数据库，提供可搜索列表，将搜索时间缩短到 2 秒以内。',
          '使用 Postman、Python 单元测试和 Jest 实现 API 与自动化测试，验证核心流程并在发布前发现 15+ 个问题。',
        ],
      }
    }
    if (project.title === 'Personal Website') {
      return {
        ...project,
        period: '2026 年 2 月 - 至今',
        description: [
          '使用 React、Vite 和 Next.js 在 Vercel 上部署并维护响应式个人作品集网站，包含可复用组件和基于路由的页面导航。',
          '使用 Interact.js 构建自定义网格拖拽系统，支持首页组件和摄影页面图片的交互式重排。',
          '使用 OpenAI API 和向量嵌入实现 Express.js RAG API，包含 ask、health 和 reindex 等接口。',
          '通过懒加载、缩略图、异步加载和 fetchPriority 优化 300+ 张 WebP 图片的移动端和桌面端性能。',
        ],
      }
    }
    if (project.title === "Simon's Game") {
      return {
        ...project,
        period: '2024 年 10 月 - 2024 年 12 月',
        description: [
          '使用 JavaScript、HTML、CSS、jQuery、Node.js 和 Express.js 创建互动游戏，通过沉浸式音效和直观交互提升用户参与度。',
          '使用 JavaScript 构建后端函数来管理玩家选择和游戏状态逻辑，确保实时交互流畅且结果校验可靠。',
        ],
      }
    }
    if (project.title === 'Keeper Note App') {
      return {
        ...project,
        period: '2025 年 2 月 - 2025 年 6 月',
        description: [
          '使用 React 函数组件和 Hooks（useState）构建类似 Google Keep 的笔记应用，支持通过受控输入和 props 回调创建、删除笔记。',
          '使用 npm scripts + cross-env（OpenSSL 修复）搭建 CRA 项目，并配置 ESLint（react-hooks）、CSS 和 Google Fonts。',
          '组合 Header、Footer、CreateArea、Note 等可复用组件，通过状态提升和 keyed lists 管理数据流。',
        ],
      }
    }
    return project
  })

  return (
    <section id="projects" className="projects-section">
      <header className="projects-section-header">
        <h2 className="projects-section-title">{t.title}</h2>
        <p className="projects-section-subtitle">{t.subtitle}</p>
      </header>

      <div className="projects-stack">
        {localizedProjects.map((project, index) => (
          <article key={index} className="project-row">
            <div
              className="project-row-preview"
              style={{ background: project.accent }}
              aria-hidden="true"
            >
              {renderPreview(project.preview)}
            </div>

            <div className="project-row-content">
              <div className="project-row-heading">
                <h3 className="project-row-title">{project.title}</h3>
                <span className="project-row-period">{project.period}</span>
              </div>

              <p className="project-row-description">
                {project.description.join(' ')}
              </p>

              <ul className="project-row-tags" aria-label="Technologies used">
                {project.technologies.map((tech) => (
                  <li key={tech} className="project-row-tag">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="project-row-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action project-action-primary"
                  >
                    <ExternalLinkIcon />
                    <span>{t.viewProject}</span>
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action project-action-secondary"
                  >
                    <GithubIcon />
                    <span>{t.code}</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
