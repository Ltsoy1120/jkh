import React, { useState } from "react";
import moment from "moment";
import { SelectChangeEvent } from "@mui/material";
import SimpleSelect from "../../Forms/ComponentForms/SimpleSelect";
import { useAppDispatch } from "../../../store/hooks";
import DateSelectPeriod from "../../Forms/ComponentForms/DateSelectPeriod";
import styles from "./style.module.scss";
import { IUser } from "../../../models/IUser";
import {
  getEmployeesByCompany,
  getFilteredEmployees,
} from "../../../store/actions/userActions";
import { getFullNames } from "../../../utils/functions";
import { getListData } from "../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import FilterButtonGroup from "../../Buttons/FilterButtonGroup";

export interface EmployeesFilter {
  fullName: string;
  position: string;
  registerDate: {
    from: Date | null;
    to: Date | null;
  };
}

interface DateData {
  from: string | null;
  to: string | null;
}

export interface EmployeesFilterData {
  lastName: string;
  name: string;
  position: string;
  registerDate: DateData | string;
  company: string;
}

const initEmployeesFilter = {
  fullName: "",
  position: "",
  registerDate: {
    from: null,
    to: null,
  },
};

export interface EmployeesFilterProps {
  employees: IUser[];
  companyId: string;
}
const EmployeesFilter: React.FC<EmployeesFilterProps> = ({
  employees,
  companyId,
}) => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<EmployeesFilter>(initEmployeesFilter);
  const [error, setError] = useState<string>("");

  const handleChangeFromDate = (newValue: Date) => {
    if (new Date(newValue).toString() === "Invalid Date") {
      return setError("Дата указана не корректно");
    }
    const stateCopy = { ...filter.registerDate, from: newValue };
    setError("");
    setFilter((prevState) => {
      return { ...prevState, registerDate: { ...stateCopy } };
    });
  };

  const handleChangeToDate = (newValue: Date) => {
    if (new Date(newValue).toString() === "Invalid Date") {
      return setError("Дата указана не корректно");
    }
    const stateCopy = { ...filter.registerDate, to: newValue };
    setError("");
    setFilter((prevState) => {
      return { ...prevState, registerDate: { ...stateCopy } };
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    const filterData: EmployeesFilterData = {
      lastName: filter.fullName.split(" ")[0],
      name: filter.fullName.split(" ")[1],
      position: filter.position,
      registerDate:
        filter.registerDate.from && filter.registerDate.to
          ? {
              from: moment(filter.registerDate.from.toISOString()).format(),
              to: moment(filter.registerDate.to?.toISOString()).format(),
            }
          : "",
      company: companyId,
    };
    console.log("filterData", filterData);
    dispatch(getFilteredEmployees(filterData));
  };

  const clearFilterData = () => {
    dispatch(getEmployeesByCompany(companyId));
    setFilter(initEmployeesFilter);
  };
  return (
    <div className={styles.wrapFilter}>
      <SimpleSelect
        label="ФИО"
        placeholder="Выберите из списка..."
        data={getFullNames(employees)}
        name="fullName"
        value={filter.fullName}
        onChange={handleChange}
        width={265}
      />
      <SimpleSelect
        label="Должность / специальность"
        placeholder="Выберите из списка..."
        data={getListData(employees, "position")}
        name="position"
        value={filter.position}
        onChange={handleChange}
        width={265}
      />
      <DateSelectPeriod
        label="Период регистрации"
        handleChangeFromDate={handleChangeFromDate}
        handleChangeToDate={handleChangeToDate}
        valueFrom={filter.registerDate.from}
        valueTo={filter.registerDate.to}
      />
      <FilterButtonGroup
        handleFilter={handleFilter}
        clearFilterData={clearFilterData}
        mt={25}
      />
    </div>
  );
};
export default EmployeesFilter;
