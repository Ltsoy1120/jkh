import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import ruLocale from "date-fns/locale/ru";
import isWeekend from "date-fns/isWeekend";
import styles from "./style.module.scss";
import { TextField } from "@mui/material";

type DaySchedule = {
  isReception: Boolean;
  timeOne: {
    start: String;
    end: String;
  };
  timeTwo: {
    start: String;
    end: String;
  };
};
type Schedule = {
  Mo: DaySchedule;
  Tu: DaySchedule;
  We: DaySchedule;
  Th: DaySchedule;
  Fr: DaySchedule;
  Sa: DaySchedule;
  Su: DaySchedule;
};

interface propsDateSelect {
  onChange: any;
  value?: Date | null;
  schedule: Schedule | null;
}

const ReceptionDateSelect = ({
  onChange,
  value,
  schedule,
}: propsDateSelect) => {
  function disableWeekends(value: Date) {
    let disableDays = [];
    Object.keys(schedule).forEach((key) => {
      if (
        schedule[key].timeOne.start === "" &&
        schedule[key].timeOne.end === "" &&
        schedule[key].timeTwo.start === "" &&
        schedule[key].timeTwo.end === ""
      ) {
        if (key === "Mo") {
          disableDays.push(1);
        } else if (key === "Tu") {
          disableDays.push(2);
        } else if (key === "We") {
          disableDays.push(3);
        } else if (key === "Th") {
          disableDays.push(4);
        } else if (key === "Fr") {
          disableDays.push(5);
        } else if (key === "Sa") {
          disableDays.push(6);
        } else {
          disableDays.push(0);
        }
      }
    });
    return disableDays.includes(value.getDay());
  }

  return (
    <div className={styles.calendar}>
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
        <StaticDatePicker<Date>
          displayStaticWrapperAs="desktop"
          minDate={new Date()}
          shouldDisableDate={schedule ? disableWeekends : isWeekend}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
export default ReceptionDateSelect;
