import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import Input from "../../../Forms/ComponentForms/Input";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";
import {
  getContractsByCompany,
  getFilteredAccounts,
} from "../../../../store/actions/controlObjectActions";
import { getListData } from "../../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import { IAccount } from "../../../../models/IAccount";
import styles from "./style.module.scss";

export interface AccountsFilterData {
  address: string;
  numberOfApartment: string;
  balance?: number;
  debt?: number;
  payerLastName?: string;
  payerPhone?: string;
  payerEmail?: string;
  company: string;
}

interface AccountsFilterProps {
  companyId: string;
  accounts: IAccount[];
  mb?: number;
}

const AccountsFilter: React.FC<AccountsFilterProps> = ({
  companyId,
  accounts,
  mb,
}) => {
  const dispatch = useAppDispatch();
  const initAccountsFilter = {
    address: "",
    numberOfApartment: "",
    balance: null,
    debt: null,
    payerLastName: "",
    payerPhone: "",
    payerEmail: "",
    controlObjects: "",
    company: companyId,
  };
  const [filter, setFilter] = useState<AccountsFilterData>(initAccountsFilter);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    dispatch(getFilteredAccounts(filter));
  };

  const clearFilterData = () => {
    dispatch(getContractsByCompany(companyId));
    setFilter(initAccountsFilter);
  };
  return (
    <div className={styles.wrapFilter} style={{ marginBottom: mb }}>
      <div className={styles.column}>
        <div className={styles.row}>
          <SimpleSelect
            id="address"
            label="Адрес / дом"
            name="address"
            data={getListData(accounts, "address")}
            value={filter.address}
            onChange={handleChange}
            placeholder="Выберите из списка..."
            width={265}
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
          <Input
            label="Фамилия"
            id="payerLastName"
            name="payerLastName"
            placeholder="Введите данные..."
            value={filter.numberOfApartment}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
          />
          <Input
            label="Телефон"
            id="payerPhone"
            name="payerPhone"
            placeholder="Введите данные..."
            value={filter.payerPhone}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
          />
          <Input
            label="E-mail"
            id="payerEmail"
            name="payerEmail"
            placeholder="Введите данные..."
            value={filter.payerEmail}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Баланс Л/С"
            id="payerLastName"
            name="payerLastName"
            placeholder="Введите данные..."
            value={filter.numberOfApartment}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
          />
          <Input
            label="Размер задолженности от"
            id="payerPhone"
            name="payerPhone"
            placeholder="Введите данные..."
            value={filter.payerPhone}
            onChange={handleChange}
            mb={0}
            mr={20}
            width={265}
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
export default AccountsFilter;
