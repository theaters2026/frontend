'use client'
import { useEventDetail, useNavigation, useEventParams } from '@/shared/hooks'
import styles from './EventDetailPage.module.scss'
import { EventHeader, EventHero, EventInfo, EventSessions } from '../index'
import { EventErrorState } from '../index'
import { mapEventToSessionCardData } from '@/shared/utils'
import { useTranslations } from 'next-intl'

export const EventDetailPage = () => {
  const { navigateBack } = useNavigation()
  const { eventId } = useEventParams()
  const { event, error } = useEventDetail(eventId)
  const t = useTranslations('EventDetails')

  if (error || !event) {
    return (
      <div className={styles['event-detail-page']}>
        <EventErrorState error={error} onBack={navigateBack} />
      </div>
    )
  }

  const firstSession = event.events?.[0]

  if (!firstSession) {
    return (
      <div className={styles['event-detail-page']}>
        <EventErrorState error="No sessions available" onBack={navigateBack} />
      </div>
    )
  }

  const sessionCardData = mapEventToSessionCardData(firstSession, event, {
    unknownLocationText: t('locationNotSpecified'),
    unknownAddressText: t('addressNotSpecified'),
  })

  return (
    <div className={styles['event-detail-page']}>
      <div className={styles['event-detail-page__container']}>
        <article className={styles['event-detail']}>
          <EventHeader />
          <div className={styles['event-detail__content']}>
            <EventHero eventData={sessionCardData} />
            <div className={styles['event-detail__layout']}>
              <div className={styles['event-detail__main']}>
                <EventInfo event={event} />
              </div>
              <div className={styles['event-detail__sidebar']}>
                <EventSessions event={event} />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
