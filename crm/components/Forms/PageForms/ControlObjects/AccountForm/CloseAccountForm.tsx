import { useState } from "react";
import { AccountClosingData } from "../../../../../models/IAccount";
import DateSelect from "../../../ComponentForms/DateSelect";
import Input from "../../../ComponentForms/Input";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import styles from "./style.module.scss";
import Button from "../../../../Buttons/Button";

interface AccountFormProps {
  initAccountClosure: AccountClosingData;
  onSubmit: (closingData: AccountClosingData) => void;
}

const CloseAccountForm: React.FC<AccountFormProps> = ({
  initAccountClosure,
  onSubmit,
}) => {
  const [state, setState] = useState<AccountClosingData>(initAccountClosure);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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

  const cancelHandler = () => {
    setState(initAccountClosure);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapperCloseForm}>
      <DateSelect
        label="Дата закрытия"
        name="closeDate"
        value={state.closeDate}
        onChange={handleDateSelect}
        required
        mb={30}
      />
      <Input
        label="Причина закрытия"
        id="reasonOfClosing"
        name="reasonOfClosing"
        placeholder="Введите данные..."
        value={state.reasonOfClosing}
        onChange={handleChange}
        mr={20}
        width={550}
      />
      <CustomTextArea
        label="Комментарий"
        name="commentOfClosing"
        value={state.commentOfClosing}
        onChange={handleChange}
        width={550}
      />
      <div className={styles.wrapButtons}>
        <Button bg="green" width={150} mr={30}>
          Закрыть
        </Button>
        <Button onClick={cancelHandler} type="button" width={150}>
          Отмена
        </Button>
      </div>
    </form>
  );
};
export default CloseAccountForm;
