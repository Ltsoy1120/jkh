import styles from "./Line.module.scss";

const Line = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line} />
      <span>Время приема</span>
    </div>
  );
};
export default Line;
