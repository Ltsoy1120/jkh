import Input from "../Input/Input";
import styles from "./InputLabel.module.scss";

export default function InputLabel({
  label,
  type,
  placeholder,
  id,
  margin_right,
  width,
  height,
  children,

  margin_bottom,
  margin_left,
  margin_top,
}) {
  return (
    <div className={`${styles.wrapLabel}`}>
      <label htmlFor={id}>{label}</label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        margin_right={margin_right}
        margin_bottom={margin_bottom}
        margin_left={margin_left}
        margin_top={margin_top}
        width={width}
        height={height}
      >
        {children}
      </Input>
    </div>
  );
}
