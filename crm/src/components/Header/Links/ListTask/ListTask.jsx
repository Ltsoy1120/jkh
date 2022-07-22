import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";

const links = [
  {
    href: "/task",
    name: "Задачи",
  },
  {
    href: "/task/settings",
    name: "Настройка",
  },
];

export const ListTask = () => {
  const router = useRouter();
  // className={
  //   router.pathname.indexOf(link.href) !== -1 ||
  //   router.pathname === link.href
  //     ? styles.active
  //     : ""
  // }
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
};
