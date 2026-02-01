import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          I'm a 2B Data Science student at the University of Waterloo with a
          passion for software development and innovation. I specialize in
          building efficient, scalable solutions using modern technologies and
          have experience working on compiler development, AI-powered tools, and
          full-stack web applications.
        </p>
        <div className="education-section">
          <h3 className="education-title">Education</h3>
          <div className="education-item">
            <div className="education-header">
              <span className="education-school">
                University of Waterloo, 2B
              </span>
              <span className="education-location">Waterloo, Ontario</span>
              <span className="education-period">Sep 2024 - April 2029</span>
            </div>
            <div className="education-details">
              <p className="education-degree">Data Science</p>
              <p className="education-courses">
                Relevant Coursework: Object-Oriented Programming, Calculus,
                Algorithm Design & Data Structure, Linear Algebra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
