import React, { Fragment } from "react";
import Remove from "../Buttons/CircleButtons/Remove";
import Backdrop from "./Backdrop";
import styles from "./style.module.scss";

const Modal = ({ body, close }) => {
  return (
    <Fragment>
      <Backdrop close={close} />
      <div className={styles.modal}>
        <div className={styles.container}>
          {body}
          <Remove position onClick={close} />
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
