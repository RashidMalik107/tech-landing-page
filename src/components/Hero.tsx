import type { FC } from 'react'
import heroImg from '../assets/hero-img.png'
import testimonial01 from '../assets/testimonial01.png'
import testimonial02 from '../assets/testimonial02.png'

type Testimonial = {
  name: string
  quote: string
  avatarSrc: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Andrew Schultz',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
    avatarSrc: testimonial01,
  },
  {
    name: 'Andrew Schultz',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
    avatarSrc: testimonial02,
  },
  {
    name: 'Andrew Schultz',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
    avatarSrc: testimonial01,
  },
]

export const Hero: FC = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id="hero-heading" className="hero-title">
            Lorem ipsum{' '}
            <span className="hero-title-highlight">
              <span>dolor</span>
              <svg width="126" height="11" viewBox="0 0 126 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00031 8.31315C24.8119 4.51366 81.1107 -1.53456 123.813 4.66845" stroke="#F97C00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>{' '}
            sit amet yo 👋
          </h1>

          <div className="hero-testimonials" aria-label="Customer testimonials">
            {testimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${index}`} className="hero-testimonial">
                <div className="hero-testimonial-avatar">
                  <img
                    src={testimonial.avatarSrc}
                    alt={`Avatar of ${testimonial.name}`}
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                </div>
                <div className="hero-testimonial-content">
                  <header className="hero-testimonial-header">
                    <h2 className="hero-testimonial-name">{testimonial.name}</h2>
                  </header>
                  <p className="hero-testimonial-quote">{testimonial.quote}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-illustration">
            <img
              src={heroImg}
              alt="3D illustration of two people interacting with a digital coin on a smartphone."
              className="hero-illustration-image"
              width={480}
              height={540}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero

