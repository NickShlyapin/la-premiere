"use client";
import React, { useEffect, useState } from "react";
import styles from "./team.module.scss";
import TeamBG from "../../public/images/backgrounds/DSC060432.webp";
import TeamImg from "../../public/images/blockimg/DSC09383.webp";
import Image from "next/image";

function Team() {
  return (
    <section className={styles.team}>
      <div className={styles.wrapper}>
        <div className={styles.teamContainer}>
          <div className={styles.leftSide}>
            <Image
              src={TeamImg}
              fill
              quality={30}
              className={styles.blockBg}
              alt="aboutImg"
            />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.descriptionContainer}>
              <h2>НАША КОМАНДА</h2>
              <p>
                Наша цель — удовлетворить потребности и пожелания каждого нашего
                гостя. Мы стремимся к тому, чтобы каждый, кто посетил наш
                ресторан, оставался довольным и полон впечатлений. Мы считаем,
                что наша команда поваров — это не просто группа людей,
                работающих на одном месте, а настоящая семья, которая работает
                вместе для достижения общей цели — создания лучших блюд для
                наших гостей.
              </p>
              <p>
                Команда опытных и талантливых поваров, которые готовы
                удовлетворить любой вкус и пожелание наших клиентов. В нашей
                команде работают профессионалы своего дела, которые любят свою
                работу и всегда готовы удивлять и радовать своих гостей.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={TeamBG}
        fill
        quality={10}
        className={styles.bg}
        alt="aboutImg"
      />
    </section>
  );
}

export default Team;
