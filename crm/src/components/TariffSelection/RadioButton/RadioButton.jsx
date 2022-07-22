import styles from "./RadioButton.module.scss";

export default function RadioButton({ label, state }) {
  return (
    <div className={`flex items-center ${styles.radioButton} ${state ? styles.active : ""}`}>
      <div className={`flex items-center justify-center ${styles.circle}`}>
        <div className={styles.dot} />
      </div>

      <span>{label}</span>
    </div>
  );
}
