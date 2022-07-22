import styles from "./Line.module.scss";

export default function Line() {
  return (
    <div className={`flex items-center justify-center relative w-full ${styles.wrapper}`}>
      <div className={styles.line} />
      <span>Время приема</span>
    </div>
  );
}
