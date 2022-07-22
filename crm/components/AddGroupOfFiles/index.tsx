import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import styles from "./style.module.scss";
import Plus from "../Buttons/CircleButtons/Plus";

interface AddGroupOfFilesProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fz?: number;
  width?: string | number;
}

const AddGroupOfFiles: React.FC<AddGroupOfFilesProps> = ({
  label,
  name,
  onChange,
  fz,
  width,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const activateInput = () => {
    inputRef.current?.click();
  };
  return (
    <div className={styles.addGroup}>
      <span style={{ fontSize: fz, width }}>{label}</span>
      <div className={styles.contrainerPlus}>
        <IconButton disableFocusRipple disableRipple onClick={activateInput}>
          <Plus className={styles.plusOne} />
          <Plus className={styles.plusTwo} />
        </IconButton>
      </div>
      <input
        type="file"
        multiple
        name={name}
        style={{ display: "none" }}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};
export default AddGroupOfFiles;
