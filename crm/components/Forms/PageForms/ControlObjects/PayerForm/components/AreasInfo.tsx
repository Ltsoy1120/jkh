import { AccountData } from "../../../../../../models/IAccount";
import AdornmentInput from "../../../../ComponentForms/AdornmentInput";
import styles from "../style.module.scss";

interface AreasInfoProps {
  state: AccountData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AreasInfo: React.FC<AreasInfoProps> = ({ state, handleChange }) => {
  return (
    <div className={styles.wrapInfo}>
      <h2>Площади по Л/С</h2>
      <div className={styles.row}>
        <AdornmentInput
          label="Общая"
          id="totalArea"
          name="totalArea"
          placeholder="Введите данные..."
          value={state.totalArea}
          onChange={handleChange}
          adornment="м²"
          required
          disabled={state.closeDate ? true : false}
          width={265}
          mb={0}
        />
        <AdornmentInput
          label="Жилая"
          id="livingArea"
          name="livingArea"
          placeholder="Введите данные..."
          value={state.livingArea}
          onChange={handleChange}
          adornment="м²"
          required
          disabled={state.closeDate ? true : false}
          width={265}
          mb={0}
        />
        <AdornmentInput
          label="Отапливаемая"
          id="heatedArea"
          name="heatedArea"
          placeholder="Введите данные..."
          value={state.heatedArea}
          onChange={handleChange}
          adornment="м²"
          required
          disabled={state.closeDate ? true : false}
          width={265}
          mb={0}
        />
      </div>
    </div>
  );
};
export default AreasInfo;
