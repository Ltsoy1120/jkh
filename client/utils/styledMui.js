import { withStyles } from "@material-ui/core/styles";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

//FOR INPUT SELECT
export const StyledFormControl = withStyles(theme => ({
  root: {
    "&": {
      margin: "0"
    },
    "& .MuiOutlinedInput-root": {
      background: "white",
      width: "auto",
      marginBottom: "0",
      padding: "0",
      fontSize: "12px",
      lineHeight: "15px"
    },
    "& .MuiOutlinedInput-input em": {
      fontSize: "14px",
      color: "#c6d8e1",
      lineHeight: "19px",
      opacity: "0.4"
    },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, & .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5 !important"
      },
    "& .css-1wc848c-MuiFormHelperText-root": {
      margin: "0 0 10px 9px",
      fontSize: "12px",
      lineHeight: "15px",
      color: "#6b8795"
    },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#1ea133",
        borderWidth: "1px"
      },
    "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
      fontSize: "14px",
      lineHeight: "19px"
    },
    "& .MuiSvgIcon-root.MuiSelect-icon": {
      color: "#C6D8E1"
    },
    "& .MuiSelect-iconOpen": {
      color: "#1EA133"
    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "5px 0"
      },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5 !important"
      },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5 !important"
      },
    "& .css-1swfqyh-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5"
      },
    "& .css-1swfqyh-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#1ea133",
        borderWidth: "1px"
      },
    "& .MuiPaper-root": {
      maxHeight: "200px"
    }
  },
  label: {}
}))(FormControl);

//FOR CUSTOM INPUT
export const StyledInput = withStyles(theme => ({
  root: {
    "&": {
      margin: 0
    },
    "& .MuiOutlinedInput-root": {
      background: "white ",
      width: "auto",
      height: "37px",
      margin: "0",
      padding: "0 7px",
      fontSize: "12px",
      lineHeight: "15px"
    },
    "& .MuiOutlinedInput-input em": {
      fontSize: "14px",
      color: "#c6d8e1",
      lineHeight: "19px"
    },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, & .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5 !important"
      },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#1ea133",
        borderWidth: "1px"
      },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5 !important"
      },
    "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5 !important"
      },
    "& .css-1swfqyh-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#eff1f5"
      },
    "& .css-1swfqyh-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderColor: "#1ea133",
        borderWidth: "1px"
      },
    "& .MuiOutlinedInput-input": {
      color: "#C6D8E1",
      fontSize: "14px"
    }
  },
  label: {}
}))(TextField);

//FOR SELECT WITHOUT OUTLINE
export const StyledFormControlWithoutOutline = withStyles(theme => ({
  root: {
    "&": {
      margin: "3px"
    },
    "& .MuiOutlinedInput-root": {
      background: "white ",
      width: "auto",
      height: "37px",
      padding: "0 7px",
      lineHeight: "15px",
      border: "none"
    },
    "& .css-1wc848c-MuiFormHelperText-root": {
      margin: "0 0 10px 9px",
      fontSize: "12px",
      lineHeight: "15px",
      color: "#6b8795"
    },
    "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {
      fontSize: "14px",
      lineHeight: "19px"
    },
    "& .MuiSelect-iconOpen": {
      color: "#1EA133"
    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        padding: "5px 0"
      },
    "& .css-1swfqyh-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
      {
        borderWidth: "1px",
        border: "none"
      },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiSelect-select": {
      fontSize: "14px",
      padding: " 5px 22px 0px 17px"
    }
  },
  label: {}
}))(FormControl);
