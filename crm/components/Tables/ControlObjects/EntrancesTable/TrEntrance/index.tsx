import { IEntrance } from "../../../../../models/IHouse";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import HiddenBlock from "../../../../HiddenBlock";
import {
  deleteEntrance,
  getEntrancesByHouse,
} from "../../../../../store/actions/controlObjectActions";
import styles from "./style.module.scss";

interface TrEntranceProps {
  houseId: string;
  entrance: IEntrance;
  href: string;
}

const TrEntrance: React.FC<TrEntranceProps> = ({ houseId, entrance, href }) => {
  const {
    numberOfEntrance,
    yearOfConstruction,
    numberOfFloors,
    apartmentsFromTo,
    conditionOfEntrance,
  } = entrance;
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";
  const dispatch = useAppDispatch();

  const deleteEntranceHandler = async () => {
    await deleteEntrance(entrance._id, houseId);
    await dispatch(getEntrancesByHouse(houseId));
  };

  return (
    <tr className={styles.wrapTr}>
      <td>{numberOfEntrance}</td>
      <td>{yearOfConstruction}</td>
      <td>{numberOfFloors}</td>
      <td>{apartmentsFromTo}</td>
      <td>{conditionOfEntrance}</td>
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && (
          <HiddenBlock
            deleteHandler={deleteEntranceHandler}
            // archiveHandler={addContractorHandler}
            href={href}
            id={numberOfEntrance}
            canArchive={true}
            canDelete={true}
            canEdit={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrEntrance;
