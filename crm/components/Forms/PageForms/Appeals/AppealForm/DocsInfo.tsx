import Remove from "../../../../Buttons/CircleButtons/Remove";
import { apiURL } from "../../../../../config";
import styles from "./style.module.scss";
import { AppealData } from "../../../../../models/IAppeal";

interface DocsInfoProps {
  state: AppealData;
  removeFile: (index: number, name: string) => void;
}

const DocsInfo: React.FC<DocsInfoProps> = ({ state, removeFile }) => {
  return (
    <div className={styles.files}>
      {state.files[0] &&
        state.files.map((file, index) =>
          typeof file === "string" ? (
            <span id={file} key={file} className={styles.file}>
              <img src={apiURL + "/uploads/" + file} />
              <Remove onClick={() => removeFile(index, "files")} position />
            </span>
          ) : (
            <span
              id={`files${index}`}
              key={`files${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(file)} />
              <Remove onClick={() => removeFile(index, "files")} position />
            </span>
          )
        )}
    </div>
  );
};
export default DocsInfo;
