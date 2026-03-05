import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <section id="not-found" className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="not-found-link">
          Go Back Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
