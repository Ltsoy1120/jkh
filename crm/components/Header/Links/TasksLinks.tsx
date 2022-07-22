import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./links.module.scss";

interface TasksLinksProps {
  companyId?: string;
  appealId?: string;
}
export const TasksLinks: React.FC<TasksLinksProps> = ({
  companyId,
  appealId,
}) => {
  const router = useRouter();
  const links = [
    {
      href: `/company/${companyId}/tasks`,
      href1: `/tasks/addTask`,
      name: "Задачи",
    },
    {
      href: `/company/${companyId}/tasks/settings/taskNotices`,
      href1: `/company/${companyId}/tasks/settings/taskTypes`,
      name: "Настройки",
    },
  ];
  const Links = links.map((link, i) => (
    <li
      key={i}
      className={
        router.asPath === link.href || router.asPath === link.href1
          ? // ||
            // router.asPath === link.href2 ||
            // router.asPath === link.href3
            styles.active
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
