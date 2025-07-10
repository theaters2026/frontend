'use client'
import { Card } from '@/components/homepage/card/Card'
import styles from './page.module.scss'
import { Slider } from '@/components/homepage/slider/slider'
import { useAppDispatch, useAppSelector } from '@/store/utils/storeUtils'
import { fetchEventData } from '@/store/events/actions'
import { useEffect } from 'react'
import { selectEventsData } from '@/store/events/selectors'
import { formatDate, formatDateTime, getImageUrl } from '@/lib/utils'

const Home = () => {
  const dispatch = useAppDispatch()
  const events = useAppSelector(selectEventsData)
  const popularEvents = events?.slice(0, 3) || []

  useEffect(() => {
    dispatch(fetchEventData())
  }, [])

  const sliderEvents =
    events?.slice(0, 5).map((event) => ({
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
        <Slider events={sliderEvents} />
      </header>

      <main className={styles['homepage__content']}>
        <section className={styles['popular-events']}>
          <h1 className={styles['popular-events__title']}>Популярное</h1>
          <ul className={styles['popular-events__list']}>
            {popularEvents.map((event) => (
              <li
                key={event.description.id}
                className={styles['popular-events__item']}
              >
                <Card
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
            {events?.map((event) => (
              <li
                key={event.description.id}
                className={styles['events-affiche__item']}
              >
                <Card
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

export default Home
