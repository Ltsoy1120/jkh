import { useState } from "react";
import { RequisitesData } from "../../../../models/ICompany";
import Button from "../../../Buttons/Button";
import Input from "../../ComponentForms/Input";
import styles from "./RequisitesForm.module.scss";

interface RequisitesFormProps {
  initRequisites: RequisitesData;
  onSubmit: (requisitesData: RequisitesData) => Promise<void>;
}

const RequisitesForm: React.FC<RequisitesFormProps> = ({
  initRequisites,
  onSubmit,
}) => {
  const [state, setState] = useState<RequisitesData>(initRequisites);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
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
          label="ОГРН"
          type="text"
          id="ogrn"
          name="ogrn"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.ogrn}
          onChange={handleChange}
        />
        <Input
          label="ИНН"
          type="text"
          id="inn"
          name="inn"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.inn}
          onChange={handleChange}
        />
        <Input
          label="КПП"
          type="text"
          id="kpp"
          name="kpp"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.kpp}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Наименовние банка"
        type="text"
        id="bankName"
        name="bankName"
        placeholder="Введите данные..."
        width={550}
        required
        value={state.bankName}
        onChange={handleChange}
      />
      <div className={styles.row}>
        <Input
          label="БИК"
          type="text"
          id="bik"
          name="bik"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.bik}
          onChange={handleChange}
        />
        <Input
          label="Рассчетный счет"
          type="text"
          id="paymentAccount"
          name="paymentAccount"
          placeholder="Введите данные..."
          mr={20}
          width={265}
          required
          value={state.paymentAccount}
          onChange={handleChange}
        />
        <Input
          label="Корреспондентский счет"
          type="text"
          id="correspondentAccount"
          name="correspondentAccount"
          placeholder="Введите данные..."
          width={265}
          required
          value={state.correspondentAccount}
          onChange={handleChange}
        />
      </div>
      <div className={styles.wrapButtons}>
        <Button bg="green" mr={30} width={150}>
          Сохранить
        </Button>
        <Button width={150}>Отмена</Button>
      </div>
    </form>
  );
};
export default RequisitesForm;
