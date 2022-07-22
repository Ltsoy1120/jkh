import Head from "next/head";
import React from "react";
import Header from "../Header";
import { Breadcrumbs, Typography } from "@mui/material";
import styles from "./MainLayout.module.scss";
import Menu from "../Menu";

interface MainLayoutProps {
  title: string;
  mainTitle: string;
  children: React.ReactNode;
  breadcrumbs?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  mainTitle,
  children,
  breadcrumbs,
}) => {
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
                <Typography className={styles.breadcrumbs}>
                  {breadcrumbs}
                </Typography>
              </Breadcrumbs>
            )}
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default MainLayout;
