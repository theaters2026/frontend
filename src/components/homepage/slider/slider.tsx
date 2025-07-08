'use client'

import styles from './slider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

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

export const Slider = ( {events}: SliderProps) => {
  return (
    <div>
      <Swiper 
        className={styles['slider']}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {events.map((item, index) =>
          <SwiperSlide
              className={styles['slider__slide']}
          > 
            <Image 
              src={item.imageSrc}
              alt={item.imageAlt}
              width={100}
              height={100}
              className={styles['slider__slide__image']}
            /> 
            <div className={styles['slider__slide__info']}>
              <h1> {item.title}</h1>
              <h2> {item.date}</h2>
              <h2> {item.location}</h2>
            </div>
            <div className={styles['slider__slide__price']}>
              <h3> {item.price} p. </h3>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}
