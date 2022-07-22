import { SelectChangeEvent } from "@mui/material";
import Input from "../../../../ComponentForms/Input";
import { HouseData } from "../../../../../../models/IHouse";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import {
  energyEfficiencyClasses,
  typesOfControl,
} from "../../../../ComponentForms/SimpleSelect/selectOptions";
import DateSelect from "../../../../ComponentForms/DateSelect";
import CustomTextArea from "../../../../ComponentForms/CustomTextArea";
import styles from "../style.module.scss";

interface ControlTypeInfoProps {
  edit: boolean;
  state: HouseData;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | SelectChangeEvent
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleDateSelect: (newValue: Date, name: string) => void;
}

const ControlTypeInfo: React.FC<ControlTypeInfoProps> = ({
  edit,
  state,
  handleChange,
  handleDateSelect,
}) => {
  return (
    <div className={styles.containerControlType}>
      <p className={styles.label}>Тип управления</p>
      <div className={styles.row}>
        <SimpleSelect
          id="typeOfControl"
          label="Тип управления"
          placeholder="Выберите из списка..."
          required
          data={typesOfControl}
          name="typeOfControl"
          value={state.typeOfControl}
          onChange={handleChange}
          width={450}
        />
        <Input
          label="Основание управления"
          type="text"
          id="basisOfControl"
          name="basisOfControl"
          placeholder="Введите данные..."
          value={state.basisOfControl}
          onChange={handleChange}
          width={450}
        />
      </div>
      <div className={styles.row}>
        <DateSelect
          label="Дата начала управления"
          name="startDate"
          value={state.startDate}
          onChange={handleDateSelect}
        />
        {edit && (
          <DateSelect
            label="Дата окончания управления"
            name="endDate"
            value={state.endDate}
            onChange={handleDateSelect}
          />
        )}
      </div>
      {edit && (
        <>
          <div className={styles.row}>
            <SimpleSelect
              id="energyEfficiencyClass"
              label="Класс энергоэффективности"
              placeholder="Выберите из списка..."
              name="energyEfficiencyClass"
              data={energyEfficiencyClasses}
              value={state.energyEfficiencyClass}
              onChange={handleChange}
              width={265}
            />
            <DateSelect
              label="Дата присвоения класса"
              name="classAddedDate"
              value={state.classAddedDate}
              onChange={handleDateSelect}
            />
          </div>
          <CustomTextArea
            label="Комментарий"
            name="comments"
            value={state.comments}
            onChange={handleChange}
            width={550}
          />
        </>
      )}
    </div>
  );
};
export default ControlTypeInfo;
