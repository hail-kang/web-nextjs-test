import styles from "../styles/Section1.module.css";
import classNames from "classnames";

export default function Section1() {
  return (
    <div className={styles.section} id="section1">
      <div className={styles.content}>
        <div className={styles.component1}>
          <div className={styles.component1__label1}>
            <p>누구나, 쉽게</p>
            <p>모일 수 있도록</p>
          </div>
          <div className={classNames(styles.component1__label2, "_web")}>
            <p>여행자끼리, 동네친구끼리</p>
            <p>모임을 쉽게 만들고, 참여하고,</p>
            <p>공간도 예약할 수 있어요.</p>
          </div>

          <div className={classNames(styles.component1__label2, "_tablet")}>
            <p>여행자끼리, 동네친구끼리 모임을 쉽게</p>
            <p>만들고, 참여하고, 공간도 예약할 수 있어요.</p>
          </div>

          <div className={classNames(styles.component1__label2, "_mobile")}>
            <p>여행자끼리, 동네친구끼리 모임을 쉽게</p>
            <p>만들고, 참여하고, 공간도 예약할 수 있어요.</p>
          </div>

          <div className={styles.component1__btnGroup}>
            <a
              href="https://play.google.com/store/apps/details?id=com.moyo"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.component1__marketBtn}>
                <div className={styles.component1__marketBtn__googleIcon}></div>
                <div className={styles.component1__marketBtn__text}>
                  Google Play
                </div>
              </div>
            </a>
            <a
              href="https://apps.apple.com/kr/app/%EB%AA%A8%EC%97%AC/id1531678550"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.component1__marketBtn}>
                <div className={styles.component1__marketBtn__appleIcon}></div>
                <div className={styles.component1__marketBtn__text}>
                  App Store
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.component2}></div>
      </div>
    </div>
  );
}
