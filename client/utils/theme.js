import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    h1: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: 500,
    },
    body1: {
      fontSize: "14px",
      lineHeight: "19px",
      fontWeight: "normal",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "15px",
      fontWeight: "normal",
      color: "#6B8795",
    },
  },
  palette: {
    text: {
      primary: "#062A3D",
      secondary: "#6B8795",
      disabled: "#E2EBEF",
    },
    primary: {
      main: "#1EA133",
    },
    success: {
      main: "#B8EEC1",
    },
    info: {
      main: "#F9F9FA",
    },
    icon: {
      main: "#C6D8E1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: "#1EA133",
          color: "#FFFFFF",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "9px 7px 10px 15px",
          fontSize: "12px",
          lineHeight: "15px",
          backgroundColor: "#fff",
          "& em": {
            fontSize: "14px",
            lineHeight: "19px",
            color: "#c6d8e1",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: " 0 0 10px 0",
          fontSize: "12px",
          lineHeight: "15px",
          color: "#6b8795",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          lineHeight: "19px",
          "& :selected, & .Mui-focusVisible": {
            backgroundColor: "transparent",
          },
          "& :hover": {
            color: "#1EA133",
            backgroundColor: "transparent",
          },
          "& .MuiTouchRipple-root": {
            backgroundColor: "transparent !important",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#eff1f5",
            borderWidth: "1px",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          // margin: "0px !important",
        },
      },
    },
    MuiPickerStaticWrapper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          boxShadow: "1px 1px 25px rgb(136 165 191 / 15%)",
          borderRadius: "4px",
        },
      },
    },
  },
});
