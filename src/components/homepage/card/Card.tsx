import Image from 'next/image'
import { Button } from '@/components/ui/button'
import styles from './Card.module.scss'

interface CardProps {
  price: string
  title: string
  date: string
  location: string
  theater: string
  imageSrc: string
  imageAlt: string
  ageRating: string
}

export const Card = ({
  price,
  title,
  date,
  location,
  theater,
  ageRating,
  imageSrc,
  imageAlt,
}: CardProps) => {
  return (
    <article className={styles['card']}>
      <header className={styles['card__header']}>
        <figure>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={399}
            height={225}
            className={styles['card__image']}
          />
        </figure>
        <span className={styles['card__price']}>{price} р.</span>
        <span className={styles['card__age-rating']}>{ageRating}</span>
      </header>
      <main className={styles['card__content']}>
        <h3 className={styles['card__title']}>{title}</h3>
        <div className={styles['card__meta']}>
          <div
            className={`${styles['meta__column']} ${styles['meta__column--left']}`}
          >
            <span className={`${styles['card__theater']} text--small`}>
              {theater}
            </span>
            <time
              className={`${styles['card__date']} text--small`}
              dateTime={date}
            >
              {date}
            </time>
          </div>
          <div
            className={`${styles['meta__column']} ${styles['meta__column--right']}`}
          >
            <span className={`${styles['card__location']} text--small`}>
              {location}
            </span>
          </div>
        </div>
      </main>
      <footer className={styles['card__footer']}>
        <Button className={styles['card__button']} size="md">
          Купить билет
        </Button>
      </footer>
    </article>
  )
}
