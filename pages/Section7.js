import styles from "../styles/Section7.module.css";
import classNames from "classnames";

export default function Section7() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.component1}>
          <p>모임이 필요할 땐,</p>
          <p>모여 앱을 다운로드하세요!</p>
        </div>
        <div className={styles.component2}>
          <div className={styles.component2__btnGroup}>
            <a href="https://play.google.com/store/apps/details?id=com.moyo">
              <div className={styles.component2__marketBtn}>
                <div className={styles.component2__marketBtn__googleIcon}></div>
                <div className={styles.component2__marketBtn__text}>
                  Google Play
                </div>
              </div>
            </a>

            <a href="https://apps.apple.com/kr/app/%EB%AA%A8%EC%97%AC/id1531678550">
              <div className={styles.component2__marketBtn}>
                <div className={styles.component2__marketBtn__appleIcon}></div>
                <div className={styles.component2__marketBtn__text}>
                  App Store
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
