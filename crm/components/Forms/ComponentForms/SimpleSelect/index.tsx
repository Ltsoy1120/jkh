import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styles from "./style.module.scss";

interface SelectProps {
  label: string;
  id?: string;
  data: string[];
  placeholder: string;
  width?: number;
  mr?: number;
  mb?: number;
  name?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: SelectChangeEvent) => void;
}
const SimpleSelect: React.FC<SelectProps> = ({
  label,
  id,
  data,
  placeholder,
  width,
  mr,
  mb = 30,
  name,
  value,
  required,
  onChange,
}) => {
  return (
    <div className={styles.wrapLabel}>
      <label htmlFor={id}>{label}</label>
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
            return <em>{placeholder}</em>;
          }
          return value;
        }}
        style={{ width, height: "37px", marginRight: mr, marginBottom: mb }}
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
    </div>
  );
};

export default SimpleSelect;
