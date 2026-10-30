import { useState } from 'react'
import { company, services } from '../data/company'
import Icon from './Icon'

const contactItems = [
  { icon: 'mail', label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: 'phone', label: 'Phone', value: company.phone, href: `tel:${company.phoneLink}` },
  { icon: 'globe', label: 'Web', value: company.website, href: company.websiteLink },
  { icon: 'pin', label: 'Head office', value: company.address, href: company.mapLink },
]

const emptyForm = { name: '', email: '', organisation: '', service: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  // There is no server yet, so the form opens the visitor's email app
  // with the message already filled in, addressed to Pulsar.
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = `Website enquiry${form.service ? ` — ${form.service}` : ''}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.organisation && `Organisation: ${form.organisation}`,
      '',
      form.message,
    ]
      .filter((line) => line !== '' && line !== false)
      .join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section section--tint" id="contact">
      <div className="container contact">
        <div className="contact__info reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let’s talk about your systems.</h2>
          <p>
            Tell us what you are working on, or what has stopped working. We will get back to you
            quickly — and for critical incidents, call us any time.
          </p>

          <ul className="contact__list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span className="icon-badge icon-badge--sm">
                  <Icon name={item.icon} size={20} />
                </span>
                <div>
                  <span className="contact__label">{item.label}</span>
                  <a
                    href={item.href}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact__form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Full name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </label>
          </div>
          <label>
            <span>
              Organisation <span className="optional">(optional)</span>
            </span>
            <input name="organisation" value={form.organisation} onChange={handleChange} />
          </label>
          <label>
            Service you need
            <select name="service" value={form.service} onChange={handleChange}>
              <option value="">Select a service…</option>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
              <option>Critical incident — urgent</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            Send message <Icon name="send" size={18} />
          </button>
          <p className="form-note">This opens your email app with your message ready to send.</p>
        </form>
      </div>
    </section>
  )
}

export default Contact
