import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import Button from "../../../../components/Buttons/Button";
import SimpleSelect from "../../../../components/Forms/SimpleSelect";
import { monthNames } from "../../../../utils/constants";
import { useAppDispatch } from "../../../store/hooks";
import { getYears } from "../../../../utils/getYears";
import { DevicesProps } from "../../devices/devices-page";
import {
  getFilteredReceipts,
  getMyReceipts
} from "../../../store/actions/receiptActions";
import styles from "./receipts-filter.module.scss";

export interface ReceiptsFilter {
  assignment?: string;
  periodMonth?: string;
  periodYear?: string;
}

const initReceiptFilter = {
  assignment: "",
  periodMonth: "",
  periodYear: ""
};
export interface ReceiptsFilterData {
  device?: string;
  periodMonth?: string;
  periodYear?: string;
}

const ReceiptsFilter: React.FC<DevicesProps> = ({ devices }) => {
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<ReceiptsFilter>(initReceiptFilter);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  };
  const getMyDevicesArr = () => {
    return devices.map(device => device.assignment);
  };

  const getDeviceId = () => {
    return devices.find(device => device.assignment === filter.assignment);
  };

  const handleFilter = () => {
    const filterData: ReceiptsFilterData = {
      device: filter.assignment ? getDeviceId()?._id : "",
      periodMonth: filter.periodMonth,
      periodYear: filter.periodYear
    };
    dispatch(getFilteredReceipts(filterData));
  };

  const clearFilterData = () => {
    dispatch(getMyReceipts());
    setFilter(initReceiptFilter);
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
      <div className={styles.filterItem}>
        <SimpleSelect
          title="Вид прибора учёта"
          placeholder="Выберите из списка"
          data={getMyDevicesArr()}
          name="assignment"
          value={filter.assignment}
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

export default ReceiptsFilter;
