import { SelectChangeEvent } from "@mui/material";
import Input from "../../../ComponentForms/Input";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { EmployeeData } from "../../../../../models/IUser";
import styles from "../style.module.scss";
import { positions } from "../../../ComponentForms/SimpleSelect/selectOptions";

interface PositionInfoProps {
  state: EmployeeData;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
}

const PositionInfo: React.FC<PositionInfoProps> = ({ state, handleChange }) => {
  return (
    <>
      <h2>Должность</h2>
      <div className={styles.wrap}>
        <div className={`flex ${styles.wrapInput}`}>
          <SimpleSelect
            label="Должность / специальность"
            id="position"
            name="position"
            data={positions}
            placeholder="Выберите из списка"
            value={state.position}
            onChange={handleChange}
            width={265}
            mr={20}
          />
          <Input
            label="Отдел"
            type="text"
            id="department"
            name="department"
            placeholder="Введите данные..."
            value={state.department}
            onChange={handleChange}
            width={265}
          />
        </div>
      </div>
    </>
  );
};
export default PositionInfo;
