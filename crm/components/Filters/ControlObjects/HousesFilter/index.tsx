import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import { typesOfControl } from "../../../Forms/ComponentForms/SimpleSelect/selectOptions";
import { getListData } from "../../../Forms/ComponentForms/SimpleSelect/getSelectOptions";
import { IHouse } from "../../../../models/IHouse";
import {
  getFilteredHouses,
  getHousesByCompany,
} from "../../../../store/actions/controlObjectActions";
import styles from "./style.module.scss";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";

export interface HousesFilterData {
  address: string;
  fiasCode: string;
  typeOfControl: string;
}

export interface HousesFilterProps {
  houses: IHouse[];
  companyId?: string;
}

const HousesFilter: React.FC<HousesFilterProps> = ({ houses, companyId }) => {
  const dispatch = useAppDispatch();
  const initHousesFilter = {
    address: "",
    fiasCode: "",
    typeOfControl: "",
    company: companyId,
  };

  const [filter, setFilter] = useState<HousesFilterData>(initHousesFilter);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    dispatch(getFilteredHouses(filter));
  };

  const clearFilterData = () => {
    dispatch(getHousesByCompany(companyId));
    setFilter(initHousesFilter);
  };
  return (
    <div className={styles.wrapFilter}>
      <SimpleSelect
        id="address"
        label="Адрес"
        name="address"
        data={getListData(houses, "address")}
        value={filter.address}
        onChange={handleChange}
        placeholder="Выберите из списка..."
        width={265}
        mb={0}
      />
      <SimpleSelect
        id="fiasCode"
        label="Код ФИАС"
        name="fiasCode"
        value={filter.fiasCode}
        onChange={handleChange}
        placeholder="Выберите из списка..."
        data={getListData(houses, "fiasCode")}
        width={265}
        mb={0}
      />
      <SimpleSelect
        id="typeOfControl"
        label="Тип управления"
        data={typesOfControl}
        name="typeOfControl"
        value={filter.typeOfControl}
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
export default HousesFilter;
