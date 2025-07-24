import { SessionCardData } from '@/shared/types/event'
import { Button } from '@/shared/ui'
import styles from './EventHero.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useTicketWidget } from '@/shared/hooks'
import {
  formatDate,
  prepareTicketData,
  validateTicketData,
} from '@/shared/utils'
import { useCallback } from 'react'

interface EventHeroProps {
  eventData: SessionCardData
}

export const EventHero = ({ eventData }: EventHeroProps) => {
  const t = useTranslations('EventDetails')
  const { openSchedule, isLoaded } = useTicketWidget()

  const handleBuyTicket = useCallback(() => {
    const ticketData = prepareTicketData(eventData)

    if (validateTicketData(ticketData)) {
      openSchedule(ticketData.eventId, ticketData.cityId, ticketData.showTypeId)
    } else {
      console.error('Missing required parameters for openSchedule:', {
        sessionData: eventData,
      })
    }
  }, [eventData, openSchedule])

  return (
    <div className={styles['event-hero']}>
      <div className={styles['event-hero__image-container']}>
        <Image
          src={eventData.imageSrc || ''}
          alt={eventData.imageAlt || eventData.title}
          fill
          priority
          sizes="100vw"
          className={styles['event-hero__image']}
        />
        <div className={styles['event-hero__overlay']}>
          <div className={styles['event-hero__content']}>
            <h1 className={styles['event-hero__title']}>{eventData.title}</h1>
            <h4 className={styles['event-hero__date']}>
              {eventData.date
                ? formatDate(eventData.date)
                : t('dateNotSpecified')}
            </h4>
            <h4 className={styles['event-hero__location']}>
              {eventData.location || t('locationNotSpecified')}
            </h4>
            <div className={styles['event-hero__buttons']}>
              <Button onClick={handleBuyTicket} size="md" disabled={!isLoaded}>
                {t('buyTicket')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
