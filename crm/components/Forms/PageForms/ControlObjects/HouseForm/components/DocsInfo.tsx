import { HouseData } from "../../../../../../models/IHouse";
import Remove from "../../../../../Buttons/CircleButtons/Remove";
import AddGroupOfFiles from "../../../../../AddGroupOfFiles";
import { apiURL } from "../../../../../../config";
import styles from "../style.module.scss";

interface DocsInfoProps {
  state: HouseData;
  removeFile: (index: number, name: string) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DocsInfo: React.FC<DocsInfoProps> = ({
  state,
  removeFile,
  handleFileChange,
}) => {
  return (
    <div className={styles.docs}>
      <p className={styles.label}>Документы</p>
      {state.docs[0] &&
        state.docs.map((doc, index) =>
          typeof doc === "string" ? (
            <span id={doc} key={doc} className={styles.file}>
              <img src={apiURL + "/uploads/" + doc} />
              <Remove onClick={() => removeFile(index, "docs")} />
            </span>
          ) : (
            <span
              id={`docs${index}`}
              key={`docs${index}`}
              className={styles.file}
            >
              <img src={URL.createObjectURL(doc)} />
              <Remove onClick={() => removeFile(index, "docs")} />
            </span>
          )
        )}
      <AddGroupOfFiles
        label="Добавить группу документов"
        name="docs"
        onChange={handleFileChange}
      />
    </div>
  );
};
export default DocsInfo;
