import { useState } from "react";
import moment from "moment";
import Button from "../../../../components/Buttons/Button";
import DateTimeSelect from "../../../../components/Forms/DateTimeSelect";
import { useAppDispatch } from "../../../store/hooks";
import {
  getFilteredNotifications,
  getMyNotifications
} from "../../../store/actions/notificationActions";
import styles from "./notifications-filter.module.scss";

export interface DateData {
  from: string | null;
  to: string | null;
}
export interface NotificationsFilter {
  createDate: {
    from: Date | null;
    to: Date | null;
  };
}
export interface NotificationsFilterData {
  createDate: DateData | string;
}
const initNotificationsFilter = {
  createDate: {
    from: null,
    to: null
  }
};

const NotificationsFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<NotificationsFilter>(
    initNotificationsFilter
  );
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

  const handleFilter = () => {
    const filterData: NotificationsFilterData = {
      createDate:
        filter.createDate.from && filter.createDate.to
          ? {
              from: moment(filter.createDate.from.toISOString()).format(),
              to: moment(filter.createDate.to?.toISOString()).format()
            }
          : ""
    };
    dispatch(getFilteredNotifications(filterData));
  };

  const clearFilterData = () => {
    dispatch(getMyNotifications());
    setFilter(initNotificationsFilter);
  };

  return (
    <div className={styles.formblock}>
      <div className={styles.row}>
        <div className={styles.filterItem}>
          <span className={styles.filterItemLabel}>Дата создания</span>
          <div className={styles.row}>
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
          </div>
          {error && <div className={styles.filterError}>{error}</div>}
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

export default NotificationsFilter;
