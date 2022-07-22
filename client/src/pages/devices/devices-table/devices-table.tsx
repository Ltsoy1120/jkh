import styles from "./devices-table.module.scss";
import { DevicesProps } from "../devices-page";
import DevicesItem from "../devices-item";

const DevicesTable: React.FC<DevicesProps> = ({ devices }) => {
  return (
    <table className={styles.wrapTable}>
      <thead>
        <tr>
          <th>
            Номер прибора / <br /> Назначение
          </th>
          <th>
            Тип прибора / <br /> Место установки
          </th>
          <th>Вид тарифа</th>
          <th>Последние показания</th>
          <th>Разница показаний</th>
          <th>Дата следующей проверки</th>
          <th style={{ width: "5px" }}></th>
        </tr>
      </thead>
      <tbody>
        {devices &&
          devices.map(device => (
            <DevicesItem key={device._id} device={device} />
          ))}
      </tbody>
    </table>
  );
};
export default DevicesTable;
