import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Tabs.module.scss";

const tabLinks = [
  {
    href: "/company/requisites",
    name: "Реквизиты",
  },
  {
    href: "/company/offices",
    name: "Офисы компании",
  },
];

export default function TabsSettingCompany() {
  const router = useRouter();
  const TabLinks = tabLinks.map((tabLink, i) => (
    <Link key={i} href={tabLink.href}>
      <a>
        <span className={tabLink.href === router.pathname ? styles.active : ""}>
          {tabLink.name}
        </span>
      </a>
    </Link>
  ));
  return <div className={styles.wrapper}>{TabLinks}</div>;
}