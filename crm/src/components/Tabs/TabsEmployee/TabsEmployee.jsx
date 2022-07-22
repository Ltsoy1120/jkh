import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Tabs.module.scss";

const tabLinks = [
  {
    href: "/company/employees/addEmployee",
    name: "Личная информация",
  },
  {
    href: "/company/employees/addEmployee/accessRights",
    name: "Права доступа",
  },
];

export default function TabsEmployee() {
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
