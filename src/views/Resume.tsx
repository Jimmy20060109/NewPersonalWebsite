import './Resume.css'

const Resume = () => {
  const handleDownload = () => {
    window.open('Jimmy Zheng\'s External CS Resume V2.pdf', '_blank')
  }

  return (
    <div className="resume-view">
      <div className="resume-container">
        <div className="resume-content-section">
          <div className="educational-background">
            <div className="section-divider"></div>
            <h2 className="section-title">EDUCATIONAL BACKGROUND</h2>
            <div className="education-entry">
              <div className="education-header">
                <div className="education-info">
                  <span className="university-name">University of Waterloo</span>
                  <span className="location">2A, Waterloo, Ontario</span>
                </div>
                <span className="education-dates">Sep 2024 - April 2029</span>
              </div>
              <ul className="education-details">
                <li>
                  <strong>Data Science</strong>, GPA: 3.90/4.00 (Excellent Standing)
                </li>
                <li>
                  <strong>Relevant Coursework:</strong> Object-Oriented Programming, Calculus, Algorithm Design & Data Structure, Linear Algebra
                </li>
              </ul>
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
