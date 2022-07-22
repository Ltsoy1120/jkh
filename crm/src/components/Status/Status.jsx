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
          : status === "Новая"
          ? styles.new
          : status === "В работе"
          ? styles.atWork
          : status === "На рассмотрении"
          ? styles.underConsideration
          : status === "Рассмотрено"
          ? styles.considered
          : status === "Оплачена"
          ? styles.paid
          : ""
      }`}
    >
      {status}
    </span>
  );
}
