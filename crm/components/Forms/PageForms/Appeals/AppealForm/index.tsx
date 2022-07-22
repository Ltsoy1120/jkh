import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import { AppealData } from "../../../../../models/IAppeal";
import styles from "./style.module.scss";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import DocsInfo from "./DocsInfo";
import CheckBox from "../../../../CheckBox";
import { typesOfAppeals } from "../../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";
import { IHouse } from "../../../../../models/IHouse";
import {
  getListAccountsWithId,
  getListData,
} from "../../../ComponentForms/SimpleSelect/getSelectOptions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import {
  getAccounts,
  getFilteredAccounts,
} from "../../../../../store/actions/controlObjectActions";
import SelectWithId from "../../../ComponentForms/SimpleSelect/SelectWithId";

interface AppealFormProps {
  initAppeal: AppealData;
  onSubmit: (appealData: FormData) => void;
  houses: IHouse[];
  companyId: string;
}

const AppealForm: React.FC<AppealFormProps> = ({
  initAppeal,
  onSubmit,
  houses,
  companyId,
}) => {
  const [state, setState] = useState<AppealData>(initAppeal);
  const accounts = useAppSelector(getAccounts());
  console.log("accounts", accounts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getFilteredAccounts({
        address: state.address,
        numberOfApartment: state.numberOfApartment,
        company: companyId,
      })
    );
  }, [state.address, state.numberOfApartment]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
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

  const handleSelect = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChecked = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: !state[name],
    }));
  };

  //   const cancelHandler = () => {
  //     setState(initSubject);
  //   };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("state", state);
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "files" && key !== "account") {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("account", state.account.id);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      {/* <Input
        label="Номер входящего обращения"
        id="number"
        name="number"
        placeholder="Введите данные..."
        width={265}
        value={state.number}
        onChange={handleChange}
      /> */}
      <SimpleSelect
        id="type"
        label="Тип обращения"
        placeholder="Выберите из списка..."
        required
        data={typesOfAppeals}
        name="type"
        value={state.type}
        onChange={handleChange}
        width={450}
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
      {state.files[0] && <DocsInfo state={state} removeFile={removeFile} />}
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
          width={200}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        {accounts[0] ? (
          <>
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
            />
            <CheckBox
              label="Заявитель не является собственником"
              checked={state.isPhoneBindToAccount}
              onChange={() => handleChecked("isPhoneBindToAccount")}
              mb={20}
            />
          </>
        ) : (
          <Input
            label="ФИО заявителя"
            id="applicantFullName"
            name="applicantFullName"
            placeholder="Введите данные..."
            value={state.senderFullName}
            onChange={handleChange}
            required
            width={400}
            mb={0}
          />
        )}
      </div>
      <div className={styles.row}>
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
          mb={30}
        />
        <CheckBox
          label="Привязать номер телефона к лицевому счету"
          checked={state.isPhoneBindToAccount}
          onChange={() => handleChecked("isPhoneBindToAccount")}
          mb={40}
        />
      </div>
      <FormButtonGroup href={""} />
    </form>
  );
};
export default AppealForm;
