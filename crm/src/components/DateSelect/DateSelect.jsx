import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { withStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import styles from "./style.module.scss";
import TimePicker from "@mui/lab/TimePicker";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";
import { CalcIcon } from "../Calendar/CalendarIcon";
import FormHelperText from "@mui/material/FormHelperText";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Input = withStyles((theme) => ({
  root: {
    width: "100%",
    margin: 0,
    height: 37,
    backgroundColor: "white",
    [theme.breakpoints.up(500)]: {
      width: 205,
    },
    "& .MuiInputLabel-root": {
      top: -9,
      color: "#C6D8E1",
    },
    "& .MuiOutlinedInput-root": {
      margin: 0,
      height: 37,
    },
    "& .label.Mui-focused": {},
    "& .MuiFormControl-root": {
      border: "none",
      borderStyle: "none",
      width: "265px",
    },
  },
}))(TextField);

const Calender = withStyles((theme) => ({
  root: {
    "&": {
      paddingBottom: "60px !important",
    },
    "& .MuiPaper": {
      position: "relative",
      paddingBottom: "60px !important",
    },
    "& .MuiPickersDay-today": {
      border: "none",
      color: "white",
      backgroundColor: "#1ea133 !important",
      borderRadius: "3px",
    },
    "& .css-l0iinn": {
      border: "1px solid #EFF1F5",
      padding: "4px 5px 4px 15px",
      borderRadius: "4px",
    },
    "& .PrivatePickersFadeTransitionGroup-root:first-child": {
      display: "none",
    },
  },
}))(DatePicker);

const Text = withStyles((theme) => ({
  root: {
    "& .MuiInputAdornment-outlined": {
      display: "none",
    },
    "& .MuiInputBase-formControl": {
      paddingRight: "0px !important",
      border: "1px solid #EFF1F5",
    },
    "& .MuiInputBase-inputAdornedEnd": {
      height: "auto",
      padding: "8px",
    },
  },
}))(TextField);

export const DateSelect = ({ onChange, value = "", label = "выберите дату", helperText }) => {
  const [currentView, setCurrentView] = useState("day");
  const [date, setDate] = useState(new Date(value));

  const handleHours = (hours) => {
    date.setHours(hours?.getHours());
    setDate(date);
  };
  const handleMinutes = (minutes) => {
    date.setMinutes(minutes?.getMinutes());
    setDate(date);
  };
  const handleDays = (day) => {
    date.setDate(day.getDate());
    setDate(date);
  };
  const handleMonth = (month) => {
    date.setMonth(month.getMonth());
    setDate(date);
  };
  const handleYear = (year) => {
    date.setFullYear(year.getFullYear());
    setDate(date);
  };

  return (
    <div>
      <FormHelperText>{helperText}</FormHelperText>
      <LocalizationProvider sx={{ display: "flex", flexDirection: "row" }} dateAdapter={AdapterDateFns}>
        <Calender
          sx={{ marginTop: "200px !important" }}
          value={date}
          onYearChange={handleYear}
          onMonthChange={handleMonth}
          onChange={handleDays}
          onClose={() => setCurrentView("day")}
          views={["day", "month", "year"]}
          showToolbar
          openTo="day"
          onViewChange={() => {
            setCurrentView("year");
          }}
          view={currentView}
          ToolbarComponent={() => (
            <div className={styles.toolbar}>
              <p>Время</p>
              <div className={styles.timetoolbar}>
                <TimePicker
                  ampm={false}
                  openTo="hours"
                  views={["hours"]}
                  inputFormat="HH"
                  value={date}
                  onChange={handleHours}
                  renderInput={(params) => <Text {...params} />}
                />
                <div className={styles.point}> : </div>
                <TimePicker
                  ampm={false}
                  value={date}
                  openTo="minutes"
                  onChange={handleMinutes}
                  views={["minutes"]}
                  inputFormat="mm"
                  renderInput={(params) => <Text {...params} />}
                />
                <button className={styles.btn} onClick={() => onChange(date)}>
                  OK
                </button>
              </div>
            </div>
          )}
          // label={label}
          components={{
            SwitchViewIcon: () => null,
            RightArrowButton: () => null,
            LeftArrowButton: () => null,
            SwitchViewButton: (props) => {
              return (
                <div>
                  <Button
                    onClick={(e) => {
                      setCurrentView("month");
                      e.stopPropagation();
                    }}
                  >
                    {monthNames && monthNames[date?.getMonth()]}
                  </Button>
                </div>
              );
            },
            OpenPickerIcon: CalcIcon,
          }}
          renderInput={(params) => (
            <Input sx={{ m: 1, minWidth: 265, height: 37, margin: 0 }} {...params} className={styles.createDateInput} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
