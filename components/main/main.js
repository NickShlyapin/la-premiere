"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import styles from "./main.module.scss";

import MainLogo from "../../public/images/logos/main-logo.svg";
import MainLogoTablet from "../../public/images/logos/main-logo-tablet.svg";
import MainLogoMobile from "../../public/images/logos/main-logo-mobile.svg";
import MainBG from "../../public/images/backgrounds/main-bg.webp";
import Image from "next/image";

import { Link } from "react-scroll";

function Main() {
  return (
    <main className={styles.main} id="main">
      <div className={styles.wrapper}>
        <div className={styles.mainLogo}>
          <MainLogo />
        </div>
        <div className={styles.mainLogoTablet}>
          <MainLogoTablet />
        </div>
        <div className={styles.mainLogoMobile}>
          <MainLogoMobile />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.upperText}>УЛ. 5-Й АРМИИ, 67</p>
          <p className={styles.lowerText}>
            работаем каждый день с 9:00 до 23:00
          </p>
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          isDynamic={true}
          offset={-90}
          className={styles.bth}
        >
          Забронировать стол
        </Link>
      </div>
      <Image
        src={MainBG}
        fill
        quality={40}
        className={styles.bg}
        alt="mainImg"
        priority={true}
      />
    </main>
  );
}

export default Main;
