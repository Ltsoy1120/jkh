import {
  MenuItem,
  Select,
  SelectChangeEvent,
  FormHelperText
} from "@mui/material";
import { StyledFormControl } from "../../../utils/styledMui";

interface SelectProps {
  placeholder: string;
  data: string[];
  title?: string;
  width?: number;
  name?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  required?: boolean;
}
const SimpleSelect = ({
  placeholder,
  data,
  title,
  width = 200,
  name,
  value,
  onChange,
  required
}: SelectProps) => {
  return (
    <StyledFormControl sx={{ m: 1, minWidth: width }}>
      {title && (
        <FormHelperText sx={{ margin: "5px 0" }}>{title}</FormHelperText>
      )}
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        displayEmpty
        renderValue={() => {
          if (!value) {
            return <em style={{ color: "black" }}>{placeholder}</em>;
          }
          return value;
        }}
      >
        {data &&
          data.map((item: string, index: number) => {
            return (
              <MenuItem value={item} key={index}>
                {item}
              </MenuItem>
            );
          })}
      </Select>
    </StyledFormControl>
  );
};

export default SimpleSelect;
