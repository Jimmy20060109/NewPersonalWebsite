import { Link, useNavigate } from 'react-router-dom'
import './ResumeCard.css'

const ResumeCard = () => {

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Link to="/resume" className="resume-card">
      <div className="resume-content">
        <div className="resume-text">
          <h2 className="resume-title">My Resume</h2>
          <p className="resume-name">Jimmy Zheng</p>
          <button
            className="resume-button"
            onClick={handleDownload}
          >
            View & download
          </button>
        </div>
        <div className="resume-decoration">
          <div className="plant-silhouette"></div>
        </div>
      </div>
    </Link>
  )
}

export default ResumeCard
