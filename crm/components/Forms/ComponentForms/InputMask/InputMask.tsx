import { IMaskInput } from "react-imask";
import { useRef } from "react";
import styles from "./InputMask.module.scss";

interface InputMaskProps {
  index?: number;
  label: string;
  name: string;
  placeholder: string;
  id: string;
  value: string;
  mr?: number;
  mb?: number;
  width?: number;
  handleChangePhone: (
    event: {
      target: { name: string; value: string };
    },
    index: number
  ) => void;
  required?: boolean;
}
const InputMask: React.FC<InputMaskProps> = ({
  index,
  label,
  name,
  placeholder,
  id,
  value,
  mr,
  mb,
  width,
  required,
  handleChangePhone,
}) => {
  const ref = useRef(null);
  return (
    <div className={`${styles.wrapLabel}`}>
      <label htmlFor={id}>{label}</label>
      <IMaskInput
        id={id}
        ref={ref}
        mask="+7 (000) 000-00-00"
        onAccept={(value: any) =>
          handleChangePhone({ target: { name, value } }, index)
        }
        placeholder={placeholder}
        name={name}
        value={value}
        required={required}
        style={{ width, marginRight: mr, marginBottom: mb }}
      />
    </div>
  );
};
export default InputMask;
