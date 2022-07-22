import FormControl from "@mui/material/FormControl";
import { StyledInput } from "../../../utils/styledMui";
import FormHelperText from "@mui/material/FormHelperText";
import { widthInput } from "../../../utils/constants";

export const SimpleInput = ({ width = "auto", placeholder, label, size = "small", ...props }) => {
  return (
    <>
      <FormControl sx={{ width: widthInput[size], minWidth: "auto" }}>
        <FormHelperText>{label}</FormHelperText>
        <StyledInput placeholder={placeholder} id="outlined-basic" variant="outlined" />
      </FormControl>
    </>
  );
};
