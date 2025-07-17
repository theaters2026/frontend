import { formatDate } from '@/shared/utils/date'
import styles from './SessionCard.module.scss'
import { formatPriceRange } from '@/shared/utils'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface SessionCardProps {
  session: {
    id: number
    date: string
    is_covid_free?: boolean
    location_name: string
    address: string
    min_price?: string
    max_price?: string
    count: number
  }
}

export const SessionCard = ({ session }: SessionCardProps) => {
  const t = useTranslations('EventDetails')

  return (
    <article className={styles['session-card']}>
      <div className={styles['session-card__left']}>
        <time className={styles['session-card__date']} dateTime={session.date}>
          {formatDate(session.date)}
        </time>
        <div className={styles['session-card__location']}>
          <p className={styles['session-card__address']}>{session.address}</p>
        </div>
      </div>

      <div className={styles['session-card__center']}>
        <h4 className={styles['session-card__price']}>
          {formatPriceRange(session.min_price, session.max_price)}
        </h4>
      </div>

      <div className={styles['session-card__right']}>
        <Button size="lg" className={styles['session-card__button']}>
          {t('buyTicket')}
        </Button>
      </div>
    </article>
  )
}
