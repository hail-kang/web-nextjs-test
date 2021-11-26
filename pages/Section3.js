import styles from "../styles/Section3.module.css";
import classNames from "classnames";
import { useState, useRef } from "react";

export default function Section3() {
  let sectionRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  let phoneSectionName = [
    "모임검색",
    "참여자 확인",
    "밸런스 테스트",
    "소셜 프로그램",
  ];
  let phoneSectionLabel1 = [
    `<p>여행지에서</p>
    <p>어떤 모임이 열릴까?</p>`,
    `<p>누가</p>
    <p>모임에 올까?</p>`,
    `<p>나랑</p>
    <p>맞는 사람들일까?</p>`,
    `<p>클래스랑</p>
    <p>뭐가 달라?</P>`,
  ];
  let phoneSectionLabel2 = [
    `<p>필터에 가고 싶은 여행지, 관심사를 입력하면</p>
    <p>나에게 딱 맞는 프로그램을 찾을 수 있어요</p>`,
    `<p>모임을 신청하면 함께 신청한 여행자가</p>
    <p>어떤 사람인지 확인할 수 있어요</p>`,
    `<p>모임, 여행 밸런스테스트를 통해</p>
    <p>함께 참여하는 사람이 나와 잘 맞는지</P>
    <p>바로 확인해볼 수 있어요!</P>`,
    `<p>모여 앱에서 진행되는 모든 프로그램에는</p>
    <p>여행자끼리 소통할 수 있는</P>
    <p>소셜 프로그램이 준비되어 있어요!</P>`,
  ];
  let [state, setState] = useState({
    phoneSection: 0,
  });

  function setPhoneSection(number) {
    let unit;
    if (window.innerWidth > 768) {
      unit = 292;
    } else {
      unit = 252;
    }
    let position = unit * number;
    let phone = document.getElementsByClassName(
      styles.component2__2__phone__screen
    )[0];
    phone.scroll({
      left: position,
      behavior: "smooth",
    });

    setState({ phoneSection: number });
    let animationReplay = document.getElementsByClassName(
      styles.component2__1
    )[0];
    let copyElement = animationReplay;
    animationReplay.remove();
    document.getElementsByClassName(styles.component2)[0].prepend(copyElement);
    // copyElement.classList.remove(styles.component2__1);
    // copyElement.classList.add(styles.component2__1);
  }

  function setPhoneSectionByButton(incre) {
    let number = (4 + state.phoneSection + incre) % 4;
    sectionRef[number].current.click();
  }

  return (
    <div className={styles.section} id="section3">
      <div className={styles.content}>
        <div className={styles.component1}>
          <div className={styles.component1__menu}>
            {phoneSectionName.map((_, i) => {
              if (i == state.phoneSection) {
                return (
                  <div
                    key={i}
                    className={classNames(
                      styles.component1__menu__item,
                      styles.active
                    )}
                  >
                    <div className={styles.component1__menu__item__icon}></div>
                    <a ref={sectionRef[i]} onClick={() => setPhoneSection(i)}>
                      <div className={styles.component1__menu__item__text}>
                        {phoneSectionName[i]}
                      </div>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div key={i} className={styles.component1__menu__item}>
                    <div className={styles.component1__menu__item__icon}></div>
                    <a ref={sectionRef[i]} onClick={() => setPhoneSection(i)}>
                      <div className={styles.component1__menu__item__text}>
                        {phoneSectionName[i]}
                      </div>
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className={styles.component2}>
          {/* <div
            dangerouslySetInnerHTML={{
              _html: `
            <div class="${styles.component2__1}">
              <div class="${styles.component2__1__label1}">
              ${phoneSectionLabel1[state.phoneSection]}
              </div>
              <div class="${styles.component2__1__label2}">
              ${phoneSectionLabel2[state.phoneSection]}
              </div>
            </div>`,
            }}
          ></div> */}

          <div className={styles.component2__1}>
            <div className={styles.component2__1__label1}>
              <div
                dangerouslySetInnerHTML={{
                  __html: phoneSectionLabel1[state.phoneSection],
                }}
              ></div>
            </div>
            <div className={styles.component2__1__label2}>
              <div
                dangerouslySetInnerHTML={{
                  __html: phoneSectionLabel2[state.phoneSection],
                }}
              ></div>
            </div>
          </div>
          <div className={styles.component2__2}>
            <div
              className={styles.component2__2__prevBtn}
              onClick={() => setPhoneSectionByButton(-1)}
            ></div>
            <div className={styles.component2__2__phone}>
              <div className={styles.component2__2__phone__screen}>
                <div
                  className={styles.component2__2__phone__screen__section1}
                ></div>
                <div
                  className={styles.component2__2__phone__screen__section2}
                ></div>
                <div
                  className={styles.component2__2__phone__screen__section3}
                ></div>
                <div
                  className={styles.component2__2__phone__screen__section4}
                ></div>
              </div>
            </div>
            <div
              className={styles.component2__2__nextBtn}
              onClick={() => setPhoneSectionByButton(+1)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
