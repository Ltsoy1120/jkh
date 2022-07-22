import { useRouter } from "next/router";
import styles from "../links.module.scss";
import Link from "next/link";

const links = [
  {
    href: "/debtors",
    name: "Дела",
  },
  {
    href: "/debtors/statistics",
    name: "Статистика",
  },
  {
    href: "/debtors/settings",
    name: "Настройки",
  },
];

export const DebtorsLinks = () => {
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
