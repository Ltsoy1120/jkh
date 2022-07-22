import { useRouter } from "next/router";
import React from "react";
import { IOffice } from "../../../../models/IOffice";
import { deleteOffice } from "../../../../store/actions/companyActions";
import HiddenBlock from "../../../HiddenBlock";
import styles from "./TrOffice.module.scss";

interface TrOfficeProps {
  office: IOffice;
  isAdmin: boolean;
  isHiddenBlock: boolean;
  href: string;
}

const TrOffice: React.FC<TrOfficeProps> = ({
  office,
  isAdmin,
  isHiddenBlock,
  href,
}) => {
  const { name, address, dateOfWork, timeOfWork, timeOfLunch, phones } = office;
  const companyId = useRouter().query.companyId.toString();

  const deleteOfficeHandler = async () => {
    await deleteOffice(companyId, office._id);
  };

  return (
    <tr className={styles.wrap}>
      <td>{name}</td>
      <td>{address}</td>
      <td>
        {dateOfWork}
        <br />
        {timeOfWork}
        <br />
        Обед: {timeOfLunch}
      </td>
      <td className={styles.phones}>
        {phones.map((phone) => (
          <span key={phone}>{phone}</span>
        ))}
      </td>
      <td style={{ width: 0 }}>
        {isHiddenBlock && (
          <HiddenBlock
            deleteHandler={deleteOfficeHandler}
            href={href}
            id={office._id}
            canDelete={true}
            canEdit={true}
          />
        )}
      </td>
    </tr>
  );
};
export default TrOffice;
