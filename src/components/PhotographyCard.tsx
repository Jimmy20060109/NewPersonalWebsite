import { Link } from 'react-router-dom'
import './PhotographyCard.css'

const PhotographyCard = () => {
  return (
    <Link to="/photography" className="photography-card">
      <div className="photography-card-content">
        <p className="photography-card-eyebrow">Creative Work</p>
        <h2 className="photography-card-title">Photography</h2>
        <p className="photography-card-subtitle">Street, portrait, and travel moments.</p>
        <span className="photography-card-button">View Photos</span>
      </div>
    </Link>
  )
}

export default PhotographyCard
