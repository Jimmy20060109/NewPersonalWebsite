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
          In my current co-op as a <strong>Full-Stack Developer</strong> at{' '}
          <a
            href="https://www.hanovsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            Hanov Solutions Inc
          </a>, I engineered and deployed core infrastructure for a momentum-based stock analytics SaaS
          platform, transforming Python ML trading models into a production-ready full-stack system
          with real-time screening. I designed a modular Vue 3 architecture that reduced redundant
          API calls and improved chart/watchlist load performance by <strong>30%</strong>, and built
          secure authentication plus Stripe-based subscription workflows in TypeScript. I also applied
          AI-assisted development (Cursor) across Vue, TypeScript, Go, and Python to increase feature
          throughput by <strong>40%</strong> while maintaining strong code quality and reliability.
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
