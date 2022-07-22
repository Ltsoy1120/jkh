import React, { SyntheticEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import Input from "../../Forms/ComponentForms/Input";
import SimpleSelect from "../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../Buttons/FilterButtonGroup";
import {
  getListAccountsWithId,
  getListData,
  getListFullNamesWithId,
} from "../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import styles from "./style.module.scss";
import {
  prioritiesOfApplication,
  resultsOfWork,
  statusesOfApplication,
  typesOfRequests,
} from "../../Forms/ComponentForms/SimpleSelect/selectOptions";
import { IApplication } from "../../../models/IApplication";
import SelectWithId from "../../Forms/ComponentForms/SimpleSelect/SelectWithId";
import DateSelect from "../../Forms/ComponentForms/DateSelect";
import {
  getApplicationsByCompany,
  getFilteredApplications,
} from "../../../store/actions/applicationActions";

export interface ApplicationsFilter {
  performer: {
    label: string;
    id: string;
  };
  createDate: Date | null;
  completionDate: Date | null;
  priority: string;
  status: string;
  account: {
    label: string;
    address: string;
    number: string;
    id: string;
  };
  address: string;
  numberOfEntrance: string;
  numberOfApartment: string;
  type: string;
  result: string;
  number: string;
  dispatcher: {
    label: string;
    id: string;
  };
  paymentType: string;
  company: string;
}
export interface ApplicationsFilterData {
  performer: string;
  createDate: Date | null;
  completionDate: Date | null;
  priority: string;
  status: string;
  account: string;
  address: string;
  numberOfEntrance: string;
  numberOfApartment: string;
  type: string;
  result: string;
  number: number;
  dispatcher: string;
  paymentType: string;
  company: string;
}
interface ApplicationsFilterProps {
  companyId: string;
  applications?: IApplication[];
  mb?: number;
}

const ApplicationsFilter: React.FC<ApplicationsFilterProps> = ({
  companyId,
  applications,
  mb,
}) => {
  const dispatch = useAppDispatch();
  const initApplicationsFilter = {
    performer: null,
    createDate: null,
    completionDate: null,
    priority: "",
    status: "",
    account: null,
    address: "",
    numberOfEntrance: "",
    numberOfApartment: "",
    type: "",
    result: "",
    number: "",
    dispatcher: null,
    paymentType: "",
    company: companyId,
  };
  const [filter, setFilter] = useState<ApplicationsFilter>(
    initApplicationsFilter
  );
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
      performer: filter.performer ? filter.performer.id : "",
      createDate: filter.createDate ? filter.createDate : null,
      completionDate: filter.completionDate ? filter.completionDate : null,
      priority: filter.priority ? filter.priority : "",
      status: filter.status ? filter.status : "",
      account: filter.account ? filter.account.id : "",
      address: filter.address ? filter.address : "",
      numberOfEntrance: filter.numberOfEntrance ? filter.numberOfEntrance : "",
      numberOfApartment: filter.numberOfApartment
        ? filter.numberOfApartment
        : "",
      type: filter.type ? filter.type : "",
      result: filter.result ? filter.result : "",
      number: filter.number ? Number(filter.number) : null,
      dispatcher: filter.dispatcher ? filter.dispatcher.id : "",
      paymentType: filter.paymentType ? filter.paymentType : "",
      company: companyId,
    };
    console.log("filterData===", filterData);
    dispatch(getFilteredApplications(filterData));
  };

  const clearFilterData = () => {
    dispatch(getApplicationsByCompany(companyId));
    setFilter(initApplicationsFilter);
  };

  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <SelectWithId
            id="performer"
            label="Исполнитель"
            placeholder="Выберите из списка..."
            options={getListFullNamesWithId(applications, "performer")}
            name="performer"
            value={filter.performer}
            onChange={(e, value) => handleSelect(e, value, "performer")}
            width={420}
            mb={0}
            mr={20}
          />
          <DateSelect
            label="Дата создания"
            name="createDate"
            value={filter.createDate}
            onChange={handleDateSelect}
            width={200}
            mr={20}
          />
          <DateSelect
            label="Дата выполнения"
            name="completionDate"
            value={filter.completionDate}
            onChange={handleDateSelect}
            width={200}
          />
        </div>
        <div className={styles.row}>
          <SimpleSelect
            id="priority"
            label="Приоритет"
            placeholder="Выберите из списка..."
            data={prioritiesOfApplication}
            name="priority"
            value={filter.priority}
            onChange={handleChange}
            width={200}
            mr={20}
            mb={0}
          />
          <SimpleSelect
            id="status"
            label="Статус"
            placeholder="Выберите из списка..."
            data={statusesOfApplication}
            name="status"
            value={filter.status}
            onChange={handleChange}
            width={200}
            mb={0}
            mr={20}
          />
          <SelectWithId
            id="account"
            label="Лицевой счет"
            name="account"
            options={getListAccountsWithId(
              getListData(applications, "account")
            )}
            value={filter.account}
            onChange={(e, value) => handleSelect(e, value, "account")}
            placeholder="Выберите из списка..."
            width={420}
            mb={0}
            mr={20}
          />
        </div>
        <div className={styles.row}>
          <SimpleSelect
            id="address"
            label="Адрес/Дом"
            name="address"
            data={getListData(applications, "address")}
            value={filter.address}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            width={420}
            mb={0}
            mr={20}
          />
          <Input
            label="Подъезд"
            id="numberOfEntrance"
            name="numberOfEntrance"
            placeholder="Введите данные..."
            value={filter.numberOfEntrance}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={200}
          />
          <Input
            label="Квартира"
            id="numberOfApartment"
            name="numberOfApartment"
            placeholder="Введите данные..."
            value={filter.numberOfApartment}
            onChange={handleChange}
            mb={0}
            width={200}
          />
        </div>
        <div className={styles.row}>
          <SimpleSelect
            id="type"
            label="Тип заявки"
            placeholder="Выберите из списка..."
            data={typesOfRequests}
            name="type"
            value={filter.type}
            onChange={handleChange}
            width={300}
            mb={0}
            mr={20}
          />
          <SimpleSelect
            id="result"
            label="Результат работы"
            name="result"
            data={resultsOfWork}
            value={filter.result}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            width={320}
            mb={0}
            mr={20}
          />
          <Input
            label="Номер заявки"
            id="number"
            name="number"
            type="number"
            placeholder="Введите данные..."
            value={filter.number}
            onChange={handleChange}
            mb={0}
            width={200}
          />
        </div>
        <div className={styles.row}>
          <SelectWithId
            id="dispatcher"
            label="Кем создана"
            placeholder="Выберите из списка..."
            options={getListFullNamesWithId(applications, "dispatcher")}
            name="dispatcher"
            value={filter.dispatcher}
            onChange={(e, value) => handleSelect(e, value, "dispatcher")}
            width={420}
            mb={0}
            mr={20}
          />
          <SimpleSelect
            id="paymentType"
            label="Вид оплаты"
            name="paymentType"
            data={[]}
            value={filter.paymentType}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            mb={0}
            width={420}
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
export default ApplicationsFilter;
