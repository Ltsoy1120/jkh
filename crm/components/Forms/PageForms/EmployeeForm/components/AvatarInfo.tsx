import AddLogo from "../../../../AddLogo";
import ToggleSwitch from "../../../../ToggleSwitch";
import { EmployeeData, IUser } from "../../../../../models/IUser";
import styles from "../style.module.scss";
import { apiURL } from "../../../../../config";

interface AvatarInfoProps {
  state: EmployeeData;
  employee: IUser;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked: (name: string) => void;
}

const AvatarInfo: React.FC<AvatarInfoProps> = ({
  state,
  employee,
  handleFileChange,
  handleChecked,
}) => {
  return (
    <div className={styles.wrapAvatar}>
      <AddLogo
        name={"avatar"}
        logo={state.avatar}
        onChange={handleFileChange}
      />
      {employee ? (
        <span id="logo" className={styles.logo}>
          <img src={apiURL + "/uploads/" + employee.avatar} />
        </span>
      ) : (
        <div
          id="output"
          className={state.avatar ? styles.logo : styles.output}
        />
      )}

      <div className={styles.wrap}>
        <div className={styles.wrapSwitch}>
          <ToggleSwitch
            checked={state.isActive}
            onChange={() => handleChecked("isActive")}
          />
          {state.isActive ? (
            <span>Активен</span>
          ) : (
            <span className={styles.inactive}>Неактивен</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default AvatarInfo;
