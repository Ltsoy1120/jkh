import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Input from "../../../ComponentForms/Input";
import DateSelect from "../../../ComponentForms/DateSelect";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import DocsInfo from "./DocsInfo";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import styles from "./style.module.scss";
import { RegisterData } from "../../../../../models/ISubject";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { registerStatuses } from "../../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";

interface RegisterFormProps {
  initRegister: RegisterData;
  onSubmit: (registerData: FormData) => void;
  href: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  initRegister,
  onSubmit,
  href,
}) => {
  const [state, setState] = useState<RegisterData>(initRegister);
  console.log(state);
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "registerDocs") {
        formData.append(key, state[key]);
      }
    });
    state.registerDocs.forEach((doc) => formData.append("registerDocs", doc));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      {!state.registerAccountNumber ? (
        <h2>Регистрация субъекта</h2>
      ) : (
        <h2>Редактирование регистрации</h2>
      )}
      <div className={styles.row}>
        <DateSelect
          label="Дата начала учета"
          name="startDateOfRegister"
          value={state.startDateOfRegister}
          onChange={handleDateSelect}
        />
        <DateSelect
          label="Дата окончания учета"
          name="endDateOfRegister"
          value={state.endDateOfRegister}
          onChange={handleDateSelect}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Л/С"
          id="registerAccountNumber"
          name="registerAccountNumber"
          placeholder="Введите данные..."
          required
          value={state.registerAccountNumber}
          onChange={handleChange}
          width={360}
          mb={0}
        />
        <SimpleSelect
          id="typeOfPayer"
          label="Статус регистрации"
          placeholder="Выберите из списка..."
          required
          data={registerStatuses}
          name="registerStatus"
          value={state.registerStatus}
          onChange={handleChange}
          width={360}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Причина убытия"
          id="reasonOfLeaving"
          name="reasonOfLeaving"
          placeholder="Введите данные..."
          required
          value={state.reasonOfLeaving}
          onChange={handleChange}
          width={360}
          mb={0}
        />
        <Input
          label="Причина прибытия"
          id="reasonForArrival"
          name="reasonForArrival"
          placeholder="Введите данные..."
          width={360}
          required
          value={state.reasonForArrival}
          onChange={handleChange}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Предыдущее место регистрации"
          id="previosRegisterPlace"
          name="previosRegisterPlace"
          placeholder="Введите данные..."
          value={state.previosRegisterPlace}
          onChange={handleChange}
          width={360}
          mb={0}
        />
        <Input
          label="Новое место регистрации"
          id="newRegisterPlace"
          name="newRegisterPlace"
          placeholder="Введите данные..."
          width={360}
          value={state.newRegisterPlace}
          onChange={handleChange}
          mb={0}
        />
      </div>
      <CustomTextArea
        label="Комментарий"
        name="comment"
        value={state.registerComment}
        onChange={handleChange}
        width={550}
      />
      <AddGroupOfFiles
        label="Добавить документы"
        name="registerDocs"
        onChange={handleFileChange}
        fz={12}
        width={"auto"}
      />
      <DocsInfo state={state} removeFile={removeFile} />
      <FormButtonGroup href={href} />
    </form>
  );
};
export default RegisterForm;
