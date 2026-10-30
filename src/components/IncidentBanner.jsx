import { company } from '../data/company'
import Icon from './Icon'

function IncidentBanner() {
  return (
    <section className="incident">
      <div className="container">
        <div className="incident__box reveal">
          <div className="incident__pulse" aria-hidden="true">
            <Icon name="zap" size={30} />
          </div>
          <div className="incident__text">
            <h2>Facing a critical incident right now?</h2>
            <p>
              Failing database, server down, lost admin access or a broken VPN — our engineers
              respond around the clock, 7 days a week.
            </p>
          </div>
          <div className="incident__actions">
            <a href={`tel:${company.phoneLink}`} className="btn btn--white">
              <Icon name="phone" size={18} /> Call {company.phone}
            </a>
            <a href={`mailto:${company.email}?subject=Critical%20incident`} className="btn btn--outline-white">
              <Icon name="mail" size={18} /> Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IncidentBanner
