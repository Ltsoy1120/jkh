import moment from "moment";
import Link from "next/link";
import { IReception } from "../../../../models/IReception";
import { getShortFullName } from "../../../../utils/functions";
import StatusButton from "../../../Buttons/StatusButton";
import classes from "../../table.module.scss";
import styles from "./style.module.scss";

interface TrReceptionProps {
  reception: IReception;
}

const TrReception: React.FC<TrReceptionProps> = ({ reception }) => {
  const {
    number,
    date,
    time,
    status,
    office,
    createDate,
    responsiblePerson,
    account,
    topic,
  } = reception;
  console.log("reception", reception);
  return (
    <tr className={styles.wrapTr}>
      <td>
        <Link href={`/receptionOfCitizens/${reception._id}/reception`}>
          <a>{number}</a>
        </Link>
        <br />{" "}
        <span className={`${styles.bold} ${styles.mb15}`}>
          {moment(new Date(createDate)).format("DD.MM.YYYY")} в{" "}
          {moment(new Date(createDate)).format("hh.mm")}
        </span>
      </td>
      <td>
        <span className={styles.bold}>{date}</span>
        <br /> <span className={`${styles.bold} ${styles.time}`}>{time}</span>
        <br /> <StatusButton status={status} />
      </td>

      <td>
        <span className={styles.bold}>{office.name}</span>
        <br /> {office.address}
      </td>

      <td>
        <span className={styles.bold}>
          {responsiblePerson
            ? getShortFullName(responsiblePerson)
            : "не выбран"}
        </span>
      </td>
      <td>
        {account.payer ? (
          <span className={styles.bold}>
            {getShortFullName(account.payer)}(плательщик)
          </span>
        ) : account.owners ? (
          account.owners.map((owner) => (
            <span className={styles.bold}>
              {getShortFullName(owner)}(собственник)
            </span>
          ))
        ) : (
          <span className={styles.bold}>нет закрепленых субъектов</span>
        )}
        <p>
          {account.address}, кв.{account.numberOfApartment}
        </p>
        <Link href="/">
          <a className={styles.green}>Л/С № {account.number}</a>
        </Link>
      </td>
      <td>
        <span className={styles.bold}>{topic}</span>
      </td>
    </tr>
  );
};
export default TrReception;
