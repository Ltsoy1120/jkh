import moment from "moment";
import { getFullName } from "../../../../../utils/functions";
import { IProperty } from "../../../../../models/IProperty";
import styles from "./style.module.scss";
import Link from "next/link";

interface TTrOwnerProps {
  property: IProperty;
}

const TrOwner: React.FC<TTrOwnerProps> = ({ property }) => {
  const {
    subject,
    startDateOfOwnership,
    endDateOfOwnership,
    shareOfOwnership,
    statusOfOwnership,
  } = property;
  return (
    <tr className={styles.wrapTr}>
      <td>
        <Link
          href={`/controlObjects/passportOffice/${subject._id}/editSubject`}
        >
          <a>{getFullName(subject)}</a>
        </Link>
      </td>
      <td>
        {moment(new Date(startDateOfOwnership)).format("DD.MM.YYYY")} -{" "}
        {!endDateOfOwnership
          ? moment(new Date(endDateOfOwnership)).format("DD.MM.YYYY")
          : "по текущее время"}
      </td>
      <td>{shareOfOwnership}</td>
      <td>{statusOfOwnership ? statusOfOwnership : "-"}</td>
    </tr>
  );
};
export default TrOwner;
