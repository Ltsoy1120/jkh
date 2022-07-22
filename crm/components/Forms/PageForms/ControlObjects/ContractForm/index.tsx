import { useState } from "react";
import Input from "../../../ComponentForms/Input";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import { contractStatuses } from "../../../ComponentForms/SimpleSelect/selectOptions";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import DateSelect from "../../../ComponentForms/DateSelect";
import styles from "./style.module.scss";
import { ContractData } from "../../../../../models/IContract";
import ScansInfo from "./components/ScansInfo";
import AddGroupOfFiles from "../../../../AddGroupOfFiles";
import ControlObjectsInfo from "./components/ControlObjectsInfo";

interface ContractFormProps {
  initContract: ContractData;
  onSubmit: (contractData: FormData) => void;
}

const ContractForm: React.FC<ContractFormProps> = ({
  initContract,
  onSubmit,
}) => {
  const [state, setState] = useState<ContractData>(initContract);
  const [controlObject, setControlObject] = useState("");
  const controlObjectsCopy = [...state.controlObjects];
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

  const controlObjectHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setControlObject(event.target.value);
  };

  const addControlObject = () => {
    controlObjectsCopy.push(controlObject);
    setState((prevState) => {
      return { ...prevState, controlObjects: controlObjectsCopy };
    });
    setControlObject("");
  };

  const removeControlObject = (index: number) => {
    controlObjectsCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, controlObjects: controlObjectsCopy };
    });
  };

  const handleChangeArray = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    const arrayCopy = [...state[name]];
    arrayCopy[index] = value;

    setState((prevState) => ({
      ...prevState,
      [name]: arrayCopy,
    }));
  };

  const cancelHandler = () => {
    setState(initContract);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (key !== "scans" && key !== "controlObjects") {
        formData.append(key, state[key]);
      }
    });
    state.controlObjects.forEach((controlObject) =>
      formData.append("controlObjects", controlObject)
    );
    state.scans.forEach((scan) => formData.append("scans", scan));
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <div className={styles.row}>
        <Input
          label="Номер договора"
          id="number"
          name="number"
          placeholder="Введите данные..."
          value={state.number}
          onChange={handleChange}
          required
          width={265}
          mb={0}
        />
        <SimpleSelect
          label="Статус"
          id="status"
          name="status"
          data={contractStatuses}
          value={state.status}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          width={265}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <DateSelect
          label="Дата заключения договора"
          name="startDate"
          value={state.startDate}
          onChange={handleDateSelect}
          required
        />
        <DateSelect
          label="Дата расторжения договора"
          name="endDate"
          value={state.endDate}
          onChange={handleDateSelect}
          required
        />
      </div>
      <div className={styles.row}>
        <Input
          label="Название"
          id="name"
          name="name"
          placeholder="Введите данные..."
          value={state.name}
          onChange={handleChange}
          mr={20}
          width={265}
          mb={0}
        />
        <AddGroupOfFiles
          label="Добавить сканы договора"
          name="scans"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      </div>
      <ScansInfo state={state} removeFile={removeFile} />
      <ControlObjectsInfo
        state={state}
        controlObject={controlObject}
        controlObjectsCopy={controlObjectsCopy}
        addControlObject={addControlObject}
        controlObjectHandleChange={controlObjectHandleChange}
        removeControlObject={removeControlObject}
        handleChangeArray={handleChangeArray}
      />
      <FormButtonGroup cancelHandler={cancelHandler} />
    </form>
  );
};
export default ContractForm;
