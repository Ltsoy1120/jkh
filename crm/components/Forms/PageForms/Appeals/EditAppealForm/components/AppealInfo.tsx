import { AppealData } from "../../../../../../models/IAppeal";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { SelectChangeEvent } from "@mui/material";
import AddFiles from "../../../../../AddFiles";
import CustomTextArea from "../../../../ComponentForms/CustomTextArea";
import DocsInfo from "./DocsInfo";
import Input from "../../../../ComponentForms/Input";
import InputMask from "../../../../ComponentForms/InputMask";
import {
  getListAccountsWithId,
  getListData,
} from "../../../../ComponentForms/SimpleSelect/getSelectOptions";
import { ChangeEvent, SyntheticEvent } from "react";
import { IHouse } from "../../../../../../models/IHouse";
import styles from "../style.module.scss";
import SelectWithId from "../../../../ComponentForms/SimpleSelect/SelectWithId";
import { IAccount } from "../../../../../../models/IAccount";

interface AppealInfoProps {
  state: AppealData;
  houses: IHouse[];
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

const AppealInfo: React.FC<AppealInfoProps> = ({
  state,
  houses,
  accounts,
  handleChange,
  handleSelect,
  handleFileChange,
  removeFile,
}) => {
  return (
    <>
      <h2>Информация об обращении</h2>
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
      {state.files[0] && (
        <DocsInfo files={state.files} removeFile={removeFile} />
      )}
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
        <SelectWithId
          id="account"
          label="ФИО / Адрес / Лицевой счет"
          name="account"
          options={getListAccountsWithId(accounts)}
          value={state.account}
          onChange={(e, value) => handleSelect(e, value, "account")}
          placeholder="Выберите из списка..."
          width={450}
        />
        <InputMask
          label="Контактный телефон"
          id="phone"
          name="phone"
          value={state.phone}
          handleChangePhone={handleChange}
          placeholder="Введите данные..."
          required
          width={265}
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
    </>
  );
};
export default AppealInfo;
