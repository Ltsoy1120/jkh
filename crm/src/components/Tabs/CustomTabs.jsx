import { useRouter } from "next/router";
import styles from "./Tabs.module.scss";

import Link from "next/link";

export default function CustomTabs({ tabLinks }) {
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
