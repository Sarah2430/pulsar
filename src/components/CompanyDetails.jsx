import star from '../assets/pulsar-star.png'
import { company, details } from '../data/company'
import Icon from './Icon'

function CompanyDetails() {
  return (
    <section className="section section--tint" id="company">
      <div className="container company">
        <div className="company__intro reveal">
          <p className="eyebrow">Company details</p>
          <h2>Registered, accountable and based in Mount Lebanon.</h2>
          <p>
            Pulsar S.A.R.L. is a limited liability company under Lebanese law, registered with the
            Commercial Register of Baabda.
          </p>
          <a href={company.mapLink} target="_blank" rel="noreferrer" className="link-arrow">
            View Khaldeh on the map <Icon name="arrow" size={16} />
          </a>
          <img src={star} alt="" className="company__star" aria-hidden="true" />
        </div>

        <dl className="details reveal">
          {details.map((item) => (
            <div className="details__row" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default CompanyDetails
