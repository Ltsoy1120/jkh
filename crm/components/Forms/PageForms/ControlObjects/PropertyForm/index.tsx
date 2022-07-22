import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Input from "../../../ComponentForms/Input";
import DateSelect from "../../../ComponentForms/DateSelect";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import DocsInfo from "./DocsInfo";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import { PropertyData } from "../../../../../models/IProperty";
import styles from "./style.module.scss";

interface PropertyFormProps {
  initProperty: PropertyData;
  onSubmit: (propertyData: FormData) => void;
  href: string;
}

const PropertyForm: React.FC<PropertyFormProps> = ({
  initProperty,
  onSubmit,
  href,
}) => {
  const [state, setState] = useState<PropertyData>(initProperty);
  console.log(state);
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
      if (key !== "docs") {
        formData.append(key, state[key]);
      }
    });
    state.docs.forEach((doc) => formData.append("docs", doc));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      {!state.accountNumber ? (
        <h2>Добавление новой собственности</h2>
      ) : (
        <h2>Редактирование собственности</h2>
      )}

      <div className={styles.row}>
        <DateSelect
          label="Дата начала владения"
          name="startDateOfOwnership"
          value={state.startDateOfOwnership}
          onChange={handleDateSelect}
        />
        <DateSelect
          label="Дата окончания владения"
          name="endDateOfOwnership"
          value={state.endDateOfOwnership}
          onChange={handleDateSelect}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Регистрационный номер"
          id="registerNumber"
          name="registerNumber"
          placeholder="Введите данные..."
          width={360}
          required
          value={state.registerNumber}
          onChange={handleChange}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Л/С"
          id="accountNumber"
          name="accountNumber"
          placeholder="Введите данные..."
          required
          value={state.accountNumber}
          onChange={handleChange}
          width={265}
          mb={0}
        />
        <Input
          label="Доля собственности (напр. 1/1, 1/2, 1/3 и т.д.)"
          id="shareOfOwnership"
          name="shareOfOwnership"
          placeholder="Введите данные..."
          width={265}
          required
          value={state.shareOfOwnership}
          onChange={handleChange}
          mb={0}
        />
      </div>
      <CustomTextArea
        label="Комментарий"
        name="comment"
        value={state.comment}
        onChange={handleChange}
        width={550}
      />
      <AddGroupOfFiles
        label="Добавить документы"
        name="docs"
        onChange={handleFileChange}
        fz={12}
        width={"auto"}
      />
      <DocsInfo state={state} removeFile={removeFile} />
      <FormButtonGroup href={href} />
    </form>
  );
};
export default PropertyForm;
