import styles from "../styles/Header.module.css";
import classNames from "classnames";
import React, { useState } from "react";

import Lottie from "react-lottie";
import * as animationData from "./data/menu.json";
//

class MenuController extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div>
        <Lottie
          options={defaultOptions}
          height={32}
          width={32}
          direction={this.props.direction}
        />
      </div>
    );
  }
}

export default function Header() {
  let [state, setState] = useState({
    menuActive: null,
  });

  function toggleMenuActive() {
    if (state.menuActive == null) {
      state.menuActive = false;
    }
    setState({
      menuActive: state.menuActive ^ true,
    });

    setTimeout(() => {
      let menu = document.querySelector(
        `.${styles.menuGroup}.${styles.deactive}`
      );
      if (menu != null) {
        menu.classList.remove(styles.deactive);
        menu.classList.add(styles.none);
      }
    }, 500);
  }

  function moveToSection(number) {
    let section = document.getElementById(`section${number}`);
    let position = section.offsetTop;
    let padding;
    if (window.innerWidth > 768) {
      padding = 80;
    } else {
      padding = 56;
    }

    window.scroll({
      top: position - padding,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.header}>
      {state.menuActive ? (
        <div className={styles.blocking} onClick={toggleMenuActive}></div>
      ) : null}
      <div className={styles.content}>
        <div className={styles.logo} onClick={() => moveToSection(1)}>
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
        <div
          className={classNames(
            styles.menuGroup,
            state.menuActive == null
              ? styles.none
              : state.menuActive
              ? styles.active
              : styles.deactive
          )}
        >
          <div
            className={classNames(
              styles.menu,
              state.menuActive ? styles.active : styles.deactive
            )}
            onClick={() =>
              window.open(
                "https://homangu.notion.site/moyo-0f854cb2e63d42e8b31c147bd9c2db2a"
              )
            }
          >
            회사소개
          </div>
          <div
            className={classNames(
              styles.menu,
              state.menuActive ? styles.active : styles.deactive
            )}
            onClick={() => moveToSection(2)}
          >
            모임 서비스
          </div>
          <div
            className={classNames(
              styles.menu,
              state.menuActive ? styles.active : styles.deactive
            )}
            onClick={() => moveToSection(4)}
          >
            공간 서비스
          </div>
          <div
            className={classNames(
              styles.menuBtn,
              state.menuActive ? styles.active : styles.deactive
            )}
            onClick={() => window.open("https://pf.kakao.com/_xhquRK")}
          >
            <div className={styles.btnText}>문의하기</div>
          </div>
        </div>
        <div className={styles.menuToggle} onClick={toggleMenuActive}>
          <MenuController
            direction={state.menuActive ? 1 : -1}
          ></MenuController>
        </div>
      </div>
    </div>
  );
}
