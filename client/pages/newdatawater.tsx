import type { NextPage } from "next";
import * as React from "react";
import styles from "../styles/Newdatawater.module.css";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  TextFieldProps
} from "@mui/material";
import DateSelect from "../components/Forms/DateSelect";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "../components/MainLayout/MainLayout";
import Button from "../components/Buttons/Button";

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
          "& fieldset": {
            border: "1px solid #EFF1F5",
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

const Input = withStyles(theme => ({
  root: {
    width: "100%",
    margin: 0,
    height: 37,
    [theme.breakpoints.up(500)]: {
      width: 205
    },
    "& .MuiInputLabel-root": {
      top: -9,
      color: "#C6D8E1"
    },
    "& .MuiOutlinedInput-root": {
      margin: 0,
      height: 37
    },
    "& .label.Mui-focused": {},
    "& .MuiFormControl-root": {
      border: "none",
      borderStyle: "none"
    }
  }
}))(TextField);

const Newdatawater: NextPage = () => {
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
    <MainLayout title="Мои приборы учёта" mainTitle="Приборы учёта">
      <ThemeProvider theme={theme}>
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <div className={styles.titlediv}>
              <h1 className={styles.pagetitle}>Мои приборы учёта</h1>
              <span className={styles.breadcrumbs}>
                Приборы учета / Мои приборы учета
              </span>
            </div>
          </div>
          <div className={styles.infotabs}>
            <div className={styles.labels}>
              <span className={styles.companyofficesa}>
                <Link href="№">Счётчики</Link>
              </span>
              <span className={styles.requisites}>
                <Link href="№">История показаний</Link>
              </span>
            </div>
          </div>
          <div className={styles.title}>
            Подача показаний по прибору учета ЕН123445678909 (Электроэнергия)
          </div>
          <div className={styles.greentitle}>Август 2021 года</div>
          <div className={styles.form}>
            <div className={styles.formdiv}>
              <div className={styles.inputBlockRow}>
                <div className={styles.inputBlock}>
                  <span className={styles.greyLabel}>
                    Час пик - Т1
                    <br /> (Показания в прошлом месяце: 100 000)
                  </span>
                  <FormControl variant="outlined">
                    <OutlinedInput
                      sx={{ width: 265, height: 37 }}
                      id="outlined-adornment-weight"
                      value={weight}
                      onChange={handleChanges}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight"
                      }}
                      placeholder="Введите данные..."
                    />
                  </FormControl>
                </div>
                <div className={styles.inputBlock}>
                  <span className={styles.greyLabel}>
                    Льготное время - Т2
                    <br /> (Показания в прошлом месяце: 100 000)
                  </span>
                  <FormControl variant="outlined">
                    <OutlinedInput
                      sx={{ width: 265, height: 37 }}
                      id="outlined-adornment-weight"
                      value={weight}
                      onChange={handleChanges}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight"
                      }}
                      placeholder="Введите данные..."
                    />
                  </FormControl>
                </div>
                <div className={styles.inputBlock}>
                  <span className={styles.greyLabel}>
                    Ролульготное время - Т2
                    <br /> (Показания в прошлом месяце: 100 000)
                  </span>
                  <FormControl variant="outlined">
                    <OutlinedInput
                      sx={{ width: 265, height: 37 }}
                      id="outlined-adornment-weight"
                      value={weight}
                      onChange={handleChanges}
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight"
                      }}
                      placeholder="Введите данные..."
                    />
                  </FormControl>
                </div>
                <div className={styles.inputBlock}>
                  <span className={styles.greyLabels}>
                    Дата подачи показаний <br />
                  </span>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateSelect
                      onChange={(newValue: Date | null) => {
                        setValue(newValue);
                      }}
                      value={value}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className={styles.controlBlock}>
                <div className={styles.buttonbox}>
                  <div className={styles.button}>Сохранить</div>
                </div>
                <div className={styles.buttondiv}>
                  {" "}
                  <Button bg="white" width={145}>
                    Отмена
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </MainLayout>
  );
};

export default Newdatawater;
