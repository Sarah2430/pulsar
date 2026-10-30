import { activities } from '../data/company'
import Icon from './Icon'

function Activities() {
  return (
    <section className="section" id="activities">
      <div className="container">
        <div className="section__header reveal">
          <p className="eyebrow">Areas of activity</p>
          <h2>Beyond engineering: a complete technology partner.</h2>
          <p>
            Pulsar carries out general trade in Lebanon and abroad, specialising in the following
            areas.
          </p>
        </div>

        <div className="activities">
          {activities.map((activity) => (
            <article className="activity reveal" key={activity.title}>
              <span className="activity__icon">
                <Icon name={activity.icon} size={22} />
              </span>
              <div>
                <h3>{activity.title}</h3>
                <p>{activity.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
