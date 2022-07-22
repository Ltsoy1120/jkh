import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";

const links = [
  {
    href: "/notifications",
    name: "Уведомления сервиса",
  },
  {
    href: "/notifications/employees",
    name: "Уведомления сотрудников",
  },
  {
    href: "/notifications/roomer",
    name: "Уведомления жильцов",
  },
  {
    href: "/notifications/settings",
    name: "Настройки",
  },
];

export default function NotificationsLinks() {
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
