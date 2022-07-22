import TrDevice from "./TrDevice";
import classes from "../../table.module.scss";
import { IDevice } from "../../../../models/IDevice";
import styles from "./style.module.scss";

interface DevicesTableProps {
  devices: IDevice[];
}

const DevicesTable: React.FC<DevicesTableProps> = ({ devices }) => {
  console.log("devices", devices);
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>
            Номер прибора / <br /> Назначение
          </th>
          <th>
            Тип прибора / <br /> Место установки
          </th>
          <th>Адрес</th>
          <th>Вид тарифа</th>
          <th>Последние показания</th>
          <th>Разница показаний</th>
        </tr>
      </thead>
      <tbody>
        {devices &&
          devices.map((device, index) => (
            <TrDevice
              key={device._id}
              device={device}
              editHref={`/controlObjects/devices/${device._id}/editDevice`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default DevicesTable;
