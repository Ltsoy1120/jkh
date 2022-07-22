import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import { OwnerData } from "../../../../../models/IAccount";
import Input from "../../../ComponentForms/Input";
import DateSelect from "../../../ComponentForms/DateSelect";
import InputMask from "../../../ComponentForms/InputMask";
import Plus from "../../../../Buttons/CircleButtons/Plus";
import Remove from "../../../../Buttons/CircleButtons/Remove";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { statusesOfOwnership } from "../../../ComponentForms/SimpleSelect/selectOptions";
import styles from "./style.module.scss";

interface OwnerFormProps {
  initOwner: OwnerData;
  onSubmit: (ownerData: OwnerData) => void;
}

const OwnerForm: React.FC<OwnerFormProps> = ({ initOwner, onSubmit }) => {
  const [state, setState] = useState<OwnerData>(initOwner);
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
    setState(initOwner);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          width={265}
          required
          value={state.email}
          onChange={handleChange}
          mb={0}
        />
      </div>
      {state.phones[0] ? (
        <div className={styles.column}>
          {state.phones.map((phone, index: number) => (
            <div className={styles.row} key={index}>
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
          mb={30}
        />
      )}
      <div className={styles.row}>
        <DateSelect
          label="Дата начала владения"
          name="startDateOfOwnership"
          value={state.startDateOfOwnership}
          onChange={handleDateSelect}
          mb={30}
        />
        <Input
          label="Доля владения"
          id="shareOfOwnership"
          name="shareOfOwnership"
          placeholder="Введите данные..."
          width={265}
          required
          value={state.shareOfOwnership}
          onChange={handleChange}
        />
        <SimpleSelect
          id="statusOfOwnership"
          label="Статус владения"
          placeholder="Выберите из списка..."
          required
          data={statusesOfOwnership}
          name="statusOfOwnership"
          value={state.statusOfOwnership}
          onChange={handleChange}
          width={265}
        />
      </div>
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default OwnerForm;
