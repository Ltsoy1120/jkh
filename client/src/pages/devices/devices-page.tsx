import Link from "next/link";
import { IDevice } from "../../models/IDevice";
import styles from "./devices-page.module.scss";
import DevicesTable from "./devices-table";

export interface DevicesProps {
  devices: IDevice[];
}
const DevicesPage: React.FC<DevicesProps> = ({ devices }) => {
  return (
    <div className={styles.content}>
      <div className={styles.titleblock}>
        <h1>Мои приборы учета</h1>
        <span className={styles.breadcrumbs}>
          Приборы учета / Мои приборы учета
        </span>
      </div>
      <div className={styles.infotabs}>
        <span className={styles.tabLink}>
          <Link href="/devices">Счётчики</Link>
        </span>
        <span className={styles.requisites}>
          <Link href="/alldevicehistory">История моих показаний</Link>
        </span>
      </div>
      <DevicesTable devices={devices} />
      <div className={styles.itogo}>
        ИТОГО: <span className={styles.itogos}>Приборов</span>
        {devices.length}
      </div>
    </div>
  );
};

export default DevicesPage;
