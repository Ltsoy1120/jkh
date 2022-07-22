import TrHouse from "./TrHouse";
import { IHouse } from "../../../../models/IHouse";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface HousesTableProps {
  companyId?: string;
  houses: IHouse[];
}

const HousesTable: React.FC<HousesTableProps> = ({ companyId, houses }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>ГЕО</th>
          <th>Адрес</th>
          <th>Код ФИАС </th>
          <th>Количество Л/С</th>
          <th>Количество помещений</th>
        </tr>
      </thead>
      <tbody>
        {houses &&
          houses.map((house) => (
            <TrHouse
              companyId={companyId}
              key={house._id}
              house={house}
              href={`/controlObjects/houses/${house._id}/editHouse`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default HousesTable;
