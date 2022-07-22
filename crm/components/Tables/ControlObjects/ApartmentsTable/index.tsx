import TrApartment from "./TrApartment";
import { IApartment } from "../../../../models/IHouse";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface ApartmentsTableProps {
  houseId: string;
  apartments: IApartment[];
}

const ApartmentsTable: React.FC<ApartmentsTableProps> = ({
  houseId,
  apartments,
}) => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Номер помещения</th>
          <th>Кадастровый номер</th>
          <th>Площадь, м²</th>
          <th>Тип</th>
          <th>Характеристика</th>
          <th>Лицевой счет</th>
          <th>Площадь по Л/С, м²</th>
        </tr>
      </thead>
      <tbody>
        {apartments &&
          apartments.map((apartment, index) => (
            <TrApartment
              key={index}
              apartment={apartment}
              houseId={houseId}
              href={`/controlObjects/houses/${houseId}/apartments/${apartment._id}/editApartment`}
            />
          ))}
      </tbody>
    </table>
  );
};
export default ApartmentsTable;
