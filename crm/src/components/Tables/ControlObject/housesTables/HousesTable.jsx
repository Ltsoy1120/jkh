import styles from "./housesTable.module.scss";
import classes from "../../table.module.scss";
import TrHouses from "./thHouses";

export default function HousesTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>ГЕО</th>
          <th>Адрес</th>
          <th>ФИАС</th>
          <th>Количество Л/С</th>
          <th>Количество помещений</th>
        </tr>
      </thead>
      <tbody>
        <TrHouses
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 4"
          fias="Инженер"
          countLS="234"
          countPlaces="200"
        />
        <TrHouses
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 4"
          fias="Инженер"
          countLS="56"
          countPlaces="200"
        />
        <TrHouses
          address="г. Воронеж, ул. Бульвар Фестивальный, д.13, кв. 4"
          fias="Инженер"
          countLS="856"
          countPlaces="200"
        />
      </tbody>
    </table>
  );
}
