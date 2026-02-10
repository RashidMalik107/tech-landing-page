import './App.css'
import { useState } from 'react'
import logoImage from './assets/logo.png'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { TrustedBy } from './components/TrustedBy'
import { Registration } from './components/Registration'
import { Footer } from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="page-header">
        <a href="#top" className="page-logo" aria-label="Company home">
          <img src={logoImage} alt="2G finance logo" className="page-logo-image" />
        </a>

        <button
          type="button"
          className="page-menu-toggle"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="page-menu-toggle-bar" />
          <span className="page-menu-toggle-bar" />
          <span className="page-menu-toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={isMenuOpen ? 'page-nav page-nav-open' : 'page-nav'}
          aria-label="Primary"
        >
          <a href="#about">About us</a>
          <a href="#registration">Registration</a>
          <a href="#careers">Careers</a>
          <button type="button" className="page-cta">
            Contact us
          </button>
        </nav>
      </header>

      <main>
        <Hero />
        <Highlights />
        <TrustedBy />
        <Registration />
      </main>

      <Footer />
    </div>
  )
}

export default App
