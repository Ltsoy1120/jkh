import { IDeviceData } from "../../../models/IDeviceData";
import styles from "./historybydevice-item.module.scss";

export interface DeviceDataProps {
  deviceData: IDeviceData;
}
const HistoryByDeviceItem: React.FC<DeviceDataProps> = ({ deviceData }) => {
  const { number, assignment, type, location, tariff } = deviceData.device;
  return (
    <div className={styles.tableitem}>
      <div className={styles.tperiod}>
        <span>{deviceData.periodMonth}</span>
        <span>{deviceData.periodYear}</span>
      </div>
      <div className={styles.tnumber}>
        <span>{number}</span>
        <span>{assignment}</span>
      </div>
      <div className={styles.ttype}>
        <span>{type}</span>
        <span className={styles.light}>{location}</span>
        <span className={styles.light}>{tariff}</span>
      </div>
      <div className={styles.tlastdata}>
        <span>{deviceData.lastData}</span>
      </div>
      <div className={styles.tcurrentdata}>
        <span>{deviceData.currentData}</span>
      </div>
      <div className={styles.tdifference}>
        <span>{deviceData.difference}</span>
      </div>
    </div>
  );
};
export default HistoryByDeviceItem;
