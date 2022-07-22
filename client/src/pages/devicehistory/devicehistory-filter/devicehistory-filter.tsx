import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import Button from "../../../../components/Buttons/Button";
import SimpleSelect from "../../../../components/Forms/SimpleSelect";
import { monthNames, deviceAssignments } from "../../../../utils/constants";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./devicehistory-filter.module.scss";
import { getYears } from "../../../../utils/getYears";
import {
  getFilteredDeviceData,
  getMyDeviceData
} from "../../../store/actions/devicedataActions";
import { DevicesProps } from "../../devices/devices-page";

export interface DeviceDataFilter {
  assignment?: string;
  periodMonth?: string;
  periodYear?: string;
}

const initDeviceDataFilter = {
  assignment: "",
  periodMonth: "",
  periodYear: ""
};
export interface DeviceDataFilterData {
  device?: string;
  periodMonth?: string;
  periodYear?: string;
}

const DeviceHistoryFilter: React.FC<DevicesProps> = ({ devices }) => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<DeviceDataFilter>(initDeviceDataFilter);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  const getDeviceId = () => {
    return devices.find(device => device.assignment === filter.assignment);
  };

  const handleFilter = () => {
    const filterData: DeviceDataFilterData = {
      device: filter.assignment ? getDeviceId()?._id : "",
      periodMonth: filter.periodMonth,
      periodYear: filter.periodYear
    };
    dispatch(getFilteredDeviceData(filterData));
  };

  const clearFilterData = () => {
    dispatch(getMyDeviceData());
    setFilter(initDeviceDataFilter);
  };

  return (
    <div className={styles.formblock}>
      <div className={styles.filterItem}>
        <SimpleSelect
          title="Вид прибора учёта"
          placeholder="Выберите из списка"
          data={deviceAssignments}
          name="assignment"
          value={filter.assignment}
          onChange={handleChange}
        />
      </div>
      <div className={styles.filterItem}>
        <SimpleSelect
          title="Месяц"
          placeholder="Выберите из списка"
          data={monthNames}
          name="periodMonth"
          value={filter.periodMonth}
          onChange={handleChange}
        />
      </div>
      <div className={styles.filterItem}>
        <SimpleSelect
          title="Год"
          placeholder="Выберите из списка"
          data={getYears()}
          name="periodYear"
          value={filter.periodYear}
          onChange={handleChange}
        />
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

export default DeviceHistoryFilter;
