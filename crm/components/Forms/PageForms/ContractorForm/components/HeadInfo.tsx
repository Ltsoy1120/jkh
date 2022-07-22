import { SelectChangeEvent } from "@mui/material";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import styles from "../style.module.scss";
import {
  ContractorData,
  HeadData,
  IContractor,
} from "../../../../../models/IContractor";
import Plus from "../../../../Buttons/CircleButtons/Plus";

interface HeadInfoProps {
  head: HeadData;
  contractor?: IContractor;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
  handleChangePhone: (
    event: { target: { name: string; value: string } },
    index: number
  ) => void;
  addPhone: () => void;
}

const HeadInfo: React.FC<HeadInfoProps> = ({
  head,
  contractor,
  handleChange,
  handleChangePhone,
  addPhone,
}) => {
  const phonesWithoutFirst = [...head.phones].slice(1);
  return (
    <div className={styles.wrapForms}>
      <h2>Информация о руководителе</h2>
      <div className={styles.row}>
        <Input
          label="Фамилия"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Введите данные..."
          required
          value={head.lastName}
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
          mr={20}
          width={265}
          required
          value={head.name}
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
          value={head.patronymic}
          onChange={handleChange}
        />
        <Input
          label="E-mail"
          type="email"
          id="email"
          name="email"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={head.email}
          onChange={handleChange}
        />
      </div>
      {head.phones[0] ? (
        <div className={styles.phones}>
          {head.phones.map((phone, index: number) => (
            <InputMask
              label="Контактный телефон"
              id="phones"
              index={index}
              key={index}
              value={head.phones[index]}
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
            value={head.phones[0]}
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
  );
};
export default HeadInfo;
