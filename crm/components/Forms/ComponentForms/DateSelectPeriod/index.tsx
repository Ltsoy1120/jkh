import DateSelect from "../DateSelect";
import styles from "./style.module.scss";

interface propsDateSelectPeriod {
  label: string;
  handleChangeFromDate: any;
  handleChangeToDate: any;
  valueFrom?: Date | null;
  valueTo?: Date | null;
}

const DateSelectPeriod = ({
  label,
  handleChangeFromDate,
  handleChangeToDate,
  valueFrom,
  valueTo,
}: propsDateSelectPeriod) => {
  return (
    <div className={styles.filterItem}>
      <span className={styles.label}>{label}</span>
      <DateSelect
        label="с"
        onChange={handleChangeFromDate}
        value={valueFrom}
        row={true}
      />
      <DateSelect
        label="по"
        onChange={handleChangeToDate}
        value={valueTo}
        row={true}
      />
      {/* {error && <div className={styles.filterError}>{error}</div>} */}
    </div>
  );
};
export default DateSelectPeriod;
