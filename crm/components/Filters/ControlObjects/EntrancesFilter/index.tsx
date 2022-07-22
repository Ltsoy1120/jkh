import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../../../store/hooks";
import SimpleSelect from "../../../Forms/ComponentForms/SimpleSelect";
import { conditionsOfEntrance } from "../../../Forms/ComponentForms/SimpleSelect/selectOptions";
import styles from "./style.module.scss";
import FilterButtonGroup from "../../../Buttons/FilterButtonGroup";
import {
  getEntrancesByHouse,
  getFilteredEntrances,
} from "../../../../store/actions/controlObjectActions";

export interface EntrancesFilterData {
  conditionOfEntrance: string;
  house: string;
}

interface EntrancesFilterProps {
  houseId: string;
}

const EntrancesFilter: React.FC<EntrancesFilterProps> = ({ houseId }) => {
  const dispatch = useAppDispatch();

  const initEntrancesFilter = {
    conditionOfEntrance: "",
    house: houseId,
  };
  const [filter, setFilter] =
    useState<EntrancesFilterData>(initEntrancesFilter);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => {
    setFilter((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFilter = () => {
    dispatch(getFilteredEntrances(filter));
  };

  const clearFilterData = () => {
    dispatch(getEntrancesByHouse(houseId));
    setFilter(initEntrancesFilter);
  };
  return (
    <div className={styles.wrapFilter}>
      <SimpleSelect
        id="conditionOfEntrance"
        label="Состояние"
        name="conditionOfEntrance"
        data={conditionsOfEntrance}
        value={filter.conditionOfEntrance}
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
export default EntrancesFilter;
