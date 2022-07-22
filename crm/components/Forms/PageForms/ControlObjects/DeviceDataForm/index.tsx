import { useState } from "react";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import Input from "../../../ComponentForms/Input";
import DateSelect from "../../../ComponentForms/DateSelect";
import { getCurrentMonthYear } from "../../../../../utils/functions";
import { TypeDeviceData } from "../../../../../models/IDeviceData";
import AdornmentInput from "../../../ComponentForms/AdornmentInput";
import { LockIcon } from "../../../../icons";
import styles from "./style.module.scss";

interface DeviceDataFormProps {
  initDeviceData: TypeDeviceData;
  onSubmit: (deviceData: TypeDeviceData) => void;
}

const DeviceDataForm: React.FC<DeviceDataFormProps> = ({
  initDeviceData,
  onSubmit,
}) => {
  const [state, setState] = useState<TypeDeviceData>(initDeviceData);

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

  const cancelHandler = () => {
    setState(initDeviceData);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <span>{getCurrentMonthYear()}</span>
      <div className={styles.row}>
        <AdornmentInput
          label="Показания прошлого месяца"
          id="lastData"
          name="lastData"
          placeholder="Введите данные..."
          required
          value={state.lastData}
          onChange={handleChange}
          adornment={<LockIcon />}
          disabled
          mb={0}
          mr={20}
          width={265}
        />
        <Input
          label="Текущие показания"
          id="currentData"
          name="currentData"
          placeholder="Введите данные..."
          required
          value={state.currentData && state.currentData}
          onChange={handleChange}
          mb={0}
          mr={20}
          width={265}
        />
        <DateSelect
          label="Дата  подачи показаний"
          name="createDate"
          value={state.createDate}
          onChange={handleDateSelect}
        />
      </div>
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default DeviceDataForm;
