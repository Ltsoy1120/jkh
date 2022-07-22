import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import Input from "../../../Forms/ComponentForms/Input";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";
import {
  getContractsByCompany,
  getDevicesByCompany,
  getFilteredAccounts,
  getFilteredDevices,
} from "../../../../store/actions/controlObjectActions";
import { getListData } from "../../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import { IAccount } from "../../../../models/IAccount";
import styles from "./style.module.scss";
import {
  assignments,
  periodsOfNoData,
  typesOfDevice,
} from "../../../Forms/ComponentForms/SimpleSelect/selectOptions";
import DateSelect from "../../../Forms/ComponentForms/DateSelect";
import { IDevice } from "../../../../models/IDevice";
import getAccountById from "../../../../pages/api/getAccountById";

export interface DevicesFilterData {
  accountNumber: string;
  address: string;
  numberOfApartment: string;
  assignment: string;
  type: string;
  number: string;
  difference: string;
  checkDate: Date | null;
  periodOfNoData: string;
  company: string;
}

interface DevicesFilterProps {
  companyId: string;
  devices: IDevice[];
  mb?: number;
}

const DevicesFilter: React.FC<DevicesFilterProps> = ({
  companyId,
  devices,
  mb,
}) => {
  const dispatch = useAppDispatch();
  const initDevicesFilter = {
    accountNumber: "",
    address: "",
    numberOfApartment: "",
    assignment: "",
    type: "",
    number: "",
    difference: "",
    checkDate: null,
    periodOfNoData: "",
    company: companyId,
  };
  const [filter, setFilter] = useState<DevicesFilterData>(initDevicesFilter);

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
    dispatch(getFilteredDevices(filter));
  };

  const clearFilterData = () => {
    dispatch(getDevicesByCompany(companyId));
    setFilter(initDevicesFilter);
  };
  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <Input
            label="Лицевой счет"
            id="accountNumber"
            name="accountNumber"
            placeholder="Введите данные..."
            value={filter.accountNumber}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={200}
          />
          <SimpleSelect
            id="address"
            label="Адрес/Дом"
            name="address"
            data={getListData(devices, "address")}
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
            width={195}
          />
        </div>
        <div className={styles.row}>
          <SimpleSelect
            id="assignment"
            label="Назначение"
            placeholder="Выберите из списка..."
            required
            data={assignments}
            name="assignment"
            value={filter.assignment}
            onChange={handleChange}
            width={265}
            mb={0}
            mr={20}
          />
          <SimpleSelect
            id="type"
            label="Тип прибора"
            placeholder="Выберите из списка..."
            required
            data={typesOfDevice}
            name="type"
            value={filter.type}
            onChange={handleChange}
            width={265}
            mb={0}
            mr={20}
          />
          <Input
            label="Номер прибора учета"
            id="number"
            name="number"
            placeholder="Введите данные..."
            required
            value={filter.number}
            onChange={handleChange}
            mb={0}
            width={265}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Разница показаний"
            id="difference"
            name="difference"
            placeholder="Введите данные..."
            value={filter.difference}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
          />
          <DateSelect
            label="Дата следующей поверки"
            name="checkDate"
            value={filter.checkDate}
            onChange={handleDateSelect}
            mr={20}
          />
          <SimpleSelect
            id="periodOfNoData"
            label="Не поданы показания в течение"
            placeholder="Выберите из списка..."
            required
            data={periodsOfNoData}
            name="periodOfNoData"
            value={filter.periodOfNoData}
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
export default DevicesFilter;
