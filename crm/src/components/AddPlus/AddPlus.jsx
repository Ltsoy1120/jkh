import styles from "./AddPlus.module.scss";
import Link from "next/link";
import Plus from "../Buttons/CircleButtons/Plus/Plus";
// import Plus from "../Buttons/CircleButtons/Plus";

export default function AddPlus({ name, href, margin_bottom }) {
  return (
    <div className={styles.addNewOffice} style={{ marginBottom: margin_bottom }}>
      <span>{name}</span>
      <Link href={href}>
        <a>
          <Plus />
        </a>
      </Link>
    </div>
  );
}
