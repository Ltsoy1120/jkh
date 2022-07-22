import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./links.module.scss";

interface AppealsLinksProps {
  companyId?: string;
  appealId?: string;
}
export const AppealsLinks: React.FC<AppealsLinksProps> = ({
  companyId,
  appealId,
}) => {
  const router = useRouter();
  const links = [
    {
      href: `/company/${companyId}/appeals`,
      href1: `/appeals/addAppeal`,
      name: "Обращения",
    },
    {
      href: "/appeals/settings/alerts",
      name: "Настройка",
    },
  ];
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
};
