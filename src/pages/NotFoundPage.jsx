import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="section-shell not-found">
      <h1>Page not found</h1>
      <p className="hero-text">
        The page you are looking for does not exist or has moved.
      </p>
      <p className="inline-link">
        <Link className="button button-primary" to="/">
          Back to Home
        </Link>
      </p>
    </section>
  )
}