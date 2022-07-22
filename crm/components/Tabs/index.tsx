import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";

interface tabLinksProps {
  tabLinks: tabLink[];
}
type tabLink = {
  href: string;
  hrefSecond?: string;
  name: string;
};

const Tabs: React.FC<tabLinksProps> = ({ tabLinks }) => {
  const router = useRouter();
  const TabLinks = tabLinks.map((tabLink, i) => (
    <Link key={i} href={tabLink.href}>
      <a>
        <span
          className={
            tabLink.href === router.asPath ||
            tabLink.hrefSecond === router.asPath
              ? styles.active
              : ""
          }
        >
          {tabLink.name}
        </span>
      </a>
    </Link>
  ));
  return <div className={styles.wrapper}>{TabLinks}</div>;
};

export default Tabs;
