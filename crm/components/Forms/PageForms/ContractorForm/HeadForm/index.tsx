import { useState } from "react";
import Button from "../../../../Buttons/Button";
import Plus from "../../../../Buttons/CircleButtons/Plus";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import DateSelect from "../../../ComponentForms/DateSelect";
import { HeadData } from "../../../../../models/IContractor";
import styles from "./style.module.scss";

interface HeadFormProps {
  initHead: HeadData;
  onSubmit: (headData: HeadData) => void;
}

const HeadForm: React.FC<HeadFormProps> = ({ initHead, onSubmit }) => {
  const [state, setState] = useState<HeadData>(initHead);
  const phonesWithoutFirst = [...state.phones].slice(1);
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
      {state.phones[0] ? (
        <div className={styles.phones}>
          {state.phones.map((phone, index: number) => (
            <InputMask
              label="Контактный телефон"
              id="phones"
              name="phones"
              index={index}
              key={index}
              value={state.phones[index]}
              handleChangePhone={(e) => handleChangePhone(e, index)}
              placeholder="Введите данные..."
              required
              mr={20}
              width={265}
            />
          ))}
          <Plus onClick={addPhone} />
        </div>
      ) : (
        <div className={styles.phones}>
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
          {phonesWithoutFirst &&
            phonesWithoutFirst.map((phone, index) => (
              <InputMask
                key={index}
                index={index + 1}
                label="Контактный телефон"
                id="phones"
                name="phones"
                value={phone}
                handleChangePhone={(e) => handleChangePhone(e, index + 1)}
                placeholder="Введите данные..."
                required
                mr={20}
                width={265}
              />
            ))}
          <Plus onClick={addPhone} />
        </div>
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
      <div className={styles.wrapButtons}>
        <Button bg="green" mr={30} width={120}>
          Сохранить
        </Button>
        <Button width={120}>Отмена</Button>
      </div>
    </form>
  );
};
export default HeadForm;
