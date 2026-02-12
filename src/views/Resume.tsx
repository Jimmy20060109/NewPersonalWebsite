import './Resume.css'
import { useState, useEffect, useRef } from 'react'
import WaterlooLogo from '../images/waterlooLoGo.svg'
import RHHSLogo from '../images/RHHSLogo.png'
import CppLogo from '../images/ProgrammingLanguage/Cpp_Logo.png'
import CLogo from '../images/ProgrammingLanguage/C_Logo.png'
import PythonLogo from '../images/ProgrammingLanguage/Python_Logo.png'
import JavaLogo from '../images/ProgrammingLanguage/Java_Logo.png'
import JSLogo from '../images/ProgrammingLanguage/JS_Logo.png'
import HTMLLogo from '../images/ProgrammingLanguage/HTML_Logo.png'
import CSSLogo from '../images/ProgrammingLanguage/CSS_Logo.png'
import SQLLogo from '../images/ProgrammingLanguage/SQL_Logo.png'
import RacketLogo from '../images/ProgrammingLanguage/Racket_Logo.png'
import VBALogo from '../images/ProgrammingLanguage/VBA_Logo.png'
import ReactLogo from '../images/framework/React_Logo.png'
import ReactNativeLogo from '../images/framework/React_Native_Logo.png'
import MernLogo from '../images/framework/Mern_Logo.png'
import NodeLogo from '../images/framework/Node_Logo.png'
import ExpressLogo from '../images/framework/Express_Logo.png'
import NextJSLogo from '../images/framework/NextJS_Logo.png'
import RestAPILogo from '../images/framework/RestAPI_Logo.png'
import jQueryLogo from '../images/framework/jQuery_Logo.png'
import BootstrapLogo from '../images/framework/BootStrap_Logo.png'
import PostmanLogo from '../images/tools/Postman_Logo.png'
import DockerLogo from '../images/tools/Docker_Logo.png'
import GitLogo from '../images/tools/Git_Logo.png'
import GithubLogo from '../images/tools/Github_Logo.png'
import n8nLogo from '../images/tools/n8n_Logo.png'
import CursorLogo from '../images/tools/Cursor_Logo.png'
import GeminiLogo from '../images/tools/Gemini_Logo.png'
import CMLLogo from '../images/tools/cml_Logo.png'
import AutotestLogo from '../images/tools/autotest_Logo.png'
import BookLogo from '../images/Book_Logo.png'
import SkillsLogo from '../images/Skill_Logo.png'
import WorkExperienceLogo from '../images/work-experience-logo.svg'
import ResumePdf from "../images/Jimmy Zheng's Waterloo CS Resume V3.pdf"
import WorkLogo from '../images/Work_Logo.png'

interface ExperienceItem {
  title: string
  company: string
  companyLinks?: SkillLink[]
  location: string
  period: string
  technologies: string[]
  achievements: string[]
  evaluation?: string
}

interface SkillLink {
  name: string
  href: string
}

interface SkillLogo {
  src: string
  alt: string
}

