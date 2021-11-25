import styles from "../styles/Section2.module.css";
import classNames from "classnames";

export default function Section2() {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.component1}></div>
        <div className={styles.component2}>
          <p>혼자 여행을 떠나도 여행자들끼리 만나고,</p>
          <p>함께 경험할 수 있는 로컬 콘텐츠 프로그램</p>
        </div>
        <div className={styles.component3}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2HGyMUPQ9Pg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* <div className={styles.video}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/2HGyMUPQ9Pg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div> */}
    </div>
  );
}
