import { useAppSelector } from "../../../../../store/hooks";
import HiddenBlock from "../../../../HiddenBlock";
import Link from "next/link";
import { IDevice } from "../../../../../models/IDevice";
import { deleteDevice } from "../../../../../store/actions/controlObjectActions";
import styles from "../style.module.scss";

interface TrDeviceProps {
  device: IDevice;
  editHref?: string;
}

const TrDevice: React.FC<TrDeviceProps> = ({ device, editHref }) => {
  const {
    number,
    assignment,
    type,
    location,
    address,
    numberOfApartment,
    tariff,
  } = device;
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";

  const deleteDeviceHandler = async () => {
    await deleteDevice(device._id, device.account._id);
  };

  return (
    <tr className={styles.wrapTr}>
      <td>
        <Link href={`/controlObjects/devices/${device._id}/editDevice`}>
          <a>{number}</a>
        </Link>
        {assignment}
      </td>
      <td>
        <span>{type}</span>
        <span>{location}</span>
      </td>
      <td>
        {address}, кв.{numberOfApartment}
      </td>
      <td>{tariff}</td>
      {tariff === "Многотарифный" ? (
        <td>
          <span>
            Час пик - T1: <b>{device.lastDataT1}</b>
          </span>
          <span>
            Час пик - T1: <b>{device.lastDataT2}</b>
          </span>
          <span>
            Час пик - T1: <b>{device.lastDataT3}</b>
          </span>
        </td>
      ) : tariff === "Двухтарифный" ? (
        <td>
          <span>
            День: <b>{device.lastDataDay}</b>
          </span>
          <span>
            Ночь: <b>{device.lastDataNight}</b>
          </span>
        </td>
      ) : (
        <td>{device.lastData}</td>
      )}
      {tariff === "Многотарифный" ? (
        <td>
          <span>
            Час пик - T1: <b>{device.differenceT1}</b>
          </span>
          <span>
            Час пик - T1: <b>{device.differenceT2}</b>
          </span>
          <span>
            Час пик - T1: <b>{device.differenceT3}</b>
          </span>
        </td>
      ) : tariff === "Двухтарифный" ? (
        <td>
          <span>
            День: <b>{device.differenceDay}</b>
          </span>
          <span>
            Ночь: <b>{device.differenceNight}</b>
          </span>
        </td>
      ) : (
        <td>{device.difference}</td>
      )}
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && (
          <HiddenBlock
            id={device._id}
            deleteHandler={deleteDeviceHandler}
            href={editHref}
            addDeviceDataHref={`/controlObjects/devices/${device._id}/addDeviceData`}
            canDelete={true}
            canEdit={true}
            canDeviceDataHistory={true}
            canAddDeviceData={true}
            canArchive={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrDevice;
