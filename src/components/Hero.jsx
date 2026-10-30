import star from '../assets/pulsar-star.png'
import { company, highlights } from '../data/company'
import Icon from './Icon'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">{company.tagline}</p>
          <h1>
            Engineering that keeps <span className="gradient-text">critical systems</span> running.
          </h1>
          <p className="hero__lead">
            Pulsar delivers advanced IT engineering to organisations in Lebanon and abroad, from
            database and server recovery to secure networks and custom software.
          </p>
          <div className="hero__actions">
            <a href="#services" className="btn btn--primary">
              Explore our services <Icon name="arrow" size={18} />
            </a>
            <a href={`tel:${company.phoneLink}`} className="btn btn--ghost">
              <Icon name="phone" size={18} /> {company.phone}
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <img src={star} alt="" className="hero__star" />
        </div>
      </div>

      <div className="container">
        <ul className="hero__stats">
          {highlights.map((item) => (
            <li key={item.label}>
              <span className="hero__stat-icon">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Hero
