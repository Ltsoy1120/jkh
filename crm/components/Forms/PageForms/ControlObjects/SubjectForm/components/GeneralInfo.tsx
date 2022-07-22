import { AccountData } from "../../../../../../models/IAccount";
import { SubjectData } from "../../../../../../models/ISubject";
import Plus from "../../../../../Buttons/CircleButtons/Plus";
import Remove from "../../../../../Buttons/CircleButtons/Remove";
import AdornmentInput from "../../../../ComponentForms/AdornmentInput";
import DateSelect from "../../../../ComponentForms/DateSelect";
import Input from "../../../../ComponentForms/Input";
import InputMask from "../../../../ComponentForms/InputMask";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import styles from "../style.module.scss";

interface GeneralInfoProps {
  state: SubjectData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePhone: (
    event: { target: { name: string; value: string } },
    index: number
  ) => void;
  removePhone: (index: number) => void;
  addPhone: () => void;
  handleDateSelect: (newValue: Date, name: string) => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  state,
  handleChange,
  handleChangePhone,
  removePhone,
  addPhone,
  handleDateSelect,
}) => {
  return (
    <div className={styles.wrapInfo}>
      <h2>Общая информация</h2>
      <div className={styles.row}>
        <Input
          label="Фамилия"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Введите данные..."
          required
          value={state.lastName}
          onChange={handleChange}
          mb={0}
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
          mb={0}
          width={265}
        />
        <Input
          label="Отчество"
          type="text"
          id="patronymic"
          name="patronymic"
          placeholder="Введите данные..."
          required
          value={state.patronymic}
          onChange={handleChange}
          mb={0}
          width={265}
        />
      </div>
      <div className={styles.row}>
        <DateSelect
          label="Дата рождения"
          name="dateOfBirth"
          value={state.dateOfBirth}
          onChange={handleDateSelect}
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
          mb={0}
        />
        <SimpleSelect
          id="gender"
          label="Пол"
          placeholder="Выберите из списка..."
          required
          data={["Мужской", "Женский"]}
          name="gender"
          value={state.gender}
          onChange={handleChange}
          width={265}
          mb={0}
        />
      </div>
      {state.phones[0] ? (
        <div className={styles.column}>
          {state.phones.map((phone, index: number) => (
            <div className={styles.row} key={index}>
              <InputMask
                label="Контактный телефон"
                id="phone"
                index={index}
                key={index}
                name="phones"
                value={state.phones[index]}
                handleChangePhone={(e) => handleChangePhone(e, index)}
                placeholder="Введите данные..."
                required
                mr={20}
                width={265}
              />
              <Remove onClick={() => removePhone(index)} />
              {index + 1 === state.phones.length && <Plus onClick={addPhone} />}
            </div>
          ))}
        </div>
      ) : (
        <InputMask
          label="Контактный телефон"
          id="phones"
          name="phones"
          value={state.phones[0]}
          handleChangePhone={(e) => handleChangePhone(e, 0)}
          placeholder="Введите данные..."
          required
          mr={20}
          width={265}
          mb={30}
        />
      )}
      <div className={styles.row}>
        <Input
          label="Место работы"
          id="placeOfWork"
          name="placeOfWork"
          placeholder="Введите данные..."
          width={265}
          value={state.placeOfWork}
          onChange={handleChange}
          mb={0}
        />
        <InputMask
          label="Рабочий телефон"
          id="workPhone"
          name="workPhone"
          value={state.workPhone}
          handleChangePhone={handleChangePhone}
          placeholder="Введите данные..."
          mr={20}
          width={265}
        />
      </div>
    </div>
  );
};
export default GeneralInfo;
