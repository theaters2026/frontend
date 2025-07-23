import { ShowWithParsedData } from '@/shared/types/event'
import styles from './EventInfo.module.scss'
import { useTranslations } from 'next-intl'
import { useEventData } from '@/shared/hooks'

interface EventInfoProps {
  event: ShowWithParsedData
}

export const EventInfo = ({ event }: EventInfoProps) => {
  const t = useTranslations('EventDetails')
  const { locationName } = useEventData(event)

  return (
    <div className={styles['event-info']}>
      <h2 className={styles['event-info__title']}>{t('detailInfo')}</h2>
      <div className={styles['event-info__content']}>
        {event.duration && (
          <h4 className={styles['event-info__text']}>
            {`${event.duration} ${t('minutes')}`}
          </h4>
        )}
        <h4 className={styles['event-info__text']}>{locationName}</h4>
        <h4 className={styles['event-info__text']}>{event.ageLimit}+</h4>
      </div>
      <p className={styles['event-info__description']}>{event.shortInfo}</p>
    </div>
  )
}
