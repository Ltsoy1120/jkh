import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import Button from "../../Buttons/Button";
import SimpleSelect from "../../Forms/ComponentForms/SimpleSelect";
import styles from "./style.module.scss";

const testWork = ["Работа1", "Работа2", "Работа3"];

export interface ContractorsFilterData {
  name: string;
  headName: string;
  typeOfWork: string;
}

const initContractorsFilter = {
  name: "",
  headName: "",
  typeOfWork: "",
};

export default function ContractorsFilter() {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<ContractorsFilterData>(
    initContractorsFilter
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    // dispatch(getFilteredContractors(filter));
  };

  const clearFilterData = () => {
    // dispatch(getContractors());
    setFilter(initContractorsFilter);
  };
  return (
    <div className={styles.wrapFilter}>
      <SimpleSelect
        label="Название"
        placeholder="Введите данные..."
        data={testWork}
        name="name"
        value={filter.name}
        onChange={handleChange}
        width={265}
      />
      <SimpleSelect
        label="ФИО"
        placeholder="Введите данные..."
        data={testWork}
        name="headName"
        value={filter.headName}
        onChange={handleChange}
        width={265}
      />
      <SimpleSelect
        label="Тип работ"
        placeholder="Введите данные..."
        data={testWork}
        name="typeOfWork"
        value={filter.typeOfWork}
        onChange={handleChange}
        width={265}
      />
      <div className={styles.rightBlock}>
        <Button onClick={handleFilter} bg="green" width={150}>
          Найти
        </Button>
        <Button onClick={clearFilterData}>Сбросить фильтр</Button>
      </div>
    </div>
  );
}
