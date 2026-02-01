import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2026 Jimmy Zheng. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="http://www.linkedin.com/in/jinjuezheng-368226306"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Jimmy20060109"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:j289zhen@uwaterloo.ca">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
