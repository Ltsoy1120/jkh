import { Box, Collapse, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import { SwitchUnstyled } from "@mui/base";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Root = styled("span")((props) => {
  const { theme, ownerState } = props;
  return {
    color: theme.palette.primary.main,
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.short,
    }),
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "center",
    minHeight: "0",
    "& > svg": {
      transform: ownerState.checked && "rotate(180deg)",
    },
    "& > p": {
      margin: "0",
    },
  };
});

const Input = styled("input")`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
`;

const Panel = ({ children }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    console.log("event:", event.target);
    console.log("current", event.currentTarget);
    setChecked((prev) => !prev);
  };
  console.log("here:", checked);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", position: "relative", marginBottom: "50px" }}>
      <Collapse in={checked} collapsedSize={105}>
        <Box sx={{ bgcolor: "info.main", padding: "30px 15px" }}>{children}</Box>
      </Collapse>
      <Toolbar sx={{ display: "flex", justifyContent: "center", flexDirection: "column", minHeight: "0 !important" }}>
        <SwitchUnstyled
          onChange={handleChange}
          components={{
            Root,
            Input,
            Thumb: ArrowDropDownIcon,
            Track: () => <p>{checked ? "Свернуть" : "Развернуть"}</p>,
          }}
        />
      </Toolbar>
    </Box>
  );
};

export default Panel;
