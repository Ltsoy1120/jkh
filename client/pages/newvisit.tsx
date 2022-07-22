import type { NextPage } from "next";
import { styled } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import styles from "../styles/Newvisit.module.css";
import { withStyles } from "@material-ui/core/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField
} from "@mui/material";
import Lock from "../ui/icons/lock";
import PlusIcon from "../ui/icons/plusicon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainLayout from "../components/MainLayout/MainLayout";
import VisitDateSelect from "../src/pages/newvisit/visit-data-select";
import {
  createVisit,
  getVisitsByDate
} from "../src/store/actions/visitActions";
import { useAppDispatch, useAppSelector } from "../src/store/hooks";
import VisitTimeSelect from "../src/pages/newvisit/visit-time-select";
import { offices, visitTopics } from "../utils/constants";
import SimpleSelect from "../components/Forms/SimpleSelect";
import Button from "../components/Buttons/Button";
import { IVisitFormData } from "../src/models/IVisit";

const Input = withStyles(theme => ({
  root: {
    width: "100%",
    margin: 0,
    height: 82,
    [theme.breakpoints.up(500)]: {
      width: 455
    },
    "& .label.Mui-focused": {},
    "& .MuiFormControl-root": {
      border: "none",
      borderStyle: "none"
    },
    "& .MuiSvgIcon-root": {}
  }
}))(TextField);

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

const NewVisit: NextPage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(state => state.users.userData);
  console.log("userData", userData);
  const initVisit = {
    office: "",
    date: "",
    time: "",
    topic: "",
    visiterName: userData ? userData.lastName + " " + userData.name : "",
    visiterPhone: userData ? userData.phone : "",
    address: userData ? userData.address : "",
    homeowner: userData ? userData._id : "",
    text: "",
    file: ""
  };
  const [state, setState] = useState<IVisitFormData>(initVisit);
  const [date, setDate] = useState<Date | null>(new Date());
  const [filename, setFilename] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const homeownerFullname = `${userData?.lastName} ${userData?.name}`;
  useEffect(() => {
    dispatch(getVisitsByDate(state.date));
  }, [dispatch, state.date]);
  let dayData = moment(date).format("ddd");
  switch (dayData) {
    case "Mon":
      dayData = "понедельник";
      break;
    case "Tue":
      dayData = "вторник";
      break;
    case "Wed":
      dayData = "среду";
      break;
    case "Thu":
      dayData = "четверг";
      break;
    case "Fri":
      dayData = "пятницу";
      break;
  }
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
  const handleVisitDateSelect = (newValue: Date) => {
    setDate(newValue);
    const date = moment(newValue).format("DD.MM.YYYY");
    setState(prevState => ({
      ...prevState,
      date
    }));
  };
  const handleVisitTimeSelect = (time: string) => {
    setState(prevState => ({
      ...prevState,
      time
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    const formData = new FormData();
    formData.append("office", state.office);
    formData.append("date", state.date);
    formData.append("time", state.time);
    formData.append("topic", state.topic);
    formData.append("visiterName", state.visiterName);
    formData.append("visiterPhone", state.visiterPhone);
    formData.append("address", state.address);
    formData.append("homeowner", state.homeowner);
    state.text && formData.append("text", state.text);
    state.file && formData.append("file", state.file);

    await createVisit(formData);
  };

  return (
    <MainLayout title="Запись на приём" mainTitle="Запись на приём">
      <div className={styles.content}>
        <div className={styles.titleblock}>
          <div className={styles.titlediv}>
            <h1 className={styles.pagetitle}>Запись на прием</h1>
            <span className={styles.breadcrumbs}>
              Посетить УК / Записать на прием
            </span>
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formdiv}>
            <form onSubmit={handleSubmit}>
              <h5 className={styles.title}>Информация об офисе компании</h5>
              <div className={styles.inputBlock}>
                <SimpleSelect
                  title="Офис"
                  placeholder="Выберите из списка"
                  data={offices}
                  name="office"
                  value={state.office}
                  onChange={handleChange}
                  width={265}
                />
              </div>
              <h5 className={styles.title}>
                Запись на <span className={styles.green}>МАЙ</span>
              </h5>
              <span className={styles.greyLabel}>
                *Приемные дни в данном месяце
                <br /> выделены зеленым цветом
              </span>
              <div className={styles.calendarBlock}>
                <VisitDateSelect
                  value={date}
                  onChange={handleVisitDateSelect}
                />
                <VisitTimeSelect
                  value={state.time}
                  date={state.date}
                  onChange={handleVisitTimeSelect}
                />
              </div>
              <h5 className={styles.bigtitle}>
                Записать на {dayData} {state.date}{" "}
                {state.time && `в ${state.time}`}
              </h5>
              <div className={styles.inputBlock}>
                <SimpleSelect
                  title="Тема приёма"
                  placeholder="Выберите из списка"
                  data={visitTopics}
                  width={265}
                  name="topic"
                  value={state.topic}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputBlock}>
                <span className={styles.greyLabel}>ФИО посетителя</span>
                <OutlinedInput
                  name="visiterName"
                  value={state.visiterName}
                  onChange={handleChange}
                  required
                  sx={{ width: 265, height: 37, background: "white" }}
                />
              </div>
              <div className={styles.inputBlock}>
                <span className={styles.greyLabel}>Контактный телефон</span>
                <OutlinedInput
                  name="visiterPhone"
                  value={state.visiterPhone}
                  onChange={handleChange}
                  required
                  sx={{ width: 265, height: 37, background: "white" }}
                />
              </div>
              <div className={styles.inputBlocks}>
                <div className={styles.inputBlock}>
                  <span className={styles.greyLabel}>Адрес</span>
                  <OutlinedInput
                    value={state.address}
                    disabled
                    endAdornment={
                      <InputAdornment position="end">
                        <Lock />
                      </InputAdornment>
                    }
                    sx={{ width: 455, height: 37, background: "white" }}
                  />
                </div>
                <div className={styles.inputBlock}>
                  <span className={styles.greyLabel}>ФИО собственника</span>
                  <div className={styles.wrapInput}>
                    <OutlinedInput
                      value={homeownerFullname}
                      disabled
                      endAdornment={
                        <InputAdornment position="end">
                          <Lock />
                        </InputAdornment>
                      }
                      sx={{ width: 455, height: 37, background: "white" }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.inputBlockRow}>
                <Input
                  id="outlined-multiline-static"
                  label=""
                  multiline
                  rows={3}
                  placeholder="Введите данные..."
                  fullWidth
                  name="text"
                  value={state.text}
                  onChange={handleChange}
                />
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
              <div className={styles.controlBlock}>
                <Button type="submit" bg="green" width={150}>
                  Записаться
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewVisit;
