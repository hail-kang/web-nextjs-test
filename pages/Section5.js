import styles from "../styles/Section5.module.css";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";

export default function Section5() {
  let sectionRef = [useRef(null), useRef(null), useRef(null), useRef(null)];

  let phoneSectionName = [
    "테마별 검색",
    "블로그 리뷰",
    "영상 콘텐츠",
    "당일예약",
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
  }

  function setPhoneSectionByButton(incre) {
    let number = (4 + state.phoneSection + incre) % 4;
    sectionRef[number]?.current?.click();
  }

  return (
    <div className={styles.section} id="section5">
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
          {(() => {
            if (state.phoneSection == 0) {
              return (
                <div>
                  <div className={classNames(styles.component2__1)}>
                    <div className={styles.component2__1__label1}>
                      <p>모임 테마별로</p>
                      <p>공간을 찾아보세요</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>기념일, 촬영, 친목모임 등 테마 키워드를</p>
                      <p>통해 딱 맞는 공간을 쉽게 찾을 수 있어요</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>생생한 블로그 리뷰로</p>
                      <p>공간 미리보기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>이미 공간을 이용해 본 블로거들의</p>
                      <p>생생한 공간 후기를 통해</p>
                      <p>확신을 가지고 예약하세요!</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>영상을 통해 공간의</p>
                      <p>다양한 이용 팁 챙기기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>컨셉별 영상을 미리 확인하고</p>
                      <p>공간을 매력적으로 이용할 수 있는</p>
                      <p>다양한 팁을 챙겨가세요!</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>오늘 바로 이용할 때</p>
                      <p>특가로 예약하기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>오랜만에 친구들과 모였는데,</p>
                      <p>갈 곳이 마땅하지 않으신가요?</p>
                      <p>특가로 예약하고, 오늘 바로 이용하세요</p>
                    </div>
                  </div>
                </div>
              );
            } else if (state.phoneSection == 1) {
              return (
                <div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>모임 테마별로</p>
                      <p>공간을 찾아보세요</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>기념일, 촬영, 친목모임 등 테마 키워드를</p>
                      <p>통해 딱 맞는 공간을 쉽게 찾을 수 있어요</p>
                    </div>
                  </div>
                  <div className={classNames(styles.component2__1)}>
                    <div className={styles.component2__1__label1}>
                      <p>생생한 블로그 리뷰로</p>
                      <p>공간 미리보기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>이미 공간을 이용해 본 블로거들의</p>
                      <p>생생한 공간 후기를 통해</p>
                      <p>확신을 가지고 예약하세요!</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>영상을 통해 공간의</p>
                      <p>다양한 이용 팁 챙기기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>컨셉별 영상을 미리 확인하고</p>
                      <p>공간을 매력적으로 이용할 수 있는</p>
                      <p>다양한 팁을 챙겨가세요!</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>오늘 바로 이용할 때</p>
                      <p>특가로 예약하기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>오랜만에 친구들과 모였는데,</p>
                      <p>갈 곳이 마땅하지 않으신가요?</p>
                      <p>특가로 예약하고, 오늘 바로 이용하세요</p>
                    </div>
                  </div>
                </div>
              );
            } else if (state.phoneSection == 2) {
              return (
                <div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>모임 테마별로</p>
                      <p>공간을 찾아보세요</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>기념일, 촬영, 친목모임 등 테마 키워드를</p>
                      <p>통해 딱 맞는 공간을 쉽게 찾을 수 있어요</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>생생한 블로그 리뷰로</p>
                      <p>공간 미리보기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>이미 공간을 이용해 본 블로거들의</p>
                      <p>생생한 공간 후기를 통해</p>
                      <p>확신을 가지고 예약하세요!</p>
                    </div>
                  </div>
                  <div className={classNames(styles.component2__1)}>
                    <div className={styles.component2__1__label1}>
                      <p>영상을 통해 공간의</p>
                      <p>다양한 이용 팁 챙기기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>컨셉별 영상을 미리 확인하고</p>
                      <p>공간을 매력적으로 이용할 수 있는</p>
                      <p>다양한 팁을 챙겨가세요!</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>오늘 바로 이용할 때</p>
                      <p>특가로 예약하기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>오랜만에 친구들과 모였는데,</p>
                      <p>갈 곳이 마땅하지 않으신가요?</p>
                      <p>특가로 예약하고, 오늘 바로 이용하세요</p>
                    </div>
                  </div>
                </div>
              );
            } else if (state.phoneSection == 3) {
              return (
                <div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>모임 테마별로</p>
                      <p>공간을 찾아보세요</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>기념일, 촬영, 친목모임 등 테마 키워드를</p>
                      <p>통해 딱 맞는 공간을 쉽게 찾을 수 있어요</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>생생한 블로그 리뷰로</p>
                      <p>공간 미리보기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>이미 공간을 이용해 본 블로거들의</p>
                      <p>생생한 공간 후기를 통해</p>
                      <p>확신을 가지고 예약하세요!</p>
                    </div>
                  </div>
                  <div
                    className={classNames(styles.component2__1, styles.none)}
                  >
                    <div className={styles.component2__1__label1}>
                      <p>영상을 통해 공간의</p>
                      <p>다양한 이용 팁 챙기기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>컨셉별 영상을 미리 확인하고</p>
                      <p>공간을 매력적으로 이용할 수 있는</p>
                      <p>다양한 팁을 챙겨가세요!</p>
                    </div>
                  </div>
                  <div className={classNames(styles.component2__1)}>
                    <div className={styles.component2__1__label1}>
                      <p>오늘 바로 이용할 때</p>
                      <p>특가로 예약하기</p>
                    </div>
                    <div className={styles.component2__1__label2}>
                      <p>오랜만에 친구들과 모였는데,</p>
                      <p>갈 곳이 마땅하지 않으신가요?</p>
                      <p>특가로 예약하고, 오늘 바로 이용하세요</p>
                    </div>
                  </div>
                </div>
              );
            }
          })()}
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
