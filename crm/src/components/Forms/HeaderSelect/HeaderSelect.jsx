import { MenuItem, Select } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";
import Link from "next/link";
import { StyledFormControlWithoutOutline } from "../../../utils/styledMui";
import { widthInput } from "../../../utils/constants";

export const HeaderSelect = ({ width = 200, data, size = "tiny", defaultTitle }) => {
  const [items, setItems] = useState([{ title: defaultTitle }]);

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      "&": {
        minWidth: "100px",
      },
    },
    label: {},
  }))(MenuItem);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setItems([{ title: value }]);
  };

  return (
    <>
      <StyledFormControlWithoutOutline sx={{ m: 1, minWidth: widthInput[size] }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={data}
          onChange={handleChange}
          renderValue={(selected) => {
            return items[0].title;
          }}
        >
          {data.map((item) => {
            return (
              <StyledMenuItem value={item.title} key={item.id}>
                <Link href={item.href}>{item.title}</Link>
              </StyledMenuItem>
            );
          })}
        </Select>
      </StyledFormControlWithoutOutline>
    </>
  );
};
