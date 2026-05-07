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
  preview: 'simon' | 'keeper'
}

const projects: Project[] = [
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

const renderPreview = (kind: Project['preview']) => {
  if (kind === 'simon') return <SimonPreview />
  if (kind === 'keeper') return <KeeperPreview />
  return null
}

const Projects = () => {
  const { language } = useLanguage()
  const t = useTranslations(translations)

  const localizedProjects = projects.map((project) => {
    if (language !== 'zh') return project
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
