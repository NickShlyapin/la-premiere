"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import styles from "./header.module.scss";
import Logo from "../../public/images/logos/logo.svg";
import { Link } from "react-scroll";

function Header() {
  const [header, setHeader] = useState("header1");
  const [mobileHeader, setMobileHeader] = useState("mobileHeader1");

  const [open, setOpen] = useState(false);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header1");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  const listenScrollEventMobile = (event) => {
    if (window.scrollY < 73) {
      return setMobileHeader("mobileHeader1");
    } else if (window.scrollY > 70) {
      return setMobileHeader("mobileHeader2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEventMobile);

    return () => window.removeEventListener("scroll", listenScrollEventMobile);
  }, []);

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <section>
      <header className={`${styles[header]}`}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link
              to="main"
              spy={true}
              smooth={true}
              isDynamic={true}
              offset={-90}
            >
              <Logo />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  isDynamic={true}
                  offset={-90}
                >
                  О НАС
                </Link>
              </li>
              <li>
                <Link
                  to="menu"
                  spy={true}
                  smooth={true}
                  isDynamic={true}
                  offset={-90}
                >
                  МЕНЮ
                </Link>
              </li>
              <li>
                <Link
                  to="spec"
                  spy={true}
                  smooth={true}
                  isDynamic={true}
                  offset={-90}
                >
                  СОБЫТИЯ
                </Link>
              </li>
              <li>
                <Link
                  to="gallery"
                  spy={true}
                  smooth={true}
                  isDynamic={true}
                  offset={-90}
                >
                  ГАЛЕРЕЯ
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  isDynamic={true}
                  offset={-90}
                >
                  ЗАБРОНИРОВАТЬ
                </Link>
              </li>
            </ul>
          </nav>
          <a className={styles.tel} href="tel:+7(395)243-45-45">
            +7 (395) 243-45-45
          </a>
        </div>
      </header>
      <header className={`${styles[mobileHeader]}`}>
        <div className={styles.headerContainer}>
          <div
            className={`${styles.logo} ${
              isActive ? `${styles.openLogo}` : null
            }`}
          >
            <Link
              to="main"
              spy={true}
              smooth={true}
              isDynamic={true}
              offset={-90}
            >
              <Logo />
            </Link>
          </div>
          <div className={styles.menu}>
            <div
              className={`${styles.burgerButton} ${
                isActive ? `${styles.open}` : null
              }`}
              onClick={toggleClass}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div
              className={`${styles.menuWrapper} ${
                isActive ? `${styles.openMenu}` : null
              }`}
            >
              <div className={styles.cont}>
                <nav className={styles.menuContainer}>
                  <ul>
                    <li>
                      <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-90}
                        onClick={toggleClass}
                      >
                        О НАС
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="menu"
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-90}
                        onClick={toggleClass}
                      >
                        МЕНЮ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="spec"
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-90}
                        onClick={toggleClass}
                      >
                        СОБЫТИЯ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="gallery"
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-90}
                        onClick={toggleClass}
                      >
                        ГАЛЕРЕЯ
                      </Link>
                    </li>
                    <button>
                      <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        isDynamic={true}
                        offset={-90}
                        onClick={toggleClass}
                      >
                        Забронировать стол
                      </Link>
                    </button>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
