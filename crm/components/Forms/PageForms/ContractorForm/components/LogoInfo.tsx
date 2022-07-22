import AddLogo from "../../../../AddLogo";
import ToggleSwitch from "../../../../ToggleSwitch";
import { apiURL } from "../../../../../config";
import { ContractorData, IContractor } from "../../../../../models/IContractor";
import styles from "../style.module.scss";

interface LogoInfoProps {
  state: ContractorData;
  contractor: IContractor;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChecked: (name: string) => void;
}

const LogoInfo: React.FC<LogoInfoProps> = ({
  state,
  contractor,
  handleFileChange,
  handleChecked,
}) => {
  return (
    <div className={styles.wrapAvatar}>
      <AddLogo name={"logo"} logo={state.logo} onChange={handleFileChange} />
      {contractor ? (
        <span id="logo" className={styles.logo}>
          <img src={apiURL + "/uploads/" + contractor.logo} />
        </span>
      ) : (
        <div id="output" className={state.logo ? styles.logo : styles.output} />
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
export default LogoInfo;
