import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <section className="section-shell" id="contact">
      <SectionHeading eyebrow="Contact" title="Send a message" />

      <div className="contact-grid">
        <article className="panel contact-panel">
          <p>
            I am open to internship discussions, academic collaborations, and
            project feedback. Use the form to reach out with a short message and
            I will respond as soon as possible.
          </p>

          <address>
            <p>NIT Warangal, Telangana, India</p>
            <p>
              <a href="mailto:nitin211206@gmail.com">nitin211206@gmail.com</a>
            </p>
          </address>
        </article>

        <ContactForm />
      </div>
    </section>
  )
}