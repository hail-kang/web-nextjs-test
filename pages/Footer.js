import styles from "../styles/Footer.module.css";
import classNames from "classnames";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.component1}></div>
      <div className={styles.component2}>
        <div className={styles.label}>사업자</div>
        <div className={styles.text}>메이스(MASE)</div>
      </div>
      <div className={styles.component3}>
        <div className={styles.component3__1}>
          <div className={styles.label}>대표</div>
          <div className={styles.text}>강호명</div>
        </div>
        <div className={styles.component3__2}>
          <div className={styles.label}>주소</div>
          <div className={styles.text}>서울시 마포구 연남로19, 102호</div>
        </div>
      </div>
      <div className={styles.component4}>
        <div className={styles.label}>고객문의</div>
        <div className={styles.text}>moyoapp@naver.com</div>
      </div>
      <div className={styles.component5}>
        <div className={styles.component5__1}>
          <div className={styles.label}>사업자등록번호</div>
          <div className={styles.text}>403-61-00234</div>
        </div>
        <div className={styles.component5__2}>
          <div className={styles.label}>통신판매업신고번호</div>
          <div className={styles.text}>2020-서울마포-1560호</div>
        </div>
      </div>
      <div className={styles.component6}>©모여 ALL RIGHTS RESERVED</div>
    </div>
  );
}
