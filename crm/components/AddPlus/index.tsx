import Link from "next/link";
import Plus from "../Buttons/CircleButtons/Plus";
import styles from "./style.module.scss";

export default function AddPlus({ name, href }) {
  return (
    <div className={styles.addNew}>
      <span>{name}</span>
      <Link href={href}>
        <a>
          <Plus />
        </a>
      </Link>
    </div>
  );
}
