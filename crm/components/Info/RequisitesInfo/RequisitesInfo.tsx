import Link from "next/link";
import { RequisitesData } from "../../../models/ICompany";
import Button from "../../Buttons/Button";
import InfoCard from "../../Cards/InfoCard";
import styles from "./RequisitesInfo.module.scss";

interface RequisitesInfoProps {
  requisites: RequisitesData;
  companyId: string;
  isAdmin: boolean;
  isLeader: boolean;
  handleDeleteRequisites: () => Promise<void>;
}
const RequisitesInfo: React.FC<RequisitesInfoProps> = ({
  requisites,
  companyId,
  isAdmin,
  isLeader,
  handleDeleteRequisites,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <InfoCard name="ОГРН" value={requisites.ogrn} mr={20} width={265} />
        <InfoCard name="ИНН" value={requisites.inn} mr={20} width={265} />
        <InfoCard name="КПП" value={requisites.kpp} mr={20} width={265} />
      </div>
      <InfoCard
        name="Наименовние банка"
        value={requisites.bankName}
        width={550}
      />
      <div className={styles.row}>
        <InfoCard name="БИК" value={requisites.bik} mr={20} width={265} />
        <InfoCard
          name="Рассчетный счет"
          value={requisites.paymentAccount}
          mr={20}
          width={265}
        />
        <InfoCard
          name="Корреспондентский счет"
          value={requisites.correspondentAccount}
          mr={20}
          width={265}
        />
      </div>
      <div className={styles.wrapButtons}>
        {(isLeader || isAdmin) && (
          <Link href={`/company/${companyId}/settings/requisites`}>
            <a>
              <Button bg="green" mr={20} width={200}>
                Редактировать
              </Button>
            </a>
          </Link>
        )}
        {isAdmin && (
          <Button width={200} onClick={handleDeleteRequisites}>
            Удалить
          </Button>
        )}
      </div>
    </div>
  );
};
export default RequisitesInfo;
