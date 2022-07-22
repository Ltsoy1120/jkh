import styles from "./Status.module.scss";

export default function Status({ status }) {
  return (
    <span
      className={`${styles.status} ${
        status === "Согласован"
          ? styles.agreed
          : status === "Завершен"
          ? styles.completed
          : status === "Отменен"
          ? styles.canceled
          : ""
      }`}
    >
      {status}
    </span>
  );
}
