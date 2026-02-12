import './Experience.css'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  technologies: string[]
  achievements: string[]
  evaluation?: string
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full-Stack Developer, Co-op',
    company: 'Hanov Solutions Inc',
    location: 'Waterloo, Ontario',
    period: 'Jan 2026 - Present',
    technologies: [
      'Python',
      'Go',
      'Vue.js',
      'Node.js',
      'JavaScript',
      'TypeScript',
      'Vite',
      'SQLite',
      'Stripe',
    ],
    achievements: [
      'Engineered and deployed core infrastructure for eh-trade, a momentum-based stock analytics SaaS platform, transforming Python ML trading models into a production-ready full-stack system serving real-time stock screening.',
      'Designed modular frontend architecture with Vue 3, optimized data rendering and API integration patterns, reduced redundant network requests, and improved chart and watchlist load performance by 30% across desktop and mobile.',
      'Developed secure authentication and subscription infrastructure using TypeScript and Stripe, enabling recurring billing, gated premium features, and full user lifecycle management from onboarding to subscription control.',
      'Applied AI-assisted (Cursor) development practices across the full stack (Vue.js, TypeScript, Go, Python) to shorten iteration cycles and increase feature throughput by 40%, while maintaining code review standards, modular architecture, and production-grade reliability.',
    ],
  },
  {
    title: 'Software Innovation Developer, Co-op',
    company: 'Emerson, NI',
    location: 'Shanghai, China',
    period: 'May 2025 - August 2025',
    evaluation: 'Outstanding Evaluation',
    technologies: [
      'C++',
      'Python',
      'LabVIEW SDK',
      'AST',
      'n8n',
      'REST API',
      'RAG',
      'Docker',
      'React',
    ],
    achievements: [
      'Assisted in developing a LabVIEW-to-native-code compiler using C++ and Python, enabling graphical programs to be translated into optimized machine code. Improved compilation speed by 30% and reduced runtime errors by 20%, accelerating internal development workflows.',
      'Developed an internal chatbot powered by RAG that indexed and summarized official documentation, helping cross-functional teams (e.g., LabVIEW developers exploring TestStand) access accurate answers instantly, improving team productivity and knowledge sharing, reducing knowledge lookup time by 50%.',
      'Built automated workflows with n8n and Docker to generate and publish circuit documentation, reducing manual preparation time by 70% and ensuring consistent formatting across all projects.',
      'Designed and built an internal website using JavaScript and ComfyUI with React.js to auto-generate cartoon avatars from employee photos, increasing internal team profile recognizability by 80%.',
    ],
  },
  {
    title: 'Software Developer, Part-time',
    company: 'VolunTrack.Org',
    location: 'Toronto, Ontario',
    period: 'Feb 2024 - August 2025',
    technologies: [
      'React',
      'JavaScript',
      'Jest',
      'Node.js',
      'Express.js',
      'Postman',
      'HTTP',
    ],
    achievements: [
      'Developed and optimized the homepage and \'About Us\' page for VolunTrack using React, Bootstrap, and JavaScript, improving site load speed by 30% and enhancing mobile responsiveness.',
      'Implemented automated testing using Python unit tests, Jest, and visual regression testing, identifying and resolving 15+ bugs before production release and improving overall code reliability by 50%.',
      'Validated HTTP requests with Postman by designing and executing structured API test cases, ensuring 90%+ accuracy of backend responses and reducing integration issues across the web application.',
      'Optimized website responsiveness by implementing media queries in CSS to ensure optimal user experience across various devices, including desktops, tablets, and smartphones.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">{exp.title}</h3>
                {exp.evaluation && (
                  <span className="experience-evaluation">
                    {exp.evaluation}
                  </span>
                )}
              </div>
              <div className="experience-meta">
                <span className="experience-company">{exp.company}</span>
                <span className="experience-location">{exp.location}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
            </div>
            <div className="experience-technologies">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="achievement-item">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
