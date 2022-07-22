import { AccountData } from "../../../../../../models/IAccount";
import AdornmentInput from "../../../../ComponentForms/AdornmentInput";
import Input from "../../../../ComponentForms/Input";
import styles from "../style.module.scss";

interface GeneralInfoProps {
  state: AccountData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ state, handleChange }) => {
  const { closeDate, reasonOfClosing } = state;
  return (
    <div className={styles.wrapInfo}>
      <h2>Общая информация по счету</h2>
      {closeDate ? (
        <div className={styles.wrapCloseAccount}>
          <div className={styles.row}>
            <span>{state.number}</span>
            <p>! Лицевой счет закрыт</p>
          </div>
          <span className={styles.reason}>Причина: {reasonOfClosing}</span>
        </div>
      ) : (
        <Input
          label="Номер Л/С"
          id="number"
          name="number"
          placeholder="Введите данные..."
          value={state.number}
          onChange={handleChange}
          required
          width={265}
        />
      )}
      <div className={styles.row}>
        <Input
          label="Адрес"
          id="address"
          name="address"
          placeholder="Введите данные..."
          value={state.address}
          onChange={handleChange}
          required
          disabled={closeDate ? true : false}
          width={550}
          mb={0}
        />
        <Input
          label="Номер помещения"
          id="numberOfApartment"
          name="numberOfApartment"
          placeholder="Введите данные..."
          value={state.numberOfApartment}
          onChange={handleChange}
          required
          disabled={closeDate ? true : false}
          width={265}
          mb={0}
        />
      </div>
      <AdornmentInput
        label="Баланс лицевого счета"
        id="accountBalance"
        name="accountBalance"
        placeholder="Введите данные..."
        value={state.accountBalance}
        onChange={handleChange}
        adornment="p"
        disabled={closeDate ? true : false}
        width={265}
        mb={0}
      />
    </div>
  );
};
export default GeneralInfo;
