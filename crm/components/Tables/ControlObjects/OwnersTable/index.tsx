import TrOwner from "./TrOwner";
import { IProperty } from "../../../../models/IProperty";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface OwnersTableProps {
  properties: IProperty[];
}

const OwnersTable: React.FC<OwnersTableProps> = ({ properties }) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>ФИО</th>
          <th>Период владения</th>
          <th>Доля владения</th>
          <th>Статус владения</th>
        </tr>
      </thead>
      <tbody>
        {properties &&
          properties.map((property) => (
            <TrOwner key={property._id} property={property} />
          ))}
      </tbody>
    </table>
  );
};
export default OwnersTable;
