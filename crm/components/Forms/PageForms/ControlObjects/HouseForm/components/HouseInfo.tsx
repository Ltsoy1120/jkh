import { SelectChangeEvent } from "@mui/material";
import Input from "../../../../ComponentForms/Input";
import { HouseData } from "../../../../../../models/IHouse";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import {
  culturalStatuses,
  conditionsOfHouse,
  lifeCicleStages,
  utcData,
} from "../../../../ComponentForms/SimpleSelect/selectOptions";
import styles from "../style.module.scss";
import { getListYears } from "../../../../ComponentForms/SimpleSelect/getSelectOptions";

interface HouseInfoProps {
  edit: boolean;
  state: HouseData;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
}

const HouseInfo: React.FC<HouseInfoProps> = ({ edit, state, handleChange }) => {
  return (
    <div className={styles.containerAboutHome}>
      <p className={styles.label}>Информация о доме</p>
      <div style={{ maxWidth: "740px" }} className={styles.containerForms}>
        <Input
          label="Адрес"
          id="address"
          name="address"
          placeholder="г. Воронеж, ул. Бульвар Фестивальный, д.13"
          required
          value={state.address}
          onChange={handleChange}
          width={550}
        />
        <SimpleSelect
          id="timezone"
          label="Часовой пояс"
          required
          data={utcData}
          placeholder="Выберите из списка"
          name="timezone"
          value={state.timezone}
          onChange={handleChange}
          width={265}
        />
      </div>
      {edit && (
        <>
          <div>
            <Input
              label="Кадастровый номер"
              id="cadastralNumber"
              name="cadastralNumber"
              value={state.cadastralNumber}
              onChange={handleChange}
              placeholder="Введите данные..."
              width={550}
            />
          </div>
          <div className={styles.containerForms}>
            <Input
              label="Код ФИАС"
              id="fiasCode"
              name="fiasCode"
              value={state.fiasCode}
              onChange={handleChange}
              placeholder="Введите данные..."
              width={550}
            />
            <SimpleSelect
              label="Год ввода в эксплуатацию"
              id="yearOfCommissioning"
              name="yearOfCommissioning"
              data={getListYears(1920)}
              value={state.yearOfCommissioning}
              onChange={handleChange}
              placeholder="Выберите из списка..."
              width={265}
            />
          </div>
          <div className={styles.containerForms}>
            <Input
              label="Общая площадь"
              id="totalArea"
              name="totalArea"
              value={state.totalArea}
              onChange={handleChange}
              placeholder="Введите данные..."
              width={265}
            />
            <Input
              label="Количество этажей"
              id="numberOfFloors"
              name="numberOfFloors"
              value={state.numberOfFloors}
              onChange={handleChange}
              placeholder="Введите данные..."
              width={265}
            />
            <Input
              label="Количество подземных этажей"
              id="numberOfUnderFloors"
              name="numberOfUnderFloors"
              value={state.numberOfUnderFloors}
              onChange={handleChange}
              placeholder="Введите данные..."
              width={265}
            />
          </div>
          <div className={styles.containerForms}>
            <SimpleSelect
              label="Статус культурного наследия"
              id="culturalStatus"
              name="culturalStatus"
              data={culturalStatuses}
              value={state.culturalStatus}
              onChange={handleChange}
              placeholder="Выберите из списка..."
              width={265}
            />
            <SimpleSelect
              label="Состояние"
              id="condition"
              name="condition"
              data={conditionsOfHouse}
              value={state.condition}
              onChange={handleChange}
              placeholder="Выберите из списка..."
              width={265}
            />
            <SimpleSelect
              label="Стадия жизненного цикла"
              id="lifeCicleStage"
              name="lifeCicleStage"
              data={lifeCicleStages}
              value={state.lifeCicleStage}
              onChange={handleChange}
              placeholder="Выберите из списка..."
              width={350}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default HouseInfo;
