import React from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import styles from "./textarea.module.scss";

export const CustomTextArea = ({ placeholder = "" }) => {
  return <TextareaAutosize className={styles.textarea} placeholder={placeholder} style={{ width: 455, height: 82 }} />;
};
