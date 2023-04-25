import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";
import aboutImg from "../../public/images/blockimg/about-img.webp";
import YandexLogo from "../../public/images/logos/YandexLogo.svg";
import GISLogo from "../../public/images/logos/2GISLogo.svg";
import TripadvisorLogo from "../../public/images/logos/TripAdvisorLogo.svg";
import Star from "../../public/images/other/Star.svg";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <div className={styles.descriptionContainer}>
            <h2>О НАС</h2>
            <h3>ФРАНЦУЗСКАЯ КУХНЯ</h3>
            <p>
              Petit bistro на одной из самых красивых улиц старого города. Здесь
              вы забудете о том, что находитесь в Иркутске — La Premiere
              ориентирован на ценителей подлинного парижского шика и любителей
              европейского образа жизни.
            </p>
            <p>
              Вас ждут необычные завтраки с завораживающей подачей, продуманное
              основное меню от шефа, выверенная барная карта для искушённых и
              летняя терраса для освежающих вечеров.
            </p>
            <p>
              La Premiere — это внимание к деталям, изысканная сервировка и
              благородные гости. Здесь вы всегда среди своих.
            </p>
          </div>
          <div className={styles.gradeContainer}>
            <a
              href="https://www.tripadvisor.co.uk/Restaurant_Review-g298527-d23863350-Reviews-La_Premiere_Cafe-Irkutsk_Irkutsk_Oblast_Siberian_District.html"
              alt="Tripadvisor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.grade}>
                <div className={styles.gradeInfo}>
                  <TripadvisorLogo />
                  <div>
                    <p>4,5</p>
                    <Star />
                  </div>
                </div>
                <p>3 отзыва</p>
              </div>
            </a>
            <a
              href="https://2gis.ru/irkutsk/firm/70000001047243556/tab/reviews"
              alt="2GIS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.grade}>
                <div className={styles.gradeInfo}>
                  <GISLogo />
                  <div>
                    <p>4</p>
                    <Star />
                  </div>
                </div>
                <p>49 отзывов</p>
              </div>
            </a>
            <a
              href="https://yandex.ru/maps/org/la_premiere/133462586608/reviews/?ll=104.278676%2C52.279260&z=15"
              alt="Yandex"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.grade}>
                <div className={styles.gradeInfo}>
                  <YandexLogo />
                  <div>
                    <p>4,6</p>
                    <Star />
                  </div>
                </div>
                <p>79 отзывов</p>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image
            src={aboutImg}
            fill
            quality={30}
            className={styles.bg}
            alt="aboutImg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
