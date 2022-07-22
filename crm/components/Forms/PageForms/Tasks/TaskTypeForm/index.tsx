import { SyntheticEvent, useEffect, useState } from "react";
import Input from "../../../ComponentForms/Input";
import styles from "./style.module.scss";
import { getEmployeesByCompany } from "../../../../../store/actions/userActions";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { getEmployees } from "../../../../../store/slices/userSlice";
import SelectWithId from "../../../ComponentForms/SimpleSelect/SelectWithId";
import { getFullNamesWithId } from "../../../../../utils/functions";
import FormButtonGroup from "../../../../Buttons/FormButtonGroup";
import ToggleSwitch from "../../../../ToggleSwitch";
import {
  Employee,
  TaskTypeData,
  TaskTypeInit,
} from "../../../../../models/ITask";
import CheckMark from "../../../../Buttons/CircleButtons/CheckMark";
import Remove from "../../../../Buttons/CircleButtons/Remove";

interface TaskTypeFormProps {
  companyId: string;
  initTaskType: TaskTypeInit;
  onSubmit: (taskTypeData: TaskTypeData) => Promise<void>;
}

const TaskTypeForm: React.FC<TaskTypeFormProps> = ({
  companyId,
  initTaskType,
  onSubmit,
}) => {
  console.log("initTaskType", initTaskType);

  const [state, setState] = useState<TaskTypeInit>(initTaskType);
  const [performer, setPerformer] = useState<Employee>(null);

  const performersCopy = [...state.performers];
  const employeesOfCompany = useAppSelector(getEmployees());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  console.log("state", state);

  const removePerformer = (index: number) => {
    performersCopy.splice(index, 1);
    setState((prevState) => {
      return { ...prevState, performers: performersCopy };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const taskTypeData = {
      name: state.name,
      isActive: state.isActive,
      performers: state.performers.map((performer) => performer.id),
      company: state.company,
    };
    console.log("taskTypeData", taskTypeData);
    onSubmit(taskTypeData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <h2>Название</h2>
      <div className={styles.rowCenter}>
        <Input
          label="Тип задачи"
          id="name"
          name="name"
          placeholder="Введите данные..."
          width={550}
          required
          value={state.name}
          onChange={handleChange}
        />
        <div className={styles.wrapSwitch}>
          <ToggleSwitch
            checked={state.isActive}
            onChange={() => handleChecked("isActive")}
          />
          {state.isActive ? (
            <span>Активен</span>
          ) : (
            <span className={styles.inactive}>Неактивен</span>
          )}
        </div>
      </div>
      <h2>Сотрудники</h2>
      {!performersCopy.length ? (
        <div className={styles.row}>
          <SelectWithId
            id="performers"
            label="Добавить сотрудника"
            placeholder="Выберите из списка..."
            required
            options={getFullNamesWithId(employeesOfCompany)}
            name="performers"
            value={performer}
            onChange={(e, value) => performerHandleChange(e, value)}
            width={450}
          />
          <CheckMark onClick={addPerformer} />
        </div>
      ) : (
        <>
          <div className={styles.row}>
            <SelectWithId
              id="performers"
              label="Добавить сотрудника"
              placeholder="Выберите из списка..."
              required
              options={getFullNamesWithId(employeesOfCompany)}
              name="performers"
              value={performer}
              onChange={(e, value) => performerHandleChange(e, value)}
              width={450}
            />
            <CheckMark onClick={addPerformer} />
          </div>
          {performersCopy.map((performer, index) => (
            <div className={styles.row} key={index}>
              <SelectWithId
                id="performers"
                placeholder="Выберите из списка..."
                required
                options={getFullNamesWithId(employeesOfCompany)}
                name="performers"
                value={state.performers[index]}
                onChange={(e, value) => performerHandleChange(e, value)}
                width={450}
                mb={0}
              />
              <Remove onClick={() => removePerformer(index)} />
            </div>
          ))}
        </>
      )}

      <FormButtonGroup href={""} />
    </form>
  );
};
export default TaskTypeForm;
