import Link from "next/link";
import Button from "../../../../components/Buttons/Button";
import { download } from "../../../../utils/download";
import { apiURL } from "../../../config";
import { IReceipt } from "../../../models/IReceipt";
import styles from "./receipts-item.module.scss";

interface ReceiptsItemProps {
  receipt: IReceipt;
}

const ReceiptsItem: React.FC<ReceiptsItemProps> = ({ receipt }) => {
  return (
    <div className={styles.tableitem}>
      <div className={styles.tperiod}>
        <span className={styles.bold}>{receipt.periodMonth}</span>
        <span className={styles.bold}>{receipt.periodYear}</span>
      </div>
      <div className={styles.tdevice}>
        <span className={styles.bold}>{receipt.device.assignment}</span>
        <span className={styles.normal}>{receipt.device.tariff}</span>
        <span className={styles.normal}>{receipt.device.number}</span>
      </div>
      <div className={styles.tsum}>
        <span className={styles.bold}>{receipt.sum} ₽</span>
      </div>
      <div className={styles.treceipt}>
        <a
          onClick={() =>
            download(apiURL + "/uploads/" + receipt.file, "file.jpg")
          }
        >
          <div className={styles.treceiptImage}></div>
          Скачать PDF
        </a>
        <Link href={`/receipt/${receipt._id}`}>Просмотр</Link>
      </div>
      <div className={styles.tpaystatus}>
        <button
          className={
            receipt.status === "Не оплачена"
              ? styles.notpaid
              : receipt.status === "Оплачена"
              ? styles.paid
              : styles.oncheck
          }
        >
          {receipt.status}
        </button>
        {receipt.status === "Не оплачена" && (
          <Button bg="white" width={110}>
            <Link href={`/receipt/${receipt._id}`}>Оплатить</Link>
          </Button>
        )}
      </div>
    </div>
  );
};
export default ReceiptsItem;
