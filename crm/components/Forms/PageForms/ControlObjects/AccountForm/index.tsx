import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import { AccountData } from "../../../../../models/IAccount";
import DocsInfo from "./components/DocsInfo";
import GeneralInfo from "./components/GeneralInfo";
import AreasInfo from "./components/AreasInfo";
import ContractsInfo from "./components/ContractsInfo";
import Button from "../../../../Buttons/Button";
import styles from "./style.module.scss";

interface AccountFormProps {
  initAccount: AccountData;
  onSubmit: (accountData: FormData) => void;
  deleteAccountHandler?: () => void;
}

const AccountForm: React.FC<AccountFormProps> = ({
  initAccount,
  onSubmit,
  deleteAccountHandler,
}) => {
  const [state, setState] = useState<AccountData>(initAccount);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files);
    const name = e.target.name;
    const filesCopy = [...state[name]];
    const newFiles = filesCopy.concat(files);
    setState((prevState) => ({
      ...prevState,
      [name]: newFiles,
    }));
  };

  const removeFile = (index: number, name: string) => {
    const filesCopy = [...state[name]];
    filesCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, [name]: filesCopy };
    });
  };

  const cancelHandler = () => {
    setState(initAccount);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "docs") {
        formData.append(key, state[key]);
      }
    });
    state.docs.forEach((doc) => formData.append("docs", doc));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <GeneralInfo state={state} handleChange={handleChange} />
      <AreasInfo state={state} handleChange={handleChange} />
      <ContractsInfo
        state={state}
        handleChange={handleChange}
        handleDateSelect={handleDateSelect}
      />
      {!state.closeDate && (
        <AddGroupOfFiles
          label="Добавить документы"
          name="docs"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      )}
      <DocsInfo state={state} removeFile={removeFile} />
      {!state.closeDate ? (
        <FormButtonGroup cancelHandler={cancelHandler} />
      ) : (
        <Button bg="green" mt={30} width={250} onClick={deleteAccountHandler}>
          Удалить лицевой счет
        </Button>
      )}
    </form>
  );
};
export default AccountForm;
