"use client";
import React from "react";
import styles from "./footer.module.scss";
import Elementum from "../../public/images/logos/elementumlogo.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.f1}>
        <p className={styles.copyright}>© «La Premiere», 2023</p>
        <div className={styles.contactInfo}>
          <p className={styles.address}>УЛ. 5-Й АРМИИ, 67</p>
          <a className={styles.tel} href="tel:+7(395)243-45-45">
            +7 (395) 243-45-45
          </a>
        </div>

        <Link className={styles.developer} href="https://elementum.digital/">
          <p>Разработано</p>
          <Elementum />
        </Link>
      </div>
      <div className={styles.f2}>
        <div className={styles.leftS}>
          <p className={styles.copyright}>© «La Premiere», 2023</p>
          <Link className={styles.developer} href="https://elementum.digital/">
            <p>Разработано</p>
            <Elementum />
          </Link>
        </div>
        <div className={styles.rightS}>
          <div className={styles.contactInfo}>
            <p className={styles.address}>УЛ. 5-Й АРМИИ, 67</p>
            <a className={styles.tel} href="tel:+7(395)243-45-45">
              +7 (395) 243-45-45
            </a>
          </div>
        </div>
      </div>
      <div className={styles.f3}>
        <div className={styles.rightS}>
          <div className={styles.contactInfo}>
            <p className={styles.address}>УЛ. 5-Й АРМИИ, 67</p>
            <a className={styles.tel} href="tel:+7(395)243-45-45">
              +7 (395) 243-45-45
            </a>
          </div>
        </div>
        <div className={styles.leftS}>
          <p className={styles.copyright}>© «La Premiere», 2023</p>
          <Link className={styles.developer} href="https://elementum.digital/">
            <p>Разработано</p>
            <Elementum />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
