import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './Swiper.module.css'
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const AboutSwiper = ({ slides}) => {
  const { t } = useTranslation();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [nrSlides, setNrSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    if (screenWidth < 900) {
      if (screenWidth < 600) {
        setNrSlides(1);
      } else {
        setNrSlides(2);
      }
    } else {
        setNrSlides(3);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={nrSlides}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className={styles.slide}>
          <img src={slide.image} alt=''/>
          <div className={styles.info}>
            <h3>{slide.name}</h3>
            <h6>{slide.role}</h6>
            <h5>{t(slide.text)}</h5>
          </div>
        </SwiperSlide>
      ))}   
    </Swiper>
  )
}
export default AboutSwiper;