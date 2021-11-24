import styles from "../styles/Main.module.css";

import Section1 from "./Section1";
import Section2 from "./Section2";

export default function Main() {
  return (
    <div className={styles.main}>
      <Section1 />
      <Section2 />
    </div>
  );
}