interface SkillCategory {
  title: string
  links: SkillLink[]
  logos: SkillLogo[]
  reverse?: boolean
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full-Stack Developer, Co-op',
    company: 'Hanov Solutions Inc',
    companyLinks: [{ name: 'Hanov Solutions Inc', href: 'https://www.hanovsolutions.com/' }],
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
    companyLinks: [
      { name: 'Emerson', href: 'https://www.emerson.com/en-us' },
      { name: 'NI', href: 'https://www.ni.com/en.html?srsltid=AfmBOormNRFx7ARN0LyBbBtcxeLqHRkAZOzqghXwkx6FYN6NFfkN4hiM' },
    ],
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
    companyLinks: [{ name: 'VolunTrack.Org', href: 'https://voluntracks.com/' }],
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

interface PersonalProject {
  title: string
  href: string
  period: string
  technologies: string[]
  achievements: string[]
}

const personalProjects: PersonalProject[] = [
  {
    title: "Simon's Game",
    href: 'https://jimmy20060109.github.io/Simons-Game/',
    period: 'Oct 2024 - Dec 2024',
    technologies: ['JavaScript', 'jQuery', 'Node.js', 'Express.js', 'HTML', 'CSS', 'SQL'],
    achievements: [
      'Created an interactive game using JavaScript, HTML, CSS, jQuery, Node.js, and Express.js, enhancing user engagement through immersive audio effects and intuitive interaction features.',
      'Engineered backend functions in JavaScript to manage player choices and game-state logic, ensuring seamless real-time interactions and reliable outcome validation.',
    ],
  },
  {
    title: 'Keeper Note App',
    href: 'https://jimmy20060109.github.io/Website-create/',
    period: 'Feb 2025 - June 2025',
    technologies: ['React', 'JavaScript', 'CSS', 'Postman', 'HTTP', 'Unsplash API'],
    achievements: [
      'Built a Google Keep–style note-taking app using React functional components and Hooks (useState), supporting creating and deleting notes via controlled inputs and prop callbacks.',
      'CRA built with npm scripts + cross-env (OpenSSL fix), ESLint (react-hooks); CSS + Google Fonts.',
      'Composed reusable components (Header, Footer, CreateArea, Note) with lifted state and keyed lists.',
    ],
  },
]

const skillsCategories: SkillCategory[] = [
  {
    title: 'Languages',
    links: [
      { name: 'C', href: 'https://www.cprogramming.com/' },
      { name: 'C++', href: 'https://isocpp.org/' },
      { name: 'Python', href: 'https://www.python.org/' },
      { name: 'Java', href: 'https://www.oracle.com/java/' },
      {
        name: 'JavaScript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
      {
        name: 'HTML',
        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      { name: 'CSS', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'SQL', href: 'https://en.wikipedia.org/wiki/SQL' },
      { name: 'Racket', href: 'https://racket-lang.org/' },
      {
        name: 'VBA',
        href: 'https://learn.microsoft.com/en-us/office/vba/api/overview',
      },
      { name: 'LabVIEW SDK', href: 'https://www.labviewmakerhub.com/' },
    ],
    logos: [
      { src: CLogo, alt: 'C Logo' },
      { src: CppLogo, alt: 'C++ Logo' },
      { src: PythonLogo, alt: 'Python Logo' },
      { src: JavaLogo, alt: 'Java Logo' },
      { src: JSLogo, alt: 'JavaScript Logo' },
      { src: HTMLLogo, alt: 'HTML Logo' },
      { src: CSSLogo, alt: 'CSS Logo' },
      { src: SQLLogo, alt: 'SQL Logo' },
      { src: RacketLogo, alt: 'Racket Logo' },
      { src: VBALogo, alt: 'VBA Logo' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    links: [
      { name: 'React', href: 'https://react.dev/' },
      { name: 'React Native', href: 'https://reactnative.dev/' },
      { name: 'MERN', href: 'https://www.mongodb.com/mern-stack' },
      { name: 'Node.js', href: 'https://nodejs.org/' },
      { name: 'Express.js', href: 'https://expressjs.com/' },
      { name: 'Next.js', href: 'https://nextjs.org/' },
      { name: 'REST API', href: 'https://restfulapi.net/' },
      { name: 'jQuery', href: 'https://jquery.com/' },
      { name: 'Bootstrap', href: 'https://getbootstrap.com/' },
      { name: 'Vue.js', href: 'https://vuejs.org/' },
      { name: 'Stripe', href: 'https://stripe.com/' },
    ],
    logos: [
      { src: ReactLogo, alt: 'React Logo' },
      { src: ReactNativeLogo, alt: 'React Native Logo' },
      { src: MernLogo, alt: 'MERN Logo' },
      { src: NodeLogo, alt: 'Node.js Logo' },
      { src: ExpressLogo, alt: 'Express.js Logo' },
      { src: NextJSLogo, alt: 'Next.js Logo' },
      { src: RestAPILogo, alt: 'REST API Logo' },
      { src: jQueryLogo, alt: 'jQuery Logo' },
      { src: BootstrapLogo, alt: 'Bootstrap Logo' },
    ],
    reverse: true,
  },
  {
    title: 'Tools & Technologies',
    links: [
      { name: 'Postman', href: 'https://www.postman.com/' },
      { name: 'Linux command line', href: 'https://www.linux.org/' },
      { name: 'GitHub', href: 'https://github.com/' },
      { name: 'Git', href: 'https://git-scm.com/' },
      { name: 'n8n', href: 'https://n8n.io/' },
      {
        name: 'Test automation',
        href: 'https://en.wikipedia.org/wiki/Test_automation',
      },
      { name: 'Docker', href: 'https://www.docker.com/' },
      { name: 'SSH', href: 'https://en.wikipedia.org/wiki/Secure_Shell' },
      {
        name: 'UI/UX',
        href: 'https://en.wikipedia.org/wiki/User_experience_design',
      },
    ],
    logos: [
      { src: PostmanLogo, alt: 'Postman Logo' },
      { src: GithubLogo, alt: 'Github Logo' },
      { src: GitLogo, alt: 'Git Logo' },
      { src: n8nLogo, alt: 'n8n Logo' },
      { src: DockerLogo, alt: 'Docker Logo' },
      { src: CursorLogo, alt: 'Cursor Logo' },
      { src: GeminiLogo, alt: 'Gemini Logo' },
      { src: CMLLogo, alt: 'CML Logo' },
      { src: AutotestLogo, alt: 'Autotest Logo' },
    ],
  },
]

const Resume = () => {
  const [buttonState, setButtonState] = useState('initial-show')
  const isHoveredRef = useRef(false)
  const collapseDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonState('collapsed')
    }, 2000)

    return () => {
      clearTimeout(timer)
      if (collapseDelayRef.current) {
        clearTimeout(collapseDelayRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    if (collapseDelayRef.current) {
      clearTimeout(collapseDelayRef.current)
      collapseDelayRef.current = null
    }

    if (isHoveredRef.current) {
      return
    }

    isHoveredRef.current = true
    setButtonState('hovered')
  }

  const handleMouseLeave = () => {
    if (!isHoveredRef.current) {
      return
    }

    isHoveredRef.current = false

    collapseDelayRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setButtonState('collapsed')
      }
    }, 120)
  }

  const handleDownload = () => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      window.location.href = ResumePdf
      return
    }

    window.open(ResumePdf, '_blank')
  }

