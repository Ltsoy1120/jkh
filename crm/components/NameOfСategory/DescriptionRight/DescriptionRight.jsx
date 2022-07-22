import CheckBox from "../../CheckBox/CheckBox";
import styles from "./DescriptionRight.module.scss";

export default function DescriptionRight() {
  return (
    <div className={`flex ${styles.wrapperCheckbox}`}>
      <div className={`flex ${styles.left}`}>
        <div className={`w-1/2 flex items-center justify-center`}>
          <CheckBox />
        </div>
        <div className={`w-1/2 flex items-center justify-center`}>
          <CheckBox />
        </div>
      </div>
      <div className={`flex ${styles.right}`}>
        <span>
          Описание какого-то права доступа. К примеру, редактировать что-либо)
        </span>
      </div>
    </div>
  );
}
