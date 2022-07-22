import React, { useRef, useState } from "react";
import type { NextPage } from "next";
import Router from "next/router";
import { IconButton, TextField, SelectChangeEvent } from "@mui/material";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "../components/MainLayout/MainLayout";
import styles from "../styles/Newappeal.module.css";
import PlusIcon from "../ui/icons/plusicon";
import { typeData } from "../utils/constants";
import { createAppeal } from "../src/store/actions/appealActions";
import { IAppeal } from "../src/models/IAppeal";
import SimpleSelect from "../components/Forms/SimpleSelect";
import CheckBox from "../components/CheckBox";
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
const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  fontWeight: "300",
  lineHeight: "20px",
  backgroundColor: "#ffffff",
  borderColor: "#1EA133",
  color: "#1EA133",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  width: "129px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#1EA133",
    borderColor: "#1EA133",
    boxShadow: "none",
    color: "#ffffff"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#1EA133",
    border: "none"
  },
  "&:focus": {
    boxShadow: "none",
    border: "none"
  }
});
const IcButton = styled(IconButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  fontWeight: "300",
  lineHeight: "20px",
  backgroundColor: "#ffffff",
  color: "#1EA133",
  fontFamily: "Montserrat",
  fontStyle: "normal",
  width: "37px",
  height: "37px",
  borderRadius: "50%",
  border: "none",
  marginLeft: 20,
  "&:hover": {
    backgroundColor: "#C6D8E1",
    border: "none",
    boxShadow: "none",
    color: "#ffffff"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#1EA133",
    border: "none"
  },
  "&:focus": {
    border: "none"
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    borderColor: "#fff"
  }
});

type Appeal = typeof initAppeal;
const initAppeal = {
  type: "",
  text: "",
  file: "",
  needAnswer: false
};

const Newappeal: NextPage<IAppeal> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<Appeal>(initAppeal);
  const [filename, setFilename] = useState("");

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      [e.target.name]: e.target.files ? e.target.files[0] : ""
    }));
    setFilename(e.target.files ? e.target.files[0].name : "");
  };
  const activateInput = () => {
    inputRef.current?.click();
  };

  const handleChecked = () => {
    setState(prevState => ({
      ...prevState,
      needAnswer: !state.needAnswer
    }));
  };

  const handleNewAppealCancel = () => {
    setState(initAppeal);
    Router.push("/appeals");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("type", state.type);
    formData.append("text", state.text);
    formData.append("file", state.file);
    formData.append("needAnswer", JSON.stringify(state.needAnswer));

    await createAppeal(formData);
    // dispatch(login(state.email, state.password));
  };
  return (
    <MainLayout title="Новое обращение" mainTitle="Страница создания обращения">
      <ThemeProvider theme={theme}>
        <div className={styles.content}>
          <div className={styles.titleblock}>
            <div className={styles.titlediv}>
              <h1 className={styles.pagetitle}>Новое обращение</h1>
              <span className={styles.breadcrumbs}>
                Обращения / Мои обращения / Новое обращение
              </span>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formdiv}>
              <form onSubmit={handleSubmit}>
                <div className={styles.selectWrapper}>
                  <SimpleSelect
                    title="Тип обращения"
                    placeholder="Выберите из списка"
                    data={typeData}
                    name="type"
                    value={state.type}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <div className={styles.textFieldWrapper}>
                    <div className={styles.greyLabel}>Текст обращения</div>
                    <TextField
                      sx={{ color: "#C6D8E1", border: "1px solid #EFF1F5" }}
                      id="outlined-multiline-static"
                      label=""
                      multiline
                      rows={3}
                      placeholder="Например: потёк кран"
                      fullWidth
                      name="text"
                      value={state.text}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.bigGreyLabel}>Добавить документы</div>
                  <IcButton
                    disableFocusRipple
                    disableRipple
                    onClick={activateInput}
                  >
                    <PlusIcon viewBox="0 0 37 37" className={styles.plusIcon} />
                  </IcButton>
                  <input
                    type="file"
                    name="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    ref={inputRef}
                  />
                  {filename && (
                    <input
                      disabled
                      style={{
                        border: "none",
                        marginLeft: "10px",
                        background: "inherit"
                      }}
                      value={filename}
                      onClick={activateInput}
                    />
                  )}
                </div>
                <CheckBox
                  label="Ответ на данное обращение не требуется"
                  checked={state.needAnswer}
                  onChange={handleChecked}
                />
                <div className={styles.controlBlock}>
                  <Button type="submit" bg="green" width={150} mr={20}>
                    Создать
                  </Button>
                  {/* <Link href="/appeal/1">
                  <div className={styles.button}>Создать</div>
                </Link> */}
                  <Button
                    type="submit"
                    bg="white"
                    width={150}
                    onClick={handleNewAppealCancel}
                  >
                    Отмена
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </MainLayout>
  );
};

export default Newappeal;