  return (
    <div className="resume-view">
      <div className="resume-container">
        <div className="resume-content-section">
          <div className="educational-background">
            <div className="section-header">
              <img src={BookLogo} alt="Book Logo" className="section-icon" />
              <h2 className="section-title">EDUCATIONAL BACKGROUND</h2>
            </div>
            <div className="education-entry">
              <div className="education-header">
                <div className="education-info">
                  <a href="https://www.uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="university-name">University of Waterloo</a>
                  <img src={WaterlooLogo} alt="University of Waterloo Logo" className="university-logo" />, 
                  <span className="location">2B, Waterloo, Ontario</span>
                </div>
                <span className="education-dates">Sep 2024 - (Expected) April 2029</span>
              </div>
              <ul className="education-details">
                <li>
                  <strong>Bachelor of Mathematics (Honours) Co-op</strong>, Data Science
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Object-Oriented Programming, Calculus, Algorithm Design & Data Structure, Linear Algebra
                </li>
                <li>
                  <strong>Skills:</strong> Problem-solving in binary search, binary trees, graph theory, and backtracking algorithms
                </li>
              </ul>
            </div>
            <div className="education-entry">
              <div className="education-header">
                <div className="education-info">
                  <a href="https://richmondhill-hs.yrdsb.ca/" target="_blank" rel="noopener noreferrer" className="university-name">Richmond Hill High School</a>
                  <img src={RHHSLogo} alt="Richmond Hill High School Logo" className="university-logo" />, 
                  <span className="location">Richmond Hill, Ontario</span>
                </div>
                <span className="education-dates">Sep 2021 - Jun 2024</span>
              </div>
              <ul className="education-details">
                <li>
                  <strong>High School Diploma</strong>
                </li>
                <li>
                  <strong>Coursework:</strong> Calculus, Advanced Functions, Data Management, Object-Oriented Programming
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume-content-section section-compact-gap">
          <div className="technical-skills">
            <div className="section-header">
              <img src={SkillsLogo} alt="Skills Logo" className="section-icon" />
              <h2 className="section-title">TECHNICAL SKILLS</h2>
            </div>
            {skillsCategories.map((category) => (
              <div key={category.title} className="skills-category">
                <h3 className="skills-category-title">{category.title}</h3>
                <p className="skills-list">
                  {category.links.map((link, index) => (
                    <span key={link.name}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                      {index < category.links.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
                <div
                  className={`skills-logos${category.reverse ? ' skills-logos-reverse' : ''}`}
                >
                  {[0, 1].map((containerIndex) => (
                    <div
                      key={`${category.title}-${containerIndex}`}
                      className="skills-logos-container"
                    >
                      {category.logos.map((logo) => (
                        <img
                          key={`${logo.alt}-${containerIndex}`}
                          src={logo.src}
                          alt={logo.alt}
                          className="skill-logo"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-content-section section-compact-gap">
          <div className="work-experience">
            <div className="section-header">
              <img src={WorkLogo} alt="Work Experience Logo" className="section-icon" />
              <h2 className="section-title">Work Experience</h2>
            </div>
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
                    <span className="experience-company">
                      {exp.companyLinks
                        ? exp.companyLinks.map((companyLink, companyIndex, companyLinks) => (
                            <span key={`${companyLink.name}-${companyIndex}`}>
                              <a href={companyLink.href} target="_blank" rel="noopener noreferrer">
                                {companyLink.name}
                              </a>
                              {companyIndex < companyLinks.length - 1 ? ', ' : ''}
                            </span>
                          ))
                        : exp.company}
                    </span>
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
          </div>
        </div>
        <div className="resume-content-section section-compact-gap section-personal-projects-gap">
          <div className="personal-projects">
            <div className="section-header">
              <img src={WorkExperienceLogo} alt="Personal Projects Logo" className="section-icon" />
              <h2 className="section-title">Personal Projects</h2>
            </div>
            <div className="experience-list">
              {personalProjects.map((project, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="university-name"
                        >
                          {project.title}
                        </a>
                      </h3>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{project.period}</span>
                    </div>
                  </div>
                  <div className="experience-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="experience-achievements">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`resume-actions ${buttonState}`}>
          <div
            className="resume-actions-hitbox"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="resume-download-button" onClick={handleDownload}>
              View & Download
              <br />
              Resume in PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
