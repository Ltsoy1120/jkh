import { InputAdornment, OutlinedInput } from "@mui/material";
import { ReactNode } from "react";
import styles from "./style.module.scss";

interface AdornmentInputProps {
  label: string;
  id?: string;
  placeholder: string;
  width?: number;
  mr?: number;
  mb?: number;
  name?: string;
  value?: string | number;
  adornment: string | ReactNode;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AdornmentInput: React.FC<AdornmentInputProps> = ({
  label,
  id,
  placeholder,
  width,
  mr,
  mb = 30,
  name,
  value,
  adornment,
  required,
  disabled,
  onChange,
}) => {
  return (
    <div
      className={`${styles.wrap}`}
      style={{ width, marginRight: mr, marginBottom: mb }}
    >
      <label htmlFor={id}>{label}</label>
      <OutlinedInput
        id="outlined-adornment-weight"
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        endAdornment={
          <InputAdornment position="end">{adornment}</InputAdornment>
        }
      />
    </div>
  );
};
export default AdornmentInput;
