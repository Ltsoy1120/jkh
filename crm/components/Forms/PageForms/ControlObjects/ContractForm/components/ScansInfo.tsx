import Remove from "../../../../../Buttons/CircleButtons/Remove";
import { apiURL } from "../../../../../../config";
import { ContractData } from "../../../../../../models/IContract";
import styles from "../style.module.scss";

interface ScansInfoProps {
  state: ContractData;
  removeFile: (index: number, name: string) => void;
}

const ScansInfo: React.FC<ScansInfoProps> = ({ state, removeFile }) => {
  return (
    <div className={styles.files}>
      {state.scans[0] &&
        state.scans.map((scan, index) =>
          typeof scan === "string" ? (
            <span id={scan} key={scan} className={styles.file}>
              <img src={apiURL + "/uploads/" + scan} />
              <Remove onClick={() => removeFile(index, "scans")} position />
            </span>
          ) : (
            <span
              id={`scans${index}`}
              key={`scans${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(scan)} />
              <Remove onClick={() => removeFile(index, "scans")} position />
            </span>
          )
        )}
    </div>
  );
};
export default ScansInfo;
