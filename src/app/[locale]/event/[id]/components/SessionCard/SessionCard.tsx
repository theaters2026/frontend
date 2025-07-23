import React from 'react'
import { SessionCardData } from '@/shared/types/event'
import { Button } from '@/shared/ui'
import {
  formatDate,
  prepareTicketData,
  validateTicketData,
} from '@/shared/utils'
import { useTranslations } from 'next-intl'
import { useTicketWidget } from '@/shared/hooks'
import styles from './SessionCard.module.scss'

interface SessionCardProps {
  sessionData: SessionCardData
}

export const SessionCard: React.FC<SessionCardProps> = ({ sessionData }) => {
  const t = useTranslations('EventDetails')
  const { openSchedule } = useTicketWidget()

  const handleBuyTicket = () => {
    const ticketData = prepareTicketData(sessionData)

    if (validateTicketData(ticketData)) {
      openSchedule(ticketData.eventId, ticketData.cityId, ticketData.showTypeId)
    } else {
      console.error('Missing required parameters for openSchedule:', {
        sessionData,
      })
    }
  }

  return (
    <div className={styles['session-card']}>
      <div className={styles['session-card__info']}>
        <div className={styles['session-card__date']}>
          {sessionData.date
            ? formatDate(sessionData.date)
            : t('dateNotSpecified')}
        </div>
        <div className={styles['session-card__location']}>
          {sessionData.location || t('locationNotSpecified')}
        </div>
        <div className={styles['session-card__address']}>
          {sessionData.address || t('addressNotSpecified')}
        </div>
      </div>
      <div className={styles['session-card__price']}>
        {sessionData.minPrice || '0'} - {sessionData.maxPrice || '0'}{' '}
        {t('currency')}
      </div>
      <div className={styles['session-card__actions']}>
        <Button onClick={handleBuyTicket} size="md">
          {t('buyTicket')}
        </Button>
      </div>
    </div>
  )
}
