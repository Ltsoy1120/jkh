import React, { SyntheticEvent, useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import Input from "../../Forms/ComponentForms/Input";
import SimpleSelect from "../../Forms/ComponentForms/SimpleSelect";
import FilterButtonGroup from "../../Buttons/FilterButtonGroup";
import {
  getListAccountsWithId,
  getListData,
} from "../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import { typesOfAppeals } from "../../Forms/ComponentForms/SimpleSelect/selectOptions";
import SelectWithId from "../../Forms/ComponentForms/SimpleSelect/SelectWithId";
import DateSelect from "../../Forms/ComponentForms/DateSelect";
import {
  getAppealsByCompany,
  getFilteredAppeals,
} from "../../../store/actions/appealActions";
import { IAppeal } from "../../../models/IAppeal";
import styles from "./style.module.scss";

export interface AppealsFilter {
  createDate: Date | null;
  account: {
    label: string;
    address: string;
    number: string;
    id: string;
  };
  type: string;
  number: string;
  company: string;
}
export interface AppealsFilterData {
  createDate: Date | null;
  type: string;
  account: string;
  number: number;
  company: string;
}
interface AppealsFilterProps {
  companyId: string;
  appeals?: IAppeal[];
  mb?: number;
}

const AppealsFilter: React.FC<AppealsFilterProps> = ({
  companyId,
  appeals,
  mb,
}) => {
  const dispatch = useAppDispatch();
  const initAppealsFilter = {
    createDate: null,
    type: "",
    account: null,
    number: "",
    company: companyId,
  };
  const [filter, setFilter] = useState<AppealsFilter>(initAppealsFilter);
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
      account: filter.account ? filter.account.id : "",
      type: filter.type ? filter.type : "",
      number: filter.number ? Number(filter.number) : null,
      company: companyId,
    };
    console.log("filterData===", filterData);
    dispatch(getFilteredAppeals(filterData));
  };

  const clearFilterData = () => {
    dispatch(getAppealsByCompany(companyId));
    setFilter(initAppealsFilter);
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
          <SimpleSelect
            id="type"
            label="Тип заявки"
            placeholder="Выберите из списка..."
            data={typesOfAppeals}
            name="type"
            value={filter.type}
            onChange={handleChange}
            width={265}
            mb={0}
            mr={20}
          />
          <Input
            label="Номер обращения"
            id="number"
            name="number"
            type="number"
            placeholder="Введите данные..."
            value={filter.number}
            onChange={handleChange}
            mb={0}
            width={265}
          />
        </div>
        <SelectWithId
          id="account"
          label="ФИО / Адрес / Лицевой счет"
          name="account"
          options={getListAccountsWithId(getListData(appeals, "account"))}
          value={filter.account}
          onChange={(e, value) => handleSelect(e, value, "account")}
          placeholder="Выберите из списка..."
          width={400}
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
export default AppealsFilter;
