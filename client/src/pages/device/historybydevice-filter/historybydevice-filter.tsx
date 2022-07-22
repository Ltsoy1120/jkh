import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import Button from "../../../../components/Buttons/Button";
import SimpleSelect from "../../../../components/Forms/SimpleSelect";
import { monthNames } from "../../../../utils/constants";
import { getYears } from "../../../../utils/getYears";
import {
  getDeviceDataByDevice,
  getFilteredDeviceData
} from "../../../store/actions/devicedataActions";
import { useAppDispatch } from "../../../store/hooks";
import styles from "./historybydevice-filter.module.scss";
import { DeviceDataFilter } from "../../devicehistory/devicehistory-filter/devicehistory-filter";
import { DeviceProps } from "../../devices/devices-item/devices-item";

const HistoryByDeviceFilter: React.FC<DeviceProps> = ({ device }) => {
  const initDeviceDataFilter = {
    device: device._id,
    periodMonth: "",
    periodYear: ""
  };
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<DeviceDataFilter>(initDeviceDataFilter);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };

  const handleFilter = () => {
    dispatch(getFilteredDeviceData(filter));
  };

  const clearFilterData = () => {
    dispatch(getDeviceDataByDevice(device._id));
    setFilter(initDeviceDataFilter);
  };

  return (
    <div className={styles.formblock}>
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

export default HistoryByDeviceFilter;
