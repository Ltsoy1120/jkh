import { useState } from "react";
import Button from "../../../Buttons/Button";
import Plus from "../../../Buttons/CircleButtons/Plus";
import Input from "../../ComponentForms/Input";
import InputMask from "../../ComponentForms/InputMask";
import DateSelect from "../../ComponentForms/DateSelect";
import styles from "./LeaderForm.module.scss";
import { LeaderData } from "../../../../models/IUser";
import Remove from "../../../Buttons/CircleButtons/Remove";

interface LeaderFormProps {
  initLeader: LeaderData;
  onSubmit: (leaderData: LeaderData) => void;
}

const LeaderForm: React.FC<LeaderFormProps> = ({ initLeader, onSubmit }) => {
  const [state, setState] = useState<LeaderData>(initLeader);
  const phonesCopy = [...state.phones];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangePhone = (
    event: { target: { name: string; value: string } },
    index: number
  ) => {
    phonesCopy[index] = event.target.value;
    setState((prevState) => ({
      ...prevState,
      phones: phonesCopy,
    }));
  };

  const addPhone = () => {
    phonesCopy.push("");
    setState((prevState) => {
      return { ...prevState, phones: phonesCopy };
    });
  };

  const removePhone = (index: number) => {
    phonesCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, phones: phonesCopy };
    });
  };

  const handleDateSelect = (newValue: Date) => {
    setState((prevState) => ({
      ...prevState,
      dateOfBirth: newValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.row}>
        <Input
          label="Фамилия"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.lastName}
          onChange={handleChange}
        />
        <Input
          label="Имя"
          type="text"
          id="name"
          name="name"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Отчество"
          type="text"
          id="patronymic"
          name="patronymic"
          placeholder="Введите данные..."
          mr={20}
          mb={0}
          width={265}
          required
          value={state.patronymic}
          onChange={handleChange}
        />
        <DateSelect
          label="Дата рождения"
          value={state.dateOfBirth}
          onChange={handleDateSelect}
        />
      </div>
      {initLeader.phones[0] ? (
        <div className={styles.row}>
          {state.phones.map((phone, index: number) => (
            <div className={styles.phones} key={index}>
              <InputMask
                label="Контактный телефон"
                id="phones"
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
        />
      )}
      <Input
        label="E-mail"
        type="email"
        id="email"
        name="email"
        placeholder="Введите данные..."
        mr={20}
        width={265}
        required
        value={state.email}
        onChange={handleChange}
      />
      <Input
        label="Должность"
        type="text"
        id="position"
        name="position"
        placeholder="Введите данные..."
        mr={20}
        width={550}
        required
        value={state.position}
        onChange={handleChange}
      />
      <Input
        label="ФИО руководителя компании в родительном падеже"
        type="text"
        id="fullnameInParent"
        name="fullnameInParent"
        placeholder="Введите данные..."
        mr={20}
        width={550}
        required
        value={state.fullnameInParent}
        onChange={handleChange}
      />
      <Input
        label="Основание назначения на должность"
        type="text"
        id="basisForAppointment"
        name="basisForAppointment"
        placeholder="Введите данные..."
        mr={20}
        width={550}
        required
        value={state.basisForAppointment}
        onChange={handleChange}
      />
      <div className={styles.wrapButtons}>
        <Button bg="green" mr={30} width={120}>
          Сохранить
        </Button>
        <Button width={120}>Отмена</Button>
      </div>
    </form>
  );
};
export default LeaderForm;
