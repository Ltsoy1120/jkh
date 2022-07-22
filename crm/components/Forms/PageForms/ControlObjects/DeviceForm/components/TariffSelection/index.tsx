import { DeviceData } from "../../../../../../../models/IDevice";
import Input from "../../../../../ComponentForms/Input";
import RadioButton from "../../../../../ComponentForms/RadioButton";
import styles from "./style.module.scss";

interface TariffSelectionProps {
  state: DeviceData;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (value: string) => void;
}
const TariffSelection: React.FC<TariffSelectionProps> = ({
  state,
  onChange,
  onClick,
}) => {
  return (
    <div className={styles.tariffSelectionWrap}>
      <h2>Выберите тип тарифа</h2>

      <div className={styles.row}>
        <div className={styles.left}>
          <div onClick={() => onClick("Однотарифный")}>
            <RadioButton
              label="Однотарифный"
              isSelected={state.tariff === "Однотарифный" ? true : false}
            />
          </div>
          <div onClick={() => onClick("Двухтарифный")}>
            <RadioButton
              label="Двухтарифный"
              isSelected={state.tariff === "Двухтарифный" ? true : false}
            />
          </div>
          <div onClick={() => onClick("Многотарифный")}>
            <RadioButton
              label="Многотарифный"
              isSelected={state.tariff === "Многотарифный" ? true : false}
            />
          </div>
        </div>

        <div className={styles.right}>
          {state.tariff === "Однотарифный" ? (
            <div>
              <Input
                label="Начальные показания"
                id="firstData"
                name="firstData"
                type="number"
                placeholder="Введите данные..."
                value={state.firstData}
                onChange={onChange}
                mb={0}
                width={265}
              />
            </div>
          ) : state.tariff === "Двухтарифный" ? (
            <div className={styles.row}>
              <Input
                label="Начальные показания (День)"
                id="firstDataDay"
                name="firstDataDay"
                type="number"
                placeholder="Введите данные..."
                value={state.firstDataDay}
                onChange={onChange}
                mr={20}
                width={265}
              />
              <Input
                label="Начальные показания (Ночь)"
                id="firstDataNight"
                name="firstDataNight"
                type="number"
                placeholder="Введите данные..."
                value={state.firstDataNight}
                onChange={onChange}
                width={265}
              />
            </div>
          ) : state.tariff === "Многотарифный" ? (
            <div>
              <div className={styles.row}>
                <Input
                  label="Начальные показания (Час пик - Т1)"
                  id="firstDataT1"
                  name="firstDataT1"
                  type="number"
                  placeholder="Введите данные..."
                  value={state.firstDataT1}
                  onChange={onChange}
                  mr={20}
                  width={360}
                />
                <Input
                  label="Начальные показания (Льготное время - Т2)"
                  id="firstDataT2"
                  name="firstDataT2"
                  type="number"
                  placeholder="Введите данные..."
                  value={state.firstDataT2}
                  onChange={onChange}
                  width={360}
                />
              </div>
              <Input
                label="Начальные показания (Полульготное время  - Т3)"
                id="firstDataT3"
                name="firstDataT3"
                type="number"
                placeholder="Введите данные..."
                value={state.firstDataT3}
                onChange={onChange}
                width={360}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default TariffSelection;
