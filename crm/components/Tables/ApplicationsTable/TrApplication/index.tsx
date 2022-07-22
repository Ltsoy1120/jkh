import moment from "moment";
import { IApplication } from "../../../../models/IApplication";
import { getShortFullName } from "../../../../utils/functions";
import PriorityButton from "../../../Buttons/PriorityButton";
import StatusButton from "../../../Buttons/StatusButton";
import StarIcon from "@mui/icons-material/Star";
import styles from "./style.module.scss";
import Link from "next/link";

interface TrApplicationProps {
  companyId?: string;
  application: IApplication;
  href: string;
}

const TrApplication: React.FC<TrApplicationProps> = ({
  companyId,
  application,
  href,
}) => {
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
    completionDate,
    address,
    numberOfApartment,
    applicantFullName,
  } = application;
  console.log("application", application);
  return (
    <tr className={styles.wrapTr}>
      <td>
        <div className={styles.td}>
          <Link href={`/control/${application._id}/application`}>
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
        <span className={styles.bold}>{applicantFullName}</span>
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
              {moment(new Date(completionDate)).format("DD.MM.YYYY")} в{" "}
              {moment(new Date(completionDate)).format("hh.mm")}
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
export default TrApplication;
