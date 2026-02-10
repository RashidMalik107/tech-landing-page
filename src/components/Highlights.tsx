import type { FC } from 'react'
import icon01 from '../assets/icon-01.svg'
import icon02 from '../assets/icon-02.svg'
import icon03 from '../assets/icon-03.svg'

type Highlight = {
  id: string
  title: string
  description: string
  iconSrc: string
  iconAlt: string
}

const highlights: Highlight[] = [
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
    iconSrc: icon01,
    iconAlt: 'Lock icon representing secure 24/7 support',
  },
  {
    id: 'reviews',
    title: '1000+ of reviews',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
    iconSrc: icon02,
    iconAlt: 'Chart icon representing positive customer reviews',
  },
  {
    id: 'more',
    title: 'And more!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.',
    iconSrc: icon03,
    iconAlt: 'Trophy icon representing additional benefits',
  },
]

export const Highlights: FC = () => {
  return (
    <section className="highlights" aria-label="Key product benefits">
      <div className="highlights-inner">
        {highlights.map((highlight) => (
          <article key={highlight.id} className="highlight-card">
            <div className="highlight-card-icon">
              <img src={highlight.iconSrc} alt={highlight.iconAlt} width={40} height={40} loading="lazy" />
            </div>
            <div className="highlight-card-body">
              <h2 className="highlight-card-title">{highlight.title}</h2>
              <p className="highlight-card-description">{highlight.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Highlights

