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
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Personal Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
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
