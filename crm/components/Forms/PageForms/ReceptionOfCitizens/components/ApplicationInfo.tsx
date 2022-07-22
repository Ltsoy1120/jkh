import { ApplicationData } from "../../../../../models/IApplication";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { SelectChangeEvent } from "@mui/material";
import AddFiles from "../../../../AddFiles";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import {
  getListAccountsWithId,
  getListData,
  getListDataWithId,
} from "../../../ComponentForms/SimpleSelect/getSelectOptions";
import { ChangeEvent, SyntheticEvent } from "react";
import { IHouse } from "../../../../../models/IHouse";
import styles from "../style.module.scss";
import DocsInfo from "./DocsInfo";
import { ReceptionData } from "../../../../../models/IReception";
import SelectWithId from "../../../ComponentForms/SimpleSelect/SelectWithId";
import { IOffice } from "../../../../../models/IOffice";
import { typesOfReceptions } from "../../../ComponentForms/SimpleSelect/selectOptions";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import { IAccount } from "../../../../../models/IAccount";

interface ApplicationInfoProps {
  state: ReceptionData;
  houses: IHouse[];
  offices: IOffice[];
  accounts: IAccount[];
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  handleSelect: (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number, name: string) => void;
}

const ApplicationInfo: React.FC<ApplicationInfoProps> = ({
  state,
  houses,
  offices,
  accounts,
  handleChange,
  handleSelect,
  handleFileChange,
  removeFile,
}) => {
  return (
    <>
      <h2>Информация об офисе компании</h2>
      <SelectWithId
        id="office"
        label="Офис"
        name="office"
        options={getListDataWithId(offices, "name")}
        value={state.office}
        onChange={(e, value) => handleSelect(e, value, "office")}
        placeholder="Выберите из списка..."
        width={265}
        mr={20}
        mb={50}
      />
      <SimpleSelect
        id="topic"
        label="Тема приёма"
        placeholder="Выберите из списка..."
        required
        data={typesOfReceptions}
        name="topic"
        value={state.topic}
        onChange={handleChange}
        width={265}
      />
      <div className={styles.row}>
        <CustomTextArea
          label="Текст обращения"
          name="text"
          value={state.text}
          onChange={handleChange}
          required
          width={450}
        />
        <AddGroupOfFiles
          label="Добавить документы"
          name="files"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      </div>
      {state.files[0] && (
        <DocsInfo files={state.files} removeFile={removeFile} />
      )}
      <h2>Информация об офисе компании</h2>
      <Input
        label="ФИО посетителя"
        id="visiterName"
        name="visiterName"
        placeholder="Введите данные..."
        value={state.visiterName}
        onChange={handleChange}
        required
        width={450}
      />
      <InputMask
        label="Контактный телефон"
        id="visiterPhone"
        name="visiterPhone"
        value={state.visiterPhone}
        handleChangePhone={handleChange}
        placeholder="Введите данные..."
        required
        mr={20}
        width={265}
        mb={30}
      />
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
          width={450}
          mb={0}
        />
        <Input
          label="Квартира"
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
      <SelectWithId
        id="account"
        label="ФИО / Адрес / Лицевой счет"
        name="account"
        options={getListAccountsWithId(accounts)}
        value={state.account}
        onChange={(e, value) => handleSelect(e, value, "account")}
        placeholder="Выберите из списка..."
        width={450}
        mr={20}
        mb={60}
      />
    </>
  );
};
export default ApplicationInfo;
