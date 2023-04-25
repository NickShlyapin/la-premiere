"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./spec.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import SpecImg1 from "../../public/images/spec/DSC00366.webp";
import SpecImg2 from "../../public/images/spec/IMG_2644.webp";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

function Spec() {
  return (
    <section className={styles.spec} id="spec">
      <div className={styles.wrapper}>
        <Swiper
          className={styles.swiper}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
          slidesPerView={1}
          spaceBetween={100}
          style={{
            "--swiper-pagination-color": "#132B5F",
            "--swiper-pagination-bullet-inactive-color": "#000",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.slideDescription}>
              <h1>день рождения La Première Cafe</h1>
              <div className={styles.specDesc}>
                <div className={styles.iventData}>
                  <p>30 апреля</p>
                  <p>сбор гостей в 19:00</p>
                </div>
                <p className={styles.iventDescription}>
                  Рады вам сообщить, что 30 апреля состоится праздничный ужин в
                  честь дня рождения La Première Cafe. Алексей Фокин совместно с
                  Михаилом Михайловым устроят для нас настоящее гастрономическое
                  приключение.
                </p>
                <p className={styles.iventDescription}>
                  Бренд-шеф бара «Булгаков» и гранд-бистро «Дзе» Михаил Михайлов
                  является адептом современного симпла, а во главе его
                  гастрономического мировоззрения стоят вкус и качество основных
                  продуктов блюда — локальных или сезонных.
                </p>
                <p className={styles.iventPrice}>
                  Стоимость на одну персону — 10 000 ₽
                </p>
              </div>
              <div className={styles.reservation}>
                <p>Позаботьтесь о столике на вечер заранее:</p>
                <div className={styles.btns}>
                  <LinkScroll
                    to="contact"
                    spy={true}
                    smooth={true}
                    isDynamic={true}
                    offset={-90}
                    className={styles.bth}
                  >
                    Забронировать
                  </LinkScroll>
                  <a className={styles.tel} href="tel:+7(395)243-45-45">
                    +7 (395) 243-45-45
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={SpecImg2}
                fill
                quality={10}
                className={styles.bg}
                alt="SpecImg2"
              />
            </div>
          </SwiperSlide>


          <SwiperSlide className={styles.slide}>
            <div className={styles.slideDescription}>
              <h1>СЕЗОННОЕ ПРЕДЛОЖЕНИЕ</h1>
              <div className={styles.specDesc}>
                <p className={styles.specMenu}>
                  жареный редис <mark>с рикоттой и песто из черемши</mark>
                </p>
                <p className={styles.specMenu}>
                  Кальмар <mark>с картофелем, острыми перцами и миндалём</mark>
                </p>
                <p className={styles.specMenu}>
                  котлета из индейки <mark>с молодым горошком и фуа-гра</mark>
                </p>
                <p className={styles.specMenu}>
                  утиные потрошки{" "}
                  <mark>в соусе порто с картофельным кремом и тархуном</mark>
                </p>
                <p className={styles.specMenu}>
                  Шоколадная тарталетка{" "}
                  <mark>с карамельным ганашом и фундучным мороженым</mark>
                </p>
              </div>
              <Link
                href="/pdf/spec-1.pdf"
                alt="Сезонное предложение"
                target="_blank"
                rel="noopener noreferrer"
              >
                Полное меню &#8250;
              </Link>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={SpecImg1}
                fill
                quality={10}
                className={styles.bg}
                alt="SpecImg1"
              />
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}

export default Spec;
