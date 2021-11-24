import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img
            src="img/logo_green@3x.png"
            width="60px"
            className={styles._60logo}
          />
          <img
            src="img/logo_green@3x.png"
            width="48px"
            className={styles._48logo}
          />
        </div>
        <div className={styles.menuGroup}>
          <div className={styles.menu}>회사소개</div>
          <div className={styles.menu}>모임 서비스</div>
          <div className={styles.menu}>공간 서비스</div>
          <div className={styles.menuBtn}>
            <div className={styles.btnText}>문의하기</div>
          </div>
        </div>
        <div className={styles.menuToggle}>
          <img src="img/menu@3x.png" width="32px" />
        </div>
      </div>
    </div>
  );
}
