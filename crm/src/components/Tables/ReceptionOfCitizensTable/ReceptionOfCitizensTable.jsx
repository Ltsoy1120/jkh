import styles from "./ReceptionOfCitizensTable.module.scss";
import classes from "../table.module.scss";
import TrReceptionOfCitizens from "./TrReceptionOfCitizens/TrReceptionOfCitizens";
import Status from "../../Status/Status";

export default function ReceptionOfCitizensTable() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable}`}>
      <thead>
        <tr>
          <th>
            Номер /<br />
            Дата создания
          </th>
          <th>
            Дата /<br />
            Статус приема
          </th>
          <th>Офис проема</th>
          <th>
            Ответственный
            <br /> за прием
          </th>
          <th>Житель</th>
          <th>Тема приема</th>
        </tr>
      </thead>
      <tbody>
        <TrReceptionOfCitizens
          number="123456"
          dateOfCreation="26.08.2021 в 12:30"
          date="27.08.21"
          time="12:45 - 13:00"
          status={<Status status="Согласован" />}
          officeStatus="Главный"
          officeAdress="(г. Воронеж, 
            ул. Кольцовская, д.40, 
            офис 154) "
          responsibleReception="Хрушкина П.П."
          fullNameResident="Зелипупкин П.Л."
          residentPhoneNumber="+7 (900) 000-00-00"
          residentAddress="Путиловская 17, кв 60"
          personalAccountResident="Л/С 12345"
          receptionTheme="Перерасчет"
        />
        <TrReceptionOfCitizens
          number="123456"
          dateOfCreation="26.08.2021 в 12:30"
          date="27.08.21"
          time="12:45 - 13:00"
          status={<Status status="Завершен" />}
          officeStatus="Главный"
          officeAdress="(г. Воронеж, 
            ул. Кольцовская, д.40, 
            офис 154) "
          responsibleReception="Хрушкина П.П."
          fullNameResident="Зелипупкин П.Л."
          residentPhoneNumber="+7 (900) 000-00-00"
          residentAddress="Путиловская 17, кв 60"
          personalAccountResident="Л/С 12345"
          receptionTheme="Перерасчет"
        />
        <TrReceptionOfCitizens
          number="123456"
          dateOfCreation="26.08.2021 в 12:30"
          date="27.08.21"
          time="12:45 - 13:00"
          status={<Status status="Отменен" />}
          officeStatus="Главный"
          officeAdress="(г. Воронеж, 
            ул. Кольцовская, д.40, 
            офис 154) "
          responsibleReception="Хрушкина П.П."
          fullNameResident="Зелипупкин П.Л."
          residentPhoneNumber="+7 (900) 000-00-00"
          residentAddress="Путиловская 17, кв 60"
          personalAccountResident="Л/С 12345"
          receptionTheme="Перерасчет"
        />
      </tbody>
    </table>
  );
}
