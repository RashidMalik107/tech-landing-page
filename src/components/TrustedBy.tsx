import type { FC } from 'react'
import { useEffect, useState } from 'react'
import slider01 from '../assets/slider01.png'
import slider02 from '../assets/slider02.png'
import slider03 from '../assets/slider03.png'

type Logo = {
  id: string
  name: string
  src: string
}

const logos: Logo[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    src: slider02,
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    src: slider03,
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    src: slider01,
  },
]

const SLIDE_INTERVAL_MS = 4500

type Direction = 'next' | 'prev'

export const TrustedBy: FC = () => {
  // Keep the middle logo (Coca-Cola) active by default
  const [currentIndex, setCurrentIndex] = useState(1)
  const [direction, setDirection] = useState<Direction>('next')

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDirection('next')
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setDirection('prev')
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length)
  }

  const goToNext = () => {
    setDirection('next')
    setCurrentIndex((prev) => (prev + 1) % logos.length)
  }

  const visibleIndices = [
    (currentIndex - 1 + logos.length) % logos.length,
    currentIndex,
    (currentIndex + 1) % logos.length,
  ]

  return (
    <section className="trusted-by" aria-labelledby="trusted-by-heading">
      <div className="trusted-by-inner">
        <header className="trusted-by-header">
          <div className="trusted-by-title-wrap">
            <h2 id="trusted-by-heading" className="trusted-by-title">
              Trusted by
            </h2>
            <svg
              className="trusted-by-underline"
              width="209"
              height="10"
              viewBox="0 0 209 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M2.00013 7.10887C40.164 3.66946 134.405 -1.48884 206.058 5.39318"
                stroke="#F97C00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="trusted-by-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
          </p>
        </header>

        <div className="trusted-by-slider" role="region" aria-roledescription="carousel">
          <div className="trusted-by-viewport" aria-live="polite">
            <div
              id="trusted-by-track"
              className={
                direction === 'next'
                  ? 'trusted-by-track trusted-by-track--next'
                  : 'trusted-by-track trusted-by-track--prev'
              }
            >
              {visibleIndices.map((logoIndex, positionIndex) => {
                const logo = logos[logoIndex]
                const isCenter = positionIndex === 1
                const slideClassName = isCenter
                  ? 'trusted-by-slide trusted-by-slide--center'
                  : 'trusted-by-slide trusted-by-slide--side'

                return (
                  <figure
                    key={`${logo.id}-${logoIndex}`}
                    className={slideClassName}
                    role="group"
                    aria-label={logo.name}
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="trusted-by-logo"
                      loading="lazy"
                    />
                  </figure>
                )
              })}
            </div>
          </div>

          <div className="trusted-by-controls">
            <button
              type="button"
              className="trusted-by-arrow trusted-by-arrow--prev"
              onClick={goToPrevious}
              aria-label="Previous company"
              aria-controls="trusted-by-track"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L1 9L9 17" stroke="#F97C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="trusted-by-arrow trusted-by-arrow--next"
              onClick={goToNext}
              aria-label="Next company"
              aria-controls="trusted-by-track"
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9L1 17" stroke="#F97C00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy

