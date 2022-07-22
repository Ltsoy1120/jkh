import TrEntrance from "./TrEntrance";
import { IEntrance } from "../../../../models/IHouse";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface EntrancesTableProps {
  houseId: string;
  entrances: IEntrance[];
}

const EntrancesTable: React.FC<EntrancesTableProps> = ({
  houseId,
  entrances,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер подъезда</th>
          <th>Год постройки</th>
          <th>Количество этажей</th>
          <th>Квартиры с-по</th>
          <th>Состояние подъезда</th>
        </tr>
      </thead>
      <tbody>
        {entrances &&
          entrances.map((entrance, index) => (
            <TrEntrance
              key={index}
              entrance={entrance}
              houseId={houseId}
              href={`/controlObjects/houses/${houseId}/entrances/${entrance._id}/editEntrance`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default EntrancesTable;
