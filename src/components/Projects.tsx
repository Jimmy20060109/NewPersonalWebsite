import { useLanguage } from '../i18n/LanguageContext'
import './Projects.css'

interface Project {
  title: string
  period: string
  technologies: string[]
  description: string[]
}

const projects: Project[] = [
  {
    title: "Simon's Game",
    period: 'Oct 2024 - Dec 2024',
    technologies: [
      'JavaScript',
      'jQuery',
      'Node.js',
      'Express.js',
      'HTML',
      'CSS',
      'SQL',
    ],
    description: [
      "Created an interactive game using JavaScript, HTML, CSS, jQuery, Node.js, and Express.js, enhancing user engagement through immersive audio effects and intuitive interaction features.",
      'Engineered backend functions in JavaScript to manage player choices and game-state logic, ensuring seamless real-time interactions and reliable outcome validation.',
    ],
  },
  {
    title: 'Keeper Note App',
    period: 'Feb 2025 - June 2025',
    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'Await/Async',
      'Postman',
      'HTTP',
      'Unsplash API',
    ],
    description: [
      'Built a Google Keep–style note‑taking app using React functional components and Hooks (useState), supporting creating and deleting notes via controlled inputs and prop callbacks.',
      'CRA built with npm scripts + cross-env (OpenSSL fix), ESLint (react-hooks); CSS + Google Fonts;',
      'Composed reusable components (Header, Footer, CreateArea, Note) with lifted state and keyed lists.',
    ],
  },
]

const Projects = () => {
  const { language, t } = useLanguage()
  const localizedProjects =
    language === 'zh'
      ? projects.map((project) => ({
          ...project,
          period: project.period
            .replace('Oct 2024 - Dec 2024', '2024 年 10 月 - 2024 年 12 月')
            .replace('Feb 2025 - June 2025', '2025 年 2 月 - 2025 年 6 月'),
          description:
            project.title === "Simon's Game"
              ? [
                  '使用 JavaScript、HTML、CSS、jQuery、Node.js 和 Express.js 创建互动游戏，通过沉浸式音效和直观交互提升用户参与度。',
                  '使用 JavaScript 构建后端函数来管理玩家选择和游戏状态逻辑，确保实时交互流畅且结果校验可靠。',
                ]
              : [
                  '使用 React 函数组件和 Hooks（useState）构建类似 Google Keep 的笔记应用，支持通过受控输入和 props 回调创建、删除笔记。',
                  '使用 npm scripts + cross-env（OpenSSL 修复）搭建 CRA 项目，并配置 ESLint（react-hooks）、CSS 和 Google Fonts。',
                  '组合 Header、Footer、CreateArea、Note 等可复用组件，通过状态提升和 keyed lists 管理数据流。',
                ],
        }))
      : projects

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">{t('projects.title')}</h2>
      <div className="projects-grid">
        {localizedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="project-period">{project.period}</span>
            </div>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="project-description">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex} className="project-desc-item">
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
