"use client";
import React from "react";
import styles from "./mymap.module.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function MyMap() {
  return (
    <section className={styles.mymap}>
      <YMaps>
        <Map
          defaultState={{
            center: [52.27926008765014, 104.27867482691366],
            zoom: 18,
            type: "yandex#map",
          }}
          style={{
            width: "100%",
            height: "500px",
          }}
          modules={[]}
          instanceRef={(ref) => {
            ref && ref.behaviors.disable("scrollZoom");
            ref && ref.behaviors.disable("drag");
          }}
        >
          <Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            geometry={[52.27934038686878, 104.27852885075544]}
            options={{
              iconLayout: "default#image",
              iconImageSize: [90, 90],
              iconImageHref: "images/other/Outline.svg",
              /*hasHint: true,
              hasBalloon: true,
              hideIconOnBalloonOpen: true,*/
            }}
            /*properties={{
              balloonContentHeader:
                '<a href = "#">Рога и копыта</a><br>' +
                '<span class="description">Сеть кинотеатров</span>',
              // Зададим содержимое основной части балуна.
              balloonContentBody:
                '<img src="images/log.png" height="150" width="200"> <br/> ' +
                '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
                "<b>Ближайшие сеансы</b> <br/> Сеансов нет.",
              // Зададим содержимое нижней части балуна.
              balloonContentFooter:
                'Информация предоставлена:<br/>OOO "Рога и копыта"',
              // Зададим содержимое всплывающей подсказки.
              hintContent: "Рога и копыта",
            }}*/
          />
          {/*<Placemark
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            geometry={[52.27937969150924, 104.27904128967467]}
            options={{
              iconLayout: "default#image",
              iconImageSize: [150, 150],
              iconImageHref: "images/other/Frame379.svg",
            }}
            className={styles.pl}
          />*/}
        </Map>
      </YMaps>
    </section>
  );
}

export default MyMap;
