import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import Input from "../../../Forms/ComponentForms/Input";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";
import {
  getListData,
  getSelectOptionsFromArray,
} from "../../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import { IAccount } from "../../../../models/IAccount";
import styles from "./style.module.scss";
import {
  assignments,
  typesOfDevice,
} from "../../../Forms/ComponentForms/SimpleSelect/selectOptions";
import { ISubject } from "../../../../models/ISubject";
import {
  getFilteredSubjects,
  getSubjectsByCompany,
} from "../../../../store/actions/subjectActions";

export interface PassportOfficeFilterData {
  lastName: string;
  organizationName: string;
  address: string;
  numberOfApartment: string;
  status: string;
  type: string;
  company: string;
}

interface PassportOfficeFilterProps {
  companyId: string;
  accounts?: IAccount[];
  subjects: ISubject[];
  mb?: number;
}

const PassportOfficeFilter: React.FC<PassportOfficeFilterProps> = ({
  companyId,
  accounts,
  subjects,
  mb,
}) => {
  console.log("accounts", accounts);
  const dispatch = useAppDispatch();
  const initSubjectsFilter = {
    lastName: "",
    organizationName: "",
    address: "",
    numberOfApartment: "",
    status: "",
    type: "",
    company: companyId,
  };
  const [filter, setFilter] =
    useState<PassportOfficeFilterData>(initSubjectsFilter);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    dispatch(getFilteredSubjects(filter));
  };

  const clearFilterData = () => {
    dispatch(getSubjectsByCompany(companyId));
    setFilter(initSubjectsFilter);
  };
  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <SimpleSelect
            id="lastName"
            label="Фамилия физического лица"
            name="lastName"
            data={getListData(subjects, "lastName")}
            value={filter.lastName}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            width={265}
            mb={0}
            mr={20}
          />
          <Input
            label="Название организации"
            id="organizationName"
            name="organizationName"
            placeholder="Введите данные..."
            value={filter.organizationName}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={400}
          />
        </div>
        <div className={styles.row}>
          <SimpleSelect
            id="address"
            label="Адрес/Дом"
            name="address"
            data={getListData(accounts, "address")}
            value={filter.address}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            width={400}
            mb={0}
            mr={20}
          />
          <Input
            label="Номер помещения"
            id="numberOfApartment"
            name="numberOfApartment"
            placeholder="Введите данные..."
            value={filter.numberOfApartment}
            onChange={handleChange}
            mb={0}
            width={265}
          />
        </div>
        <div className={styles.row}>
          <SimpleSelect
            id="status"
            label="Статус"
            placeholder="Выберите из списка..."
            required
            data={["Активен", "Неактивен"]}
            name="status"
            value={filter.status}
            onChange={handleChange}
            width={265}
            mb={0}
            mr={20}
          />
          <SimpleSelect
            id="type"
            label="Тип"
            placeholder="Выберите из списка..."
            required
            data={["Физическое лицо", "Юридическое лицо"]}
            name="type"
            value={filter.type}
            onChange={handleChange}
            width={265}
            mb={0}
            mr={20}
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
export default PassportOfficeFilter;
