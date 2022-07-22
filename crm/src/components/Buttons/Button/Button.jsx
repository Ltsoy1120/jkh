import styles from "./Button.module.scss";

export default function Button({ bcg, margin_right, children }) {
  return (
    <button style={{ marginRight: margin_right }} className={`${styles.button} ${bcg === true ? styles.bcg : ""}`}>
      {children}
    </button>
  );
}
