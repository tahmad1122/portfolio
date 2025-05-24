import React from 'react'
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <h3 className="footer-title">Your Name</h3> */}
        <div className="footer-links">
          <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Tauseef Ahmad. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer