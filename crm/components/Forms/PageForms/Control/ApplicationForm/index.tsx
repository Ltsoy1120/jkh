import { ChangeEvent, useEffect, useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import { ApplicationData } from "../../../../../models/IApplication";
import styles from "./style.module.scss";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import CustomTextArea from "../../../ComponentForms/CustomTextArea";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import Input from "../../../ComponentForms/Input";
import InputMask from "../../../ComponentForms/InputMask";
import DocsInfo from "./DocsInfo";
import Remove from "../../../../Buttons/CircleButtons/Remove";
import Plus from "../../../../Buttons/CircleButtons/Plus";
import CheckBox from "../../../../CheckBox";
import { typesOfRequests } from "../../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";
import { IHouse } from "../../../../../models/IHouse";
import { getListData } from "../../../ComponentForms/SimpleSelect/getSelectOptions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import {
  getAccounts,
  getFilteredAccounts,
} from "../../../../../store/actions/controlObjectActions";
import { getFullNames } from "../../../../../utils/functions";

interface ApplicationFormProps {
  initApplication: ApplicationData;
  onSubmit: (applicationData: FormData) => void;
  houses: IHouse[];
  companyId: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  initApplication,
  onSubmit,
  houses,
  companyId,
}) => {
  const [state, setState] = useState<ApplicationData>(initApplication);
  console.log(state);
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
    setState((prevState) => ({
      ...prevState,
      accountNumber: accounts[0]?.number ? accounts[0].number : "",
    }));
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
      if (key !== "files") {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      {!state.address ? (
        <h2>Новая заявка</h2>
      ) : (
        <h2>Редактирование заявки №{state.address}</h2>
      )}
      <SimpleSelect
        id="type"
        label="Тип заявки"
        placeholder="Выберите из списка..."
        required
        data={typesOfRequests}
        name="type"
        value={state.type}
        onChange={handleChange}
        width={360}
      />
      <div className={styles.row}>
        <CustomTextArea
          label="Комментарий"
          name="text"
          value={state.text}
          onChange={handleChange}
          required
          width={550}
        />
        <AddGroupOfFiles
          label="Добавить документы"
          name="files"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      </div>
      <DocsInfo state={state} removeFile={removeFile} />
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
          width={200}
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
          width={200}
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
        {accounts[0]?.owners.length ? (
          <SimpleSelect
            id="applicantFullName"
            label="ФИО заявителя"
            name="applicantFullName"
            data={getFullNames(accounts[0].owners)}
            value={state.applicantFullName}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            required
            width={400}
            mb={0}
          />
        ) : (
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
        )}
        <Input
          label="Номер лицевого счета"
          id="accountNumber"
          name="accountNumber"
          placeholder="Введите данные..."
          width={360}
          value={state.accountNumber}
          onChange={handleChange}
          mb={0}
        />
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
export default ApplicationForm;
