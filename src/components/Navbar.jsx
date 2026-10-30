import { useEffect, useState } from 'react'
import logo from '../assets/pulsar-logo.png'
import { navLinks } from '../data/company'
import Icon from './Icon'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a shadow to the bar once the page has been scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" onClick={closeMenu}>
          <img src={logo} alt="Pulsar S.A.R.L." />
        </a>

        <nav className={`navbar__links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary navbar__cta" onClick={closeMenu}>
            Get in touch
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
