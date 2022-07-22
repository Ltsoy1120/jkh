import moment from "moment";
import Link from "next/link";
import { getFullName } from "../../../../../utils/functions";
import { IProperty } from "../../../../../models/IProperty";
import { ISubject } from "../../../../../models/ISubject";
import HiddenBlock from "../../../../HiddenBlock";
import styles from "./style.module.scss";
import { deleteProperty } from "../../../../../store/actions/subjectActions";

interface TrRegisterProps {
  subject: ISubject;
}

const TrRegister: React.FC<TrRegisterProps> = ({ subject }) => {
  const {
    startDateOfRegister,
    endDateOfRegister,
    registerAccount,
    registerStatus,
  } = subject;
  const { _id, number, address } = registerAccount;

  return (
    <tr className={styles.wrapTr}>
      <td>
        <Link
          href={`/controlObjects/passportOffice/${subject._id}/editRegister`}
        >
          <a>
            {moment(new Date(startDateOfRegister)).format("DD.MM.YYYY")} -{" "}
            {!endDateOfRegister
              ? moment(new Date(endDateOfRegister)).format("DD.MM.YYYY")
              : "по текущее время"}
          </a>
        </Link>
      </td>
      <td>
        <span>{getFullName(subject)}</span>
        <Link href={`/controlObjects/accounts/${_id}/editAccount`}>
          <a>Л/С №{number}</a>
        </Link>
      </td>
      <td>
        {address}, кв.{number}
      </td>
      <td>{registerStatus}</td>
    </tr>
  );
};
export default TrRegister;
