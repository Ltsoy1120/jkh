import { IApartment } from "../../../../../models/IHouse";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import HiddenBlock from "../../../../HiddenBlock";
import {
  deleteApartment,
  getApartmentsByHouse,
} from "../../../../../store/actions/controlObjectActions";
import styles from "./style.module.scss";

interface TrEntranceProps {
  houseId: string;
  apartment: IApartment;
  href: string;
}

const TrEntrance: React.FC<TrEntranceProps> = ({
  houseId,
  apartment,
  href,
}) => {
  const {
    numberOfApartment,
    cadastralNumber,
    totalArea,
    typeOfApartment,
    characteristic,
    account,
    accountArea,
  } = apartment;
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?.role === "leader";
  const dispatch = useAppDispatch();

  const deleteApartmentHandler = async () => {
    await deleteApartment(apartment._id, houseId);
    await dispatch(getApartmentsByHouse(houseId));
  };

  return (
    <tr className={styles.wrapTr}>
      <td>{numberOfApartment}</td>
      <td>{cadastralNumber}</td>
      <td>{totalArea}</td>
      <td>{typeOfApartment}</td>
      <td>{characteristic}</td>
      <td>{account}</td>
      <td>{accountArea}</td>
      <td style={{ width: 0 }}>
        {(isAdmin || isLeader) && (
          <HiddenBlock
            deleteHandler={deleteApartmentHandler}
            // archiveHandler={addContractorHandler}
            href={href}
            id={numberOfApartment}
            canCreateAccount={true}
            canDelete={true}
            canEdit={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrEntrance;
