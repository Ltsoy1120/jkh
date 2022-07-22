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
import { getFullNamesWithId, getYears } from "../../../utils/functions";
import SelectWithId from "../../Forms/ComponentForms/SimpleSelect/SelectWithId";
import { getEmployeesByCompany } from "../../../store/actions/userActions";
import { getEmployees } from "../../../store/slices/userSlice";
import {
  getListAccountsWithId,
  getListData,
  getListDataWithId,
  getListDevicesWithId,
} from "../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import {
  getOffices,
  getOfficesByCompany,
} from "../../../store/actions/companyActions";
import moment from "moment";
import { monthNames } from "../../../utils/constants";
import {
  getAccounts,
  getAccountsByCompany,
  getDevices,
  getDevicesByCompany,
} from "../../../store/actions/controlObjectActions";
import {
  getFilteredReceipts,
  getReceiptsByCompany,
} from "../../../store/actions/receiptActions";

export interface IReceiptsFilter {
  address: string;
  numberOfApartment: string;
  account: {
    label: string;
    address: string;
    number: string;
    id: string;
  };
  status: string;
}
export interface ReceiptsFilterData {
  address: string;
  numberOfApartment: string;
  account: string;
  status: string;
  company: string;
}
interface ReseptionFilterProps {
  companyId: string;
  mb?: number;
}
const DebtorsFilter: React.FC<ReseptionFilterProps> = ({ companyId, mb }) => {
  const dispatch = useAppDispatch();
  const initReceiptFilter = {
    address: "",
    numberOfApartment: "",
    account: null,
    status: "",
  };
  const [filter, setFilter] = useState<IReceiptsFilter>(initReceiptFilter);

  const accountsOfCompany = useAppSelector(getAccounts());
  const devicesOfCompany = useAppSelector(getDevices());
  console.log("devicesOfCompany", devicesOfCompany);

  useEffect(() => {
    dispatch(getAccountsByCompany(companyId));
    dispatch(getDevicesByCompany(companyId));
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
    value: {
      label: string;
      address?: string;
      tariff?: string;
      number?: string;
      id: string;
    },
    name: string
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    // const filterData = {
    //   periodMonth: filter.periodMonth ? filter.periodMonth : "",
    //   periodYear: filter.periodYear ? filter.periodYear : "",
    //   account: filter.account ? filter.account.id : "",
    //   device: filter.device ? filter.device.id : "",
    //   status: filter.status ? filter.status : "",
    //   company: companyId,
    // };
    // console.log("filterData", filterData);
    // dispatch(getFilteredReceipts(filterData));
  };

  const clearFilterData = () => {
    // dispatch(getReceiptsByCompany(companyId));
    // setFilter(initReceiptFilter);
  };

  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <SimpleSelect
            id="address"
            label="Адрес"
            name="address"
            data={[]}
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
            mr={20}
            width={265}
          />
        </div>
        <div className={styles.row}>
          <SelectWithId
            id="account"
            label="ФИО / Адрес / Лицевой счет"
            name="account"
            options={getListAccountsWithId(accountsOfCompany)}
            value={filter.account}
            onChange={(e, value) => handleSelect(e, value, "account")}
            placeholder="Выберите из списка..."
            width={400}
            mr={20}
          />
          <SimpleSelect
            id="status"
            label="Статус"
            placeholder="Выберите из списка..."
            data={["Не оплачена", "На проверке", "Оплачена"]}
            name="status"
            value={filter.status}
            onChange={handleChange}
            width={250}
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
export default DebtorsFilter;
