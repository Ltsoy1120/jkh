import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import Button from "../../../../components/Buttons/Button";
import SimpleSelect from "../../../../components/Forms/SimpleSelect";
import DateTimeSelect from "../../../../components/Forms/DateTimeSelect";
import { typeData } from "../../../../utils/constants";
import {
  getFilteredAppeals,
  getMyAppeals
} from "../../../store/actions/appealActions";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./appeals-filter.module.scss";

export interface DateData {
  from: string | null;
  to: string | null;
}
export interface AppealsFilter {
  createDate: {
    from: Date | null;
    to: Date | null;
  };
  type: string;
}
export interface AppealsFilterData {
  createDate: DateData | string;
  type: string;
}
const initAppealsFilter = {
  createDate: {
    from: null,
    to: null
  },
  type: ""
};

const AppealsFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<AppealsFilter>(initAppealsFilter);
  const [error, setError] = useState<string>("");

  const handleChangeFromDate = (newValue: Date) => {
    if (new Date(newValue).toString() === "Invalid Date") {
      return setError("Дата указана не корректно");
    }
    const stateCopy = { ...filter.createDate, from: newValue };
    setError("");
    setFilter(prevState => {
      return { ...prevState, createDate: { ...stateCopy } };
    });
  };
  const handleChangeToDate = (newValue: Date) => {
    if (new Date(newValue).toString() === "Invalid Date") {
      return setError("Дата указана не корректно");
    }
    const stateCopy = { ...filter.createDate, to: newValue };
    setError("");
    setFilter(prevState => {
      return { ...prevState, createDate: { ...stateCopy } };
    });
  };
  const handleChange = (event: SelectChangeEvent) => {
    setFilter(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleFilter = () => {
    const filterData: AppealsFilterData = {
      ...filter,
      createDate:
        filter.createDate.from && filter.createDate.to
          ? {
              from: moment(filter.createDate.from.toISOString()).format(),
              to: moment(filter.createDate.to?.toISOString()).format()
            }
          : ""
    };
    dispatch(getFilteredAppeals(filterData));
  };

  const clearFilterData = () => {
    dispatch(getMyAppeals());
    setFilter(initAppealsFilter);
  };

  return (
    <div className={styles.formblock}>
      <div className={styles.formleft}>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Дата создания</span>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>с</span>
            <DateTimeSelect
              onChange={handleChangeFromDate}
              value={filter.createDate.from}
            />
          </div>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>по</span>
            <DateTimeSelect
              onChange={handleChangeToDate}
              value={filter.createDate.to}
            />
          </div>
          {error && <div className={styles.filterError}>{error}</div>}
        </div>
        <div className={styles.filterItem}>
          <SimpleSelect
            title="Тип обращения"
            placeholder="Выберите из списка"
            data={typeData}
            name="type"
            value={filter.type}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.submitBox}>
        <Button
          bg="green"
          mb={10}
          width={145}
          onClick={handleFilter}
          disabled={error ? true : false}
        >
          Найти
        </Button>
        <Button bg="white" width={145} onClick={clearFilterData}>
          Сбросить фильтр
        </Button>
      </div>
    </div>
  );
};

export default AppealsFilter;
