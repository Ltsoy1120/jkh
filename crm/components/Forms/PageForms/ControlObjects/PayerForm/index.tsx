import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import { PayerData } from "../../../../../models/IAccount";
import Input from "../../../ComponentForms/Input";
import DateSelect from "../../../ComponentForms/DateSelect";
import InputMask from "../../../ComponentForms/InputMask";
import Plus from "../../../../Buttons/CircleButtons/Plus";
import { typesOfPayer } from "../../../ComponentForms/SimpleSelect/selectOptions";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import Remove from "../../../../Buttons/CircleButtons/Remove";
import styles from "./style.module.scss";

interface PayerFormProps {
  initPayer: PayerData;
  onSubmit: (payerData: PayerData) => void;
}

const PayerForm: React.FC<PayerFormProps> = ({ initPayer, onSubmit }) => {
  const [state, setState] = useState<PayerData>(initPayer);
  const phonesCopy = [...state.phones];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateSelect = (newValue: Date, name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
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

  const cancelHandler = () => {
    setState(initPayer);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <SimpleSelect
        id="typeOfPayer"
        label="Тип плательщика"
        placeholder="Выберите из списка..."
        required
        data={typesOfPayer}
        name="typeOfPayer"
        value={state.typeOfPayer}
        onChange={handleChange}
        width={450}
      />
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
          mr={20}
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
          mr={20}
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
          mr={20}
          mb={0}
          width={265}
        />
      </div>
      <DateSelect
        label="Дата рождения"
        name="dateOfBirth"
        value={state.dateOfBirth}
        onChange={handleDateSelect}
        mb={30}
      />
      {state.phones[0] ? (
        <div className={styles.column}>
          {state.phones.map((phone, index: number) => (
            <div className={styles.row} key={index}>
              <InputMask
                label="Контактный телефон"
                id="phone"
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
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default PayerForm;
