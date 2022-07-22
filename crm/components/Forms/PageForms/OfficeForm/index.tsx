import { useState } from "react";
import { OfficeData } from "../../../../models/IOffice";
import Button from "../../../Buttons/Button";
import Plus from "../../../Buttons/CircleButtons/Plus";
import Input from "../../ComponentForms/Input";
import InputMask from "../../ComponentForms/InputMask";
import Schedule from "../../../Schedule";
import CheckBox from "../../../CheckBox";
import styles from "./style.module.scss";

interface OfficeFormProps {
  initOffice: OfficeData;
  onSubmit: (officeData: OfficeData) => Promise<void>;
}

const OfficeForm: React.FC<OfficeFormProps> = ({ initOffice, onSubmit }) => {
  const [state, setState] = useState<OfficeData>(initOffice);
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

  const handleChecked = () => {
    setState((prevState) => ({
      ...prevState,
      noPreRegistration: !state.noPreRegistration,
    }));
  };

  const handleCheckedReception = (dayOfWeek: string) => {
    setState((prevState) => ({
      ...prevState,
      schedule: {
        ...prevState.schedule,
        [dayOfWeek]: {
          ...prevState.schedule[dayOfWeek],
          isReception: !state.schedule[dayOfWeek].isReception,
        },
      },
    }));
  };

  const handleChangeSchedule = (
    name: string,
    value: string,
    time: string,
    dayOfWeek: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      schedule: {
        ...prevState.schedule,
        [dayOfWeek]: {
          ...prevState.schedule[dayOfWeek],
          [time]: {
            ...prevState.schedule[dayOfWeek][time],
            [name]: value,
          },
        },
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <h2>Информация об офисе компании</h2>
      <div className={styles.wrapInputs}>
        <Input
          label="Название офиса"
          type="text"
          id="name"
          name="name"
          placeholder="Введите данные..."
          width={550}
          required
          value={state.name}
          onChange={handleChange}
        />
        <Input
          label="Адрес"
          type="text"
          id="address"
          name="address"
          placeholder="Введите данные..."
          width={550}
          required
          value={state.address}
          onChange={handleChange}
        />
        <Input
          label="Рабочие дни"
          type="text"
          id="dateOfWork"
          name="dateOfWork"
          placeholder="Например: пн. - пт."
          width={360}
          required
          value={state.dateOfWork}
          onChange={handleChange}
        />
        <Input
          label="Рабочие часы"
          type="text"
          id="timeOfWork"
          name="timeOfWork"
          placeholder="Например: с 09:00 до 19:00"
          width={360}
          required
          value={state.timeOfWork}
          onChange={handleChange}
        />
        <Input
          label="Время обеда"
          type="text"
          id="timeOfLunch"
          name="timeOfLunch"
          placeholder="Например: с 09:00 до 19:00"
          width={360}
          required
          value={state.timeOfLunch}
          onChange={handleChange}
        />
        {initOffice.phones[0] ? (
          <div className={styles.phones}>
            {initOffice.phones.map((phone, index: number) => (
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
      </div>
      <h2>Информация о графике приема</h2>
      <CheckBox
        label="Предварительная запись не требуется"
        checked={state.noPreRegistration}
        onChange={handleChecked}
      />

      <Schedule
        schedule={state.schedule}
        handleChangeSchedule={handleChangeSchedule}
        handleCheckedReception={handleCheckedReception}
      />

      <div className={styles.wrapButtons}>
        <Button bg="green" mr={30} width={150}>
          Сохранить
        </Button>
        <Button width={150}>Отмена</Button>
      </div>
    </form>
  );
};
export default OfficeForm;
