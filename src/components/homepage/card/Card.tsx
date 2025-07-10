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
  const getDateTimeValue = (dateStr: string): string => {
    try {
      if (dateStr.includes('.')) {
        const [datePart] = dateStr.split(' в ')
        const [day, month, year] = datePart.split('.')
        return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
          .toISOString()
          .split('T')[0]
      }
      return new Date(dateStr).toISOString().split('T')[0]
    } catch {
      return dateStr
    }
  }

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
      <div className={styles['card__content']}>
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
              dateTime={getDateTimeValue(date)}
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
      </div>
      <footer className={styles['card__footer']}>
        <Button className={styles['card__button']} size="md">
          Купить билет
        </Button>
      </footer>
    </article>
  )
}
