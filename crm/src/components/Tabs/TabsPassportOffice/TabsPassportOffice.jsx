import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../Tabs.module.scss";

const tabLinks = [
  {
    href: "/controlObjects/passportOffice/addSubject",
    name: "Личные данные",
  },
  {
    href: "/controlObjects/passportOffice/addSubject/owners",
    hrefSecond: "/controlObjects/passportOffice/addSubject/addProperty",
    name: "Собственность",
  },
  {
    href: "/controlObjects/passportOffice/addSubject/registration",
    hrefSecond: "/controlObjects/passportOffice/addSubject/addRegister",
    name: "Регистрация",
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
