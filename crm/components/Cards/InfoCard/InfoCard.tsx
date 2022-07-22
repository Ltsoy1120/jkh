import styles from "./InfoCard.module.scss";

interface InfoCardProps {
  label: string;
  value: string | string[];
  mr?: number;
  mb?: number;
  width?: number;
}
const InfoCard: React.FC<InfoCardProps> = ({ label, value, mr, width, mb }) => {
  return (
    <div
      className={styles.card}
      style={{ marginRight: mr, width, marginBottom: mb }}
    >
      <span className={styles.label}>{label}</span>
      {Array.isArray(value) ? (
        <div className={styles.row}>
          {value.map((info) => (
            <span
              key={info}
              className={styles.info}
              style={{ marginRight: mr, minWidth: width }}
            >
              {info}
            </span>
          ))}
        </div>
      ) : (
        <span className={styles.info}>{value}</span>
      )}
    </div>
  );
};
export default InfoCard;
