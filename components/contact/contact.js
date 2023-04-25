"use client";
import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";

import styles from "./contact.module.scss";
import Image from "next/image";
import ContactBG from "../../public/images/backgrounds/DSC09504.webp";
import moment from "moment";
import "moment/locale/ru";

import Link from "next/link";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError]);

  return {
    isEmpty,
    minLengthError,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
    setIsValid(true);
    console.log(e.target.value);
  };

  const onBlur = (e) => {
    setIsValid(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isValid,
    ...valid,
  };
};

function Contact() {
  const name = useInput("", { isEmpty: true, minLength: 1 });
  const phone = useInput("", { isEmpty: true, minLength: 11 });
  const date = useInput("", { isEmpty: true, minLength: 1 });
  const time = useInput("", { isEmpty: true, minLength: 1 });
  const guest = useInput("", { isEmpty: true, minLength: 1 });
  const message = useInput("");

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userDate, setUserDate] = useState("");
  const [userTime, setUserTime] = useState("");
  const [userGuest, setUserGuest] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [click, setClick] = useState(false);

  let div;

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeUserPhone = (e) => {
    setUserPhone(e.target.value);
  };
  const handleChangeUserDate = (e) => {
    setUserDate(e.target.value);
  };
  const handleChangeUserTime = (e) => {
    setUserTime(e.target.value);
  };
  const handleChangeUserGuest = (e) => {
    setUserGuest(e.target.value);
  };
  const handleChangeUserMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      userName,
      userPhone,
      userDate,
      userTime,
      userGuest,
      userMessage,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response received");
        console.log("Response succeeded!");
      }
      if (res.status === 500) {
        console.log("Error");
      }
    });
  };

  var masks = [
    "8 (999) 999-99-99",
    "+9 (999) 999-99-9999999",
    "+7 (999) 999-99-99",
  ];

  if (phone.value[0] === "+") {
    var mask = masks[1];
  }
  if (phone.value[0] === "7") {
    var mask = masks[2];
  }
  if (phone.value[0] === "8") {
    var mask = masks[0];
  }
  if (phone.value[0] === "9") {
    var mask = masks[2];
  }
  if (phone.value.length <= 3) {
    var mask = "";
  }

  const handleClickOne = () => {
    setClick(true);
  };

  const handleClickTwo = () => {
    setClick(false);
  };

  moment().locale("ru");

  var today = moment().format("DD MMMM");
  var tomorrow = moment().add(1, "days").format("DD MMMM");
  var dayAfterTomorrow = moment().add(2, "days").format("DD MMMM");
  var twoAfterTomorrow = moment().add(3, "days").format("DD MMMM");
  var threeAfterTomorrow = moment().add(4, "days").format("DD MMMM");
  var AfterTomorrow4 = moment().add(5, "days").format("DD MMMM");
  var AfterTomorrow5 = moment().add(6, "days").format("DD MMMM");
  var AfterTomorrow6 = moment().add(7, "days").format("DD MMMM");
  var AfterTomorrow7 = moment().add(8, "days").format("DD MMMM");
  var AfterTomorrow8 = moment().add(9, "days").format("DD MMMM");
  var AfterTomorrow9 = moment().add(10, "days").format("DD MMMM");
  var AfterTomorrow10 = moment().add(11, "days").format("DD MMMM");
  var AfterTomorrow11 = moment().add(12, "days").format("DD MMMM");
  var AfterTomorrow12 = moment().add(13, "days").format("DD MMMM");
  var AfterTomorrow13 = moment().add(14, "days").format("DD MMMM");
  var AfterTomorrow14 = moment().add(15, "days").format("DD MMMM");
  var AfterTomorrow15 = moment().add(16, "days").format("DD MMMM");
  var AfterTomorrow16 = moment().add(17, "days").format("DD MMMM");

  if (click) {
    div = (
      <section className={styles.contact} id="contact">
        <div className={styles.wrapper}>
          <div className={styles.contactContainerTwo}>
            <h1>Заявка отправлена</h1>
            <h2>
              Ждем вас {userDate} в {userTime} по адресу ул. 5-й армии, 67
            </h2>
            <button
              type="submit"
              onClick={(e) => {
                handleClickTwo();
              }}
            >
              Вернуться к форме
            </button>
          </div>
        </div>
        <Image
          src={ContactBG}
          fill
          quality={30}
          className={styles.bg}
          alt="aboutImg"
        />
      </section>
    );
  } else {
    div = (
      <section className={styles.contact} id="contact">
        <div className={styles.wrapper}>
          <div className={styles.contactContainer}>
            <h1>Забронировать стол</h1>
            <form method="post">
              <div className={styles.inputContainer}>
                <div className={styles.inputItem}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.inputField}
                    value={name.value}
                    placeholder={"Ваше имя"}
                    onChange={(e) => {
                      name.onChange(e), handleChangeUserName(e);
                    }}
                    onBlur={(e) => name.onBlur(e)}
                  />

                  {name.isValid && name.isEmpty && (
                    <p
                      style={{
                        position: "relative",
                        color: "#2B5DAA",
                        fontFamily: "Merriweather-LightItalic",
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "14px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Сообщите нам Ваше имя
                    </p>
                  )}
                </div>

                <div className={styles.inputItem}>
                  <InputMask
                    mask={mask}
                    type="tel"
                    id="phone"
                    name="phone"
                    alwaysShowMask={false}
                    maskChar={null}
                    value={phone.value}
                    placeholder="Телефон"
                    onChange={(e) => {
                      phone.onChange(e), handleChangeUserPhone(e);
                    }}
                    onBlur={(e) => phone.onBlur(e)}
                    onKeyPress={(event) => {
                      if (!/[0-9\+]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    className={styles.inputField}
                  ></InputMask>

                  {phone.isValid && phone.minLengthError && (
                    <p
                      style={{
                        position: "relative",
                        color: "#2B5DAA",
                        fontFamily: "Merriweather-LightItalic",
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "14px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Некорректный номер
                    </p>
                  )}
                </div>

                <div className={styles.inputItem}>
                  <select
                    className={styles.inputField}
                    required
                    value={date.value}
                    onChange={(e) => {
                      date.onChange(e), handleChangeUserDate(e);
                    }}
                    onBlur={(e) => date.onBlur(e)}
                  >
                    <option value="" selected hidden>
                      Дата
                    </option>
                    <option value={today}>{today}</option>
                    <option value={tomorrow}>{tomorrow}</option>
                    <option value={dayAfterTomorrow}>{dayAfterTomorrow}</option>
                    <option value={twoAfterTomorrow}>{twoAfterTomorrow}</option>
                    <option value={threeAfterTomorrow}>
                      {threeAfterTomorrow}
                    </option>
                    <option value={AfterTomorrow4}>{AfterTomorrow4}</option>
                    <option value={AfterTomorrow5}>{AfterTomorrow5}</option>
                    <option value={AfterTomorrow6}>{AfterTomorrow6}</option>
                    <option value={AfterTomorrow7}>{AfterTomorrow7}</option>
                    <option value={AfterTomorrow8}>{AfterTomorrow8}</option>
                    <option value={AfterTomorrow9}>{AfterTomorrow9}</option>
                    <option value={AfterTomorrow10}>{AfterTomorrow10}</option>
                    <option value={AfterTomorrow11}>{AfterTomorrow11}</option>
                    <option value={AfterTomorrow12}>{AfterTomorrow12}</option>
                    <option value={AfterTomorrow13}>{AfterTomorrow13}</option>
                    <option value={AfterTomorrow14}>{AfterTomorrow14}</option>
                    <option value={AfterTomorrow15}>{AfterTomorrow15}</option>
                  </select>
                  {date.isValid && date.isEmpty && (
                    <p
                      style={{
                        position: "relative",
                        color: "#2B5DAA",
                        fontFamily: "Merriweather-LightItalic",
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "14px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Выберите день
                    </p>
                  )}
                </div>

                <div className={styles.inputItem}>
                  <select
                    className={styles.inputField}
                    required
                    value={time.value}
                    onChange={(e) => {
                      time.onChange(e), handleChangeUserTime(e);
                    }}
                    onBlur={(e) => time.onBlur(e)}
                  >
                    <option value="" selected hidden>
                      Время
                    </option>
                    <option>9:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                  </select>
                  {time.isValid && time.isEmpty && (
                    <p
                      style={{
                        position: "relative",
                        color: "#2B5DAA",
                        fontFamily: "Merriweather-LightItalic",
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "14px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Выберите время
                    </p>
                  )}
                </div>

                <div className={styles.inputItem}>
                  <select
                    className={styles.inputField}
                    required
                    value={guest.value}
                    onChange={(e) => {
                      guest.onChange(e), handleChangeUserGuest(e);
                    }}
                    onBlur={(e) => guest.onBlur(e)}
                  >
                    <option value="" disabled selected hidden>
                      Количество гостей
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                  {guest.isValid && guest.isEmpty && (
                    <p
                      style={{
                        position: "relative",
                        color: "#2B5DAA",
                        fontFamily: "Merriweather-LightItalic",
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "14px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      Выберите кол-во гостей
                    </p>
                  )}
                </div>

                <div className={styles.inputItem}>
                  <input
                    type="text"
                    id="message"
                    name="message"
                    className={styles.inputField}
                    value={message.value}
                    placeholder={"Пожелания"}
                    onChange={(e) => {
                      message.onChange(e), handleChangeUserMessage(e);
                    }}
                  />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button
                  disabled={
                    !name.inputValid ||
                    !phone.inputValid ||
                    !date.inputValid ||
                    !time.inputValid ||
                    !guest.inputValid
                  }
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                    handleClickOne();
                  }}
                >
                  Забронировать
                </button>
              </div>
              <p className={styles.politic}>
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных и соглашаетесь с{" "}
                <Link href="/politic">политикой конфиденциальности.</Link>
              </p>
              <h2>Забронировать по телефону</h2>
              <a className={styles.tel} href="tel:+7(395)243-45-45">
                +7 (395) 243-45-45
              </a>
            </form>
          </div>
        </div>
        <Image
          src={ContactBG}
          fill
          quality={10}
          className={styles.bg}
          alt="aboutImg"
        />
      </section>
    );
  }

  return (
    <section className={styles.contact} id="contact">
      {div}
    </section>
  );
}

export default Contact;
