import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import Plus from "../Buttons/CircleButtons/Plus";
import styles from "./style.module.scss";

interface AddLogoProps {
  name: string;
  logo?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddLogo: React.FC<AddLogoProps> = ({ name, logo, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const activateInput = () => {
    inputRef.current?.click();
  };
  return (
    <div className={styles.wrapper}>
      <div className="absolute right-0">
        <IconButton disableFocusRipple disableRipple onClick={activateInput}>
          <Plus />
        </IconButton>
      </div>

      <input
        type="file"
        name={name}
        style={{ display: "none" }}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};
export default AddLogo;
