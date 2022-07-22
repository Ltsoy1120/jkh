import { SelectChangeEvent } from "@mui/material";
import Input from "../../../ComponentForms/Input";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { EmployeeData } from "../../../../../models/IUser";
import { typesOfRequests } from "../../../../../utils/constants";
import styles from "../EmployeeForm.module.scss";

interface TypesOfRequestsInfoProps {
  state: EmployeeData;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
}

const TypesOfRequestsInfo: React.FC<TypesOfRequestsInfoProps> = ({
  state,
  handleChange,
}) => {
  return (
    <>
      <h2>Типы заявок </h2>
      <div className={styles.wrap}>
        <SimpleSelect
          id="typesOfRequests"
          label="Тип заявки"
          required
          data={typesOfRequests}
          placeholder="Выберите из списка"
          name="typesOfRequests"
          width={455}
          value={state.typesOfRequests}
          onChange={handleChange}
        />
        <Input
          label="Название"
          type="text"
          id="nameOfRequests"
          name="nameOfRequests"
          placeholder="Введите данные..."
          value={state.nameOfRequests}
          onChange={handleChange}
          mr={20}
          width={455}
        />
      </div>
    </>
  );
};
export default TypesOfRequestsInfo;
