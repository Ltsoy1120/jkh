import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Paper } from "@mui/material";

const Time = withStyles((theme) => ({
  root: {
    MuiInputAdornment: {
      display: "none",
    },
  },
}))(TimePicker);

export const SimpleTimePicker = ({ width = 200 }) => {
  const [value, setValue] = useState(null);
  const boxShadow = "1px 1px 25px rgba(136, 165, 191, 0.15)";

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Time
        ampm={false}
        views={["hours", "minutes"]}
        inputFormat="HH:mm"
        components={{ OpenPickerIcon: () => null }}
        onChange={(newValue) => {
          console.log("");
        }}
        InputAdornmentProps={{ disabled: true, style: { display: "none", paddingRight: 0 } }}
        renderInput={(params) => (
          <Paper sx={{ width: width, padding: "10px", boxShadow }} {...params}>
            {" "}
            {params.inputProps.value}
          </Paper>
        )}
      />
    </LocalizationProvider>
  );
};
