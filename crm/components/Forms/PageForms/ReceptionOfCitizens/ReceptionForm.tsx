import moment from "moment";
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import FormButtonGroup from "../../../Buttons/FormButtonGroup";
import styles from "./style.module.scss";
import SimpleSelect from "../../ComponentForms/SimpleSelect";
import CustomTextArea from "../../ComponentForms/CustomTextArea";
import AddGroupOfFiles from "../../../AddGroupOfFiles";
import Input from "../../ComponentForms/Input";
import InputMask from "../../ComponentForms/InputMask";
import DocsInfo from "./components/DocsInfo";
import {
  typesOfAppeals,
  typesOfReceptions,
} from "../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";
import { IHouse } from "../../../../models/IHouse";
import {
  getListAccountsWithId,
  getListData,
  getListDataWithId,
} from "../../ComponentForms/SimpleSelect/getSelectOptions";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  getAccounts,
  getFilteredAccounts,
} from "../../../../store/actions/controlObjectActions";
import SelectWithId from "../../ComponentForms/SimpleSelect/SelectWithId";
import { ReceptionData } from "../../../../models/IReception";
import { IOffice } from "../../../../models/IOffice";
import ReceptionDateSelect from "./components/ReceptionDateSelect";
import ReceptionTimeSeletct from "./components/ReceptionTimeSeletct";
import { getReceptionsByDate } from "../../../../store/actions/receptionActions";
import { getWeekDay } from "../../../../utils/functions";

interface ReceptionFormProps {
  initReception: ReceptionData;
  onSubmit: (appealData: FormData) => void;
  houses: IHouse[];
  offices: IOffice[];
  companyId: string;
}

const ReceptionForm: React.FC<ReceptionFormProps> = ({
  initReception,
  onSubmit,
  houses,
  offices,
  companyId,
}) => {
  const [state, setState] = useState<ReceptionData>(initReception);
  const [date, setDate] = useState<Date | null>(new Date());

  const accounts = useAppSelector(getAccounts());
  console.log("date", date);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      getFilteredAccounts({
        address: state.address,
        numberOfApartment: state.numberOfApartment,
        company: companyId,
      })
    );
  }, [dispatch, state.address, state.numberOfApartment]);

  useEffect(() => {
    dispatch(getReceptionsByDate(state.date, state.office?.id));
  }, [dispatch, state.date, state.office]);

  console.log("state", state);

  const getSchedule = () => {
    return offices.filter((office) => office._id === state.office.id)[0]
      .schedule;
  };

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

  const handleDateSelect = (newValue: Date) => {
    setDate(newValue);
    const date = moment(newValue).format("DD.MM.YYYY");
    setState((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleTimeSelect = (time: string) => {
    setState((prevState) => ({
      ...prevState,
      time,
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
      if (key !== "files" && key !== "office" && key !== "account") {
        formData.append(key, state[key]);
      }
    });
    state.files.forEach((file) => formData.append("files", file));
    formData.append("account", state.account.id);
    formData.append("office", state.office.id);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrap}>
      <h5>Информация об офисе компании</h5>
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
      <h2>
        Запись на{" "}
        <span className={styles.green}>
          {new Date()
            .toLocaleString("ru", {
              month: "long",
            })
            .toLocaleUpperCase()}
        </span>
      </h2>
      <span className={styles.greyLabel}>
        *Приемные дни в данном месяце
        <br /> выделены зеленым цветом
      </span>
      <div className={styles.calendarBlock}>
        <ReceptionDateSelect
          value={date}
          onChange={handleDateSelect}
          schedule={state.office ? getSchedule() : null}
        />
        <ReceptionTimeSeletct
          value={state.time}
          date={state.date}
          onChange={handleTimeSelect}
        />
      </div>
      {state.date && state.time ? (
        <h2>
          Записать на {getWeekDay(date)} {state.date}{" "}
          {state.time && `в ${state.time}`}
        </h2>
      ) : (
        <h2>Выберите дату и время приема</h2>
      )}
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
        <Input
          label="ФИО посетителя"
          id="visiterName"
          name="visiterName"
          placeholder="Введите данные..."
          value={state.visiterName}
          onChange={handleChange}
          required
          width={450}
          mb={0}
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
        />
      </div>
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
          width={265}
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
      <FormButtonGroup />
    </form>
  );
};
export default ReceptionForm;
