import { Alert, SelectChangeEvent } from "@mui/material";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import styles from "../style.module.scss";
import { ContractorData, IContractor } from "../../../../../models/IContractor";
import Plus from "../../../../Buttons/CircleButtons/Plus";

interface GeneralInfoProps {
  error?: string;
  state: ContractorData;
  contractor?: IContractor;
  initContractor: ContractorData;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
  handleChangePhone: (
    event: { target: { name: string; value: string } },
    index: number
  ) => void;
  addPhone: () => void;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  error,
  state,
  contractor,
  initContractor,
  handleChange,
  handleChangePhone,
  addPhone,
}) => {
  const phonesWithoutFirst = [...state.phones].slice(1);
  return (
    <div className={styles.wrapForms}>
      <h2>Общая информация о подрядчике</h2>
      <Input
        label="Название компании"
        type="text"
        id="contractorName"
        name="contractorName"
        placeholder="Введите данные..."
        required
        width={550}
        value={state.contractorName}
        onChange={handleChange}
      />
      {error && (
        <Alert
          severity="error"
          style={{ marginBottom: "20px", width: "550px" }}
        >
          {error}
        </Alert>
      )}
      <Input
        label="Адрес"
        type="text"
        id="address"
        name="address"
        value={state.address}
        onChange={handleChange}
        placeholder="Введите данные..."
        required
        width={550}
      />
      {contractor ? (
        <div className={styles.phones}>
          {initContractor.phones.map((phone, index: number) => (
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
  );
};
export default GeneralInfo;
