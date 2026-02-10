import './Resume.css'
import '../components/Experience.css'
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

const Resume = () => {
  const handleDownload = () => {
    window.open('Jimmy Zheng\'s External CS Resume V2.pdf', '_blank')
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
                <span className="education-dates">Sep 2024 - April 2029 (Expected)</span>
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
        <div className="resume-content-section">
          <div className="technical-skills">
            <div className="section-header">
              <img src={SkillsLogo} alt="Skills Logo" className="section-icon" />
              <h2 className="section-title">TECHNICAL SKILLS</h2>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Languages</h3>
              <p className="skills-list">
                <a href="https://www.cprogramming.com/" target="_blank" rel="noopener noreferrer">C</a>/
                <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">C++</a>,{' '}
                <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>,{' '}
                <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">Java</a>,{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a>,{' '}
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a>,{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">HTML</a>,{' '}
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS</a>,{' '}
                <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">SQL</a>,{' '}
                <a href="https://racket-lang.org/" target="_blank" rel="noopener noreferrer">Racket</a>,{' '}
                <a href="https://learn.microsoft.com/en-us/office/vba/api/overview" target="_blank" rel="noopener noreferrer">VBA</a>,{' '}
                <a href="https://www.labviewmakerhub.com/" target="_blank" rel="noopener noreferrer">LabVIEW SDK</a>
              </p>
              <div className="skills-logos">
                <div className="skills-logos-container">
                  <img src={CLogo} alt="C Logo" className="skill-logo" />
                  <img src={CppLogo} alt="C++ Logo" className="skill-logo" />
                  <img src={PythonLogo} alt="Python Logo" className="skill-logo" />
                  <img src={JavaLogo} alt="Java Logo" className="skill-logo" />
                  <img src={JSLogo} alt="JavaScript Logo" className="skill-logo" />
                  <img src={HTMLLogo} alt="HTML Logo" className="skill-logo" />
                  <img src={CSSLogo} alt="CSS Logo" className="skill-logo" />
                  <img src={SQLLogo} alt="SQL Logo" className="skill-logo" />
                  <img src={RacketLogo} alt="Racket Logo" className="skill-logo" />
                  <img src={VBALogo} alt="VBA Logo" className="skill-logo" />
                </div>
                <div className="skills-logos-container">
                  <img src={CLogo} alt="C Logo" className="skill-logo" />
                  <img src={CppLogo} alt="C++ Logo" className="skill-logo" />
                  <img src={PythonLogo} alt="Python Logo" className="skill-logo" />
                  <img src={JavaLogo} alt="Java Logo" className="skill-logo" />
                  <img src={JSLogo} alt="JavaScript Logo" className="skill-logo" />
                  <img src={HTMLLogo} alt="HTML Logo" className="skill-logo" />
                  <img src={CSSLogo} alt="CSS Logo" className="skill-logo" />
                  <img src={SQLLogo} alt="SQL Logo" className="skill-logo" />
                  <img src={RacketLogo} alt="Racket Logo" className="skill-logo" />
                  <img src={VBALogo} alt="VBA Logo" className="skill-logo" />
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Frameworks & Libraries</h3>
              <p className="skills-list">
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React</a>,{' '}
                <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">React Native</a>,{' '}
                <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noopener noreferrer">MERN</a>,{' '}
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a>,{' '}
                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">Express.js</a>,{' '}
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>,{' '}
                <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">REST API</a>,{' '}
                <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">jQuery</a>,{' '}
                <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</a>,{' '}
                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a>,{' '}
                <a href="https://stripe.com/" target="_blank" rel="noopener noreferrer">Stripe</a>
              </p>              <div className="skills-logos skills-logos-reverse">
                <div className="skills-logos-container">
                  <img src={ReactLogo} alt="React Logo" className="skill-logo" />
                  <img src={ReactNativeLogo} alt="React Native Logo" className="skill-logo" />
                  <img src={MernLogo} alt="MERN Logo" className="skill-logo" />
                  <img src={NodeLogo} alt="Node.js Logo" className="skill-logo" />
                  <img src={ExpressLogo} alt="Express.js Logo" className="skill-logo" />
                  <img src={NextJSLogo} alt="Next.js Logo" className="skill-logo" />
                  <img src={RestAPILogo} alt="REST API Logo" className="skill-logo" />
                  <img src={jQueryLogo} alt="jQuery Logo" className="skill-logo" />
                  <img src={BootstrapLogo} alt="Bootstrap Logo" className="skill-logo" />
                </div>
                <div className="skills-logos-container">
                  <img src={ReactLogo} alt="React Logo" className="skill-logo" />
                  <img src={ReactNativeLogo} alt="React Native Logo" className="skill-logo" />
                  <img src={MernLogo} alt="MERN Logo" className="skill-logo" />
                  <img src={NodeLogo} alt="Node.js Logo" className="skill-logo" />
                  <img src={ExpressLogo} alt="Express.js Logo" className="skill-logo" />
                  <img src={NextJSLogo} alt="Next.js Logo" className="skill-logo" />
                  <img src={RestAPILogo} alt="REST API Logo" className="skill-logo" />
                  <img src={jQueryLogo} alt="jQuery Logo" className="skill-logo" />
                  <img src={BootstrapLogo} alt="Bootstrap Logo" className="skill-logo" />
                </div>
              </div>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Tools & Technologies</h3>
              <p className="skills-list">
                <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">Postman</a>,{' '}
                <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">Linux command line</a>,{' '}
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>,{' '}
                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git</a>,{' '}
                <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer">n8n</a>,{' '}
                <a href="https://en.wikipedia.org/wiki/Test_automation" target="_blank" rel="noopener noreferrer">Test automation</a>,{' '}
                <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">Docker</a>,{' '}
                <a href="https://en.wikipedia.org/wiki/Secure_Shell" target="_blank" rel="noopener noreferrer">SSH</a>,{' '}
                <a href="https://en.wikipedia.org/wiki/User_experience_design" target="_blank" rel="noopener noreferrer">UI/UX</a>
              </p>
              <div className="skills-logos">
                <div className="skills-logos-container">
                  <img src={PostmanLogo} alt="Postman Logo" className="skill-logo" />
                  <img src={GithubLogo} alt="Github Logo" className="skill-logo" />
                  <img src={GitLogo} alt="Git Logo" className="skill-logo" />
                  <img src={n8nLogo} alt="n8n Logo" className="skill-logo" />
                  <img src={DockerLogo} alt="Docker Logo" className="skill-logo" />
                  <img src={CursorLogo} alt="Cursor Logo" className="skill-logo" />
                  <img src={GeminiLogo} alt="Gemini Logo" className="skill-logo" />
                  <img src={CMLLogo} alt="CML Logo" className="skill-logo" />
                  <img src={AutotestLogo} alt="Autotest Logo" className="skill-logo" />
                </div>
                <div className="skills-logos-container">
                  <img src={PostmanLogo} alt="Postman Logo" className="skill-logo" />
                  <img src={GithubLogo} alt="Github Logo" className="skill-logo" />
                  <img src={GitLogo} alt="Git Logo" className="skill-logo" />
                  <img src={n8nLogo} alt="n8n Logo" className="skill-logo" />
                  <img src={DockerLogo} alt="Docker Logo" className="skill-logo" />
                  <img src={CursorLogo} alt="Cursor Logo" className="skill-logo" />
                  <img src={GeminiLogo} alt="Gemini Logo" className="skill-logo" />
                  <img src={CMLLogo} alt="CML Logo" className="skill-logo" />
                  <img src={AutotestLogo} alt="Autotest Logo" className="skill-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="resume-content-section">
          <div className="work-experience">
            <div className="section-header">
              <img src={WorkExperienceLogo} alt="Work Experience Logo" className="section-icon" />
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
          </div>
        </div>
        <div className="resume-actions">
          <button className="resume-download-button" onClick={handleDownload}>
            View & Download Resume
          </button>
        </div>
        <div className="resume-content-section">
          <p className="resume-note">
            Click the button above to view or download my resume in PDF format.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resume
