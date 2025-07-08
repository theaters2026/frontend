import { Card } from '@/components/homepage/card/Card'
import styles from './page.module.scss'
import { Slider } from '@/components/homepage/slider/slider'

const cardData = {
  price: '800',
  title: 'Проповедник',
  date: '6 июля, Вс, 18:00',
  location: 'Дендрологический сад имени Г. И. Гензе',
  theater: 'Зелёный театр',
  imageSrc: '/test.png',
  imageAlt: 'Проповедник',
  ageRating: '12+',
}

const sliderEvents = [
  {
    id: '1',
    title: 'Проповедник',
    date: '6 июля, Вс, 18:00',
    location: 'Дендрологический сад имени Г. И. Гензе',
    price: '800',
    imageSrc: '/test.png',
    imageAlt: 'Постер спектакля "Проповедник"',
  },
  {
    id: '2',
    title: 'Гамлет',
    date: '7 июля, Пн, 19:30',
    location: 'Зелёный театр',
    price: '1200',
    imageSrc: '/test.png',
    imageAlt: 'Постер спектакля "Гамлет"',
  },
]

const Home = () => {
  return (
    <div className={styles['homepage']}>
      <header className={styles['homepage__header']}>
        <Slider events={sliderEvents} />
      </header>

      <main className={styles['homepage__content']}>
        <section className={styles['popular-events']}>
          <h1 className={styles['popular-events__title']}>Популярное</h1>
          <ul className={styles['popular-events__list']}>
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className={styles['popular-events__item']}>
                <Card {...cardData} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles['events-affiche']}>
          <h1 className={styles['events-affiche__title']}>Афиша</h1>
          <ul className={styles['events-affiche__list']}>
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className={styles['events-affiche__item']}>
                <Card {...cardData} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Home
