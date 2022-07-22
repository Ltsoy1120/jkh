import styles from "./Journals.module.scss";
import classes from "../table.module.scss";
import TrJournal from "./TrJournal/TrJournal";
export default function Journals({ title, text }) {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} `}>
      <thead></thead>
      <tbody>
        <TrJournal title={title} text={text} />
      </tbody>
    </table>
  );
}
