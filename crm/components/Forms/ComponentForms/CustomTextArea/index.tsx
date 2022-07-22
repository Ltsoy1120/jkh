import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { FormControl, FormHelperText } from "@mui/material";
import styles from "./style.module.scss";

interface CustomTextAreaProps {
  label?: string;
  placeholder?: string;
  name: string;
  value: string | number;
  required?: boolean;
  width?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  placeholder = "",
  name,
  value,
  onChange,
  required,
  width,
}) => {
  return (
    <FormControl>
      <FormHelperText>{label}</FormHelperText>
      <TextareaAutosize
        className={styles.textarea}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        style={{ width, height: 82, padding: "7px 15px" }}
      />
    </FormControl>
  );
};
export default CustomTextArea;
