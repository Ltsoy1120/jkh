import { ApplicationData } from "../../../../../../models/IApplication";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { SelectChangeEvent } from "@mui/material";
import AddFiles from "../../../../../AddFiles";
import CustomTextArea from "../../../../ComponentForms/CustomTextArea";
import DocsInfo from "./DocsInfo";
import Input from "../../../../ComponentForms/Input";
import InputMask from "../../../../ComponentForms/InputMask";
import { getListData } from "../../../../ComponentForms/SimpleSelect/getSelectOptions";
import { ChangeEvent } from "react";
import { IHouse } from "../../../../../../models/IHouse";
import styles from "../style.module.scss";

interface ApplicationInfoProps {
  state: ApplicationData;
  houses: IHouse[];
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number, name: string) => void;
}

const ApplicationInfo: React.FC<ApplicationInfoProps> = ({
  state,
  houses,
  handleChange,
  handleFileChange,
  removeFile,
}) => {
  return (
    <>
      <h2>Информация о заявке</h2>
      <div className={styles.row}>
        <CustomTextArea
          label="Текст заявки"
          name="text"
          value={state.text}
          onChange={handleChange}
          width={450}
        />
        <AddFiles
          label="Добавить документы"
          name="registerDocs"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      </div>
      <DocsInfo files={state.files} removeFile={removeFile} />
      <div className={styles.row}>
        <SimpleSelect
          id="address"
          label="Адрес/Дом"
          name="address"
          data={getListData(houses, "address")}
          value={state.address}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          required
          width={400}
          mb={0}
        />
        <Input
          label="Подъезд"
          id="numberOfEntrance"
          name="numberOfEntrance"
          placeholder="Введите данные..."
          width={110}
          value={state.numberOfEntrance}
          onChange={handleChange}
          mb={0}
        />
        <Input
          label="Этаж"
          id="floor"
          name="floor"
          placeholder="Введите данные..."
          value={state.floor}
          onChange={handleChange}
          width={110}
          mb={0}
        />
        <Input
          label="Помещение"
          id="numberOfApartment"
          name="numberOfApartment"
          placeholder="Введите данные..."
          value={state.numberOfApartment}
          onChange={handleChange}
          required
          width={110}
          mb={0}
        />
      </div>
      <div
        className={styles.row}
        style={{
          marginBottom: 15,
        }}
      >
        <Input
          label="ФИО заявителя"
          id="applicantFullName"
          name="applicantFullName"
          placeholder="Введите данные..."
          value={state.applicantFullName}
          onChange={handleChange}
          required
          width={400}
          mb={0}
        />
        <Input
          label="Номер лицевого счета"
          id="accountNumber"
          name="accountNumber"
          placeholder="Введите данные..."
          width={265}
          value={state.accountNumber}
          onChange={handleChange}
          mb={0}
        />
      </div>
      <div
        style={{
          color: "#E82F45",
          fontSize: "12px",
          marginBottom: "30px",
        }}
      >
        Внимание! По данному лицевому счету имеется задолженность 100 руб
      </div>
      <InputMask
        label="Контактный телефон"
        id="phone"
        name="phone"
        value={state.phone}
        handleChangePhone={handleChange}
        placeholder="Введите данные..."
        required
        mr={20}
        width={265}
        mb={20}
      />
    </>
  );
};
export default ApplicationInfo;
