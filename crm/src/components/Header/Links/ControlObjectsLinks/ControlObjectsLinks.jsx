import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";
import { HeaderSelect } from "../../../Forms/HeaderSelect/HeaderSelect";

const links = [
  {
    href: "/controlObjects/houses",
    name: "Дома",
  },
  {
    href: "/controlObjects/contracts",
    name: "Договоры",
  },
  {
    href: "/controlObjects/businessAccounts",
    name: "Лицевые счета",
  },
  {
    href: "/controlObjects/passportOffice",
    name: "Паспортный стол",
  },
  {
    href: "/controlObjects/meteringDevices",
    name: "Приборы учета",
  },
  {
    href: "/controlObjects/journals",
    name: "Журналы",
  },
];

const houseLinks = [
  { title: "Список домов", href: "/controlObjects/houses", id: 2 },
  { title: "Перечни работ", href: "/controlObjects/houses/listOfWork", id: 3 },
];

const meteringDevicesLinks = [
  { title: "Приборы учета", href: "/controlObjects/meteringDevices", id: 2 },
  // {title: 'Перечни работ', href: '/controlObjects/houses/listOfWork', id: 3},
];

export default function ControlObjectsLinks() {
  const router = useRouter();
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>
          {link.name === "Дома" ? (
            <HeaderSelect defaultTitle="Дома" data={houseLinks} />
          ) : link.name === "Приборы учета" ? (
            <HeaderSelect defaultTitle="Приборы учета" data={meteringDevicesLinks} />
          ) : (
            link.name
          )}
        </a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
}
