import Link from "next/link";
import styles from "./TrCompany.module.scss";

interface TrCompanyProps {
  id: string;
  name: string;
  address: string;
  timezone: string;
  phones: string[];
  website: string;
  createDate: string;
}

const TrCompany: React.FC<TrCompanyProps> = ({
  id,
  name,
  address,
  timezone,
  website,
  createDate,
  phones,
}) => {
  return (
    <div className={styles.tr}>
      <span>
        <Link href={`/company/${id}`}>
          <a>{name} </a>
        </Link>
      </span>
      <span>{address}</span>
      <span>{createDate}</span>
      <span>{timezone}</span>
      <span>{website}</span>
      <span>
        {phones.map((phone) => (
          <span key={phone}>{phone}</span>
        ))}
      </span>
    </div>
  );
};
export default TrCompany;
