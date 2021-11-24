import styles from "../styles/Section4.module.css";
import classNames from "classnames";

export default function Section4() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.component1}>
          <p>모일 수 있는 공간은</p>
          <p>어떻게 찾을까?</p>
        </div>
        <div className={styles.component2}>
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
        </div>
      </div>
    </div>
  );
}
