import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";

const links = [
  {
    href: "/controlObjects",
    name: "Дома",
  },
  {
    href: "/controlObjects",
    name: "Документы",
  },
  {
    href: "/controlObjects/businessAccounts",
    name: "Лицевые счета",
  },
  {
    href: "/controlObjects",
    name: "Паспортный стол",
  },
  {
    href: "/controlObjects/meteringDevices",
    name: "Приборы учета",
  },
  {
    href: "/controlObjects",
    name: "Журналы",
  },
];

export default function ControlObjectsLinks() {
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
