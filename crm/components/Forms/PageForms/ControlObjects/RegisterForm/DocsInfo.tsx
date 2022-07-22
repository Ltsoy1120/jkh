import Remove from "../../../../Buttons/CircleButtons/Remove";
import { apiURL } from "../../../../../config";
import styles from "./style.module.scss";
import { RegisterData } from "../../../../../models/ISubject";

interface DocsInfoProps {
  state: RegisterData;
  removeFile: (index: number, name: string) => void;
}

const DocsInfo: React.FC<DocsInfoProps> = ({ state, removeFile }) => {
  return (
    <div className={styles.files}>
      {state.registerDocs[0] &&
        state.registerDocs.map((doc, index) =>
          typeof doc === "string" ? (
            <span id={doc} key={doc} className={styles.file}>
              <img src={apiURL + "/uploads/" + doc} />
              <Remove
                onClick={() => removeFile(index, "registerDocs")}
                position
              />
            </span>
          ) : (
            <span
              id={`registerDocs${index}`}
              key={`registerDocs${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(doc)} />
              <Remove
                onClick={() => removeFile(index, "registerDocs")}
                position
              />
            </span>
          )
        )}
    </div>
  );
};
export default DocsInfo;
