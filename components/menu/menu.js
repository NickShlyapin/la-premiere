"use client";
import React, { useState } from "react";
import styles from "./menu.module.scss";
import Image from "next/image";

import MenuImageOne from "../../public/images/menu/menu-1.webp";
import MenuImageTwo from "../../public/images/menu/menu-2.webp";
import MenuImageThree from "../../public/images/menu/menu-3.webp";
import MenuImageFour from "../../public/images/menu/menu-4.webp";

function Menu() {
  const [isShownOne, setIsShownOne] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);
  const [isShownFour, setIsShownFour] = useState(false);
  return (
    <section className={styles.menu} id="menu">
      <div className={styles.wrapper}>
        <h1>МЕНЮ</h1>
        <h2>
          Наше меню предлагает широкий выбор французских блюд, идеально
          приготовленных из лучших ингредиентов
        </h2>
        <div className={styles.cardContainer}>
          <a
            href="/pdf/main.pdf"
            alt="Основное меню"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={styles.card}
              onMouseEnter={() => setIsShownOne(true)}
              onMouseLeave={() => setIsShownOne(false)}
            >
              <div className={styles.cardInfo}>
                <h3>ОСНОВНОЕ МЕНЮ</h3>
                <p style={{ visibility: "hidden" }}>1</p>
                <p style={{ visibility: "hidden" }}>1</p>
              </div>
              {isShownOne ? (
                <div className={styles.toggle}>
                  <div className={styles.bgBlue}>
                    <p>смотреть &#x203A;</p>
                  </div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={MenuImageOne}
                      fill
                      quality={40}
                      className={styles.bg}
                      alt="BaseMenuImg"
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.imgContainer}>
                  <Image
                    src={MenuImageOne}
                    fill
                    quality={40}
                    className={styles.bg}
                    alt="BaseMenuImg"
                  />
                </div>
              )}
            </div>
          </a>

          <a
            href="/pdf/breakfast.pdf"
            alt="Завтраки"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={styles.card}
              onMouseEnter={() => setIsShownTwo(true)}
              onMouseLeave={() => setIsShownTwo(false)}
            >
              <div className={styles.cardInfo}>
                <h3>ЗАВТРАКИ</h3>
                <p>по будням — с 9:00 до 12:00</p>
                <p>по выходным — с 9:00 до 13:00</p>
              </div>
              {isShownTwo ? (
                <div className={styles.toggle}>
                  <div className={styles.bgBlue}>
                    <p>смотреть &#x203A;</p>
                  </div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={MenuImageTwo}
                      fill
                      quality={40}
                      className={styles.bg}
                      alt="BaseMenuImg"
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.imgContainer}>
                  <Image
                    src={MenuImageTwo}
                    fill
                    quality={40}
                    className={styles.bg}
                    alt="BaseMenuImg"
                  />
                </div>
              )}
            </div>
          </a>

          <a
            href="/pdf/bar.pdf"
            alt="Барная карта"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={styles.card}
              onMouseEnter={() => setIsShownThree(true)}
              onMouseLeave={() => setIsShownThree(false)}
            >
              <div className={styles.cardInfo}>
                <h3>КАРТА БАРА</h3>
                <p style={{ visibility: "hidden" }}>1</p>
                <p style={{ visibility: "hidden" }}>1</p>
              </div>
              {isShownThree ? (
                <div className={styles.toggle}>
                  <div className={styles.bgBlue}>
                    <p>смотреть &#x203A;</p>
                  </div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={MenuImageThree}
                      fill
                      quality={40}
                      className={styles.bg}
                      alt="BaseMenuImg"
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.imgContainer}>
                  <Image
                    src={MenuImageThree}
                    fill
                    quality={40}
                    className={styles.bg}
                    alt="BaseMenuImg"
                  />
                </div>
              )}
            </div>
          </a>

          <a
            href="/pdf/child-menu.pdf"
            alt="Детское меню"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={styles.card}
              onMouseEnter={() => setIsShownFour(true)}
              onMouseLeave={() => setIsShownFour(false)}
            >
              <div className={styles.cardInfo}>
                <h3>ДЕТСКОЕ МЕНЮ</h3>
                <p style={{ visibility: "hidden" }}>1</p>
                <p style={{ visibility: "hidden" }}>1</p>
              </div>
              {isShownFour ? (
                <div className={styles.toggle}>
                  <div className={styles.bgBlue}>
                    <p>смотреть &#x203A;</p>
                  </div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={MenuImageFour}
                      fill
                      quality={40}
                      className={styles.bg}
                      alt="BaseMenuImg"
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.imgContainer}>
                  <Image
                    src={MenuImageFour}
                    fill
                    quality={40}
                    className={styles.bg}
                    alt="BaseMenuImg"
                  />
                </div>
              )}
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
