import styles from "./TelephonyTables.module.scss";
import classes from "../table.module.scss";
import TrTelephony from "./TrTelephony/TrTelephony";

export default function TelephonyTables() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} ${styles.withSpacing}`}>
      <thead>
        <tr>
          <th>Время звонка</th>
          <th>Направление</th>
          <th>С номера/Кто звонил</th>
          <th>На номер</th>
          <th>Кто ответил</th>
          <th>Запись разговора</th>
        </tr>
      </thead>
      <tbody>
        <TrTelephony
          timeCall="26.08.21 в 12:25"
          direction="Входящий"
          whoCalled="+7 (4732) 65-65-65"
          statusAnswer="Без ответа"
          whomCalled={{ organization: "Ростелеком", number: "+7 (4732) 65-65-66" }}
          answerringPerson={{ person: "Конфеткина А.Г.", work: "(Диспетчер)" }}
          recordTalk={""}
        />
        <TrTelephony
          timeCall="26.08.21 в 12:25"
          direction="Входящий"
          whoCalled="+7 (4732) 65-65-65"
          statusAnswer="Отвечен"
          whomCalled={{ organization: "Ростелеком", number: "+7 (4732) 65-65-66" }}
          answerringPerson={{ person: "Конфеткина А.Г.", work: "(Диспетчер)" }}
          recordTalk={""}
        />
      </tbody>
    </table>
  );
}
