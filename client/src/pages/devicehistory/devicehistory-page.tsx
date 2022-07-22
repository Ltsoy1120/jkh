import Link from "next/link";
import { IDevice } from "../../models/IDevice";
import { IDeviceData } from "../../models/IDeviceData";
import DeviceHistoryFilter from "./devicehistory-filter";
import DeviceHistoryItem from "./devicehistory-item";
import styles from "./devicehistory-page.module.scss";

export interface DevicesDataProps {
  devicesData: IDeviceData[];
  devices: IDevice[];
}
const DeviceHistoryPage: React.FC<DevicesDataProps> = ({
  devices,
  devicesData
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.titleblock}>
        <h1>Мои приборы учета</h1>
        <span>Приборы учета / Мои приборы учета / Мои показания</span>
      </div>
      <div className={styles.infotabs}>
        <span className={styles.link}>
          <Link href="/devices">Счётчики</Link>
        </span>
        <span className={styles.activeLink}>
          <Link href="/alldevicehistory">История моих показаний</Link>
        </span>
      </div>
      <DeviceHistoryFilter devices={devices} />
      <div className={styles.tableblock}>
        <div className={styles.tablehead}>
          <div className={styles.tperiod}>Месяц / Год</div>
          <div className={styles.tnumber}>Номер прибора/ Ресурс учёта</div>
          <div className={styles.ttype}>
            Тип прибора / Место установки/ Вид тарифа
          </div>
          <div className={styles.tlastdata}>Предыдущие показания</div>
          <div className={styles.tcurrentdata}>Текущие показания</div>
          <div className={styles.tdifference}>Разница показаний</div>
        </div>
        {devicesData &&
          devicesData.map(deviceData => (
            <DeviceHistoryItem key={deviceData._id} deviceData={deviceData} />
          ))}
      </div>
    </div>
  );
};

export default DeviceHistoryPage;
