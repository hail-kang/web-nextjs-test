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
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          type="image/ico"
          sizes="16x16"
          href="/favicon_16.ico"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="24x24"
          href="/favicon_24.ico"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="/favicon_32.ico"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="48x48"
          href="/favicon_48.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon_128.png"
        />
        <link
          rel="icon"
          type="image/ico"
          sizes="256x256"
          href="/favicon_256.ico"
        />
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
