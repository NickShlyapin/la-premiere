"use client";
import React, { useRef, useState, useCallback } from "react";
import styles from "./gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import DSC05673 from "../../public/images/gallery/DSC05673.webp";
import DSC06001 from "../../public/images/gallery/DSC06001.webp";
import DSC06014 from "../../public/images/gallery/DSC06014.webp";
import DSC06154 from "../../public/images/gallery/DSC06154.webp";
import IMG_5002 from "../../public/images/gallery/IMG_5002.webp";
import IMG_5008 from "../../public/images/gallery/IMG_5008.webp";
import LaPremiere91 from "../../public/images/gallery/La-Premiere-91.webp";
import LaPremiere92 from "../../public/images/gallery/La-Premiere-92.webp";
import LaPremiere93 from "../../public/images/gallery/La-Premiere-93.webp";
import LaPremiere110 from "../../public/images/gallery/La-Premiere-110.webp";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Autoplay } from "swiper";

function Gallery() {
  return (
    <section className={styles.interior} id="gallery">
      <div className={styles.wrapper}>
        <Swiper loop={true} slidesPerView={"auto"} spaceBetween={5}>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={DSC05673}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={DSC06001}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={DSC06154}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={DSC06014}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={IMG_5002}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={IMG_5008}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={LaPremiere91}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={LaPremiere92}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={LaPremiere93}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.imgContainer}>
              <Image
                src={LaPremiere110}
                fill
                quality={20}
                className={styles.bg}
                alt="InteriorImg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;
