import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./links.module.scss";
import { HeaderSelect } from "../../Forms/ComponentForms/HeaderSelect";

const houseLinks = [
  { title: "Список домов", href: "/controlObjects/houses", id: 2 },
  { title: "Перечни работ", href: "/controlObjects/houses/listOfWork", id: 3 },
];

const meteringDevicesLinks = [
  { title: "Приборы учета", href: "/controlObjects/meteringDevices", id: 2 },
  // {title: 'Перечни работ', href: '/controlObjects/houses/listOfWork', id: 3},
];
interface ControlObjectsLinksProps {
  companyId?: string | string[];
  subjectId?: string;
  propertyId?: string;
}
export default function ControlObjectsLinks({
  companyId,
  subjectId,
  propertyId,
}: ControlObjectsLinksProps) {
  const router = useRouter();
  const links = [
    {
      href: `/company/${companyId}/controlObjects/houses`,
      name: "Дома",
    },
    {
      href: `/company/${companyId}/controlObjects/contracts`,
      name: "Договора",
    },
    {
      href: `/company/${companyId}/controlObjects/accounts`,
      name: "Лицевые счета",
    },
    {
      href: `/company/${companyId}/controlObjects/passportOffice`,
      href1: `/controlObjects/passportOffice/addSubject`,
      href2: `/controlObjects/passportOffice/${subjectId}/editSubject`,
      href3: `/controlObjects/passportOffice/${subjectId}/properties`,
      href4: `/controlObjects/passportOffice/${subjectId}/${propertyId}/editProperty`,
      href5: `/controlObjects/passportOffice/${subjectId}/register`,
      href6: `/controlObjects/passportOffice/${subjectId}/addRegister`,
      href7: `/controlObjects/passportOffice/${subjectId}/editRegister`,
      name: "Паспортный стол",
    },
    {
      href: `/company/${companyId}/controlObjects/devices`,
      name: "Приборы учета",
    },
    {
      href: `/company/${companyId}/controlObjects/journals`,
      name: "Журналы",
    },
  ];

  //   const Links = links.map((link, i) => (
  //     <li key={i} className={router.asPath === link.href ? styles.active : ""}>
  //       <Link href={link.href}>
  //         <a>
  //           {link.name === "Дома" ? (
  //             <HeaderSelect defaultTitle="Дома" data={houseLinks} />
  //           ) : link.name === "Приборы учета" ? (
  //             <HeaderSelect
  //               defaultTitle="Приборы учета"
  //               data={meteringDevicesLinks}
  //             />
  //           ) : (
  //             link.name
  //           )}
  //         </a>
  //       </Link>
  //     </li>
  //   ));
  //   return <ul className={styles.ul}>{Links}</ul>;
  // }
  // export default function ControlObjectsLinks() {
  //   const router = useRouter();

  const Links = links.map((link, i) => (
    <li
      key={i}
      className={
        router.asPath === link.href ||
        router.asPath === link.href1 ||
        router.asPath === link.href2 ||
        router.asPath === link.href3 ||
        router.asPath === link.href4 ||
        router.asPath === link.href5 ||
        router.asPath === link.href6 ||
        router.asPath === link.href7
          ? styles.active
          : ""
      }
    >
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
}
