import type { NextPage } from "next";
import React, { useEffect } from "react";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "../components/MainLayout/MainLayout";
import RequestsPage from "../src/pages/requests/requests-page";
import Button from "../components/Buttons/Button";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import {
  getMyRequests,
  getRequests
} from "../src/store/actions/requestActions";
import RequestsFilter from "../src/pages/requests/requests-filter";
import styles from "../styles/Requests.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1EA133"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "none",
            fontFamily: "Montserrat"
          },
          "&$focused $notchedOutline": {
            borderColor: "red"
          },
          "& .MuiSelect-root ~ $notchedOutline": {
            borderColor: "green"
          },
          "&$focused .MuiSelect-root ~ $notchedOutline": {
            borderColor: "orange"
          },
          "& .MuiSelect-root": {
            color: "purple"
          }
        }
      }
    }
  }
});

const Requests: NextPage = () => {
  const requests = useAppSelector(getRequests());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyRequests());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout title="Заявки" mainTitle="Страница заявок">
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <div className={styles.titlediv}>
              <h1 className={styles.pagetitle}>Заявки</h1>
              <span className={styles.breadcrumbs}>
                Диспетчерская / Мои заявки
              </span>
            </div>
            <div className={styles.buttondiv}>
              <Button bg="white">
                <Link href="/newrequest">Добавить заявку</Link>
              </Button>
            </div>
          </div>
          <RequestsFilter />
          <RequestsPage requests={requests} />
        </div>
      </MainLayout>
    </ThemeProvider>
  );
};

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async ctx => {
//     const { accessToken } = parseCookies(ctx);

//     const res = await fetch(API_URL + "/requests/my", {
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//     const requests = await res.json();
//     store.dispatch(setRequestData(requests));
//     return {
//       props: {
//         requests
//       }
//     };
//   });

export default Requests;
