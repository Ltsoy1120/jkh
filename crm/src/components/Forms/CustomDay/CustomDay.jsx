import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@mui/material";

const Calender = withStyles((theme) => ({
  root: {
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
    "& .MuiPickerStaticWrapper": {
      backgroundColor: "red",
      boxShadow: "1px 1px 25px rgb(136 165 191 / 15%)",
      borderRadius: "4px",
    },
  },
}))(StaticDatePicker);

export const CustomDay = () => {
  const [value, setValue] = useState(new Date());
  const boxShadow = "1px 1px 25px rgba(136, 165, 191, 0.15)";

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Calender
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        // renderInput={(params) => <TextField sx={{boxShadow}} {...params} />}
        renderInput={(params) => (
          <Paper sx={{ width: width, padding: "10px", boxShadow }} {...params}>
            {" "}
            {params.inputProps.value}
          </Paper>
        )}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
};
