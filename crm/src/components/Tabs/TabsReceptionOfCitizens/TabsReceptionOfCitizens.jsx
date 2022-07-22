import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Tabs.module.scss";

const tabLinks = [
  {
    href: "/receptionOfCitizens/settings",
    name: "Оповещения",
  },
  {
    href: "/receptionOfCitizens/numbering",
    name: "Нумерация",
  },
  {
    href: "/receptionOfCitizens/admissionTopics",
    name: "Темы приема",
  },
];

export default function TabsReceptionOfCitizens() {
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
