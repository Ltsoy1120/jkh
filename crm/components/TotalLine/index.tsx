import styles from "./style.module.scss";

export default function TotalLine({ amount, text }) {
  return (
    <div className={styles.itogo}>
      ИТОГО: <span>{text}</span>
      {amount}
    </div>
  );
}
