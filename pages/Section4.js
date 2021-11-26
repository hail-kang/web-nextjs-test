import styles from "../styles/Section4.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function Section4() {
  let [state, setState] = useState({
    page: 1,
  });

  let saveX = 0;

  function setSaveX(e) {
    saveX = e.changedTouches[0].clientX;
  }

  function limitedScroll(e) {
    if (window.innerWidth <= 768) {
      let moveX = e.changedTouches[0].clientX;
      let box = document.getElementsByClassName(styles.component2)[0];
      let scrollPosition = box.scrollLeft;
      box.scrollLeft = scrollPosition + (saveX - moveX);
      saveX = moveX;
    }
  }
  function discontinuousScroll() {
    let box = document.getElementsByClassName(styles.component2)[0];
    let boxSize = box.clientWidth;
    let unitSize = 240;

    let scrollPosition = box.scrollLeft;
    let centerPosition = scrollPosition + boxSize / 2;

    let number = parseInt(centerPosition / unitSize);

    if (number < 1) {
      number = 1;
    } else if (number > 3) {
      number = 3;
    }

    if (number >= 1 && number <= 3) {
      box.scroll({
        left: parseInt(number * unitSize - (boxSize - unitSize) / 2),
        behavior: "smooth",
      });
    }
    setState({ page: number });
  }

  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.component1}>
          <p>모일 수 있는 공간은</p>
          <p>어떻게 찾을까?</p>
        </div>
        <div
          className={styles.component2}
          onTouchStart={setSaveX}
          onTouchMove={limitedScroll}
          onTouchEnd={discontinuousScroll}
        >
          <div className={styles.component2__item}></div>

          <div className={styles.component2__item}>
            <div className={styles.component2__item__icon1}></div>
            <div className={styles.component2__item__text}>
              <p>모임 테마에 딱 맞는</p>
              <p>공간을 찾고 싶어</p>
            </div>
          </div>

          <div className={styles.component2__item}>
            <div className={styles.component2__item__icon2}></div>
            <div className={styles.component2__item__text}>
              <p>공간 후기를 보고</p>
              <p>결정하고 싶은데</p>
            </div>
          </div>

          <div className={styles.component2__item}>
            <div className={styles.component2__item__icon3}></div>
            <div className={styles.component2__item__text}>
              <p>영상으로 보면 정확하게</p>
              <p>판단할 수 있을 것 같은데</p>
            </div>
          </div>

          <div className={styles.component2__item}></div>
        </div>
        <div className={styles.component3}>
          <span className={styles.component3__presentPage}>{state.page}</span>
          <span className={styles.component3__totalPage}>/3</span>
        </div>
      </div>
    </div>
  );
}
