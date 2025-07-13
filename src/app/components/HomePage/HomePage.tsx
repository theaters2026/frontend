'use client'

import { useAppDispatch, useAppSelector } from '@/core/store/utils/storeUtils'
import { selectEventsData } from '@/core/store/events/selectors'
import { useEffect } from 'react'
import { fetchEventData } from '@/core/store/events/actions'
import { formatDate, formatDateTime, getImageUrl } from '@/shared/lib/utils'
import { EventCard, EventsSlider } from '@/app/components'
import styles from './HomePage.module.scss'
import { Event } from '@/shared/types/events'

export const HomePage = () => {
  const dispatch = useAppDispatch()
  const events = useAppSelector(selectEventsData)
  const popularEvents = events?.slice(0, 3) || []

  useEffect(() => {
    dispatch(fetchEventData())
  }, [dispatch])

  const sliderEvents =
    events?.slice(0, 5).map((event: Event) => ({
      title: event.name,
      date: formatDateTime(event.description.date),
      location: event.description.address,
      price: event.description.price.toString(),
      imageSrc: getImageUrl(event.media.url),
      imageAlt: event.name,
    })) || []

  return (
    <div className={styles['homepage']}>
      <header className={styles['homepage__header']}>
        <EventsSlider events={sliderEvents} />
      </header>

      <main className={styles['homepage__content']}>
        <section className={styles['popular-events']}>
          <h1 className={styles['popular-events__title']}>Популярное</h1>
          <ul className={styles['popular-events__list']}>
            {popularEvents.map((event: Event) => (
              <li
                key={event.description.id}
                className={styles['popular-events__item']}
              >
                <EventCard
                  title={event.name}
                  price={event.description.price.toString()}
                  date={formatDate(event.description.date)}
                  location={event.description.address}
                  theater={event.description.org_name}
                  imageSrc={getImageUrl(event.media.url)}
                  imageAlt={event.name}
                  ageRating={`${event.description.age.toString()}+`}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles['events-affiche']}>
          <h1 className={styles['events-affiche__title']}>Афиша</h1>
          <ul className={styles['events-affiche__list']}>
            {events?.map((event: Event) => (
              <li
                key={event.description.id}
                className={styles['events-affiche__item']}
              >
                <EventCard
                  title={event.name}
                  price={event.description.price.toString()}
                  date={formatDate(event.description.date)}
                  location={event.description.address}
                  theater={event.description.org_name}
                  imageSrc={getImageUrl(event.media.url)}
                  imageAlt={event.name}
                  ageRating={`${event.description.age.toString()}+`}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
