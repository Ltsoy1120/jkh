import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Tabs.module.scss";

const tabLinks = [
  {
    href: "/control/application",
    name: "Заявка",
  },
  {
    href: "/",
    hrefSecond: "/",
    name: "Комментарии",
  },
  {
    href: "/",
    hrefSecond: "/",
    name: "История",
  },
];

export default function TabsEmployee() {
  const router = useRouter();
  const TabLinks = tabLinks.map((tabLink, i) => (
    <Link key={i} href={tabLink.href}>
      <a>
        <span
          className={tabLink.href === router.pathname || tabLink.hrefSecond === router.pathname ? styles.active : ""}
        >
          {tabLink.name}
        </span>
      </a>
    </Link>
  ));
  return <div className={styles.wrapper}>{TabLinks}</div>;
}
