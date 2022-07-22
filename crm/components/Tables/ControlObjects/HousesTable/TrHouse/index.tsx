import { GeoIcon } from "../../../../icons";
import { IHouse } from "../../../../../models/IHouse";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import HiddenBlock from "../../../../HiddenBlock";
import {
  deleteHouse,
  getHousesByCompany,
} from "../../../../../store/actions/controlObjectActions";
import styles from "./style.module.scss";

interface TrHouseProps {
  companyId?: string;
  house: IHouse;
  href: string;
}

const TrHouse: React.FC<TrHouseProps> = ({ companyId, house, href }) => {
  const { _id, address, fiasCode, countOfAccounts, countOfApartments } = house;
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";
  const dispatch = useAppDispatch();

  const deleteHouseHandler = async () => {
    await deleteHouse(companyId, _id);
    await dispatch(getHousesByCompany(companyId));
  };

  return (
    <tr className={styles.wrapTr}>
      <td>
        <GeoIcon />
      </td>
      <td>{address}</td>
      <td>{fiasCode}</td>
      <td>{countOfAccounts}</td>
      <td>{countOfApartments}</td>
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && (
          <HiddenBlock
            deleteHandler={deleteHouseHandler}
            // archiveHandler={addContractorHandler}
            href={href}
            id={house._id}
            canArchive={true}
            canDelete={true}
            canEdit={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrHouse;
