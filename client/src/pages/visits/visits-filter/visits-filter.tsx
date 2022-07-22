import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import moment from "moment";
import Button from "../../../../components/Buttons/Button";
import SimpleSelect from "../../../../components/Forms/SimpleSelect";
import DateSelect from "../../../../components/Forms/DateSelect";
import { visitTopics } from "../../../../utils/constants";
import {
  getFilteredVisits,
  getMyVisits
} from "../../../store/actions/visitActions";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./visits-filter.module.scss";

export interface VisitsFilter {
  topic: string;
  date: {
    from: Date | null;
    to: Date | null;
  };
}
const initVisitsFilter = {
  topic: "",
  date: {
    from: null,
    to: null
  }
};
export interface DateData {
  from: string | null;
  to: string | null;
}
export interface VisitsFilterData {
  topic: string;
  date: DateData | string;
}

const VisitsFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<VisitsFilter>(initVisitsFilter);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  const handleChangeFromDate = (newValue: Date) => {
    const stateCopy = { ...filter.date, from: newValue };
    setFilter(prevState => {
      return { ...prevState, date: { ...stateCopy } };
    });
  };
  const handleChangeToDate = (newValue: Date) => {
    const stateCopy = { ...filter.date, to: newValue };
    setFilter(prevState => {
      return { ...prevState, date: { ...stateCopy } };
    });
  };
  const handleFilter = () => {
    const filterData: VisitsFilterData = {
      ...filter,
      date:
        filter.date.from && filter.date.to
          ? {
              from: moment(filter.date.from).format("DD.MM.YYYY"),
              to: moment(filter.date.to).format("DD.MM.YYYY")
            }
          : ""
    };
    console.log("filterData", filterData);

    dispatch(getFilteredVisits(filterData));
  };

  const clearFilterData = () => {
    dispatch(getMyVisits());
    setFilter(initVisitsFilter);
  };

  return (
    <div className={styles.formblock}>
      <h3 className={styles.formblockTitle}>Сортировать по</h3>
      <div className={styles.form}>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Тема встречи</span>
          <SimpleSelect
            placeholder="Выберите из списка"
            data={visitTopics}
            name="topic"
            value={filter.topic}
            onChange={handleChange}
            width={270}
          />
        </div>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Дата приема</span>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>с</span>
            <DateSelect
              onChange={handleChangeFromDate}
              value={filter.date.from}
            />
          </div>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>по</span>
            <DateSelect onChange={handleChangeToDate} value={filter.date.to} />
          </div>
        </div>
        <div className={styles.submitBox}>
          <Button bg="green" width={150} mr={20} onClick={handleFilter}>
            Применить
          </Button>
          <Button bg="white" width={145} onClick={clearFilterData}>
            Сбросить фильтр
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisitsFilter;
