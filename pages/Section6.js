import styles from "../styles/Section6.module.css";
import classNames from "classnames";

export default function Section6() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.component1}>
          <p>모여 앱을</p>
          <p>더 자세히 알고 싶다면?</p>
        </div>
        <div className={styles.component2}>
          <div className={styles.component2__1}>
            <div className={styles.component2__item1}></div>
            <div className={styles.component2__item2}></div>
            <div className={styles.component2__item3}></div>
          </div>
          <div className={styles.component2__2}>
            <div className={styles.component2__item4}></div>
            <div className={styles.component2__item5}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
