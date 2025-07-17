import { ShowItem } from '@/shared/types/event'
import styles from './EventSessions.module.scss'
import { SessionCard } from '../index'
import { useTranslations } from 'next-intl'
import { useEventSessions } from '@/shared/hooks'

interface EventSessionsProps {
  event: ShowItem
}

export const EventSessions = ({ event }: EventSessionsProps) => {
  const t = useTranslations('EventDetails')
  const { hasSessions, sessionsToShow } = useEventSessions(event)

  if (!hasSessions) return null

  return (
    <section className={styles['event-sessions']}>
      <h2 className={styles['event-sessions__title']}>
        {t('upcomingSessions')}
      </h2>
      <div className={styles['event-sessions__list']}>
        {sessionsToShow.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </section>
  )
}
