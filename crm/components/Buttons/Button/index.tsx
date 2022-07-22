import styles from "./style.module.scss";

interface ButtonProps {
  bg?: string;
  type?: "button" | "submit" | "reset" | undefined;
  mb?: number;
  mr?: number;
  mt?: number;
  width?: number;
  disabled?: boolean;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  bg,
  type,
  mb,
  mr,
  mt,
  width,
  disabled,
  onClick,
  children,
}) => {
  return (
    <button
      style={{ marginBottom: mb, marginRight: mr, marginTop: mt, width }}
      className={`${styles.button} ${
        bg === "green" ? styles.green : styles.white
      }`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
