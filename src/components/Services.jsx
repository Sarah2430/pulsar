import { services } from '../data/company'
import Icon from './Icon'

function Services() {
  return (
    <section className="section section--tint" id="services">
      <div className="container">
        <div className="section__header reveal">
          <p className="eyebrow">Services</p>
          <h2>Ten specialist service lines, one engineering team.</h2>
          <p>
            From emergency recovery to long-term infrastructure, we cover the full lifecycle of the
            systems your organisation depends on.
          </p>
        </div>

        <div className="services">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.title}>
              <div className="service-card__top">
                <span className="icon-badge">
                  <Icon name={service.icon} />
                </span>
                <span className="service-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}

          <article className="service-cta reveal">
            <h3>Not sure which service you need?</h3>
            <p>
              Describe the problem and we will point you to the right engineer — whether it is an
              emergency or a long-term project.
            </p>
            <a href="#contact" className="btn btn--white">
              Talk to our team <Icon name="arrow" size={18} />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
