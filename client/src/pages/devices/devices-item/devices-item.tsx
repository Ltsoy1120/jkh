import React, { useState } from "react";
import styles from "../devices-table/devices-table.module.scss";
import Link from "next/link";
import Warning from "../../../../ui/icons/warning";
import Add from "../../../../ui/icons/add";
import Sandwatch from "../../../../ui/icons/sandwatch";
import { IDevice } from "../../../models/IDevice";

export interface DeviceProps {
  device: IDevice;
}
const DevicesItem: React.FC<DeviceProps> = ({ device }) => {
  const [switchActive, updateSwitchActive] = useState(false);
  return (
    <tr className={switchActive ? styles.inactive : ""}>
      <td>
        <div className={styles.column}>
          <span className={styles.number}>{device.number}</span>
          <span>{device.assignment}</span>
        </div>
      </td>
      <td>
        <div className={styles.column}>
          <span className={styles.marg}>{device.type}</span>
          <span className={styles.light}>{device.location}</span>
        </div>
      </td>
      <td>
        <span className={styles.light}>{device.tariff}</span>
      </td>
      <td>
        <span>{device.lastData}</span>
      </td>
      <td>
        <span>{device.difference}</span>
      </td>
      <td>
        <div className={styles.column}>
          <span className={styles.checkDate}>
            {device.checkDate} <br />
          </span>
          <div className={styles.checkMessage}>
            <Warning viewBox="0 0 15 15" className={styles.warning} />{" "}
            {device.checkMessage}
          </div>
        </div>
      </td>
      <td style={{ width: 0 }}>
        <div className={styles.hiddenBlock}>
          <div className={styles.btn}>
            <Add viewBox="0 0 15 15" />
            <Link href={`/newdevicedata/${device.number}`}>
              <a>Подать показания</a>
            </Link>
          </div>
          {device && (
            <div className={styles.btn}>
              <Sandwatch viewBox="0 0 15 15" />
              <Link href={`/device/${device.number}`}>
                <a>История показаний</a>
              </Link>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};
export default DevicesItem;
