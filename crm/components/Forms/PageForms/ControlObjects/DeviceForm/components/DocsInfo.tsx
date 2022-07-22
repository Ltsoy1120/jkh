import Remove from "../../../../../Buttons/CircleButtons/Remove";
import { apiURL } from "../../../../../../config";
import { DeviceData } from "../../../../../../models/IDevice";
import styles from "../style.module.scss";

interface DocsInfoProps {
  state: DeviceData;
  removeFile: (index: number, name: string) => void;
}

const DocsInfo: React.FC<DocsInfoProps> = ({ state, removeFile }) => {
  return (
    <div className={styles.files}>
      {state.docs[0] &&
        state.docs.map((doc, index) =>
          typeof doc === "string" ? (
            <span id={doc} key={doc} className={styles.file}>
              <img src={apiURL + "/uploads/" + doc} />
              <Remove onClick={() => removeFile(index, "docs")} position />
            </span>
          ) : (
            <span
              id={`docs${index}`}
              key={`docs${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(doc)} />
              <Remove onClick={() => removeFile(index, "docs")} position />
            </span>
          )
        )}
    </div>
  );
};
export default DocsInfo;
