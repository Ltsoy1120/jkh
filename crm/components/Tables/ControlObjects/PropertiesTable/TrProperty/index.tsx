import moment from "moment";
import Link from "next/link";
import { getFullName } from "../../../../../utils/functions";
import { IProperty } from "../../../../../models/IProperty";
import { ISubject } from "../../../../../models/ISubject";
import HiddenBlock from "../../../../HiddenBlock";
import styles from "./style.module.scss";
import { deleteProperty } from "../../../../../store/actions/subjectActions";

interface TrPropertyProps {
  property: IProperty;
  subject: ISubject;
}

const TrProperty: React.FC<TrPropertyProps> = ({ property, subject }) => {
  const { _id, address, numberOfApartment, number } = property.account;
  const { startDateOfOwnership, shareOfOwnership, endDateOfOwnership } =
    property;

  const deletePropertyHandler = async () => {
    await deleteProperty(subject._id, property._id);
  };
  return (
    <tr className={styles.wrapTr}>
      <td>
        <Link
          href={`/controlObjects/passportOffice/${subject._id}/${property._id}/editProperty`}
        >
          <a>
            {moment(new Date(startDateOfOwnership)).format("DD.MM.YYYY")} -{" "}
            {!endDateOfOwnership
              ? moment(new Date(endDateOfOwnership)).format("DD.MM.YYYY")
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
        {address}, кв.{numberOfApartment}
      </td>
      <td>{shareOfOwnership}</td>
      <td style={{ width: 0 }}>
        <HiddenBlock
          id={subject._id}
          deleteHandler={deletePropertyHandler}
          href={`/controlObjects/passportOffice/${subject._id}/${property._id}/editProperty`}
          canDelete={true}
          canEdit={true}
        />
      </td>
    </tr>
  );
};
export default TrProperty;
