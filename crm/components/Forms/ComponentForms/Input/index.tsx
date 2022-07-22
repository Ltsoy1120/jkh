import styles from "./style.module.scss";

interface InputProps {
  label: string;
  subtitle?: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  id?: string;
  name: string;
  value: string | number;
  mr?: number;
  mb?: number;
  width?: number;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}
const Input: React.FC<InputProps> = ({
  label,
  subtitle,
  type,
  value,
  placeholder,
  required,
  disabled,
  id,
  name,
  mr,
  mb = 30,
  width,
  children,
  onChange,
}) => {
  return (
    <div className={styles.wrap}>
      <label htmlFor={id}>{label}</label>
      {subtitle && <span>{subtitle}</span>}
      <div
        className={
          !disabled
            ? `${styles.wrapInput}`
            : ` ${styles.wrapInput} ${styles.disabled}`
        }
      >
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{ width: width, marginRight: mr, marginBottom: mb }}
        />
        {children}
      </div>
    </div>
  );
};
export default Input;
