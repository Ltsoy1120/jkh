import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";
import { HeaderSelect } from "../../../Forms/HeaderSelect/HeaderSelect";

const links = [
  {
    href: "/control",
    name: "Заявки",
  },
  {
    href: "/control/magazine",
    name: "Журнал",
  },
  {
    href: "/control/settings",
    name: "Настройки",
  },
];

const controlLinks = [
  { title: "Настройки", href: "/control/settings", id: 1 },
  { title: "Основные настройки", href: "/control/", id: 2 },
  { title: "Типы заявок", href: "/control/", id: 3 },
  { title: "Права доступа", href: "/control/", id: 4 },
  { title: "Подрядчики", href: "/control/", id: 5 },
];

export const ControlLinks = () => {
  const router = useRouter();
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>
          {link.name === "Настройки" ? (
            <HeaderSelect defaultTitle="  Настройки" data={controlLinks} />
          ) : link.name === "Основные настройки" ? (
            <HeaderSelect defaultTitle="Основные настройки" data={controlLinks} />
          ) : link.name === "Типы заявок" ? (
            <HeaderSelect defaultTitle="Типы заявок" data={controlLinks} />
          ) : link.name === "Права доступа" ? (
            <HeaderSelect defaultTitle="Права доступа" data={controlLinks} />
          ) : link.name === "Подрядчики" ? (
            <HeaderSelect defaultTitle="Подрядчики" data={controlLinks} />
          ) : (
            link.name
          )}
        </a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
};
