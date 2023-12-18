"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./Carousel.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.mySwiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i1.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i2.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i4.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i5.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i6.jpg" alt="" className={styles.img} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="./initative/i7.jpg" alt="" className={styles.img} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
