import './Resume.css'
import WaterlooLogo from '../images/waterlooLoGo.svg'
import RHHSLogo from '../images/RHHSLogo.png'
import CppLogo from '../images/C++_Logo.png'
import CLogo from '../images/C_Logo.png'
import PythonLogo from '../images/Python_Logo.png'
import JavaLogo from '../images/Java_Logo.png'
import JSLogo from '../images/JS_Logo.png'
import HTMLLogo from '../images/HTML_Logo.png'
import CSSLogo from '../images/CSS_Logo.png'
import SQLLogo from '../images/SQL_Logo.png'
import RacketLogo from '../images/Racket_Logo.png'
import VBALogo from '../images/VBA_Logo.png'

const Resume = () => {
  const handleDownload = () => {
    window.open('Jimmy Zheng\'s External CS Resume V2.pdf', '_blank')
  }

  return (
    <div className="resume-view">
      <div className="resume-container">
        <div className="resume-content-section">
          <div className="educational-background">
            <h2 className="section-title">EDUCATIONAL BACKGROUND</h2>
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
                  <strong>Faculty of Mathematics (Honours) Co-op</strong>, Data Science
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
            <h2 className="section-title">TECHNICAL SKILLS</h2>
            <div className="skills-category">
              <h3 className="skills-category-title">Languages</h3>
              <p className="skills-list">C/C++, Python, Java, JavaScript, TypeScript, HTML, CSS, SQL, Racket, VBA, LabVIEW SDK</p>
              <div className="skills-logos">
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
            <div className="skills-category">
              <h3 className="skills-category-title">Frameworks & Libraries</h3>
              <p className="skills-list">React, React Native, MERN, Node.js, Express.js, Next.js, REST API, jQuery, Bootstrap</p>
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Tools & Technologies</h3>
              <p className="skills-list">Postman, Linux command line, GitHub, Git, n8n, Test automation, Docker, SSH, UI/UX</p>
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
