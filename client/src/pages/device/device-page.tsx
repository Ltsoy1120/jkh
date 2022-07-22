import Link from "next/link";
import { IDeviceData } from "../../models/IDeviceData";
import HistoryByDeviceFilter from "./historybydevice-filter";
import HistoryByDeviceItem from "./historybydevice-item";
import styles from "./device-page.module.scss";
import { IDevice } from "../../models/IDevice";

export interface DevicesDataProps {
  deviceData: IDeviceData[];
  device: IDevice;
}
const DevicePage: React.FC<DevicesDataProps> = ({ device, deviceData }) => {
  if (!deviceData && !device) return <div>Loading...</div>;
  const { number, assignment, type, location, tariff } = device;

  return (
    <div className={styles.content}>
      <div className={styles.titleblock}>
        <h1>Прибор учета №{number}</h1>
        <div className={styles.breadcrumbs}>
          <Link href="/devices">Приборы учета</Link> /
          <span className={styles.activeLink}>Прибор учета №{number}</span>
        </div>
      </div>
      <div className={styles.infoblock}>
        <h4>
          Назначение прибора: <span>{assignment}</span>
        </h4>
        <h4>
          Тип прибора: <span>{type}</span>
        </h4>
        <h4>
          Место установки: <span>{location}</span>
        </h4>
        <h4>
          Вид тарифа: <span>{tariff}</span>
        </h4>
      </div>
      <div className={styles.infotabs}>
        <span className={styles.link}>
          <Link href="/devices">Счётчики</Link>
        </span>
        <span className={styles.activeLink}>
          <Link href="/alldevicehistory">История моих показаний</Link>
        </span>
      </div>
      <HistoryByDeviceFilter device={device} />
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
        {deviceData &&
          deviceData.map(data => (
            <HistoryByDeviceItem key={data._id} deviceData={data} />
          ))}
      </div>
    </div>
  );
};

export default DevicePage;
