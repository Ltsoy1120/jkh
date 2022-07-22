import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./links.module.scss";

const links = [
  {
    href: "/companies",
    name: "Главная",
  },
  // {
  //   href: "/company/settings",
  //   name: "Настройки",
  // },
  // {
  //   // href: "/company/employees",
  //   name: "Сотрудники",
  // },
  // {
  //   // href: "/company/contractors",
  //   name: "Подрядчики",
  // },
  // {
  //   // href: "/company/subscribers",
  //   name: "Абоненты",
  // },
];

const CompaniesLinks: React.FC = () => {
  const router = useRouter();
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
};
export default CompaniesLinks;
