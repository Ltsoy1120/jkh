import { SubjectData } from "../../../../../../models/ISubject";
import DateSelect from "../../../../ComponentForms/DateSelect";
import Input from "../../../../ComponentForms/Input";
import styles from "../style.module.scss";

interface PassportInfoProps {
  state: SubjectData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateSelect: (newValue: Date, name: string) => void;
}

const PassportInfo: React.FC<PassportInfoProps> = ({
  state,
  handleChange,
  handleDateSelect,
}) => {
  return (
    <div className={styles.wrapInfo}>
      <h2>Паспортные данные</h2>
      <div className={styles.row}>
        <Input
          label="Серия"
          id="passportSeries"
          name="passportSeries"
          placeholder="Введите данные..."
          width={265}
          value={state.passportSeries}
          onChange={handleChange}
          mb={0}
        />
        <Input
          label="Номер"
          id="passportNumber"
          name="passportNumber"
          placeholder="Введите данные..."
          width={265}
          value={state.passportNumber}
          onChange={handleChange}
          mb={0}
        />
        <Input
          label="Код подразделения"
          id="departmentCode"
          name="departmentCode"
          placeholder="Введите данные..."
          width={265}
          value={state.departmentCode}
          onChange={handleChange}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <DateSelect
          label="Дата выдачи"
          name="dateOfIssue"
          value={state.dateOfIssue}
          onChange={handleDateSelect}
        />
        <Input
          label="Кем выдан"
          id="issuedBy"
          name="issuedBy"
          placeholder="Введите данные..."
          width={550}
          value={state.issuedBy}
          onChange={handleChange}
          mb={0}
        />
      </div>
    </div>
  );
};
export default PassportInfo;
