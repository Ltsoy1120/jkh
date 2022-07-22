import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Tabs.module.scss";

const tabLinks = [
  {
    href: "/controlObjects/businessAccounts",
    name: "Лицевой счет",
  },
  {
    href: "/controlObjects/businessAccounts/payers",
    name: "Плательщик",
  },
  {
    href: "/controlObjects/businessAccounts/owners",
    name: "Собственники",
  },
  {
    href: "/controlObjects/businessAccounts/counters",
    name: "Счетчики",
  },
  {
    href: "/controlObjects",
    name: "История",
  },
];

export default function TabsBusinessAccounts() {
  const router = useRouter();
  const TabLinks = tabLinks.map((tabLink, i) => (
    <Link key={i} href={tabLink.href}>
      <a>
        <span className={tabLink.href === router.pathname ? styles.active : ""}>{tabLink.name}</span>
      </a>
    </Link>
  ));
  return <div className={styles.wrapper}>{TabLinks}</div>;
}
