import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";

const links = [
  {
    href: "/company",
    name: "Главная",
  },
  {
    href: "/company/settings",
    name: "Компания",
  },
  {
    href: "/company/employees",
    name: "Сотрудники",
  },
  {
    href: "/company/contractors",
    name: "Подрядчики",
  },
  {
    href: "/company/subscribers",
    name: "Абоненты",
  },
  {
    href: "/company/registerOfDocuments",
    name: "Реестр документов",
  },
  {
    href: "/company/map",
    name: "Карта",
  },
];

export default function CompanyLinks() {
  const router = useRouter();
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
}
