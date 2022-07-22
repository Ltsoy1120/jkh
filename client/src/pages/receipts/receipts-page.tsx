import { IDevice } from "../../models/IDevice";
import { IReceipt } from "../../models/IReceipt";
import ReceiptsFilter from "./receipts-filter";
import ReceiptsItem from "./receipts-item";
import styles from "./receipts-page.module.scss";

interface ReceiptsProps {
  receipts: IReceipt[];
  devices: IDevice[];
}
const ReceiptsPage: React.FC<ReceiptsProps> = ({ devices, receipts }) => {
  return (
    <div className={styles.content}>
      <div className={styles.titleblock}>
        <div>
          <h1 className={styles.pagetitle}>Мои квитанции</h1>
          <span>Квитанции и оплата / Мои квитанции</span>
        </div>
        <div className={styles.alertWindow}>
          <div className={styles.alertWindowMessage}>
            Внимание! <br />
            По Вашему лицевому счету имеется задолженность
          </div>
          <div className={styles.alertWindowNumber}>100 ₽</div>
        </div>
      </div>
      <ReceiptsFilter devices={devices} />
      <div className={styles.tableblock}>
        <div className={styles.tablehead}>
          <div className={styles.tperiod}>Период</div>
          <div className={styles.tdevice}>Прибор учета</div>
          <div className={styles.tsum}>Сумма</div>
          <div className={styles.treceipt}>Квитанция</div>
          <div className={styles.tpaystatus}>Статус оплаты</div>
        </div>
        <div className={styles.tableinfo}>
          {receipts &&
            receipts.map(receipt => (
              <ReceiptsItem key={receipt._id} receipt={receipt} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ReceiptsPage;
