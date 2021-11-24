import styles from "../styles/Header.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function Header() {
  let [state, setState] = useState({
    menuActive: false,
  });

  function toggleMenuActive() {
    setState({
      menuActive: state.menuActive ^ true,
    });
  }

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
        {state.menuActive ? (
          <div className={classNames(styles.menuGroup, styles.active)}>
            <div className={styles.menu}>회사소개</div>
            <div className={styles.menu}>모임 서비스</div>
            <div className={styles.menu}>공간 서비스</div>
            <div className={styles.menuBtn}>
              <div className={styles.btnText}>문의하기</div>
            </div>
          </div>
        ) : (
          <div className={styles.menuGroup}>
            <div className={styles.menu}>회사소개</div>
            <div className={styles.menu}>모임 서비스</div>
            <div className={styles.menu}>공간 서비스</div>
            <div className={styles.menuBtn}>
              <div className={styles.btnText}>문의하기</div>
            </div>
          </div>
        )}
        {state.menuActive ? (
          <div className={styles.menuToggle} onClick={toggleMenuActive}>
            <img src="img/close@3x.png" width="32px" />
          </div>
        ) : (
          <div className={styles.menuToggle} onClick={toggleMenuActive}>
            <img src="img/menu@3x.png" width="32px" />
          </div>
        )}
      </div>
    </div>
  );
}
