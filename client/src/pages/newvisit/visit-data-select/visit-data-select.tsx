import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import ruLocale from "date-fns/locale/ru";
import isWeekend from "date-fns/isWeekend";
import styles from "./visit-data-select.module.scss";
import { TextField } from "@mui/material";

interface propsDateSelect {
  onChange: any;
  value?: Date | null;
}

const VisitDateSelect = ({ onChange, value }: propsDateSelect) => {
  return (
    <div className={styles.calendar}>
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
        <StaticDatePicker<Date>
          displayStaticWrapperAs="desktop"
          minDate={new Date()}
          shouldDisableDate={isWeekend}
          value={value}
          onChange={onChange}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
export default VisitDateSelect;
