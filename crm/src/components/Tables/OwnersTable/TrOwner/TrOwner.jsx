import classes from "../../table.module.scss";
import styles from "../OwnersTable.module.scss";

export default function TrOwner({ fullName, periodOwnership, shareOwnership, ownershipStatus }) {
  return (
    <div className={`${classes.wrap} ${styles.wrap}`}>
      <div className={classes.wrapTr}>
        <tr>
          <td>{fullName}</td>
          <td>{periodOwnership}</td>
          <td>{shareOwnership}</td>
          <td>{ownershipStatus}</td>
        </tr>
      </div>
    </div>
  );
}
