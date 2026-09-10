import { useState } from 'react'

const EMPTY_FORM = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const updateField = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
    if (serverError) setServerError('')
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'A valid email is required.'
    if (form.message.trim().length < 10) next.message = 'Message must be at least 10 characters.'
    return next
  }

  const isNameFilled = form.name.trim().length > 0
  const isEmailValid = /^\S+@\S+\.\S+$/.test(form.email)
  const isMessageFilled = form.message.trim().length > 0
  const canSubmit = isNameFilled && isEmailValid && isMessageFilled

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }
    setSubmitting(true)
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setServerError(data.error || 'Submission failed.')
        setSubmitting(false)
        return
      }
      setSubmitted(true)
      setForm(EMPTY_FORM)
    } catch (err) {
      setServerError('Network error. Please check that the backend is running.')
    }
    setSubmitting(false)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {submitted ? (
        <p className="form-success" role="status">
          Thanks, {form.name}! Your message has been sent.
        </p>
      ) : (
        <>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={updateField}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              required
            />
            {errors.name && (
              <span id="name-error" className="field-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              required
            />
            {errors.email && (
              <span id="email-error" className="field-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={updateField}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              required
            />
            {errors.message && (
              <span id="message-error" className="field-error">
                {errors.message}
              </span>
            )}
          </div>

          {serverError && (
            <p className="field-error" role="alert">{serverError}</p>
          )}
          <br />

          <button
            className="button button-primary"
            type="submit"
            disabled={!canSubmit || submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </>
      )}
    </form>
  )
}
