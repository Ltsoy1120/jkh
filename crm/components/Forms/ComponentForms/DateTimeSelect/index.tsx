import ruLocale from "date-fns/locale/ru";
import { withStyles } from "@material-ui/core";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { CalendarIcon } from "../../../icons";
import styles from "./DateSelect.module.scss";

interface propsDateSelect {
  label: string;
  onChange: (newValue: Date | null) => void;
  value?: Date | null;
  column?: boolean;
  width?: number;
  mb?: number;
  mr?: number;
}

const Input = withStyles((theme) => ({
  root: {
    width: "100%",
    margin: 0,
    height: 37,
    [theme.breakpoints.up(500)]: {
      width: 190,
    },
    background: "#fff",
    borderRadius: "4px",
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
    },
  },
}))(TextField);

const Calendar = withStyles((theme) => ({
  root: {
    "& .MuiPickersDay-today, & .Mui-selected.MuiPickersDay-root": {
      border: "none",
      color: "white",
      backgroundColor: "#1ea133",
      borderRadius: "3px",
    },
    "& .css-l0iinn": {
      border: "1px solid #EFF1F5",
      padding: "4px 5px 4px 15px",
      borderRadius: "4px",
    },
  },
}))(DateTimePicker);

const DateTimeSelect = ({
  label,
  onChange,
  value,
  column,
  width,
  mb,
  mr,
}: propsDateSelect) => {
  return (
    <div
      className={column ? styles.column : styles.row}
      style={{ marginRight: mr, marginBottom: mb, width }}
    >
      <label>{label}</label>
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
        <Calendar
          value={value}
          mask={"__.__.____ __:__"}
          inputFormat="dd.MM.yyyy HH:mm"
          onChange={onChange}
          components={{
            OpenPickerIcon: CalendarIcon,
          }}
          renderInput={(params: TextFieldProps) => (
            <Input {...params} style={{ width }} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

// const Input = withStyles(theme => ({
//   root: {
//     width: "100%",
//     margin: 0,
//     height: 37,
//     [theme.breakpoints.up(500)]: {
//       width: 265
//     },
//     background: "#fff",
//     borderRadius: "4px",
//     "& .MuiInputLabel-root": {
//       top: -9,
//       color: "#C6D8E1"
//     },
//     "& .MuiOutlinedInput-root": {
//       margin: 0,
//       height: 37
//     },
//     "& .label.Mui-focused": { outline: "none" },
//     "& .MuiFormControl-root": {
//       border: "none",
//       borderStyle: "none"
//     }
//   }
// }))(TextField);

// const Calender = withStyles(theme => ({
//   root: {
//     paddingBottom: "60px !important",
//     "& .MuiPaper": {
//       position: "relative",
//       paddingBottom: "60px !important"
//     },
//     "& ..css-epd502": {
//       position: "relative",
//       paddingBottom: "60px !important",
//       backgroundColor: "yellow"
//     },
//     // "& .MuiPickersDay-today, & .Mui-selected.MuiPickersDay-root": {
//     //   border: "none",
//     //   color: "white",
//     //   backgroundColor: "#1ea133",
//     //   borderRadius: "3px"
//     // },
//     "& .css-l0iinn": {
//       border: "1px solid #EFF1F5",
//       padding: "4px 5px 4px 15px",
//       borderRadius: "4px"
//     }
//   },
//   "& .css-epd502": {
//     paddingBottom: "60px !important",
//     backgroundColor: "yellow"
//   }
// }))(DateTimePicker);

// const DateSelect = ({ onChange, value }: propsDateSelect) => {
//   return (
//     <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
//       <ThemeProvider theme={theme}>
//         <Calender
//           value={value}
//           mask={"__.__.____ __:__"}
//           inputFormat="dd.MM.yyyy HH:mm"
//           onChange={onChange}
//           ToolbarComponent={() => (
//             <div className={styles.toolbar}>
//               <p>Время</p>
//               <div className={styles.timetoolbar}>
//                 <TimePicker
//                   ampm={false}
//                   // openTo="hours"
//                   // views={["hours"]}
//                   mask={"__"}
//                   inputFormat="HH"
//                   value={value}
//                   onChange={onChange}
//                   renderInput={params => <TextField {...params} />}
//                 />
//                 <div className={styles.point}> : </div>
//                 <TimePicker
//                   ampm={false}
//                   value={value}
//                   openTo="minutes"
//                   onChange={onChange}
//                   views={["minutes"]}
//                   mask={"__"}
//                   inputFormat="mm"
//                   renderInput={params => <TextField {...params} />}
//                 />
//               </div>
//             </div>
//           )}
//           components={{
//             OpenPickerIcon: CalcIcon
//           }}
//           renderInput={props => <Input {...props} />}
//         />
//       </ThemeProvider>
//     </LocalizationProvider>
//   );
// };

export default DateTimeSelect;
