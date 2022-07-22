import Link from "next/link";
import { useRouter } from "next/router";
import { HeaderSelect } from "../../Forms/ComponentForms/HeaderSelect";
import styles from "./links.module.scss";

const controlLinks = [
  { title: "Настройки", href: "/control/settings", id: 1 },
  { title: "Основные настройки", href: "/control/addApplication", id: 2 },
  { title: "Типы заявок", href: "/control/", id: 3 },
  { title: "Права доступа", href: "/control/", id: 4 },
  { title: "Подрядчики", href: "/control/", id: 5 },
];

interface ControlLinksProps {
  companyId?: string;
  applicationId?: string;
}
export const ControlLinks: React.FC<ControlLinksProps> = ({
  companyId,
  applicationId,
}) => {
  const router = useRouter();
  const links = [
    {
      href: `/company/${companyId}/control/applications`,
      href1: `/control/addApplication`,
      href2: `/control/${applicationId}/application`,
      href3: `/control/${applicationId}/editApplication`,
      name: "Заявки",
    },
    {
      href: `/company/${companyId}/control/magazine`,
      name: "Журнал",
    },
    {
      href: `/company/${companyId}/control/settings`,
      name: "Настройки",
    },
  ];
  const Links = links.map((link, i) => (
    <li
      key={i}
      className={
        router.asPath === link.href ||
        router.asPath === link.href1 ||
        router.asPath === link.href2 ||
        router.asPath === link.href3
          ? styles.active
          : ""
      }
    >
      <Link href={link.href}>
        <a>
          {link.name === "Настройки" ? (
            <HeaderSelect defaultTitle="Настройки" data={controlLinks} />
          ) : link.name === "Основные настройки" ? (
            <HeaderSelect
              defaultTitle="Основные настройки"
              data={controlLinks}
            />
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
