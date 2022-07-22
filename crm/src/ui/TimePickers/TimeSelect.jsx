import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DateTimePicker } from "@mui/lab";
import FormHelperText from "@mui/material/FormHelperText";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { styled } from "@mui/system";

export const TimeSelect = ({ label, placeholder = "00.00.00 в 00:00" }) => {
  const regexSlash = /\b\//g;
  const regexPoints = /\b\:/g;
  const now = Date.now();

  const StyledDateTimePicker = styled(DateTimePicker)((props) => {
    return {
      color: "#C6D8E1",
      fontSize: "30px",
    };
  });

  const StyledTextField = styled(
    TextField,
    {}
  )(({ theme }) => ({
    "& .MuiOutlinedInput-root, & .MuiOutlinedInput-input::placeholder": {
      fontSize: "14px",
      backgroundColor: "#fff",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      border: "#eff1f5 1px solid",
    },
    "& .MuiOutlinedInput-input::placeholder": {
      color: "#C6D8E1",
    },
  }));

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <FormHelperText>{label}</FormHelperText>

        <StyledDateTimePicker
          value={null}
          onChange={() => ""}
          ampm
          mask={"__.__.__ в __.__"}
          disableMaskedInput={false}
          renderInput={(params) => {
            const formatStringDate = params.inputProps.value
              .split(" ")
              .splice(0, 2)
              .join(" в ")
              .replace(regexSlash, ".")
              .replace(regexPoints, ".");
            return <StyledTextField placeholder={placeholder} {...params} inputProps={{ value: formatStringDate }} />;
          }}
          components={{
            OpenPickerIcon: () => <AccessTimeFilledIcon color="icon" />,
          }}
        />
      </LocalizationProvider>
    </div>
  );
};
