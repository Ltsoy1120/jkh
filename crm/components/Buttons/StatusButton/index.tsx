import styles from "./style.module.scss";

interface ButtonProps {
  status: string;
  mb?: number;
}
const StatusButton: React.FC<ButtonProps> = ({ status, mb }) => {
  return (
    <span
      style={{ marginBottom: mb }}
      className={`${styles.button} ${
        status === "Новая" || status === "Новое" || status === "На согласовании"
          ? styles.new
          : status === "В работе" || status === "Согласован"
          ? styles.progress
          : status === "Отложена" || status === "Отложено"
          ? styles.postponed
          : status === "Выполнена" ||
            status === "Выполнено" ||
            status === "Завершен"
          ? styles.finish
          : styles.canceled
      }`}
    >
      {status}
    </span>
  );
};
export default StatusButton;
