import Head from "next/head";
import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import styles from "./MainLayout.module.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

export default function MainLayout({ title, mainTitle, children, breadcrumbs }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.wrapper}>
        <Menu />
        <div className={styles.wrap}>
          <Header />
          <div className={styles.main}>
            <Typography
              variant="h1"
              sx={{
                marginBottom: "15px",
              }}
            >
              {mainTitle}
            </Typography>
            {breadcrumbs && (
              <Breadcrumbs separator="/">
                <Typography className={styles.breadcrumbs}>{breadcrumbs}</Typography>
              </Breadcrumbs>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
