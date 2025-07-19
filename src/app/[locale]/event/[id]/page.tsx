'use client'
import { useEventDetail, useNavigation, useEventParams } from '@/shared/hooks'
import { Button } from '@/shared/ui'
import styles from './page.module.scss'
import { EventHeader, EventHero, EventInfo, EventSessions } from './components/'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

export default function EventDetailsPage() {
  const { navigateBack } = useNavigation()
  const t = useTranslations('EventDetails')
  const { eventId } = useEventParams()
  const { event, loading, error } = useEventDetail(eventId)

  if (loading) {
    return (
      <div className={styles['event-detail-page']}>
        <div className={styles['event-detail-page__loading']}>
          <div className={styles['loading']}>
            <h3>{t('loading')}</h3>
            <p>Loading event ID: {eventId}</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className={styles['event-detail-page']}>
        <div className={styles['event-detail-page__error']}>
          <div className={styles['error']}>
            <h3>{error || t('notFound')}</h3>
          </div>
          <div className={styles['error__actions']}>
            <Button onClick={navigateBack} size="md">
              {t('back')}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles['event-detail-page']}>
      <div className={styles['event-detail-page__container']}>
        <article className={styles['event-detail']}>
          <EventHeader />

          <div className={styles['event-detail__content']}>
            <EventHero event={event} />
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
