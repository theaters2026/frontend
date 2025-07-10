'use client'

import styles from './slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export type SliderType = {
  title: string
  date: string
  location: string
  price: string
  imageSrc: string
  imageAlt: string
}

interface SliderProps {
  events: SliderType[]
}

export const Slider = ({ events }: SliderProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className={styles['slider']} />
  }

  return (
    <Swiper
      className={styles['slider']}
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {events.map((item, index) => (
        <SwiperSlide key={index} className={styles['slider__slide']}>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            priority={index === 0}
            quality={90}
            sizes="100vw"
          />
          <div className={styles['slider__slide__info']}>
            <h1>{item.title}</h1>
            <h2>{item.date}</h2>
            <h2>{item.location}</h2>
          </div>
          <div className={styles['slider__slide__price']}>
            <h3>{item.price} р.</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}