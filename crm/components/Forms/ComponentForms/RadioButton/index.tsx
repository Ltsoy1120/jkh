import styles from "./style.module.scss";

interface RadioButtonProps {
  label: string;
  isSelected: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, isSelected }) => {
  return (
    <div className={`${styles.radioButton} ${isSelected ? styles.active : ""}`}>
      <div className={styles.circle}>
        <div className={styles.dot} />
      </div>
      <span>{label}</span>
    </div>
  );
};
export default RadioButton;
