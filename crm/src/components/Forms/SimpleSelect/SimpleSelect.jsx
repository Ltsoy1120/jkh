import { MenuItem, Select } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { withStyles } from "@material-ui/core/styles";
import { StyledFormControl } from "../../../utils/styledMui";
import { useState } from "react";
import { testData, widthInput } from "../../../utils/constants";

export const SimpleSelect = ({ placeholder, data = testData, title, width = 200, size = "small" }) => {
  const [items, setItems] = useState([]);

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&": {
        minWidth: "200px",
      },
    },
    label: {},
  }))(MenuItem);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItems(typeof value.text === "string" ? value.text.split(",") : value.text);
  };

  return (
    <div>
      <StyledFormControl sx={{ m: 1, minWidth: width, width: widthInput[size] }}>
        <FormHelperText>{title}</FormHelperText>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data}
          onChange={handleChange}
          renderValue={(selected) => {
            if (items.length === 0) {
              return <em>{placeholder}</em>;
            }
            return items[0];
          }}
        >
          {data.map((item) => {
            return (
              <StyledMenuItem value={item} key={item.id}>
                {item.text}
              </StyledMenuItem>
            );
          })}
        </Select>
      </StyledFormControl>
    </div>
  );
};
