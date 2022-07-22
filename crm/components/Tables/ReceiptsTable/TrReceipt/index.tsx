import Link from "next/link";
import { IReceipt } from "../../../../models/IReceipt";
import { getShortFullName } from "../../../../utils/functions";
import StatusButton from "../../../Buttons/StatusButton";
import { RentIcon } from "../../../icons";
import styles from "./style.module.scss";

interface TrReceiptProps {
  receipt: IReceipt;
}

const TrReceipt: React.FC<TrReceiptProps> = ({ receipt }) => {
  const { periodMonth, periodYear, device, status, account } = receipt;
  return (
    <tr className={styles.wrapTr}>
      <td>
        <span>{periodMonth}</span>
        <p>{periodYear}</p>
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
        <Link href={`/controlObjects/accounts/${account._id}/editAccount`}>
          <a className={styles.green}>Л/С № {account.number}</a>
        </Link>
      </td>

      <td>
        <span className={styles.bold}>{device.assignment}</span>
        <p>{device.tariff}</p>
        <span>{device.number}</span>
      </td>

      <td>
        <StatusButton status={status} />
      </td>
      <td>
        <a className={styles.receiptIcon}>
          <RentIcon />
        </a>
        <p>
          <a className={styles.green}>Скачать PDF</a>
        </p>
        <a className={styles.green}>Просмотр</a>
      </td>
    </tr>
  );
};
export default TrReceipt;
