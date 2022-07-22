import HiddenBlock from "../../../../HiddenBlock";
import Link from "next/link";
import { ISubject } from "../../../../../models/ISubject";
import { getFullName } from "../../../../../utils/functions";
import ToggleSwitch from "../../../../ToggleSwitch";
import { useRouter } from "next/router";
import {
  deleteSubject,
  getSubjectsByCompany,
} from "../../../../../store/actions/subjectActions";
import { useDispatch } from "react-redux";
import styles from "./style.module.scss";

interface TrSubjectProps {
  subject: ISubject;
}

const TrSubject: React.FC<TrSubjectProps> = ({ subject }) => {
  const dispatch = useDispatch();
  const { properties, isActive } = subject;
  const companyId = useRouter().query.companyId.toString();

  const deleteSubjectHandler = async () => {
    await deleteSubject(companyId, subject._id);
    dispatch(getSubjectsByCompany(companyId));
  };

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
        {properties ? (
          properties.map((property) => (
            <div key={property._id}>
              <span>
                {property.address}, кв.
                {property.numberOfApartment}
              </span>
              <Link
                href={`/controlObjects/accounts/${property.account._id}/editAccount`}
              >
                <a>Л/С №{property.accountNumber}</a>
              </Link>
            </div>
          ))
        ) : (
          <span>Данные о собственности еще не добавлены</span>
        )}
      </td>
      <td className={styles.wrapSwitch}>
        <ToggleSwitch checked={isActive} />
        {isActive ? <span>Активен</span> : <span>Неактивен</span>}
      </td>
      <td style={{ width: 0 }}>
        <HiddenBlock
          id={subject._id}
          deleteHandler={deleteSubjectHandler}
          href={`/controlObjects/passportOffice/${subject._id}/editSubject`}
          canDelete={true}
          canEdit={true}
        />
      </td>
    </tr>
  );
};
export default TrSubject;
