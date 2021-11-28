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
            <a
              href="https://www.instagram.com/_daily_moyo_/"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.component2__item1}></div>
            </a>
            <a href="https://blog.naver.com/moyoapp" target="_blank">
              <div className={styles.component2__item2}></div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=2HGyMUPQ9Pg"
              target="_blank"
            >
              <div className={styles.component2__item3}></div>
            </a>
          </div>
          <div className={styles.component2__2}>
            <a
              href="https://brunch.co.kr/@4261e7f2e761402"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.component2__item4}></div>
            </a>
            <a
              href="https://homangu.notion.site/moyo-0f854cb2e63d42e8b31c147bd9c2db2a"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.component2__item5}></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
