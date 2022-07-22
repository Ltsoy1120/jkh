import { SelectChangeEvent } from "@mui/material";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import DateSelect from "../../../ComponentForms/DateSelect";
import styles from "../style.module.scss";
import { EmployeeData } from "../../../../../models/IUser";

interface GeneralInfoProps {
  state: EmployeeData;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
  handleDateSelect: (newValue: Date) => void;
  handleChangePhone: (
    event: { target: { name: string; value: string } },
    index: number
  ) => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  state,
  handleChange,
  handleDateSelect,
  handleChangePhone,
}) => {
  return (
    <>
      <h2>Общая информация о сотруднике</h2>
      <div className={styles.wrap}>
        <div className={styles.wrapInput}>
          <Input
            label="Фамилия"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Введите данные..."
            required
            value={state.lastName}
            onChange={handleChange}
            mr={20}
            width={265}
          />
          <Input
            label="Имя"
            type="text"
            id="name"
            name="name"
            placeholder="Введите данные..."
            required
            value={state.name}
            onChange={handleChange}
            width={265}
          />
        </div>
        <div className={styles.wrapInput}>
          <Input
            label="Отчество"
            type="text"
            id="patronymic"
            name="patronymic"
            placeholder="Введите данные..."
            required
            value={state.patronymic}
            onChange={handleChange}
            mr={20}
            width={265}
          />
          <DateSelect
            label="Дата рождения"
            value={state.dateOfBirth}
            onChange={handleDateSelect}
            mb={30}
          />
        </div>
        <div className={styles.wrapInput}>
          <InputMask
            label="Контактный телефон"
            id="phones"
            name="phones"
            value={state.phones[0]}
            handleChangePhone={(e) => handleChangePhone(e, 0)}
            placeholder="Введите данные..."
            required
            mr={20}
            mb={30}
            width={265}
          />
          <Input
            label="E-mail"
            type="email"
            id="email"
            name="email"
            placeholder="Введите данные..."
            required
            value={state.email}
            onChange={handleChange}
            width={265}
          />
        </div>
      </div>
    </>
  );
};
export default GeneralInfo;
