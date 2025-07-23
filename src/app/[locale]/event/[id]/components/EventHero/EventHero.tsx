import { ShowWithParsedData } from '@/shared/types/event'
import { Button } from '@/shared/ui'
import styles from './EventHero.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useEventData } from '@/shared/hooks'

interface EventHeroProps {
  event: ShowWithParsedData
}

export const EventHero = ({ event }: EventHeroProps) => {
  const t = useTranslations('EventDetails')
  const { eventDate, locationName } = useEventData(event)

  return (
    <div className={styles['event-hero']}>
      <div className={styles['event-hero__image-container']}>
        <Image
          src={event.image}
          alt={event.name}
          fill
          priority
          sizes="100vw"
          className={styles['event-hero__image']}
        />
        <div className={styles['event-hero__overlay']}>
          <div className={styles['event-hero__content']}>
            <h1 className={styles['event-hero__title']}>{event.name}</h1>
            <h4 className={styles['event-hero__date']}>{eventDate}</h4>
            <h4 className={styles['event-hero__location']}>{locationName}</h4>
            <div className={styles['event-hero__buttons']}>
              <Button size="md">{t('buyTicket')}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
