import { SyntheticEvent, useEffect, useState } from "react";
import Input from "../../../ComponentForms/Input";
import { getEmployeesByCompany } from "../../../../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { getEmployees } from "../../../../../store/slices/userSlice";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import { Employee, TaskInit } from "../../../../../models/ITask";
import PerformersInfo from "./components/PerformersInfo";
import ObserversInfo from "./components/ObserversInfo";
import DeadlineInfo from "./components/DeadlineInfo";
import TaskInfo from "./components/TaskInfo";
import { SelectChangeEvent } from "@mui/material";
import {
  getHouses,
  getHousesByCompany,
} from "../../../../../store/actions/controlObjectActions";
import SimpleSelect from "../../../ComponentForms/SimpleSelect";
import {
  getTaskTypes,
  getTaskTypesByCompany,
} from "../../../../../store/actions/taskActions";
import { getListData } from "../../../ComponentForms/SimpleSelect/getSelectOptions";
import styles from "./style.module.scss";

interface TaskFormProps {
  companyId: string;
  initTask: TaskInit;
  onSubmit: (taskTypeData: FormData) => Promise<void>;
}

const TaskForm: React.FC<TaskFormProps> = ({
  companyId,
  initTask,
  onSubmit,
}) => {
  const [state, setState] = useState<TaskInit>(initTask);
  const [performer, setPerformer] = useState<Employee>(null);
  const [observer, setObserver] = useState<Employee>(null);

  const performersCopy = [...state.performers];
  const observersCopy = [...state.observers];
  const employeesOfCompany = useAppSelector(getEmployees());
  const housesOfCompany = useAppSelector(getHouses());
  const taskTypesOfCompany = useAppSelector(getTaskTypes());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
    dispatch(getHousesByCompany(companyId));
    dispatch(getTaskTypesByCompany(companyId));
  }, [dispatch]);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChecked = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: !state[name],
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

  const performerHandleChange = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string }
  ) => {
    setPerformer(value);
  };

  const addPerformer = () => {
    performersCopy.push(performer);
    setState((prevState) => {
      return { ...prevState, performers: performersCopy };
    });
    setPerformer(null);
  };

  const removePerformer = (index: number) => {
    performersCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, performers: performersCopy };
    });
  };

  const observerHandleChange = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string }
  ) => {
    setObserver(value);
  };

  const addObserver = () => {
    observersCopy.push(observer);
    setState((prevState) => {
      return { ...prevState, observers: observersCopy };
    });
    setObserver(null);
  };

  const removeObserver = (index: number) => {
    observersCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, observers: observersCopy };
    });
  };
  console.log("state", state);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach((key) => {
      if (
        key !== "files" &&
        key !== "resultFiles" &&
        key !== "performers" &&
        key !== "observers"
      ) {
        formData.append(key, state[key]);
      }
    });
    state.files &&
      state.files.forEach((file) => formData.append("files", file));
    state.resultFiles &&
      state.resultFiles.forEach((file) => formData.append("resultFiles", file));
    state.performers.length &&
      state.performers.forEach((performer) =>
        formData.append("performers", performer.id)
      );
    state.observers.length &&
      state.observers.forEach((observer) =>
        formData.append("observers", observer.id)
      );
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <h2>Название</h2>
      <div className={styles.row}>
        <SimpleSelect
          id="basisForTask"
          label="На основании"
          placeholder="Выберите из списка..."
          required
          data={["Заявка", "Обращение", "Прием"]}
          name="basisForTask"
          value={state.basisForTask}
          onChange={handleChange}
          width={265}
          mb={0}
        />
        <Input
          label="Номер документа"
          id="numberOfBasis"
          name="numberOfBasis"
          placeholder="Введите данные..."
          value={state.numberOfBasis}
          onChange={handleChange}
          required
          width={265}
          mb={0}
        />
      </div>
      <Input
        label="Название задачи"
        id="taskName"
        name="taskName"
        placeholder="Введите данные..."
        value={state.taskName}
        onChange={handleChange}
        required
        width={450}
      />
      <div className={styles.row}>
        <SimpleSelect
          id="priority"
          label="Приоритет"
          placeholder="Выберите из списка..."
          required
          data={["Критический", "Высокий", "Средний"]}
          name="priority"
          value={state.priority}
          onChange={handleChange}
          width={265}
          mb={0}
        />
        <SimpleSelect
          id="taskType"
          label="Тип задачи"
          placeholder="Выберите из списка..."
          required
          data={getListData(taskTypesOfCompany, "name")}
          name="taskType"
          value={state.taskType}
          onChange={handleChange}
          width={265}
          mb={0}
        />
      </div>
      <DeadlineInfo
        state={state}
        handleChecked={handleChecked}
        handleChange={handleChange}
        handleDateSelect={handleDateSelect}
      />
      <TaskInfo
        state={state}
        houses={housesOfCompany}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        removeFile={removeFile}
      />
      <div className={styles.employee}>
        <PerformersInfo
          state={state}
          performer={performer}
          performersCopy={performersCopy}
          addPerformer={addPerformer}
          removePerformer={removePerformer}
          performerHandleChange={performerHandleChange}
          employeesOfCompany={employeesOfCompany}
        />
        <ObserversInfo
          state={state}
          observer={observer}
          observersCopy={observersCopy}
          addObserver={addObserver}
          removeObserver={removeObserver}
          observerHandleChange={observerHandleChange}
          employeesOfCompany={employeesOfCompany}
        />
      </div>
      <FormButtonGroup href={""} />
    </form>
  );
};
export default TaskForm;
