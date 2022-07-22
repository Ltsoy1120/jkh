import ruLocale from "date-fns/locale/ru";
import { withStyles } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { isWeekend } from "date-fns";
import { CalendarIcon } from "../../../icons";
import styles from "./DateSelect.module.scss";

interface propsDateSelect {
  label: string;
  name?: string;
  onChange: (newValue: Date, name: string) => void;
  value?: Date | null;
  required?: boolean;
  disabled?: boolean;
  row?: boolean;
  width?: number;
  mr?: number;
  mb?: number;
}

const Input = withStyles((width) => ({
  root: {
    background: "#fff",
    borderRadius: "4px",
    "& .MuiInputLabel-root": {
      color: "#C6D8E1",
    },
    "& .MuiOutlinedInput-root": {
      height: 37,
      width: width ? width : 265,
    },
  },
}))(TextField);

const DateSelect = ({
  label,
  name,
  onChange,
  value,
  required,
  disabled,
  row,
  width = 265,
  mr,
  mb,
}: propsDateSelect) => {
  return (
    <div
      className={row ? styles.row : styles.column}
      style={{ width, marginRight: mr, marginBottom: mb }}
    >
      <label>{label}</label>
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
        <DatePicker<Date>
          value={value}
          mask={"__.__.____"}
          inputFormat="dd.MM.yyyy"
          onChange={(newvalue) => onChange(newvalue, name)}
          components={{
            OpenPickerIcon: CalendarIcon,
          }}
          disabled={disabled}
          renderInput={(params: TextFieldProps) => (
            <Input required={required} {...params} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateSelect;
