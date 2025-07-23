'use client'
import Image from 'next/image'
import { Button } from '@/shared/ui'
import styles from './EventCard.module.scss'
import { UI_CONSTANTS } from '@/shared/constants'
import {
  useNavigation,
  useEventCard,
  useTicketWidget,
  useResponsiveImageSize,
} from '@/shared/hooks'
import { useTranslations } from 'next-intl'
import { EventCardData } from '@/shared/types'
import { ticketService } from '@/core/services'

interface EventCardProps {
  eventData: EventCardData
}

export const EventCard = ({ eventData }: EventCardProps) => {
  const { navigateToEvent } = useNavigation()
  const { openSchedule, isLoaded } = useTicketWidget()
  const imageSize = useResponsiveImageSize()
  const t = useTranslations('EventCard')

  const { localizedLocation, localizedDate, localizedTheater } = useEventCard({
    date: eventData.date,
    location: eventData.location,
    theater: eventData.theater,
  })

  const handleDetailsClick = () => {
    navigateToEvent(eventData.id)
  }

  const handleBuyTicketClick = () => {
    ticketService.purchaseTicket(eventData, openSchedule)
  }

  return (
    <article className={styles['card']}>
      <header className={styles['card__header']}>
        <figure>
          <Image
            src={eventData.imageSrc}
            alt={eventData.imageAlt}
            width={imageSize.WIDTH}
            height={imageSize.HEIGHT}
            priority
            className={styles['card__image']}
          />
        </figure>
        <span className={styles['card__price']}>
          {eventData.price} {UI_CONSTANTS.CURRENCY_SYMBOL}
        </span>
        <span className={styles['card__age-rating']}>
          {eventData.ageRating}
        </span>
      </header>
      <div className={styles['card__content']}>
        <h3 className={styles['card__title']}>{eventData.title}</h3>
        <div className={styles['card__meta']}>
          <div
            className={`${styles['meta__column']} ${styles['meta__column--left']}`}
          >
            <span className={`${styles['card__theater']} text--small`}>
              {localizedTheater}
            </span>
            <time
              className={`${styles['card__date']} text--small`}
              dateTime={localizedDate}
            >
              {localizedDate}
            </time>
          </div>
          <div
            className={`${styles['meta__column']} ${styles['meta__column--right']}`}
          >
            <span className={`${styles['card__location']} text--small`}>
              {localizedLocation}
            </span>
          </div>
        </div>
      </div>
      <footer className={styles['card__footer']}>
        <Button
          onClick={handleDetailsClick}
          className={styles['card__button']}
          size="md"
        >
          {t('details')}
        </Button>
        <Button
          className={styles['card__button']}
          size="md"
          onClick={handleBuyTicketClick}
          disabled={!isLoaded}
        >
          {t('buyTicket')}
        </Button>
      </footer>
    </article>
  )
}
