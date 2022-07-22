import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../links.module.scss";

const links = [
  {
    href: "/receipts",
    name: "Квитанции",
  },
  {
    href: "/receipthistory",
    name: "История платежей",
  },
];

export default function ReceptionOfCitizens() {
  const router = useRouter();
  const Links = links.map((link, i) => (
    <li key={i} className={router.pathname === link.href ? styles.active : ""}>
      <Link href={link.href}>
        <a>{link.name}</a>
      </Link>
    </li>
  ));
  return <ul className={styles.ul}>{Links}</ul>;
}
