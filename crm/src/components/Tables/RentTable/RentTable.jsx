import styles from "./RentTable.module.scss";
import classes from "../table.module.scss";
import TrRentTable from "./TrRentTable/TrRentTable";
import Status from "../../Status/Status";
import { RentIcon } from "../../RentIcon/RentIcon";

export const RentTable = () => {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>Период</th>
          <th>Абонент / Адрес / Лицевой счет</th>
          <th>Ресурс/ Тариф / Прибор учета</th>
          <th>Статус оплаты</th>
          <th>Квитанция</th>
        </tr>
      </thead>
      <tbody>
        <TrRentTable
          number="2021"
          month="Апрель"
          receiptLink="Скчать PDF"
          receiptView="Просмотр"
          receiptIcon={<RentIcon />}
          status={<Status status="Оплачена" />}
          fullName="Зилипупкин А.В."
          phone="+7 (900) 000-00-00"
          address="Путиловская 17, кв 60"
          personalAccount="Л/С 12345"
          resourceName="Холодная вода"
          resourceTariff="Однотарифный"
          resourceNumber="ЕН123445678909"
        />

        <TrRentTable
          number="2021"
          month="Март"
          receiptLink="Скчать PDF"
          receiptView="Просмотр"
          receiptIcon={<RentIcon />}
          status={<Status status="Оплачена" />}
          fullName="Зилипупкин А.В."
          phone="+7 (900) 000-00-00"
          address="Путиловская 17, кв 60"
          personalAccount="Л/С 12345"
          resourceName="Холодная вода"
          resourceTariff="Однотарифный"
          resourceNumber="ЕН123445678909"
        />

        <TrRentTable
          number="2021"
          month="Февраль"
          status={<Status status="Оплачена" />}
          fullName="Зилипупкин А.В."
          phone="+7 (900) 000-00-00"
          address="Путиловская 17, кв 60"
          personalAccount="Л/С 12345"
          resourceName="Холодная вода"
          resourceTariff="Однотарифный"
          resourceNumber="ЕН123445678909"
        />
      </tbody>
    </table>
  );
};
