import moment from "moment";
import { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import DateTimeSelect from "../../../../components/Forms/DateTimeSelect";
import {
  getFilteredRequests,
  getMyRequests
} from "../../../store/actions/requestActions";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./requests-filter.module.scss";

export interface DateData {
  from: string | null;
  to: string | null;
}
export interface RequestsFilter {
  createDate: {
    from: Date | null;
    to: Date | null;
  };
  workDate: {
    from: Date | null;
    to: Date | null;
  };
  doneDate: {
    from: Date | null;
    to: Date | null;
  };
}
export interface RequestsFilterData {
  createDate: DateData | string;
  workDate: DateData | string;
  doneDate: DateData | string;
}
const initRequestsFilter = {
  createDate: {
    from: null,
    to: null
  },
  workDate: {
    from: null,
    to: null
  },
  doneDate: {
    from: null,
    to: null
  }
};

const RequestsFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<RequestsFilter>(initRequestsFilter);

  const handleChangeCreateFromDate = (newValue: Date) => {
    const filterCopy = { ...filter.createDate, from: newValue };
    setFilter(prevState => {
      return { ...prevState, createDate: { ...filterCopy } };
    });
  };
  const handleChangeCreateToDate = (newValue: Date) => {
    const filterCopy = { ...filter.createDate, to: newValue };
    setFilter(prevState => {
      return { ...prevState, createDate: { ...filterCopy } };
    });
  };
  const handleChangeWorkFromDate = (newValue: Date) => {
    const filterCopy = { ...filter.workDate, from: newValue };
    setFilter(prevState => {
      return { ...prevState, workDate: { ...filterCopy } };
    });
  };
  const handleChangeWorkToDate = (newValue: Date) => {
    const filterCopy = { ...filter.workDate, to: newValue };
    setFilter(prevState => {
      return { ...prevState, workDate: { ...filterCopy } };
    });
  };
  const handleChangeDoneFromDate = (newValue: Date) => {
    const filterCopy = { ...filter.doneDate, from: newValue };
    setFilter(prevState => {
      return { ...prevState, doneDate: { ...filterCopy } };
    });
  };
  const handleChangeDoneToDate = (newValue: Date) => {
    const filterCopy = { ...filter.doneDate, to: newValue };
    setFilter(prevState => {
      return { ...prevState, doneDate: { ...filterCopy } };
    });
  };
  const handleFilter = () => {
    console.log("filter", filter);
    const filterData: RequestsFilterData = {
      ...filter,
      createDate:
        filter.createDate.from && filter.createDate.to
          ? {
              from: moment(filter.createDate.from.toISOString()).format(),
              to: moment(filter.createDate.to?.toISOString()).format()
            }
          : "",
      workDate:
        filter.workDate.from && filter.workDate.to
          ? {
              from: moment(filter.workDate.from.toISOString()).format(),
              to: moment(filter.workDate.to?.toISOString()).format()
            }
          : "",
      doneDate:
        filter.doneDate.from && filter.doneDate.to
          ? {
              from: moment(filter.doneDate.from.toISOString()).format(),
              to: moment(filter.doneDate.to?.toISOString()).format()
            }
          : ""
    };
    console.log("filterData", filterData);

    dispatch(getFilteredRequests(filterData));
  };
  const clearFilterData = () => {
    dispatch(getMyRequests());
    setFilter(initRequestsFilter);
  };

  return (
    <div className={styles.formblock}>
      <div className={styles.formleft}>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Дата создания</span>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>с</span>
            <DateTimeSelect
              onChange={handleChangeCreateFromDate}
              value={filter.createDate.from}
            />
          </div>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>по</span>
            <DateTimeSelect
              onChange={handleChangeCreateToDate}
              value={filter.createDate.to}
            />
          </div>
        </div>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Срок исполнения</span>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>с</span>
            <DateTimeSelect
              onChange={handleChangeWorkFromDate}
              value={filter.workDate.from}
            />
          </div>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>по</span>
            <DateTimeSelect
              onChange={handleChangeWorkToDate}
              value={filter.workDate.to}
            />
          </div>
        </div>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Дата закрытия</span>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>с</span>
            <DateTimeSelect
              onChange={handleChangeDoneFromDate}
              value={filter.doneDate.from}
            />
          </div>
          <div className={styles.dateData}>
            <span className={styles.dateLabel}>по</span>
            <DateTimeSelect
              onChange={handleChangeDoneToDate}
              value={filter.doneDate.to}
            />
          </div>
        </div>
      </div>
      <div className={styles.submitBox}>
        <Button bg="green" mb={10} width={145} onClick={handleFilter}>
          Найти
        </Button>
        <Button bg="white" width={145} onClick={clearFilterData}>
          Сбросить фильтр
        </Button>
      </div>
    </div>
  );
};

export default RequestsFilter;
