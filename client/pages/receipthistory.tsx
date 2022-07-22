import type { NextPage } from "next";
import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import styles from "../styles/Receipthistory.module.css";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
  SelectChangeEvent
} from "@mui/material";
import DateSelect from "../components/Forms/DateSelect/DateSelect";
import SimpleSelect from "../components/Forms/SimpleSelect";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "../components/MainLayout/MainLayout";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#1EA133"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "1px solid #EFF1F5",
          "& fieldset": {
            border: "none",
            fontFamily: "Montserrat"
          },
          "&$focused $notchedOutline": {
            border: "none"
          },
          "& .MuiSelect-root ~ $notchedOutline": {
            border: "none"
          },
          "&$focused .MuiSelect-root ~ $notchedOutline": {
            border: "none"
          },
          "& .MuiSelect-root": {
            border: "none"
          }
        },
        input: {
          color: "black",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "19px"
        }
      }
    }
  }
});

const Receipthistory: NextPage = () => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [age, setAge] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value);
  };
  return (
    <MainLayout title="Мои квитанции" mainTitle="Страница заявок">
      <ThemeProvider theme={theme}>
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <div className={styles.titlediv}>
              <h1 className={styles.pagetitle}>История платежей</h1>
              <span className={styles.breadcrumbs}>
                Квитанции и оплата / Мои квитанции
              </span>
            </div>
            <div className={styles.alertWindow}>
              <div className={styles.alertWindowMessage}>
                Внимание! <br />
                По Вашему лицевому счету имеется задолженность
              </div>
              <div className={styles.alertWindowNumber}>100 ₽</div>
            </div>
          </div>

          <div className={styles.formblock}>
            <div className={styles.firstRow}>
              <div className={styles.createDate}>
                <span className={styles.createDateLabel}>Дата создания</span>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateSelect
                    onChange={(newValue: Date | null) => {
                      setValue(newValue);
                    }}
                    value={value}
                  />
                </LocalizationProvider>
              </div>
              <div className={styles.createDate}>
                <SimpleSelect
                  data={[]}
                  title="Статус"
                  placeholder="Выберите из списка"
                />
              </div>
              <div className={styles.createDate}>
                <SimpleSelect
                  data={[]}
                  title="Терминал оплаты"
                  placeholder="Выберите из списка"
                />
              </div>

              <div className={styles.submitBox}>
                <div className={styles.buttonbox}>
                  <button className={styles.button}>Найти</button>
                </div>
                <span className="secondaryLabel">Сбросить фильтр</span>
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.createDate}>
                <span className={styles.createDateLabel}>
                  Назначение платежа
                </span>
                <div className={styles.inputBlockRow}>
                  <FormControl variant="outlined">
                    <OutlinedInput
                      sx={{
                        width: 455,
                        height: 37,
                        border: "1px solid #EFF1F5",
                        background: "#fff"
                      }}
                      id="outlined-adornment-weight"
                      value={weight}
                      onChange={handleChanges}
                      endAdornment={
                        <InputAdornment position="end"></InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight"
                      }}
                      placeholder="Введите данные..."
                    />
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.infoblock}>
            <div className={styles.table}>
              <div className={styles.tablehead}>
                <div className={styles.tnumber}>Создан</div>
                <div className={styles.tdate}>Проведён</div>
                <div className={styles.ttype}>Назначение</div>
                <div className={styles.ttext}>Статус оплаты</div>
                <div className={styles.tauthor}>Сумма</div>
              </div>
              <div className={styles.tableinfo}>
                <div className={styles.tableitem}>
                  <div className={styles.tnumber}>26.05.2021 13:00</div>

                  <div className={styles.tdate}>
                    <span>26.05.2021 13:05</span>
                  </div>
                  <div className={styles.ttype}>
                    <span>Горячая вода апрель 2021</span>
                  </div>

                  <div className={styles.ttext}>
                    <button className={styles.new}>На проверке</button>
                  </div>
                  <div className={styles.tauthor}>
                    <span>1 680</span>
                  </div>
                </div>
              </div>
              <div className={styles.tableinfo}>
                <div className={styles.tableitem}>
                  <div className={styles.tnumber}>26.05.2021 13:00</div>

                  <div className={styles.tdate}>
                    <span>26.05.2021 13:05</span>
                  </div>
                  <div className={styles.ttype}>
                    <span>Горячая вода апрель 2021</span>
                  </div>

                  <div className={styles.ttext}>
                    <button className={styles.done}>Оплачена</button>
                  </div>
                  <div className={styles.tauthor}>
                    <span>1 680</span>
                  </div>
                </div>
              </div>
              <div className={styles.tableinfo}>
                <div className={styles.tableitem}>
                  <div className={styles.tnumber}>26.05.2021 13:00</div>

                  <div className={styles.tdate}>
                    <span>26.05.2021 13:05</span>
                  </div>
                  <div className={styles.ttype}>
                    <span>Горячая вода апрель 2021</span>
                  </div>

                  <div className={styles.ttext}>
                    <button className={styles.done}>Оплачена</button>
                  </div>
                  <div className={styles.tauthor}>
                    <span>1 680</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </MainLayout>
  );
};

export default Receipthistory;
