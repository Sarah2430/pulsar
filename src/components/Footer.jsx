import logoWhite from '../assets/pulsar-logo-white.png'
import { company, navLinks } from '../data/company'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logoWhite} alt="Pulsar S.A.R.L." />
          <p>{company.tagline}. Critical-incident response, available around the clock.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={`tel:${company.phoneLink}`}>{company.phone}</a>
            </li>
            <li>
              <a href={company.websiteLink} target="_blank" rel="noreferrer">
                {company.website}
              </a>
            </li>
            <li>Khaldeh, Mount Lebanon, Lebanon</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} {company.name} All rights reserved.</span>
        <span>Commercial Register of Baabda — No. 2077982</span>
      </div>
    </footer>
  )
}

export default Footer
