'use client'

import styles from './HomePage.module.scss'
import { useEvents } from '@/shared/hooks'
import { EventList } from '../index'
import { useTranslations } from 'next-intl'

export const HomePage = () => {
  const { popularEvents, allEvents } = useEvents()
  const t = useTranslations('HomePage')

  return (
    <div className={styles['homepage']}>
      <header className={styles['homepage__header']} />

      <main className={styles['homepage__content']}>
        <section className={styles['popular-events']}>
          <h1 className={styles['popular-events__title']}>
            {t('sections.popular.title')}
          </h1>
          <EventList
            events={popularEvents}
            keyPrefix="popular"
            className={styles['popular-events__list']}
          />
        </section>

        <section className={styles['events-affiche']}>
          <h1 className={styles['events-affiche__title']}>
            {t('sections.affiche.title')}
          </h1>
          <EventList
            events={allEvents}
            keyPrefix="affiche"
            className={styles['events-affiche__list']}
          />
        </section>
      </main>
    </div>
  )
}
