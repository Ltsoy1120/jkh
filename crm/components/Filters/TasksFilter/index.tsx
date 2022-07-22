import React, { SyntheticEvent, useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Input from "../../Forms/ComponentForms/Input";
import SimpleSelect from "../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../Buttons/FilterButtonGroup";
import {
  getListData,
  getListEmpoyeeWithId,
} from "../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import DateSelect from "../../Forms/ComponentForms/DateSelect";

import styles from "./style.module.scss";
import {
  getFilteredTasks,
  getTasksByCompany,
  getTaskTypes,
  getTaskTypesByCompany,
} from "../../../store/actions/taskActions";
import SelectWithId from "../../Forms/ComponentForms/SimpleSelect/SelectWithId";
import { getEmployeesByCompany } from "../../../store/actions/userActions";
import { getEmployees } from "../../../store/slices/userSlice";
import { getFullNamesWithId } from "../../../utils/functions";

type Employee = {
  label: string;
  email: string;
  phone: string;
  id: string;
};
export interface TasksFilterInit {
  createDate: Date | null;
  deadline: Date | null;
  taskName: string;
  numberOfBasis: string;
  taskType: string;
  priority: string;
  performer: Employee | null;
  observer: Employee | null;
  company: string;
}
export interface TasksFilterData {
  createDate: Date | null;
  deadline: Date | null;
  taskName: string;
  numberOfBasis: string;
  taskType: string;
  priority: string;
  performers: string;
  observers: string;
  company: string;
}
interface TasksFilterProps {
  companyId: string;
  mb?: number;
}

const TasksFilter: React.FC<TasksFilterProps> = ({ companyId, mb }) => {
  const dispatch = useAppDispatch();
  const taskTypesOfCompany = useAppSelector(getTaskTypes());
  const employeesOfCompany = useAppSelector(getEmployees());

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
    dispatch(getTaskTypesByCompany(companyId));
  }, [dispatch]);

  const initTasksFilter = {
    createDate: null,
    deadline: null,
    taskName: "",
    numberOfBasis: "",
    taskType: "",
    priority: "",
    performer: null,
    observer: null,
    company: companyId,
  };
  const [filter, setFilter] = useState<TasksFilterInit>(initTasksFilter);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateSelect = (newValue: Date, name: string) => {
    setFilter((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSelect = (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    const filterData = {
      createDate: filter.createDate ? filter.createDate : null,
      deadline: filter.deadline ? filter.deadline : null,
      taskName: filter.taskName ? filter.taskName : "",
      numberOfBasis: filter.numberOfBasis ? filter.numberOfBasis : "",
      taskType: filter.taskType ? filter.taskType : "",
      priority: filter.priority ? filter.priority : "",
      performers: filter.performer ? filter.performer.id : null,
      observers: filter.observer ? filter.observer.id : null,
      company: companyId,
    };
    console.log("filterData===", filterData);
    dispatch(getFilteredTasks(filterData));
  };

  const clearFilterData = () => {
    dispatch(getTasksByCompany(companyId));
    setFilter(initTasksFilter);
  };

  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <DateSelect
            label="Дата создания"
            name="createDate"
            value={filter.createDate}
            onChange={handleDateSelect}
            mr={20}
          />
          <DateSelect
            label="Дедлайн"
            name="deadline"
            value={filter.deadline}
            onChange={handleDateSelect}
            mr={20}
          />
          <Input
            label="Название"
            id="taskName"
            name="taskName"
            type="taskName"
            placeholder="Введите данные..."
            value={filter.taskName}
            onChange={handleChange}
            mb={0}
            width={265}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Номер основания"
            id="numberOfBasis"
            name="numberOfBasis"
            type="numberOfBasis"
            placeholder="Введите данные..."
            value={filter.numberOfBasis}
            onChange={handleChange}
            mb={0}
            width={265}
            mr={20}
          />
          {taskTypesOfCompany.length && (
            <SimpleSelect
              id="taskType"
              label="Тип задачи"
              placeholder="Выберите из списка..."
              required
              data={getListData(taskTypesOfCompany, "name")}
              name="taskType"
              value={filter.taskType}
              onChange={handleChange}
              width={265}
              mb={0}
              mr={20}
            />
          )}
          <SimpleSelect
            id="priority"
            label="Приоритет"
            placeholder="Выберите из списка..."
            data={["Критический", "Высокий", "Средний"]}
            name="priority"
            value={filter.priority}
            onChange={handleChange}
            width={265}
            mb={0}
          />
        </div>
        <div className={styles.row}>
          <SelectWithId
            id="performer"
            label="Исполнитель"
            placeholder="Выберите из списка..."
            required
            options={getListEmpoyeeWithId(employeesOfCompany)}
            name="performer"
            value={filter.performer}
            onChange={(e, value) => handleSelect(e, value, "performer")}
            width={405}
            mr={20}
          />
          <SelectWithId
            id="observer"
            label="Наблюдатель"
            placeholder="Выберите из списка..."
            required
            options={getListEmpoyeeWithId(employeesOfCompany)}
            name="observer"
            value={filter.observer}
            onChange={(e, value) => handleSelect(e, value, "observer")}
            width={410}
          />
        </div>
      </div>
      <FilterButtonGroup
        handleFilter={handleFilter}
        clearFilterData={clearFilterData}
        mt={25}
      />
    </div>
  );
};
export default TasksFilter;
