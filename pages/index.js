import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>모여</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
      <script
        defer
        src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"
      ></script>
    </div>
  );
}
