import ruLocale from "date-fns/locale/ru";
import { withStyles } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import CalcIcon from "../../../ui/icons/iconcalc";
import { isWeekend } from "date-fns";
import { FormHelperText } from "@mui/material";
import styles from "./DateSelect.module.scss";

interface propsDateSelect {
  onChange: any;
  value?: Date | null;
}

const Input = withStyles(theme => ({
  root: {
    width: "100%",
    margin: 0,
    height: 37,
    [theme.breakpoints.up(500)]: {
      width: 265
    },
    background: "#fff",
    borderRadius: "4px",
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

const DateSelect = ({ onChange, value }: propsDateSelect) => {
  return (
    <div className={styles.calendar}>
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
        <DatePicker<Date>
          value={value}
          mask={"__.__.____"}
          inputFormat="dd.MM.yyyy"
          onChange={onChange}
          shouldDisableDate={isWeekend}
          components={{
            OpenPickerIcon: CalcIcon
          }}
          renderInput={(params: TextFieldProps) => <Input {...params} />}
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

export default DateSelect;
