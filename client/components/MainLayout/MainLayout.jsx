import Head from "next/head";
import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styles from "./MainLayout.module.scss";

export default function MainLayout({ title, mainTitle, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <Menu />

        <div className={styles.wrap}>
          <Header />
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
