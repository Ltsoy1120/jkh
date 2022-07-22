import styles from "./Button.module.scss";

interface ButtonProps {
  bg: string;
  type?: "button" | "submit" | "reset" | undefined;
  mb?: number;
  mr?: number;
  width?: number;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  bg,
  type,
  mb,
  mr,
  width,
  disabled,
  onClick,
  children
}) => {
  return (
    <button
      style={{ marginBottom: mb, marginRight: mr, width }}
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
