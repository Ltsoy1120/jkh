import moment from "moment";
import Link from "next/link";
import { apiURL } from "../../../config";
import { ICompany } from "../../../models/ICompany";
import Button from "../../Buttons/Button";
import InfoCard from "../../Cards/InfoCard";
import styles from "./CompanyInfo.module.scss";

interface CompanyInfoProps {
  company: ICompany;
  isAdmin: boolean;
  isLeader: boolean;
  handleDeleteCompany: () => Promise<void>;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  company,
  isAdmin,
  isLeader,
  handleDeleteCompany,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapAvatar}>
        <img src={apiURL + "/uploads/" + company.logo} />
        <p>Логотип компании</p>
      </div>
      <div className={styles.wrapInfo}>
        <InfoCard name="Адрес" value={company.address} width={550} />
        <InfoCard
          name="Дата добавления компании"
          value={moment(company.createDate).format("DD.MM.YYYY")}
          width={550}
        />
        <InfoCard name="Часовой пояс" value={company.timezone} width={550} />
        <InfoCard name="Контактные телефоны" value={company.phones} />
        <div className={styles.row}>
          <InfoCard name="Домен сайта" value={company.domen} width={265} />
          <InfoCard name="Адрес сайта" value={company.website} width={265} />
        </div>
        <div className={styles.wrapButtons}>
          {(isLeader || isAdmin) && (
            <Link href={`/company/${company._id}/settings`}>
              <a>
                <Button bg="green" mr={20} width={200}>
                  Редактировать
                </Button>
              </a>
            </Link>
          )}
          {isAdmin && (
            <Button width={200} onClick={handleDeleteCompany}>
              Удалить
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CompanyInfo;
