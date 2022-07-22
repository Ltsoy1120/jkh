import { AccountData } from "../../../../../../models/IAccount";
import DateSelect from "../../../../ComponentForms/DateSelect";
import Input from "../../../../ComponentForms/Input";
import styles from "../style.module.scss";

interface ContractsInfoProps {
  state: AccountData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDateSelect: (newValue: Date, name: string) => void;
}

const ContractsInfo: React.FC<ContractsInfoProps> = ({
  state,
  handleChange,
  handleDateSelect,
}) => {
  return (
    <div className={styles.wrapInfo}>
      <h2>Документы</h2>
      <div className={styles.row}>
        <Input
          label="Номер договора управления"
          id="numberOfContract"
          name="numberOfContract"
          placeholder="Введите данные..."
          value={state.numberOfContract}
          onChange={handleChange}
          disabled={state.closeDate ? true : false}
          mr={20}
          width={265}
          mb={0}
        />
        <DateSelect
          label="Дата заключения договора"
          name="dateOfContract"
          value={state.dateOfContract}
          onChange={handleDateSelect}
          disabled={state.closeDate ? true : false}
          required
        />
      </div>
    </div>
  );
};
export default ContractsInfo;
