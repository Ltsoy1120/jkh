import styles from "./BtnWrapper.module.scss";

export default function BtnWrapper({ children }) {
  return <div className={styles.btnWrapper}>{children}</div>;
}
