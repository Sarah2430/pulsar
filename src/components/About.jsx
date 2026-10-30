import { company, pillars } from '../data/company'
import Icon from './Icon'

function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__text reveal">
          <p className="eyebrow">About Pulsar</p>
          <h2>A Lebanese technology company built for the moments that matter.</h2>
          <p className="about__lead">{company.description}</p>
          <div className="about__meta">
            <span>
              <Icon name="building" size={18} /> Founded 2025
            </span>
            <span>
              <Icon name="pin" size={18} /> Khaldeh, Mount Lebanon
            </span>
          </div>
        </div>

        <div className="about__pillars">
          {pillars.map((pillar) => (
            <article className="pillar reveal" key={pillar.title}>
              <span className="icon-badge">
                <Icon name={pillar.icon} />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
