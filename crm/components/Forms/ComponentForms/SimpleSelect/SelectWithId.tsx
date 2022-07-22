import {
  Autocomplete,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { SyntheticEvent } from "react";
import styles from "./style.module.scss";

type OptionData = {
  label: string;
  address?: string;
  tariff?: string;
  number?: string;
  email?: string;
  phone?: string;
  id: string;
};

interface SelectProps {
  label?: string;
  id?: string;
  options: OptionData[];
  placeholder: string;
  width?: number;
  mr?: number;
  mb?: number;
  name?: string;
  value?: OptionData;
  required?: boolean;
  onChange?: (
    event: SyntheticEvent<Element, Event>,
    value: {
      label: string;
      address?: string;
      tariff?: string;
      number?: string;
      email?: string;
      phone?: string;
      id: string;
    } | null
  ) => void;
}
const SelectWithId: React.FC<SelectProps> = ({
  label,
  id,
  options,
  placeholder,
  width,
  mr,
  mb = "25px",
  value,
  onChange,
}) => {
  return (
    <div
      className={styles.wrapLabel}
      style={{ width, height: "37px", marginRight: mr, marginBottom: mb }}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={value}
        options={options}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        onChange={onChange}
        sx={{ background: "#fff", height: "37px" }}
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              "& > h2": { fontWeight: "bold" },
            }}
            {...props}
          >
            <h2>{option.label}</h2>
            {option.address && <span>{option.address}</span>}
            {option.tariff && <span>{option.tariff}</span>}
            {option.number && <span>{option.number}</span>}
            {option.email && <span>{option.email}</span>}
            {option.phone && <span>{option.phone}</span>}
          </Box>
        )}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} />
        )}
      />
    </div>
  );
};

export default SelectWithId;
