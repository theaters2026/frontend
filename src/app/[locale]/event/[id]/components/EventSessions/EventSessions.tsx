import { ShowWithParsedData } from '@/shared/types/event'
import styles from './EventSessions.module.scss'
import { SessionCard } from '../index'
import { useTranslations } from 'next-intl'
import { useEventSessions } from '@/shared/hooks'
import { mapSessionsToSessionCardData } from '@/shared/utils'

interface EventSessionsProps {
  event: ShowWithParsedData
}

export const EventSessions = ({ event }: EventSessionsProps) => {
  const t = useTranslations('EventDetails')
  const { hasSessions, sessionsToShow } = useEventSessions(event)

  if (!hasSessions) return null

  const sessionCardDataList = mapSessionsToSessionCardData(
    sessionsToShow,
    event,
    {
      unknownLocationText: t('locationNotSpecified'),
      unknownAddressText: t('addressNotSpecified'),
    }
  )

  return (
    <section className={styles['event-sessions']}>
      <h2 className={styles['event-sessions__title']}>
        {t('upcomingSessions')}
      </h2>
      <div className={styles['event-sessions__list']}>
        {sessionCardDataList.map((sessionData) => (
          <SessionCard key={sessionData.id} sessionData={sessionData} />
        ))}
      </div>
    </section>
  )
}
