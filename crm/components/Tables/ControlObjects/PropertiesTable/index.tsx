import TrProperty from "./TrProperty";
import classes from "../../table.module.scss";
import { IUser } from "../../../../models/IUser";
import styles from "./style.module.scss";
import { IProperty } from "../../../../models/IProperty";
import { ISubject } from "../../../../models/ISubject";

interface PropertiesTableProps {
  subject: ISubject;
  properties: IProperty[];
}

const PropertiesTable: React.FC<PropertiesTableProps> = ({
  subject,
  properties,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Период владения</th>
          <th>Лицевой счет</th>
          <th>Адрес</th>
          <th>Доля владения</th>
        </tr>
      </thead>
      <tbody>
        {properties &&
          properties.map((property) => (
            <TrProperty
              key={property._id}
              property={property}
              subject={subject}
            />
          ))}
      </tbody>
    </table>
  );
};
export default PropertiesTable;
