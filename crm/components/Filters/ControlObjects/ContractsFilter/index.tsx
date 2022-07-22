import React, { useEffect, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  characteristicsOfApartment,
  contractStatuses,
  typesOfApartment,
} from "../../../Forms/ComponentForms/SimpleSelect/selectOptions";
import styles from "./style.module.scss";
import DateSelect from "../../../Forms/ComponentForms/DateSelect";
import Input from "../../../Forms/ComponentForms/Input";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";
import {
  getContractsByCompany,
  getFilteredContracts,
} from "../../../../store/actions/controlObjectActions";
import {
  getListData,
  getSelectOptionsFromArray,
} from "../../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import { IContract } from "../../../../models/IContract";

export interface ContractsFilterData {
  number: string;
  status: string;
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  controlObjects: string;
  company: string;
}

interface ContractsFilterProps {
  companyId: string;
  contracts: IContract[];
  mb?: number;
}

const ContractsFilter: React.FC<ContractsFilterProps> = ({
  companyId,
  contracts,
  mb,
}) => {
  const dispatch = useAppDispatch();
  const initContractsFilter = {
    number: "",
    status: "",
    name: "",
    startDate: null,
    endDate: null,
    controlObjects: "",
    company: companyId,
  };
  const [filter, setFilter] =
    useState<ContractsFilterData>(initContractsFilter);

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

  const handleFilter = () => {
    dispatch(getFilteredContracts(filter));
  };

  const clearFilterData = () => {
    dispatch(getContractsByCompany(companyId));
    setFilter(initContractsFilter);
  };
  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <Input
            label="Номер договора"
            id="number"
            name="number"
            placeholder="Введите данные..."
            value={filter.number}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
          />
          <SimpleSelect
            id="status"
            label="Статус"
            name="status"
            data={contractStatuses}
            value={filter.status}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            width={265}
            mb={0}
            mr={20}
          />
          <SimpleSelect
            id="name"
            label="Название"
            name="name"
            data={getListData(contracts, "name")}
            value={filter.name}
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
            value={filter.startDate}
            onChange={handleDateSelect}
            mr={20}
          />
          <DateSelect
            label="Дата расторжения договора"
            name="endDate"
            value={filter.endDate}
            onChange={handleDateSelect}
          />
        </div>
        <SimpleSelect
          id="controlObjects"
          label="Объекты управления"
          name="controlObjects"
          data={getSelectOptionsFromArray(contracts, "controlObjects")}
          value={filter.controlObjects}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          width={265}
          mb={0}
        />
      </div>
      <FilterButtonGroup
        handleFilter={handleFilter}
        clearFilterData={clearFilterData}
        mt={25}
      />
    </div>
  );
};
export default ContractsFilter;
