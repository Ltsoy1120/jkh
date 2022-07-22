import React, { useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "../components/MainLayout/MainLayout";
import AppealsPage from "../src/pages/appeals/appeals-page";
import { getAppeals, getMyAppeals } from "../src/store/actions/appealActions";
import styles from "../styles/Appeals.module.css";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import Button from "../components/Buttons/Button";
import AppealsFilter from "../src/pages/appeals/appeals-filter";

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
          }
        }
      }
    }
  }
});

const Appeals: NextPage = () => {
  const appeals = useAppSelector(getAppeals());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMyAppeals());
  }, [dispatch]);

  return (
    <MainLayout title="Обращения" mainTitle="Список обращений">
      <ThemeProvider theme={theme}>
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <div className={styles.titlediv}>
              <h1 className={styles.pagetitle}>Список обращений</h1>
              <span>Обращения / Список обращений</span>
            </div>
            <Button bg="white">
              <Link href="/newappeal">Добавить обращение</Link>
            </Button>
          </div>
          <AppealsFilter />
          <AppealsPage appeals={appeals} />
        </div>
      </ThemeProvider>
    </MainLayout>
  );
};

// export const getServerSideProps: GetServerSideProps =
//   wrapper.getServerSideProps(store => async ctx => {
//     const { accessToken } = parseCookies(ctx);

//     // const res = await fetch(API_URL + "/appeals/my", {
//     //   headers: {
//     //     Authorization: `Bearer ${accessToken}`
//     //   }
//     // });
//     // const appeals = await res.json();
//     // store.dispatch(setAppealsData(appeals));
//     try {
//       store.dispatch(appealsFetching());
//       const res = await fetch(API_URL + "/appeals/my", {
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       });
//       const appeals = await res.json();
//       store.dispatch(appealsFetchingSuccess(appeals));
//     } catch (error) {
//       store.dispatch(appealsFetchingError((error as Error).message));
//     }
//     return {
//       props: {}
//     };
//   });

export default Appeals;
