import styles from "../style.module.scss";

export default function CheckMark({ onClick }) {
  return (
    <div className={styles.btn} onClick={onClick}>
      <svg width="23" height="17" viewBox="0 0 23 17" fill="none">
        <path d="M19.503 1.39915L8.51884 12.3835L3.49682 7.36145C2.90458 6.76933 1.94453 6.76933 1.35229 7.36145C0.760174 7.95369 0.760174 8.91374 1.35229 9.50598L7.44657 15.6003C7.74269 15.8963 8.13077 16.0444 8.51884 16.0444C8.90691 16.0444 9.29499 15.8963 9.59111 15.6003L21.6476 3.5438C22.2397 2.95156 22.2397 1.99151 21.6476 1.39927C21.0553 0.807034 20.0952 0.807034 19.503 1.39915Z" />
      </svg>
    </div>
  );
}