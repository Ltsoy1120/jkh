import styles from "./ConnectedTlpTables.module.scss";
import classes from "../../table.module.scss";
import TrConnectedTlp from "./TrConnectedTlp";

export default function ConnectedTlpTables() {
  return (
    <table className={`${classes.wrapTable} ${styles.wrapTable} ${styles.withSpacing}`}>
      <tbody>
        <TrConnectedTlp who="Ростелеком" url="nvjdbhvbakuvaokvpoa..." />
      </tbody>
    </table>
  );
}
