import type { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Footer">
          <a href="#faqs" className="footer-link">
            FAQs
          </a>
          <a href="#privacy" className="footer-link">
            Privacy Policy
          </a>
          <a href="#other" className="footer-link">
            Other
          </a>
          <button type="button" className="footer-cta">
            Contact us
          </button>
        </nav>

        <p className="footer-copy">Copyright © 2024 i2c Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

