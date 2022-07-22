import moment from "moment";
import { getShortFullName } from "../../../../utils/functions";
import PriorityButton from "../../../Buttons/PriorityButton";
import StatusButton from "../../../Buttons/StatusButton";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { IAppeal } from "../../../../models/IAppeal";
import styles from "./style.module.scss";

interface TrAppealProps {
  companyId?: string;
  appeal: IAppeal;
  href: string;
}

const TrAppeal: React.FC<TrAppealProps> = ({ companyId, appeal, href }) => {
  const {
    _id,
    number,
    type,
    status,
    priority,
    createDate,
    dispatcher,
    performer,
    result,
    address,
    account,
    numberOfApartment,
    doneDate,
  } = appeal;
  console.log("appeal", appeal);
  return (
    <tr className={styles.wrapTr}>
      <td>
        <div className={styles.td}>
          <Link href={`/appeals/${appeal._id}`}>
            <a>
              {number}
              {/* <span className={styles.arrowSpan}>
              <span>&#x2190;</span> {number}
            </span> */}
            </a>
          </Link>
          <StatusButton status={status} />
          <PriorityButton priority={priority} />
          <div className={styles.containerStar}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        </div>
      </td>

      <td>
        <span className={styles.grayText}>Поступила</span>
        <p className={`${styles.bold} ${styles.mb15}`}>
          {moment(new Date(createDate)).format("DD.MM.YYYY")} в{" "}
          {moment(new Date(createDate)).format("hh.mm")}
        </p>
        {/* <p>{created.ground}</p>
        <a href="">{created.groundCase}</a> */}
        {dispatcher ? (
          <p>
            {getShortFullName(dispatcher)} ({dispatcher.position})
          </p>
        ) : (
          <p>-</p>
        )}
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
          {address}, кв.{numberOfApartment}
        </p>
      </td>

      <td className={styles.bold}>{type}</td>

      <td>
        {performer ? (
          <>
            <p className={styles.bold}>{getShortFullName(performer)}</p>
            <p>{performer.position}</p>
          </>
        ) : (
          <p>-</p>
        )}
      </td>

      <td className={styles.td}>
        {result ? (
          <>
            <p className={styles.bold}>
              {moment(new Date(doneDate)).format("DD.MM.YYYY")} в{" "}
              {moment(new Date(doneDate)).format("hh.mm")}
            </p>
            <p>{result}</p>
          </>
        ) : (
          <p>-</p>
        )}
      </td>
    </tr>
  );
};
export default TrAppeal;
