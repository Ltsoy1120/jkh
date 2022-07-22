import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./links.module.scss";

interface CompanyLinksProps {
  isAdmin?: boolean;
  companyId: string | string[];
}
const CompanyLinks: React.FC<CompanyLinksProps> = ({ isAdmin, companyId }) => {
  const adminLinks = [
    {
      href: "/companies",
      name: "Главная",
    },
    {
      href: `/company/${companyId}`,
      href1: `/company/${companyId}/leader`,
      href2: `/company/${companyId}/requisites`,
      href3: `/company/${companyId}/offices`,
      name: "Компания",
    },
    {
      href: `/company/${companyId}/settings`,
      name: "Настройки",
    },
    {
      href: `/company/${companyId}/employees`,
      name: "Сотрудники",
    },
    {
      href: `/company/${companyId}/contractors`,
      name: "Подрядчики",
    },
    {
      href: `/company/${companyId}/subscribers`,
      name: "Абоненты",
    },
  ];
  const links = [
    {
      href: `/company/${companyId}`,
      href1: `/company/${companyId}/leader`,
      name: "Компания",
    },
    {
      href: `/company/${companyId}/settings`,
      name: "Настройки",
    },
    {
      href: `/company/${companyId}/employees`,
      name: "Сотрудники",
    },
    {
      href: `/company/${companyId}/contractors`,
      name: "Подрядчики",
    },
    {
      href: `/company/${companyId}/subscribers`,
      name: "Абоненты",
    },
    {
      href: `/company/${companyId}/registerOfDocs`,
      name: "Реестр документов",
    },
    {
      href: `/company/${companyId}/map`,
      name: "Карта",
    },
  ];
  let navLinks = [];
  isAdmin ? (navLinks = adminLinks) : (navLinks = links);
  const router = useRouter();
  const Links = navLinks.map((link, i) => (
    <li
      key={i}
      className={
        router.asPath === link.href ||
        router.asPath === link.href1 ||
        router.asPath === link.href2 ||
        router.asPath === link.href3
          ? styles.active
          : ""
      }
    >
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
};
export default CompanyLinks;
