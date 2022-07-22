import { useEffect, useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Input from "../../../ComponentForms/Input";
import DateSelect from "../../../ComponentForms/DateSelect";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import {
  assignments,
  periodsOfCheck,
  typesOfDevice,
} from "../../../ComponentForms/SimpleSelect/selectOptions";
import { DeviceData } from "../../../../../models/IDevice";
import CheckBox from "../../../../CheckBox";
import DocsInfo from "./components/DocsInfo";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import AdornmentInput from "../../../ComponentForms/AdornmentInput";
import { LockIcon } from "../../../../icons";
import { useAppSelector } from "../../../../../store/hooks";
import { getError } from "../../../../../store/actions/controlObjectActions";
import { Alert } from "@mui/material";
import styles from "./style.module.scss";
import TariffSelection from "./components/TariffSelection";

interface DeviceFormProps {
  initDevice: DeviceData;
  href?: string;
  onSubmit: (deviceData: FormData) => void;
}

const DeviceForm: React.FC<DeviceFormProps> = ({
  initDevice,
  href,
  onSubmit,
}) => {
  const [state, setState] = useState<DeviceData>(initDevice);
  let error = useAppSelector(getError());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRadioButtonChange = (value: string) => {
    value === "Многотарифный"
      ? setState((prevState) => ({
          ...prevState,
          tariff: value,
          firstDataT1: "",
          firstDataT2: "",
          firstDataT3: "",
        }))
      : value === "Двухтарифный"
      ? setState((prevState) => ({
          ...prevState,
          tariff: value,
          firstDataDay: "",
          firstDataNight: "",
        }))
      : setState((prevState) => ({
          ...prevState,
          tariff: value,
          firstData: "",
        }));
  };

  const handleDateSelect = (newValue: Date, name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleChecked = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: !state[name],
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
    <form onSubmit={handleSubmit}>
      {state.address && state.numberOfApartment ? (
        <div className={styles.row}>
          <AdornmentInput
            label="Адрес/Дом"
            id="address"
            name="address"
            placeholder="Введите данные..."
            required
            value={state.address}
            onChange={handleChange}
            disabled
            adornment={<LockIcon />}
            mb={0}
            width={450}
          />
          <AdornmentInput
            label="Помещение"
            id="numberOfApartment"
            name="numberOfApartment"
            placeholder="Введите данные..."
            required
            value={state.numberOfApartment}
            onChange={handleChange}
            disabled
            adornment={<LockIcon />}
            mb={0}
            width={265}
          />
        </div>
      ) : (
        <div className={styles.row}>
          <Input
            label="Адрес/Дом"
            id="address"
            name="address"
            placeholder="Введите данные..."
            required
            value={state.address}
            onChange={handleChange}
            mb={0}
            width={450}
          />
          <Input
            label="Помещение"
            id="numberOfApartment"
            name="numberOfApartment"
            placeholder="Введите данные..."
            required
            value={state.numberOfApartment}
            onChange={handleChange}
            mb={0}
            width={265}
          />
        </div>
      )}

      <div className={styles.row}>
        <Input
          label="Номер прибора учета"
          id="number"
          name="number"
          placeholder="Введите данные..."
          required
          value={state.number}
          onChange={handleChange}
          mb={0}
          width={265}
        />
        <SimpleSelect
          id="type"
          label="Тип прибора"
          placeholder="Выберите из списка..."
          required
          data={typesOfDevice}
          name="type"
          value={state.type}
          onChange={handleChange}
          width={265}
          mb={0}
        />
      </div>
      {error && (
        <Alert
          severity="error"
          style={{ marginBottom: "20px", width: "550px" }}
        >
          {error}
        </Alert>
      )}
      <div className={styles.row}>
        <Input
          label="Производитель"
          id="manufacturer"
          name="manufacturer"
          placeholder="Введите данные..."
          value={state.manufacturer}
          onChange={handleChange}
          mb={0}
          width={265}
        />
        <Input
          label="Модель"
          id="model"
          name="model"
          placeholder="Введите данные..."
          value={state.model}
          onChange={handleChange}
          mb={0}
          width={265}
        />
      </div>
      <Input
        label="Место установки"
        id="location"
        name="location"
        placeholder="Введите данные..."
        value={state.location}
        onChange={handleChange}
        width={550}
      />
      <CheckBox
        label="Наличие антимагнитной пломбы"
        checked={state.isSeal}
        onChange={() => handleChecked("isSeal")}
        mb={30}
      />
      <div className={styles.row}>
        <DateSelect
          label="Дата установки"
          name="installationDate"
          value={state.installationDate}
          onChange={handleDateSelect}
        />
        <DateSelect
          label="Дата опломбирования"
          name="dateOfSealing"
          value={state.dateOfSealing}
          onChange={handleDateSelect}
        />
        <DateSelect
          label="Дата ввода в эксплуатацию"
          name="commissioningDate"
          value={state.commissioningDate}
          onChange={handleDateSelect}
        />
      </div>
      <div className={styles.row}>
        <SimpleSelect
          id="periodOfCheck"
          label="Межпроверочный интервал"
          placeholder="Выберите из списка..."
          required
          data={periodsOfCheck}
          name="periodOfCheck"
          value={state.periodOfCheck}
          onChange={handleChange}
          width={265}
          mb={0}
        />
        <DateSelect
          label="Дата следующей поверки"
          name="checkDate"
          value={state.checkDate}
          onChange={handleDateSelect}
        />
      </div>
      <SimpleSelect
        id="assignment"
        label="Назначение"
        placeholder="Выберите из списка..."
        required
        data={assignments}
        name="assignment"
        value={state.assignment}
        onChange={handleChange}
        width={265}
      />
      {state.assignment === "Электроэнергия" ? (
        <TariffSelection
          state={state}
          onChange={handleChange}
          onClick={handleRadioButtonChange}
        />
      ) : (
        <>
          {initDevice.firstData ? (
            <AdornmentInput
              label="Начальные показания"
              id="firstData"
              name="firstData"
              placeholder="Введите данные..."
              value={state.firstData}
              onChange={handleChange}
              disabled
              adornment={<LockIcon />}
              mb={0}
              width={265}
            />
          ) : (
            <Input
              label="Начальные показания"
              id="firstData"
              name="firstData"
              placeholder="Введите данные..."
              value={state.firstData}
              onChange={handleChange}
              mb={0}
              width={265}
            />
          )}
        </>
      )}

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
export default DeviceForm;
