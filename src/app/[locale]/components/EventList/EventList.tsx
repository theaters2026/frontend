import { EventCard } from '../'
import { EventCardData } from '@/shared/types'
import styles from './EventList.module.scss'

interface EventsListProps {
  events: EventCardData[]
  keyPrefix: string
  className?: string
}

export const EventList = ({
  events,
  keyPrefix,
  className,
}: EventsListProps) => {
  return (
    <ul className={`${styles['events-list']} ${className || ''}`}>
      {events.map((event, index) => (
        <li
          key={`${keyPrefix}-${event.externalId}`}
          className={styles['events-list__item']}
        >
          <EventCard eventData={event} />
        </li>
      ))}
    </ul>
  )
}
