import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./links.module.scss";

interface ReceptionOfCitizensLinksProps {
  companyId?: string;
  receptionId?: string;
}
export const ReceptionOfCitizensLinks: React.FC<
  ReceptionOfCitizensLinksProps
> = ({ companyId, receptionId }) => {
  const router = useRouter();

  const links = [
    {
      href: `/company/${companyId}/receptionOfCitizens/receptionHistory`,
      href1: `/receptionOfCitizens/addReception`,
      href2: `/receptionOfCitizens/${receptionId}/reception`,
      href3: `/receptionOfCitizens/${receptionId}/editReception`,
      name: "История приема",
    },
    {
      href: "/receptionOfCitizens/settings",
      name: "Настройки",
    },
  ];
  console.log("router.asPath", router.asPath);
  console.log("links[0].href", links[0].href);
  console.log("first", router.asPath === links[0].href);
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
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
};
