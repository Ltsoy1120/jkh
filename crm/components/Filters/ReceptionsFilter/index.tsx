import React, { SyntheticEvent, useEffect, useState } from "react";
import SimpleSelect from "../../Forms/ComponentForms/SimpleSelect";
import DateSelect from "../../Forms/ComponentForms/DateSelect";
import Input from "../../Forms/ComponentForms/Input";
import FilterButtonGroup from "../../Buttons/FilterButtonGroup";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { SelectChangeEvent } from "@mui/material";
import styles from "./style.module.scss";
import {
  getFilteredReceptions,
  getReceptionsByCompany,
} from "../../../store/actions/receptionActions";
import { getFullNamesWithId } from "../../../utils/functions";
import SelectWithId from "../../Forms/ComponentForms/SimpleSelect/SelectWithId";
import { getEmployeesByCompany } from "../../../store/actions/userActions";
import { getEmployees } from "../../../store/slices/userSlice";
import { getListDataWithId } from "../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import {
  getOffices,
  getOfficesByCompany,
} from "../../../store/actions/companyActions";
import moment from "moment";

export interface ReceptionsFilter {
  office: {
    label: string;
    id: string;
  };
  date: Date | null;
  responsiblePerson: {
    label: string;
    id: string;
  };
  status: string;
  topic: string;
  company: string;
}
export interface ReceptionsFilterData {
  office: string;
  date: string;
  responsiblePerson: string;
  status: string;
  topic: string;
  company: string;
}
interface ReseptionFilterProps {
  companyId: string;
  mb?: number;
}
const ReceptionsFilter: React.FC<ReseptionFilterProps> = ({
  companyId,
  mb,
}) => {
  const dispatch = useAppDispatch();
  const initReceptionFilter = {
    office: null,
    date: null,
    responsiblePerson: null,
    status: "",
    topic: "",
    company: companyId,
  };
  const [filter, setFilter] = useState<ReceptionsFilter>(initReceptionFilter);

  const employeesOfCompany = useAppSelector(getEmployees());
  const officesOfCompany = useAppSelector(getOffices());

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
    dispatch(getOfficesByCompany(companyId));
  }, [dispatch]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
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

  const handleDateSelect = (newValue: Date, name: string) => {
    setFilter((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleFilter = () => {
    const filterData = {
      office: filter.office ? filter.office.id : "",
      date: filter.date ? moment(filter.date).format("DD.MM.YYYY") : "",
      responsiblePerson: filter.responsiblePerson
        ? filter.responsiblePerson.id
        : "",
      status: filter.status ? filter.status : "",
      topic: filter.topic ? filter.topic : "",
      company: companyId,
    };
    dispatch(getFilteredReceptions(filterData));
  };

  const clearFilterData = () => {
    dispatch(getReceptionsByCompany(companyId));
    setFilter(initReceptionFilter);
  };

  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <SelectWithId
            id="office"
            label="Офис"
            name="office"
            options={getListDataWithId(officesOfCompany, "name")}
            value={filter.office}
            onChange={(e, value) => handleSelect(e, value, "office")}
            placeholder="Выберите из списка..."
            width={350}
            mr={20}
            mb={50}
          />
          <DateSelect
            label="Дата приема"
            name="date"
            value={filter.date}
            onChange={handleDateSelect}
            mr={20}
          />
        </div>
        <div className={styles.row}>
          <SelectWithId
            id="responsiblePerson"
            label="Ответственное лицо"
            placeholder="Выберите из списка..."
            required
            options={getFullNamesWithId(employeesOfCompany)}
            name="responsiblePerson"
            value={filter.responsiblePerson}
            onChange={(e, value) => handleSelect(e, value, "responsiblePerson")}
            width={350}
            mr={20}
          />
          <SimpleSelect
            id="status"
            label="Статус"
            placeholder="Выберите из списка..."
            data={["На согласовании", "Согласован", "Завершен", "Отменен"]}
            name="status"
            value={filter.status}
            onChange={handleChange}
            width={265}
            mb={0}
            mr={20}
          />
          <SimpleSelect
            id="topic"
            label="Тема приема"
            placeholder="Выберите из списка..."
            data={[
              "Вопросы по квитанциям",
              "Личные вопросы",
              "Прочие вопросы",
              "Юридические вопросы",
              "Технические вопросы",
            ]}
            name="topic"
            value={filter.topic}
            onChange={handleChange}
            width={265}
            mb={0}
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
export default ReceptionsFilter;
