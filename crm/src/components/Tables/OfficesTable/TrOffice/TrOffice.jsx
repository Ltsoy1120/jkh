import classes from "../../table.module.scss";

export default function TrOffice({ name, address, dateOfWork, timeOfWork, numberOne, numberTwo }) {
  return (
    <div className={classes.wrap}>
      <div className={classes.wrapTr}>
        <tr>
          <td>{name}</td>
          <td>{address}</td>
          <td>
            {dateOfWork}
            <br />
            {timeOfWork}
          </td>
          <td>
            {numberOne}
            <br />
            {numberTwo}
            <br />
          </td>
        </tr>
      </div>

      <div className={classes.hiddenBlock}>
        <div className={classes.btn}>
          <img src="../../table_icons/delete.svg" />
          <span>Удалить</span>
        </div>
        <div className={classes.btn}>
          <img src="../../table_icons/edit.svg" />
          <span>Редактировать</span>
        </div>
      </div>
    </div>
  );
}
