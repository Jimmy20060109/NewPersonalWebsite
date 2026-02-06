import './About.css'
import WaterlooLogo from '../images/waterlooLoGo.svg'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          I'm a <strong>software engineer</strong> and a <strong>2B Data Science student</strong> at the{' '}
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            University of Waterloo
          </a>
          <img src={WaterlooLogo} alt="University of Waterloo Logo" className="waterloo-logo-inline" />
          {' '}, with a strong interest in building{' '}
          <span className="about-highlight">modern, efficient, and well-engineered software systems</span>.
          With a background in data science and hands-on industry experience, I approach problems
          from both <span className="about-highlight">theoretical and practical engineering perspectives</span>.
        </p>
        <p className="about-text">
          I specialize in <span className="about-highlight">modern frontend development</span>, with{' '}
          <strong>over two years</strong> of experience building scalable, user-focused web applications using{' '}
          <span className="about-highlight">React, Vue, TypeScript, and JavaScript</span>. I enjoy creating
          clean, responsive interfaces while maintaining strong performance, structure, and long-term
          maintainability, and I'm comfortable working across the stack and integrating with APIs and
          data pipelines.
        </p>
        <p className="about-text">
          I also have experience in <span className="about-highlight">compiler and systems-level development</span>.
          During my co-op at <a
            href="https://www.ni.com/en.html"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Emerson / NI
          </a>, I worked on a <strong>LabVIEW-to-native-code compiler</strong> using
          C++, Python, and AST-based compilation pipelines, strengthening my understanding of low-level
          execution models and how high-level abstractions translate into efficient machine code.
        </p>
        <p className="about-text">
          In addition, I actively use <span className="about-highlight">AI-assisted development workflows</span> and
          advanced agent-based IDEs such as <span className="about-highlight">Cursor and Codex</span> to
          accelerate prototyping, refactoring, and tooling development. My interests lie at the
          intersection of frontend engineering, AI-powered tooling, and developer productivity, and I'm
          currently seeking opportunities to work on <strong>impactful, technically challenging projects</strong>.
        </p>
      </div>
    </section>
  )
}

export default About
