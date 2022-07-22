import styles from "../style.module.scss";

interface InfoCardProps {
  label: string;
  children: React.ReactNode;
  mr?: number;
  mb?: number;
  p?: number;
  width?: number;
  bg?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({
  label,
  children,
  mr,
  width,
  mb,
  bg,
  p,
}) => {
  return (
    <div
      className={styles.card}
      style={{ marginRight: mr, width, marginBottom: mb }}
    >
      <label>{label}</label>
      <div style={{ backgroundColor: bg, padding: p }}>{children}</div>
    </div>
  );
};
export default InfoCard;
