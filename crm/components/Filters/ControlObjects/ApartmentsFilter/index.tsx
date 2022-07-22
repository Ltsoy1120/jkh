import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import Input from "../../../Forms/ComponentForms/Input";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import {
  characteristicsOfApartment,
  typesOfApartment,
} from "../../../Forms/ComponentForms/SimpleSelect/selectOptions";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";
import {
  getApartmentsByHouse,
  getFilteredApartments,
} from "../../../../store/actions/controlObjectActions";
import styles from "./style.module.scss";

export interface ApartmentsFilterData {
  numberOfApartment: string;
  typeOfApartment: string;
  characteristic: string;
  house: string;
}

interface ApartmentsFilterProps {
  houseId: string;
}

const ApartmentsFilter: React.FC<ApartmentsFilterProps> = ({ houseId }) => {
  const dispatch = useAppDispatch();
  const initApartmentsFilter = {
    numberOfApartment: "",
    typeOfApartment: "",
    characteristic: "",
    house: houseId,
  };
  const [filter, setFilter] =
    useState<ApartmentsFilterData>(initApartmentsFilter);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    console.log("filter", filter);
    dispatch(getFilteredApartments(filter));
  };

  const clearFilterData = () => {
    dispatch(getApartmentsByHouse(houseId));
    setFilter(initApartmentsFilter);
  };
  return (
    <div className={styles.wrapFilter}>
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
      <SimpleSelect
        id="typeOfApartment"
        label="Тип помещения"
        name="typeOfApartment"
        data={typesOfApartment}
        value={filter.typeOfApartment}
        onChange={handleChange}
        placeholder="Выберите из списка..."
        width={265}
        mb={0}
      />
      <SimpleSelect
        id="characteristic"
        label="Характеристика"
        name="characteristic"
        data={characteristicsOfApartment}
        value={filter.characteristic}
        onChange={handleChange}
        placeholder="Выберите из списка..."
        width={265}
        mb={0}
      />
      <FilterButtonGroup
        handleFilter={handleFilter}
        clearFilterData={clearFilterData}
      />
    </div>
  );
};
export default ApartmentsFilter;
