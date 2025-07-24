'use client'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import { CreateEventFormValues } from '@/shared/schemas/createEventSchema'
import { formatDateAndTime } from '@/shared/utils'
import { CURRENCY, AGE_RATINGS } from '@/shared/constants'
import styles from './EventPreviewCard.module.scss'

interface EventPreviewCardProps {
  formData: Partial<CreateEventFormValues>
  imagePreview: string | null
}

export const EventPreviewCard = ({
  formData,
  imagePreview,
}: EventPreviewCardProps) => {
  const t = useTranslations()

  const { combined: formattedDateTime } = formatDateAndTime(
    formData.eventDate,
    formData.eventTime
  )

  const defaultAgeRating = AGE_RATINGS[0].value

  return (
    <article className={styles.previewCard}>
      <header className={styles.previewCard__header}>
        <figure className={styles.previewCard__imageWrapper}>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className={styles.previewCard__image}
            />
          ) : (
            <div className={styles.previewCard__placeholder}>
              <span>{t('CreateEvent.preview.imageNotSelected')}</span>
            </div>
          )}
        </figure>
        <span className={styles.previewCard__price}>
          {formData.ticketPrice || CURRENCY.DEFAULT_PRICE} {CURRENCY.SYMBOL}
        </span>
        <span className={styles.previewCard__ageRating}>
          {formData.ageRating || defaultAgeRating}
        </span>
      </header>

      <div className={styles.previewCard__content}>
        <h3 className={styles.previewCard__title}>
          {formData.eventName || t('CreateEvent.preview.eventNamePlaceholder')}
        </h3>
        <div className={styles.previewCard__meta}>
          <div className={styles.previewCard__metaColumn}>
            <span className={styles.previewCard__theater}>
              {formData.theaterName ||
                t('CreateEvent.preview.theaterNamePlaceholder')}
            </span>
            <time className={styles.previewCard__date}>
              {formattedDateTime || t('CreateEvent.preview.dateNotSpecified')}
            </time>
          </div>
          <div className={styles.previewCard__metaColumn}>
            <span className={styles.previewCard__location}>
              {formData.venue || t('CreateEvent.preview.venuePlaceholder')}
            </span>
          </div>
        </div>
      </div>

      <footer className={styles.previewCard__footer}>
        <Button className={styles.previewCard__button} size="md" disabled>
          {t('EventCard.details')}
        </Button>
        <Button className={styles.previewCard__button} size="md" disabled>
          {t('EventCard.buyTicket')}
        </Button>
      </footer>
    </article>
  )
}
